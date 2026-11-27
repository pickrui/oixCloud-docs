---
pageClass: node-guide
description: "Nodes and connection options \u2014 setup, practical steps and troubleshooting"
---

# Nodes and connection options

## How should I choose a node?

Start with the region you need and the nodes available to your account, then compare latency and actual access. Low latency does not mean fast downloads or guaranteed streaming access. Nodes in the same region can behave differently because they use different entry points, exits, and routes.

In the [node list](https://oixcloud.com/user/node), choose a line category and filter by region. Search matches original and translated names, external relay labels and destination addresses. On nodes with multiple backends, carrier labels and numbers distinguish entries from the same carrier.

For a stable exit address, see [dedicated IP connection options, purchases and renewals](/en/account/dedicated-ip).

## Node types {#node-types}

These descriptions follow the [official homepage](https://oixcloud.com/#network). Routes, speeds, traffic and features depend on the plan and node. Check your current plan, [node list](https://oixcloud.com/user/node) and client requirements before choosing.

| Node type | Network and purpose |
| --- | --- |
| <span id="edge"></span>**Edge**<br>Global Network | Tier 1 transit and upstream interconnections provide global access for destinations that do not require mainland-China routing optimization. Designed for international network environments. Connection availability and stability cannot be guaranteed when accessing from certain regions, such as mainland China. You can try enabling [AnyTLS with CDN](https://oixcloud.com/user/anytls) to improve connectivity. Results depend on local network conditions. |
| <span id="isp"></span>**[Home ISP](/en/account/home-isp)**<br>Home broadband | Home-broadband exits grouped by static or dynamic IP. Designed for international network environments. No commitments or SLA guarantees are provided. |
| <span id="cia"></span>**CIA**<br>Basic Optimized Network | CMIN2 or comparable carrier resources supplement international transit to optimize mainland-China routes on a best-effort basis. |
| **[IXP](/en/account/ixp)**<br>Cloud Interconnect | Connects cloud and content providers via Internet exchange points, reducing public-Internet detours for supported cloud networks. |
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

For streaming-region requirements, see [streaming settings](/en/account/streaming); for automatic selection, use client policy groups. Change one variable at a time to distinguish capture, routing, node and destination problems.

## Dedicated IPv6 on supported nodes {#dedicated-ipv6}

Check **Dedicated IPv6** and its supported-node list under **Account-wide settings** on the [Traffic Routes overview](https://oixcloud.com/user/route), then enable it if needed. Only listed supported nodes use the dedicated IPv6 egress assigned to the account; other nodes are unaffected. The setting is hidden when no accessible node supports it.

After saving, wait for node synchronization and use new connections to verify the exit seen by the target service. This controls the remote node's outbound, separately from local IPv6 capture, AAAA queries and the address family used to connect to a node. A client IPv6 switch does not verify this setting.

To make websites see only an IPv4 exit, use [IPv4 Only](/en/account/unlock#ipv4-only). It takes priority on the selected supported nodes while preserving the Dedicated IPv6 setting itself.

## Check service status {#service-status}

After signing in, open [Service status](https://oixcloud.com/status) to check status and update times for nodes visible to your account. The page refreshes automatically and reports refresh failures before retrying. Node status is not an end-to-end connection test from your current network to the destination service.

If status is normal but access still fails, update the client configuration and compare against the same destination. Follow [Troubleshooting](/en/help/troubleshooting) and include the node, time and exact error.
