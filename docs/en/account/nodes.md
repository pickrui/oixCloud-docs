---
pageClass: node-guide
description: "Nodes and connection options \u2014 setup, practical steps and troubleshooting"
---

# Nodes and connection options

## How should I choose a node?

Start with the region you need and the nodes available to your account, then compare latency and actual access. Low latency does not mean fast downloads or guaranteed streaming access. Nodes in the same region can behave differently because they use different entry points, exits, and routes.

In the [node list](https://oixcloud.com/user/node), choose a line category and filter by region. Search matches original and translated names, external relay labels and destination addresses. On nodes with multiple backends, carrier labels and numbers distinguish entries from the same carrier.

## Node types {#node-types}

These descriptions follow the [official homepage](https://oixcloud.com/#network). Routes, speeds, traffic and features depend on the plan and node. Check your current plan, [node list](https://oixcloud.com/user/node) and client requirements before choosing.

| Node type | Network and purpose |
| --- | --- |
| <span id="edge"></span>**Edge**<br>Global Network | Tier 1 transit and upstream interconnections provide global access for destinations that do not require mainland-China routing optimization. Designed for international network environments. Connection availability and stability cannot be guaranteed when accessing from certain regions, such as mainland China. You can try enabling [AnyTLS with CDN](https://oixcloud.com/user/anytls) to improve connectivity. Results depend on local network conditions. |
| <span id="isp"></span>**[Home ISP](#home-isp)**<br>Home broadband | Home-broadband exits grouped by static or dynamic IP. Designed for international network environments. No commitments or SLA guarantees are provided. |
| <span id="cia"></span>**CIA**<br>Basic Optimized Network | CMIN2 or comparable carrier resources supplement international transit to optimize mainland-China routes on a best-effort basis. |
| **[IXP](#ixp)**<br>Cloud Interconnect | Connects cloud and content providers via Internet exchange points, reducing public-Internet detours for supported cloud networks. |
| <span id="fusion"></span>**Fusion**<br>Private Network Interconnect | Traffic enters over the Guangdong–Hong Kong dedicated line, then reaches worldwide nodes through Hong Kong as the international hub. |
| <span id="fusion-advanced"></span>**Fusion Advanced**<br>Private Network Interconnect | Higher scheduling priority, link redundancy and an additional Shanghai–Japan line support multiple devices and sustained transfers. |
| <span id="fusion-premium"></span>**Fusion Premium**<br>Private Network Interconnect | The highest scheduling priority and layered redundancy serve needs that place greater emphasis on latency, jitter and sustained availability. |
| <span id="gia"></span>**GIA**<br>Premium Optimized Network | Tier 1 transit combines with Premium Transit resources, including CN2 GIA, for higher-grade mainland-China routing needs. |

### Dedicated-line access {#dedicated-lines}

| Node type | Guangdong–Hong Kong | Shanghai–Japan |
| --- | --- | --- |
| IXP | South China exchange point → Hong Kong | East China exchange point → Japan |
| Fusion | South China access point → Hong Kong | — |
| Fusion Advanced | South China access point → Hong Kong | East China access point → Japan |
| Fusion Premium | South China access point → Hong Kong | East China access point → Japan |

IXP uses cloud-network dedicated-line access; the Fusion series uses dedicated-line access. A dash means the homepage does not list that ingress direction.

## Home ISP nodes {#home-isp}

Home ISP is at the same tier as Edge and uses the same plan permissions, with a separate category in the node list. Check the nodes available to your account and their actual exits before choosing.

| List category | Meaning |
| --- | --- |
| Home ISP · Static IP | Normally uses a fixed exit IP; verify the address currently used by the node. |
| Home ISP · Dynamic IP | The exit IP may change, so it is unsuitable for uses that depend on a long-term fixed address. |

Static and dynamic describe the node's exit IP type, not an IP dedicated to your account. Neither category guarantees availability or streaming access.

### Default subscriptions and explicit selection {#isp-subscription}

Default inclusion is set by the service for each node, independently of its static or dynamic IP category. Home ISP nodes without default inclusion are not added automatically to ordinary subscriptions, Smart Selection or a fallback when the default node set is empty. For plans with CIA, IXP, Fusion or GIA, Smart Selection only includes the plan's default lines and leaves out Home ISP nodes, even those included by default.

To use them, edit the current address in [Subscription management](https://oixcloud.com/user/sub_manage), or open **Node Filter** in a supported client. Set the **ISP** line to **Only**, check the preview, save and update the subscription. ISP includes permitted static and dynamic home-broadband nodes without selecting Edge. Region or name filters alone do not add ISP nodes excluded by default. See [Subscriptions and filters](/en/account/subscriptions#home-isp) for entry points and eligibility.

### Traffic routing restrictions {#isp-routing}

The default inclusion setting on an ISP node only affects subscription delivery. For relays, HTTP/3, CDN or [exit settings such as WARP](/en/account/unlock), choose from the nodes offered on each page for your plan and the role you need.

An administrator can restrict a node from new routing selections. If one backend in a logical group is restricted, the restriction applies to the whole group, including rules with a wildcard source. You can still delete existing forwarding rules. For relay and proxy chain setup, see the [Home ISP user guide](/en/account/home-isp).

## IXP Cloud Interconnect nodes {#ixp}

For everyday use on a phone or computer, select a [managed IXP node in the client](#ixp-access). You do not need to buy a cloud server. If you already have a cloud server that can reach IXP, you can [forward the connection with GOST](#ixp-connectivity). The [dedicated-line table](#dedicated-lines) lists the routes from South China to Hong Kong and East China to Japan.

### Select a managed IXP node in the client {#ixp-access}

1. Open the [node list](https://oixcloud.com/user/node), select **IXP** and find the node you want. Pass Alu, Pass Bronze and higher tiers normally include IXP. If the card asks you to buy or upgrade a plan, check which plan is active on your account.
2. Sign in to a dedicated client from the [download center](https://oixcloud.com/client) and refresh its managed nodes. Use **Refresh Nodes** on the oixCloud account page in oixFlow on iPhone or iPad, or **Refresh nodes** on the same page in FlClash for oixCloud. Ordinary third-party subscriptions omit IXP. If the managed profile is also missing the node, check Smart Selection and line filters under [missing nodes](/en/account/subscriptions#missing-nodes).
3. Select the node on the oixFlow home screen. In FlClash for oixCloud, open **Proxies** and select the node in the manual group that handles your destination. Connect, reopen the site and check which node handled the new request in the request or connection history.

### Set up IXP port forwarding with GOST {#ixp-connectivity}

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

See how to add a node in [oixFlow](/en/oixflow/proxies#single-node) or [FlClash for oixCloud](/en/flclash/profiles#single-node). Save and select the new node, open a site, then check that the connection history shows the request going through it.

::: details Keep forwarding after closing SSH
Once the test works, press `Ctrl+C` to stop the foreground process. Start it in the background with the same IXP address and port.

```bash
nohup ~/.local/bin/gost -L 'tcp://:18443/192.0.2.80:24443' > ~/ixp-gost.log 2>&1 &
```

You can now close the SSH window. Run the command again if the cloud server restarts.
:::

### Troubleshoot an IXP connection {#ixp-troubleshooting}

| Symptom | What to check |
| --- | --- |
| Your device cannot reach the forwarder | Confirm GOST is running. Check the forwarder address and listening port entered on the device, and the source addresses allowed by the security group and firewall. |
| The forwarder cannot reach IXP | Run `nc -vz IXP_ADDRESS NODE_PORT` on the forwarder, replacing both arguments with the values from the panel. If it times out, check the access point, cloud network, region and outbound rules. A ping from home tests a different path. |
| TCP connects but the AnyTLS handshake or authentication fails | Check the node port at the end of the GOST command, then check that the client’s password and SNI came from the same node. |
| The client connects but the site still uses another exit | Make a new request and check its policy group and node in the connection history. When the request goes through the forwarder and IXP, the destination sees the final exit on the IXP route. See [connection troubleshooting](/en/help/troubleshooting) for further checks. |

## Rule, Global, and Direct modes

| Mode | Traffic destination |
| --- | --- |
| Rule | Matches destinations to routing policies |
| Global | Sends traffic captured by the client to the selected proxy |
| Direct | Connects without a proxy node |

::: info Global mode and traffic capture are separate
Global mode does not mean every app on the system is captured. That still depends on whether VPN, TUN or system proxy settings apply.
:::

## Protocols, ports, and advanced options

Use the managed configuration generated for your client. Avoid copying port and protocol combinations from old tutorials. An option works only when both the node and client support it. Keep the defaults when unsure, and refresh the configuration and test a connection after making changes.

To change the client-to-node transport, see [HTTP/3 and smart fallback](/en/account/http3). Refresh the client subscription after saving; dedicated IPs are configured per address.

## Dedicated IPs: a stable long-term exit {#dedicated-ip}

A dedicated IP assigns an exit address exclusively to your account. Normal renewal keeps that address. Dedicated does not mean residential or free of previous history.

Dedicated IP traffic is metered separately and does not count toward your account plan’s data allowance.

::: warning Routing and service guarantees
All dedicated IPs are Edge nodes intended for international networks. We recommend using them as exit nodes. Routes can vary between dedicated IPs. The US BGP route has worked well on China Telecom and China Unicom networks. One speed test reached 540 Mbps. That result is for reference only. Actual speed and connection stability depend on your location, carrier and routing at the time.

- **The service level agreement (SLA)** covers only node uptime. Connectivity to networks in mainland China is outside its scope.
- **Access to AI services** is guaranteed only at delivery. Continued access after delivery is not guaranteed.
:::

### Ways to connect to a dedicated IP {#ip-connection-methods}

Choose whichever option works best for your local network and how you prefer to connect.

- **Direct connection**. Select the dedicated IP node in your client’s node list. Route quality from your network to that node is not guaranteed.
- **Internal relay**. In the user center, open **Traffic Routes → Relay → [Internal relay](/en/account/relay#internal-relay)** and add a path. Choose an entry node and set the dedicated IP as the exit. Save the path, then select the entry node in your client.
- **Proxy chain**. In your client, create a chain with the entry node as the first hop and the dedicated IP as the last hop. Save and select the chain. See the instructions for [oixFlow](/en/oixflow/policies#proxy-chains) or [FlClash for oixCloud](/en/flclash/proxies#proxy-chains).

### Practical benefits {#ip-benefits}

| Benefit | Use case |
| --- | --- |
| Consistent exit | Use the same address for daily sign-ins, remote work and business access, with easier checks of access records |
| Less shared-IP interference | Reduce abnormal requests, rate limits and reputation effects caused by other accounts sharing the same IP |
| Easier IP authorization | Register a fixed address with servers or workplace systems that support source-IP allowlists, reducing authorization changes |

### Understanding IP reputation {#ip-reputation}

> The ideal IP does not make a service recognize you as a special user. It gives the service no reason to consider you one.

This is the aim of consistent, normal use, not a promise of equal treatment across platforms. Platforms independently assess the ASN (the network owning the address), location, IP history and usage. A dedicated IP does not guarantee freedom from verification, bans or streaming restrictions, or isolate you from the network's reputation.

## Buying and renewing dedicated IPs

On the website, sign in and open [Node list → Exclusive IP](https://oixcloud.com/user/node?node_level=Exclusive).

| Check | Requirement |
| --- | --- |
| Plan eligibility | Buying, renewing and using the IP require an active plan; activate a queued plan first if none is active |
| Independent term | Billed and timed separately; the IP may outlast the plan |
| Start time | A purchase starts when bought; renewal extends from the existing expiry, or from renewal time if expired but not yet reclaimed |
| Purchase and manual-renewal term | At most 12 months per operation; a new purchase must meet the product minimum, while manual renewal starts at one month |
| Billing month | Exactly 30 days; the dialog shows the resulting expiry in UTC+8 |

::: warning Plan expiry does not pause the IP term
When the plan expires, dedicated-IP use pauses and the address stays assigned until its own expiry. Its term keeps running, with no pause or extension. Restore an active plan to resume using an unexpired IP. Once reclaimed, the same address is not guaranteed to be available to buy again.
:::

### Auto-renewal {#ip-auto-renewal}

| Item | Rule |
| --- | --- |
| Attempt window | Within 24 hours before IP expiry |
| Extension | 30 days; the system does not automatically increase billed months |
| Charge conditions | An active plan, enough available funds for rent and any [deposit](#ip-deposit) top-up, and a node providing normal service; rent uses the current product price |
| Conditions not met | Charges pause, the setting stays on, and retries continue until expiry |

::: warning Check the renewal result before expiry
Expand the node card's IP list and enable **Auto Renewal** beside the address. Enabling it does not charge immediately; disabling it leaves the current expiry unchanged. The IP and plan renew separately, with no funds reserved for plan renewal. Check funds and renewal results for both.

After expiry, renewal is attempted once more before reclaim. During node maintenance, renewal charges pause and the address stays visible with a maintenance label. An IP expiring during maintenance is held for up to 14 days, with a notification. Renewal is attempted when the node recovers; the IP is reclaimed if renewal fails or maintenance lasts beyond that grace period.
:::

### Deposit and abuse fees {#ip-deposit}

Some dedicated IP products require a deposit, one per IP, to guarantee that the IP is not abused. The amount appears in the product list and the purchase dialog; click or tap the deposit chip in the product list for details.

| Item | Rule |
| --- | --- |
| Collection | Charged with the rent on a new purchase (except an order of 6 months or more); the dialog's total includes it. If your balance is short, the dialog shows how much to top up |
| Waiver | • **6+ months at once**: Buying or renewing 6 months or more at once needs no deposit for that order, and any deposit already paid stays held.<br>• **12 months cumulative**: Once the same IP has 12 months paid in total (new purchases and manual and automatic renewals all count), no deposit is needed at all—any deposit already paid goes toward the renewal that reaches 12 months, and any amount above the rent returns to your account balance.<br>The renewal dialog shows the months paid so far, the amount applied and what you actually pay |
| Top-up | If verified abuse forfeits the deposit or a product change leaves it below the requirement, the next manual or automatic renewal that does not qualify for a waiver tops it up; the renewal dialog shows the amount |
| Where to see it | Each dedicated IP card in the node list shows its current deposit; reclaimed IPs show the amount awaiting return and the expected date at the top of the node list's Exclusive IP page |
| Return | 14 days after the IP stops being renewed and is reclaimed, a deposit that was not forfeited returns in full to your account balance automatically, with a notification |
| Account deletion | The account cannot be deleted until the deposit is returned |

::: tip Returned deposits can only be spent
The deposit returns to your account balance. It cannot be withdrawn or refunded to the original payment method, and can only be spent in the dashboard, such as on plans and renewals.
:::

A dedicated IP may only be used by your own account. Complaints about spam, port scanning, attacks or copyright require verification of abuse during your holding period and responsibility for it; receiving a complaint alone does not justify a charge. Once verified, the whole deposit is forfeited, and later renewals top it up under the rules above. The same incident is not charged twice: if the deposit is forfeited for it, no additional upstream handling fee is charged for that incident. Without a deposit deduction, only a documented upstream handling fee actually incurred is collected, once, from your balance and commission. If this leaves your balance negative, the account may be suspended for arrears until you top up. Notification of the basis and amount is arranged at or promptly after the charge. Submit a [support ticket](/en/help/support) for review and correction of an erroneous deduction. Clause 1.10 of the [Terms of Service](https://oixcloud.com/tos#section-tos-dedicated-ip) is authoritative.

::: warning Avoid complaints
Do not send bulk email, scan ports, run P2P/BitTorrent downloads or access unauthorized systems through a dedicated IP. Complaints are traced by time to the account holding the IP at that moment, and complaints received after the deposit is returned may still lead to additional charges.
:::

[Open your account](https://oixcloud.com/user)

## Select your first node


<figure class="guide-figure">
  <a href="/illustrations/account-nodes-en.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="Inspect a node in the website list">
    <img src="/illustrations/account-nodes-en.svg?v=20261102-3" alt="Inspect a node in the website list" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

1. Check permitted nodes, regions, lines and multipliers in the [node list](https://oixcloud.com/user/node).
2. Refresh the managed client profile. If a node is missing, check [filters](/en/account/subscriptions) before assuming an outage.
3. Select a suitable node and test the same target site or app.
4. If latency works but the application fails, confirm its connection actually uses that node, then compare another node in the same region.

For streaming-region requirements, see [streaming settings](/en/account/unlock#streaming-regions); for automatic selection, use client policy groups. Change one variable at a time to distinguish capture, routing, node and destination problems.

## Verify a dedicated-IP purchase

1. Click **Buy**, choose the months and check the expiry and total. Read the term and [deposit rules](#ip-deposit) before confirming; submission charges immediately and assigns one address.
2. Check the assigned address and expiry, confirm the address is retained in the [subscription filter](/en/account/subscriptions) preview, then refresh the client configuration.
3. Select the IP, establish a new connection and verify the exit in your actual application.

To renew manually: expand the IP list → check the full address → **Renew** → choose the months and confirm the total. A product going off sale does not prevent existing IPs from being used or renewed.

Included services appear as cards on the same page while you hold an unexpired IP for the product. The cards provide addresses, credentials and documentation; do not share credentials publicly.

### Common problems {#ip-troubleshooting}

| Symptom | Check first |
| --- | --- |
| The IP is unexpired but unusable | Check plan eligibility and the expiry note above; restore an active plan and refresh the client configuration |
| Payment outcome is unclear | Refresh the node list and check assigned addresses and expiry dates before making another purchase |
| A service sees another exit despite selecting the dedicated IP | Check the matched policy in connection records, then inspect [relays](/en/account/relay), [WARP and streaming unlock](/en/account/unlock) for changes to the final exit; verify with a new connection |
| CAPTCHAs or access restrictions remain | Record the destination, error, time and actual exit; follow the platform's guidance and avoid high-frequency retries |

## Dedicated IPv6 on supported nodes {#dedicated-ipv6}

Check **Dedicated IPv6** and its supported-node list under **Account-wide settings** on the [Traffic Routes overview](https://oixcloud.com/user/route), then enable it if needed. Only listed supported nodes use the dedicated IPv6 egress assigned to the account; other nodes are unaffected. The setting is hidden when no accessible node supports it.

After saving, wait for node synchronization and use new connections to verify the exit seen by the target service. This controls the remote node's outbound, separately from local IPv6 capture, AAAA queries and the address family used to connect to a node. A client IPv6 switch does not verify this setting.

To make websites see only an IPv4 exit, use [IPv4 Only](/en/account/unlock#ipv4-only). It takes priority on the selected supported nodes while preserving the Dedicated IPv6 setting itself.

## Check service status {#service-status}

After signing in, open [Service status](https://oixcloud.com/status) to check status and update times for nodes visible to your account. The page refreshes automatically and reports refresh failures before retrying. Node status is not an end-to-end connection test from your current network to the destination service.

If status is normal but access still fails, update the client configuration and compare against the same destination. Follow [Troubleshooting](/en/help/troubleshooting) and include the node, time and exact error.
