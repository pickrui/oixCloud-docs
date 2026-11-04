---
pageClass: node-guide
description: "Nodes and connection options \u2014 setup, practical steps and troubleshooting"
---

# Nodes and connection options

## How should I choose a node?

Start with the region you need and the nodes available to your account, then compare latency and actual access. Low latency does not mean fast downloads or guaranteed streaming access. Nodes in the same region can behave differently because they use different entry points, exits, and routes.

## Node types {#node-types}

These descriptions follow the [official homepage](https://oixcloud.com/#network). Routes, speeds, traffic and features depend on the plan and node. Check your current plan, [node list](https://oixcloud.com/user/node) and client requirements before choosing.

| Node type | Network and purpose |
| --- | --- |
| <span id="edge"></span>**Edge**<br>Global Network | Tier 1 transit and upstream interconnections provide global access for destinations that do not require mainland-China routing optimization. Designed for international network environments. Connections from certain regions, such as mainland China, are not covered by SLA guarantees. |
| <span id="isp"></span>**[Home ISP](#home-isp)**<br>Home broadband | Home-broadband exits grouped by static or dynamic IP. Designed for international network environments. No commitments or SLA guarantees are provided. |
| <span id="cia"></span>**CIA**<br>Basic Optimized Network | CMIN2 or comparable carrier resources supplement international transit to optimize mainland-China routes on a best-effort basis. |
| <span id="ixp"></span>**[IXP](#ixp)**<br>Cloud Interconnect | Connects cloud and content providers via Internet exchange points, reducing public-Internet detours for supported cloud networks. |
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

Home ISP nodes excluded from default subscriptions can be selected as internal relay targets or exits, but not as entries or intermediate hops. External relay, HTTP/3, WARP and streaming-unlock settings remain unavailable. Adding ISP to a subscription manually does not remove these restrictions, and a wildcard source such as **All nodes** cannot bypass them.

Nodes manually disabled by an administrator remain unavailable as both relay entries and exits. Backends grouped under the same node name share configuration eligibility. Existing settings remain active and can be deleted. All nodes must still meet plan permissions, feature requirements and the conditions shown on the settings page. For relay and proxy chain setup, see the [Home ISP user guide](/en/account/home-isp).

## IXP Cloud Interconnect nodes {#ixp}

IXP (Internet Exchange Point, Cloud Interconnect) nodes deliver high-capacity cloud transit and dedicated exchange resources. By interconnecting domestic backbones directly with international cloud service providers and content delivery networks (CDNs), IXP substantially reduces public-Internet detours, jitter, and packet loss.

| Route | Path | Typical latency |
| --- | --- | --- |
| South China exchange point → Hong Kong | Guangdong–Hong Kong dedicated interconnect | ~30–45 ms from South China, ~45–65 ms nationwide |
| East China exchange point → Japan | Shanghai–Japan dedicated interconnect | ~40–55 ms from East China, ~55–75 ms nationwide |

### Plan eligibility and access characteristics {#ixp-access}

IXP is accessible to Pass Alu, Pass Bronze, and all higher paid plans. Compared with Basic Optimized Network (CIA), it delivers lower jitter and dedicated-line-grade transit, offering an economical dedicated connectivity option.

- **Official-client design**: IXP entry addresses are resolved and mapped dynamically through backend services tailored for official clients (oixCloud, FlClash for oixCloud, etc.); standard third-party formats lacking dynamic mapping may fail to connect directly.
- **Default inclusion and Smart Selection**: For plans that include CIA and IXP permissions, IXP nodes are included by default in standard subscriptions and Smart Selection pools without requiring manual toggles.

### Access model and network requirements {#ixp-connectivity}

- **Cloud-optimized ingress**: IXP domestic entry points connect to BGP-optimized ingress networks across major domestic cloud providers (including Alibaba Cloud, Tencent Cloud, Baidu Cloud nationwide, and Volcano Engine, Huawei Cloud, UCloud in designated regions), rather than public-Internet-facing entry points.
- **Seamless connection on official clients**: When using official clients (oixCloud, FlClash for oixCloud), backend services automatically handle fronting mapping and dynamic routing, allowing direct connection via node selection or Smart Selection. Because entry traffic relies on shared cloud-interconnect channels, performance may vary under peak loads; users seeking higher bandwidth and sustained low latency are encouraged to purchase a cloud instance in a supported region from corresponding cloud providers as a dedicated ingress front.

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

## Buying and renewing dedicated IPs

| Check | Requirement |
| --- | --- |
| Plan eligibility | A currently active plan is required; queued plans alone are not enough |
| Dedicated IP expiry | The new expiry must be on or before the expected plan expiry; check Latest dedicated IP expiry in the purchase dialog |
| Expected plan expiry | Current plan expiry plus the remaining duration of plans that can activate consecutively in the queue, plus the period it renews if a plan has automatic renewal on |
| Purchase and manual-renewal term | At most 12 months per operation; a new purchase must meet the product minimum, while manual renewal starts at one month |
| Billing month | Exactly 30 days |

### Auto-renewal {#ip-auto-renewal}

| Item | Rule |
| --- | --- |
| Attempt window | Within 24 hours before IP expiry |
| Extension | 30 days; the system does not automatically increase billed months |
| Charge conditions | An active plan, enough balance for the rent and any [deposit](#ip-deposit) top-up, and a new IP expiry on or before the expected plan expiry, including valid queued plans and one more period if the plan auto-renews |
| Conditions not met | Charges pause, the setting stays on, and retries continue until expiry |

::: warning Check the renewal result before expiry
If 30 more days would exceed the expected plan expiry, extend your plan or turn on its automatic renewal first, then check renewal eligibility (adding more IP renewal months cannot solve this). If an extension only holds once your plan renews automatically and the plan renews within 7 days, automatic IP renewal also reserves balance for the plan renewal and renews only when both are covered.

After an IP expires, automatic renewal is tried once more before it is reclaimed; an IP still not renewed is reclaimed. While the IP's node is under maintenance or paused, you are not charged for renewal, the IP still appears on the nodes page marked as under maintenance, and an expired IP is kept for up to 14 days with a notification; once the node is back, the IP renews or is reclaimed as usual (or is reclaimed if the node is still down after 14 days).
:::

### Deposit and abuse fees {#ip-deposit}

Some dedicated IP products require a deposit, one per IP, to guarantee that the IP is not abused. The amount appears in the product list and the purchase dialog; click or tap the deposit chip in the product list for details.

| Item | Rule |
| --- | --- |
| Collection | Charged with the rent on a new purchase (except an order of 6 months or more); the dialog's total includes it. If your balance is short, the dialog shows how much to top up |
| Waiver | • **6+ months at once**: Buying or renewing 6 months or more at once needs no deposit for that order, and any deposit already paid stays held.<br>• **12 months cumulative**: Once the same IP has 12 months paid in total (new purchases and manual and automatic renewals all count), no deposit is needed at all—any deposit already paid goes toward the renewal that reaches 12 months, and any amount above the rent returns to your account balance.<br>The renewal dialog shows the months paid so far, the amount applied and what you actually pay |
| Top-up | If a complaint forfeits the deposit or a product change leaves it below the requirement, the next manual or automatic renewal that does not qualify for a waiver tops it up; the renewal dialog shows the amount |
| Where to see it | Each dedicated IP card in the node list shows its current deposit; reclaimed IPs show the amount awaiting return and the expected date at the top of the node list's Exclusive IP page |
| Return | 14 days after the IP stops being renewed and is reclaimed, a deposit that was not forfeited returns in full to your account balance automatically, with a notification |
| Account deletion | The account cannot be deleted until the deposit is returned |

::: tip Returned deposits can only be spent
The deposit returns to your account balance. It cannot be withdrawn or refunded to the original payment method, and can only be spent in the dashboard, such as on plans and renewals.
:::

A dedicated IP may only be used by your own account. If the IP draws abuse complaints during your holding period (such as spam, port scanning, attacks or copyright complaints), the whole deposit is forfeited and not returned, and later renewals collect it again under the rules above. If no deposit was paid or it has already been forfeited, the upstream handling fees are charged to your balance and commission; if this leaves your balance negative, the account may be suspended for arrears until you top up. Each action is notified with the amount and complaint details; submit a [support ticket](/en/help/support) if you disagree. Clause 1.10 of the [Terms of Service](https://oixcloud.com/tos#section-tos-dedicated-ip) is authoritative.

::: warning Avoid complaints
Do not send bulk email, scan ports, run P2P/BitTorrent downloads or access unauthorized systems through a dedicated IP. Complaints are traced by time to the account holding the IP at that moment, and complaints received after the deposit is returned may still lead to additional charges.
:::

[Open your account](https://oixcloud.com/user)

## Select your first node


<figure class="guide-figure">
  <a href="/illustrations/account-nodes-en.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="Inspect a node in the website list">
    <img src="/illustrations/account-nodes-en.svg?v=20261102-3" alt="Inspect a node in the website list" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

1. Check permitted nodes, regions, lines and multipliers in the [node list](https://oixcloud.com/user/node).
2. Refresh the managed client profile. If a node is missing, check [filters](/en/account/subscriptions) before assuming an outage.
3. Select a suitable node and test the same target site or app.
4. If latency works but the application fails, confirm its connection actually uses that node, then compare another node in the same region.

For streaming-region requirements, see [streaming settings](/en/account/unlock); for automatic selection, use client policy groups. Change one variable at a time to distinguish capture, routing, node and destination problems.

## Verify a dedicated-IP purchase

1. Review the node, billing months, latest allowed expiry, minimum purchase term, deposit and total in the purchase dialog, then accept the [deposit and abuse fee](#ip-deposit) rules and confirm.
2. Check the allocated address and expiry afterwards; payment success does not update the client by itself.
3. Ensure the node is retained in the official client's filter preview, then refresh the profile and establish a new connection.
4. Verify the exit in your actual application and allow time to resolve balance or plan eligibility before renewal.

The active plan and consecutively activatable queued plans must cover the dedicated IP term. If the plan term is too short, extend it first or reduce the IP purchase term without going below the product minimum. Follow the latest allowed expiry shown in the purchase or renewal dialog.

## Dedicated IPv6 on supported nodes {#dedicated-ipv6}

Check **Dedicated IPv6** and its supported-node list under [WARP settings](https://oixcloud.com/user/warp) or [Streaming unlock](https://oixcloud.com/user/unlock), then enable it if needed. Only listed supported nodes use the dedicated IPv6 egress assigned to the account; other nodes are unaffected. The setting is hidden when no accessible node supports it.

After saving, wait for node synchronization and use new connections to verify the exit seen by the target service. This controls the remote node's outbound, separately from local IPv6 capture, AAAA queries and the address family used to connect to a node. A client IPv6 switch does not verify this setting.

## Check service status {#service-status}

After signing in, open [Service status](https://oixcloud.com/status) to check status and update times for nodes visible to your account. The page refreshes automatically and reports refresh failures before retrying. Node status is not an end-to-end connection test from your current network to the destination service.

If status is normal but access still fails, update the client configuration and compare against the same destination. Follow [Troubleshooting](/en/help/troubleshooting) and include the node, time and exact error.
