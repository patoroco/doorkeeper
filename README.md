![Doorman](images/doorman.png)

Doorkeeper DigitalOcean Action
[![Tests](https://github.com/patoroco/doorkeeper/workflows/Tests/badge.svg)](https://github.com/patoroco/doorkeeper/actions?query=workflow%3ATests)
==============================

This Github action allows you to open or close a specific port in your DigitalOcean firewall.
It's really useful for deploying to your instances from Github Actions, as [they don't provide a list of IPs to add to your security groups](https://help.github.com/en/actions/reference/virtual-environments-for-github-hosted-runners#ip-addresses-of-github-hosted-runners).

![Diagram of doorkeeper](images/diagram.png)


Usage
-----
You need to generate a **personal access token** from [your DigitalOcean Applications & API](https://cloud.digitalocean.com/account/api/tokens) page.

![DigitalOcean token](images/do_token.png)

Copy that token, and paste in the secrets of your repo:
![Github Repo Secrets](images/secrets.png)

Create or update a workflow, adding the file `.github/workflows/doorkeeper.yml` ([more info about how to use Github Actions](https://help.github.com/en/actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates)).


```yaml

############################
## prepare your artifacts ##
############################

- name: Doorkeeper open
  id: doorkeeper_open
  uses: patoroco/doorkeeper@v0.4.1
  with:
    digitaloceanToken: ${{ secrets.DO_TOKEN }}
    firewallName: "name_of_the_firewall"
    actionToDo: "add"
    dryRun: false

############################
## deploy to DigitalOcean ##
############################

- name: Doorkeeper close
  uses: patoroco/doorkeeper@v0.4.1
  with:
    digitaloceanToken: ${{ secrets.DO_TOKEN }}
    firewallName: "name_of_the_firewall"
    actionToDo: "remove"
    # Use the IP from the open step to ensure we remove the correct one
    IP: ${{ steps.doorkeeper_open.outputs.ip }}
    dryRun: false
```

To check that everything is working as expected, you have to push these changes to your repo, and a new build in the `Actions` tab should be starting.


Inputs
------

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `digitaloceanToken` | Yes | - | Your DigitalOcean API token |
| `firewallName` | Yes | - | Name of the firewall attached to your droplet |
| `actionToDo` | Yes | - | `add` or `remove` the IP from the firewall |
| `protocol` | No | `tcp` | Protocol used by the service (`tcp` or `udp`) |
| `port` | No | `22` | Port used by the service |
| `IP` | No | Auto-detected | IP address to add/remove. If not set, uses the runner's public IP |
| `dryRun` | No | `false` | Set to `true` to test without applying changes |


Outputs
-------

| Output | Description |
|--------|-------------|
| `ip` | The IP address that was added/removed from the firewall |

This is useful when you want to ensure the same IP is removed in a cleanup step, even if the job runs on a different runner:

```yaml
- name: Doorkeeper open
  id: doorkeeper
  uses: patoroco/doorkeeper@v0.4.1
  with:
    digitaloceanToken: ${{ secrets.DO_TOKEN }}
    firewallName: "my-firewall"
    actionToDo: "add"

# ... your deployment steps ...

- name: Doorkeeper close
  if: always()  # Run even if previous steps fail
  uses: patoroco/doorkeeper@v0.4.1
  with:
    digitaloceanToken: ${{ secrets.DO_TOKEN }}
    firewallName: "my-firewall"
    actionToDo: "remove"
    IP: ${{ steps.doorkeeper.outputs.ip }}
```


Development
-----------

**Requirements:** Node.js 20+

First of all, you have to install the dependencies:

```bash
npm install
```

Run the tests:

```bash
npm test
```

I've been using [act](https://github.com/nektos/act) to test the action locally, and it's really useful because it doesn't require pushing anything to GitHub. After installing it, you can do:

```bash
npm run local:action
```

You can also run the code itself using:

```bash
npm run local
```

Build the distribution bundle:

```bash
npm run pack
```

LICENSE
-------

- [MIT License](LICENSE.md).
- The Doorman Icon was [downloaded from Vecteezy](https://www.vecteezy.com/free-vector/doorman).
