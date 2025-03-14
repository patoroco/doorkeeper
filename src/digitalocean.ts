import { createApiClient, modules } from "dots-wrapper";
import { IListRequest } from "dots-wrapper/dist/types/list-request";

import { ActionConfig } from "./utils";

import { IFirewallInboundRule, IFirewallOutboundRule } from "dots-wrapper/dist/modules/firewall";
import { config } from "process";


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

export function getDOClient(config: ActionConfig) {
  return createApiClient({token: config.DO_TOKEN});
}

export async function getFirewall({firewall: firewallClient}: ClientInterface, name: string) {
  const {
    data: {firewalls}
  } = await firewallClient.listFirewalls({});
  const firewall = firewalls.find(f => f.name == name);
  if (firewall == undefined) {
    throw new Error(`The firewall with name '${name}', doesn't exist.`);
  }

  // in case the firewall has no inbound rules
  firewall.inbound_rules = firewall.inbound_rules || [];

  return firewall;
}

function applyRule(config: ActionConfig, rule: IFirewallInboundRule = { protocol: '', ports: '', sources: {} }): IFirewallInboundRule | null {
  const cloneRule = { ...rule };
  const { port, action, protocol, IP } = config;

  if (!cloneRule.protocol) {
    cloneRule.protocol = protocol;
  }
  if (!cloneRule.ports) {
    cloneRule.ports = port.toString();
  }
  if (!cloneRule.sources.addresses) {
    cloneRule.sources.addresses = [];
  }
  if (!cloneRule.sources.droplet_ids) {
    cloneRule.sources.droplet_ids = rule.sources?.droplet_ids || [];
  }

  const addresses = cloneRule.sources.addresses;
  if (action == "add") {
    if (!addresses.includes(IP)) {
      addresses.push(IP);
    }
  } else if (action == "remove") {
    cloneRule.sources.addresses = addresses.filter(address => address != IP);
  }

  if(cloneRule.sources?.addresses.length === 0 && (!cloneRule.sources?.droplet_ids || cloneRule.sources.droplet_ids.length === 0)) {
    return null;
  }

  return cloneRule;
}

export function generateInboundRules(oldRules: IFirewallInboundRule[] = [], config: ActionConfig): IFirewallInboundRule[] {
  const { port, action, protocol } = config;
  const existingRules = oldRules.filter(r => r.ports == port.toString() && r.protocol == protocol);
  const otherRules = oldRules.filter(r => r.ports != port.toString() || r.protocol != protocol);

  if (!existingRules.length) {
    const newRule = applyRule(config);
    if (newRule) {
      return [...otherRules, newRule];
    }
    return otherRules;
  }

  const updatedRules = existingRules.reduce((out, r) => {
    const newRule = applyRule(config, r);
    if (newRule) {
      out.push(newRule);
    }
    return out;
  }, [] as IFirewallInboundRule[]);

  return [...otherRules, ...updatedRules];
}

export async function updateInboundRules(
  { firewall: firewallClient }: ClientInterface,
  firewall: modules.firewall.IFirewall,
  inboundRules: IFirewallInboundRule[],
  dryrun = true
) {
  printFirewallRules(inboundRules, "(updated)");

  if (dryrun) {
    return;
  }

  const updated = {
    ...firewall,
    inbound_rules: inboundRules,
    outbound_rules: prepareOutboundRules(firewall.outbound_rules),
    droplet_ids: firewall.droplet_ids,
    tags: firewall.tags,
    id: firewall.id,
    name: firewall.name,
    status: firewall.status,
    created_at: firewall.created_at
  };

  try {
    let maxRetries = 10;
    const { data: { firewall: response } } = await firewallClient.updateFirewall(updated);
    let status = response.status;
    const firewallId = (response.id as string);

    /*
      wait for DO to update the droplets using this firewall
    */
    while (true) {
      maxRetries--;
      if (maxRetries < 0) {
        break;  // give up
      }
      console.log(`DO status: ${status}`);
      if (status != "waiting") {
        break;
      }
      
      console.log(" waiting for DO to update the droplets using this firewall...");
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const { data: { firewall: fw } } = await firewallClient.getFirewall({ firewall_id: firewallId });
      status = fw?.status || "errored";
    }

  } catch (e) {
    console.error("FW Update failed. updated : %j", updated);
    console.error("FW Update failed. inboundRules: %j", inboundRules);
    console.error(e);
  }
}

export function printFirewallRules(inboundRules: IFirewallInboundRule[] = [], title = "") {
  console.log("----------------------");
  console.log(`Firewall Inbound Rules ${title}`);
  console.log("----------------------");
  if(inboundRules.length == 0) {
    console.log("** no rules defined **");
  }
  inboundRules.forEach(rule => {
    const addresses = rule.sources?.addresses?.length ? `IPs: ${rule.sources.addresses}` : '';
    const droplets = rule.sources?.droplet_ids?.length ? `Droplets: ${rule.sources.droplet_ids}` : '';
    const sources = [addresses, droplets].filter(Boolean).join(', ');
    console.log(`${rule.ports}::${rule.protocol} - ${sources || 'No sources'}`);
  });
}

function prepareOutboundRules(outboundRules: IFirewallOutboundRule[] = []): IFirewallOutboundRule[] {
  return outboundRules.map(rule => {
    const clonedRule = {...rule};
    if (clonedRule.ports == "all") {
      clonedRule.ports = "0";
    }
    return clonedRule;
  });
}
