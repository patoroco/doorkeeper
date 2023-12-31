import {getConfig, ActionConfig} from "./utils";
import {getDOClient, getFirewall, generateInboundRules, updateInboundRules, printFirewallRules} from "./digitalocean";

async function main() {
  // const config: ActionConfig = {
  //   DO_TOKEN: process.env.DO_TOKEN as string,
  //   action: "remove",
  //   IP: "12.34.56.78",
  //   port: 22,
  //   protocol: "tcp",
  //   dryrun: false,
  //   firewallName: "ubuntu-dokku"
  // };

  const config = await getConfig();

  console.log(`Current IP: ${config.IP}`);
  if (config.dryrun) {
    console.log("Running in DryRun MODE...");
  }
  console.log(`Action: '${config.action}' on '${config.protocol}' port '${config.port}' to firewall '${config.firewallName}'`)

  const client = getDOClient(config);
  const firewall = await getFirewall(client, config.firewallName);
  printFirewallRules(firewall.inbound_rules, "(original)");

  const newRules = generateInboundRules(firewall.inbound_rules, config);

  await updateInboundRules(client, firewall, newRules, config.dryrun);
}

main();
