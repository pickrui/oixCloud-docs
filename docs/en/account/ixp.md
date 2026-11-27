# Connect to IXP Cloud Interconnect nodes {#ixp}

For everyday use on a phone or computer, select a [managed IXP node in the client](#ixp-access). You do not need to buy a cloud server. If you already have a cloud server that can reach IXP, you can [forward the connection with GOST](#ixp-connectivity). The [dedicated-line table](/en/account/nodes#dedicated-lines) lists the routes from South China to Hong Kong and East China to Japan.

## Select a managed IXP node in the client {#ixp-access}

1. Open the [node list](https://oixcloud.com/user/node), select **IXP** and find the node you want. Pass Alu, Pass Bronze and higher tiers normally include IXP. If the card asks you to buy or upgrade a plan, check which plan is active on your account.
2. Sign in to a dedicated client from the [download center](https://oixcloud.com/client) and refresh its managed nodes. Use **Refresh Nodes** on the oixCloud account page in oixFlow on iPhone or iPad, or **Refresh nodes** on the same page in FlClash for oixCloud. Ordinary third-party subscriptions omit IXP. If the managed profile is also missing the node, check Smart Selection and line filters under [missing nodes](/en/account/subscriptions#missing-nodes).
3. Select the node on the oixFlow home screen. In FlClash for oixCloud, open **Proxies** and select the node in the manual group that handles your destination. Connect, reopen the site and check which node handled the new request in the request or connection history.

## Set up IXP port forwarding with GOST {#ixp-connectivity}

**Phone or computer → your Linux cloud server (forwarder) → IXP node → destination**

The notice **Only cloud-provider BGP networks are allowed** applies to the **IXP ingress address**. Ordinary home and mobile networks cannot reach it directly. Check that the node’s access point supports your cloud server’s network and region, even if the VPS is advertised as “BGP.”

**1. Get the node details from the website**

Open the [node list](https://oixcloud.com/user/node), select **IXP** and click **Config Info** on the node’s card. The AnyTLS window has the two sections you need.

- Under **Server addresses**, copy **IPv4 (IXP)**. If the forwarder supports IPv6, you can use **IPv6 (IXP)** when listed. Use the address labeled IXP for GOST.
- Under **Authentication and transport**, note the **port**. This is the destination port for GOST. The **password and SNI** go in the AnyTLS client on your phone or computer.

If the window says **This node has no connection settings yet** or no IXP address is listed, use the [managed node instructions](#ixp-access). If your AnyTLS client runs on the supported cloud server itself, enter the values there and connect. To connect from a phone or computer through the server, follow the next two steps.

**2. Start GOST on the cloud server**

Sign in to the forwarder over SSH. In Bash, run this command to install GOST v3 for your user account.

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/go-gost/gost/master/install.sh) --version v3.3.3 --prefix "$HOME/.local"
```

In the cloud security group and host firewall, allow incoming **TCP 18443** from your public IP or trusted network only. In the command below, replace `192.0.2.80:24443` with the **IXP address and port from the panel**. You can keep `18443` as the forwarder’s listening port if it is free.

```bash
~/.local/bin/gost -L 'tcp://:18443/192.0.2.80:24443'
```

Leave the SSH window open while you try the next step. If the panel offers **IPv6 (IXP)** and the forwarder can reach it, write the destination as `[IPv6_ADDRESS]:PORT`.

**3. Add an AnyTLS node on your phone or computer**

In the same **Config Info** window, select **Copy link**, or scan the **AnyTLS** QR code with a client that supports it. Import it as a separate node, give it a new name such as “My IXP forwarder,” then change the server and port.

| Client field | What to enter |
| --- | --- |
| Server | Your forwarder’s public IP address or hostname |
| Port | `18443`, or the listening port you chose on the forwarder |
| Password and SNI | Keep the imported values. If adding the node manually, copy both from **Authentication and transport**. |

See how to add a node in [oixFlow](/en/oixflow/import-nodes#single-node) or [FlClash for oixCloud](/en/flclash/import-nodes#single-node). Save and select the new node, open a site, then check that the connection history shows the request going through it.

::: details Keep forwarding after closing SSH
Once the test works, press `Ctrl+C` to stop the foreground process. Start it in the background with the same IXP address and port.

```bash
nohup ~/.local/bin/gost -L 'tcp://:18443/192.0.2.80:24443' > ~/ixp-gost.log 2>&1 &
```

You can now close the SSH window. Run the command again if the cloud server restarts.
:::

## Troubleshoot an IXP connection {#ixp-troubleshooting}

| Symptom | What to check |
| --- | --- |
| Your device cannot reach the forwarder | Confirm GOST is running. Check the forwarder address and listening port entered on the device, and the source addresses allowed by the security group and firewall. |
| The forwarder cannot reach IXP | Run `nc -vz IXP_ADDRESS NODE_PORT` on the forwarder, replacing both arguments with the values from the panel. If it times out, check the access point, cloud network, region and outbound rules. A ping from home tests a different path. |
| TCP connects but the AnyTLS handshake or authentication fails | Check the node port at the end of the GOST command, then check that the client’s password and SNI came from the same node. |
| The client connects but the site still uses another exit | Make a new request and check its policy group and node in the connection history. When the request goes through the forwarder and IXP, the destination sees the final exit on the IXP route. See [connection troubleshooting](/en/help/troubleshooting) for further checks. |
