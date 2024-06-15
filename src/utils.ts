import * as core from "@actions/core";

export interface ActionConfig {
  DO_TOKEN: string;
  firewallName: string;
  action: "add" | "remove";
  IP: string;
  port: number;
  protocol: "tcp" | "udp";
  dryrun: boolean;
}

export async function getConfig(): Promise<ActionConfig> {
  const token = core.getInput("digitaloceanToken");
  if (!token) {
    throw new Error("You must specify the 'digitaloceanToken' input.");
  }

  const firewallName = core.getInput("firewallName");
  if (!firewallName) {
    throw new Error("You must specify the 'firewallName' input.");
  }

  const action = core.getInput("actionToDo");
  if (action !== "add" && action !== "remove") {
    throw new Error(`The input 'actionToDo' must one of these values: 'add' or 'remove'. Current value: '${action}'`);
  }

  const port = parseInt(core.getInput("port"));
  if (core.getInput("port").length === 0 || port <= 0) {
    throw new Error("The input 'port' must be a number greater than 0.");
  }

  const protocol = core.getInput("protocol");
  if (protocol !== "tcp" && protocol !== "udp") {
    throw new Error(`The input 'protocol' must be 'tcp' or 'udp'. Current value: ${protocol}`);
  }

  const dryrun = core.getInput("dryRun") === "true";

  // TODO: try/catch for getting the IP
  let IP;
  try {
    IP = await getLocalIP();
  } catch (error) {
    // try again
    IP = await getLocalIP();
  }

  return {
    DO_TOKEN: token,
    firewallName,
    action,
    IP,
    port,
    protocol,
    dryrun
  };
}

// TODO: remove the export here and test the full configuration
export async function getLocalIP(): Promise<string> {
  const response = await fetch("https://ifconfig.me/ip");
  if (!response.ok) throw new Error(`Error getting the IP address: ${response.statusText}`);
  return response.text();
}
