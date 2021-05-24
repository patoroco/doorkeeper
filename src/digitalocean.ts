import {createApiClient, modules} from "dots-wrapper";
import {IListRequest} from "dots-wrapper/dist/types/list-request";

import {ActionConfig} from "./utils";

import {IFirewallInboundRule, IFirewallOutboundRule} from "dots-wrapper/dist/modules/firewall";

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

  return firewall;
}

export function generateInboundRules(oldRules: IFirewallInboundRule[], config: ActionConfig): IFirewallInboundRule[] {
  const {port, action, protocol, IP} = config;

  return oldRules.map(rule => {
    const cloneRule = {...rule};
    if (rule.ports == port.toString() && rule.protocol == protocol) {
      const addresses = cloneRule.sources.addresses ?? [];

      if (action == "add") {
        addresses.push(IP);
      } else if (action == "remove") {
        cloneRule.sources.addresses = addresses.filter(address => address != IP);
      }
    }
    return cloneRule;
  });
}

export async function updateInboundRules(
  {firewall: firewallClient}: ClientInterface,
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
    outbound_rules: prepareOutboundRules(firewall.outbound_rules)
  };

  const {
    data: {firewall: response}
  } = await firewallClient.updateFirewall(updated);

  console.log((response as any).status);
}

export function printFirewallRules(inboundRules: IFirewallInboundRule[], title = "") {
  console.log("----------------------");
  console.log(`Firewall Inbound Rules ${title}`);
  console.log("----------------------");
  inboundRules.forEach(rule => {
    console.log(`${rule.ports}::${rule.protocol} - ${rule.sources.addresses}`);
  });
}

function prepareOutboundRules(outboundRules: IFirewallOutboundRule[]): IFirewallOutboundRule[] {
  return outboundRules.map(rule => {
    const clonedRule = {...rule};
    if (clonedRule.ports == "0") {
      clonedRule.ports = "all";
    }
    return clonedRule;
  });
}
