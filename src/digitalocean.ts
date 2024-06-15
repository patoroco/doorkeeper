import {createApiClient, modules} from "dots-wrapper";
import {IListRequest} from "dots-wrapper/dist/types/list-request";

import {ActionConfig} from "./utils";

interface ClientInterface {
  firewall: Readonly<{
    getFirewall: ({
      firewall_id
    }: modules.firewall.IGetFirewallApiRequest) => Promise<Readonly<modules.firewall.GetFirewallResponse>>;
    listFirewalls: ({page, per_page}: IListRequest) => Promise<Readonly<modules.firewall.ListFirewallsResponse>>;
    updateFirewall: ({
      droplet_ids,
      id,
      inbound_rules,
      name,
      outbound_rules,
      tags
    }: modules.firewall.IFirewall) => Promise<Readonly<modules.firewall.UpdateFirewallResponse>>;
  }>;
}

export function getDOClient(config: ActionConfig): ReturnType<typeof createApiClient> {
  return createApiClient({token: config.DO_TOKEN});
}

export async function getFirewall(
  {firewall: firewallClient}: ClientInterface,
  name: string
): Promise<modules.firewall.IFirewall> {
  const {
    data: {firewalls}
  } = await firewallClient.listFirewalls({});

  const firewall = firewalls.find(f => f.name === name);
  if (firewall === undefined) {
    throw new Error(`The firewall with name '${name}', doesn't exist.`);
  }

  // in case the firewall has no inbound rules
  firewall.inbound_rules = firewall.inbound_rules || [];

  return firewall;
}

function applyRule(
  config: ActionConfig,
  rule: modules.firewall.IFirewallInboundRule = {protocol: "", ports: "", sources: {}}
): modules.firewall.IFirewallInboundRule | null {
  const cloneRule = {...rule};
  const {port, action, protocol, IP} = config;

  if (!cloneRule.protocol) {
    cloneRule.protocol = protocol;
  }
  if (!cloneRule.ports) {
    cloneRule.ports = port.toString();
  }
  if (!cloneRule.sources.addresses) {
    cloneRule.sources.addresses = [];
  }

  const addresses = cloneRule.sources.addresses;
  if (action === "add") {
    if (!addresses.includes(IP)) {
      addresses.push(IP);
    }
  } else if (action === "remove") {
    cloneRule.sources.addresses = addresses.filter(address => address !== IP);
  }

  if (cloneRule.sources?.addresses.length === 0) {
    return null;
  }

  return cloneRule;
}

export function generateInboundRules(
  oldRules: modules.firewall.IFirewallInboundRule[] = [],
  config: ActionConfig
): modules.firewall.IFirewallInboundRule[] {
  const {port, action, protocol} = config;
  const existingRules = oldRules.filter(r => r.ports == port.toString() && r.protocol == protocol);

  if (!existingRules.length) {
    const newRule = applyRule(config);
    if (newRule) {
      oldRules.push(newRule);
    }
    return oldRules;
  }

  return oldRules.reduce((out, r, index) => {
    if (action === "remove" || (action === "add" && index === 0)) {
      const newRule = applyRule(config, r);
      if (newRule) out.push(newRule);
    } else {
      out.push(r);
    }
    return out;
  }, [] as modules.firewall.IFirewallInboundRule[]);
}

export async function updateInboundRules(
  {firewall: firewallClient}: ClientInterface,
  firewall: modules.firewall.IFirewall,
  inboundRules: modules.firewall.IFirewallInboundRule[],
  dryrun = true
): Promise<void> {
  printFirewallRules(inboundRules, "(updated)");

  if (dryrun) {
    return;
  }

  const updated = {
    ...firewall,
    inbound_rules: inboundRules.length ? inboundRules : [],
    outbound_rules: prepareOutboundRules(firewall.outbound_rules)
  };

  try {
    let maxRetries = 10;
    const {
      data: {firewall: response}
    } = await firewallClient.updateFirewall(updated);
    let status = response.status;
    const firewallId = response.id as string;

    /*
      wait for DO to update the droplets using this firewall
    */
    while (maxRetries > 0) {
      maxRetries--;
      console.log(`DO status: ${status}`);
      if (status !== "waiting") {
        break;
      }

      console.log(" waiting for DO to update the droplets using this firewall...");
      await new Promise(resolve => setTimeout(resolve, 2000));

      const {
        data: {firewall: fw}
      } = await firewallClient.getFirewall({firewall_id: firewallId});
      status = fw?.status || "errored";
    }
  } catch (e) {
    console.error("FW Update failed. updated : %j", updated);
    console.error("FW Update failed. inboundRules: %j", inboundRules);
    console.error(e);
  }
}

export function printFirewallRules(inboundRules: modules.firewall.IFirewallInboundRule[] = [], title = ""): void {
  console.log("----------------------");
  console.log(`Firewall Inbound Rules ${title}`);
  console.log("----------------------");
  if (inboundRules.length === 0) {
    console.log("** no rules defined **");
  }
  // eslint-disable-next-line github/array-foreach
  inboundRules.forEach(rule => {
    console.log(`${rule.ports}::${rule.protocol} - ${rule.sources?.addresses}`);
  });
}

function prepareOutboundRules(
  outboundRules: modules.firewall.IFirewallOutboundRule[] = []
): modules.firewall.IFirewallOutboundRule[] {
  return outboundRules.map(rule => {
    const clonedRule = {...rule};
    if (clonedRule.ports === "all") {
      clonedRule.ports = "0";
    }
    return clonedRule;
  });
}
