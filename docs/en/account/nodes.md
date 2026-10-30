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
| <span id="edge"></span>**Edge**<br>Global Network | Tier 1 transit and upstream interconnections provide global access for destinations that do not require mainland-China routing optimization. |
| <span id="cia"></span>**CIA**<br>China-Optimized Network | CMIN2 or comparable carrier resources supplement international transit to optimize mainland-China routes on a best-effort basis. |
| <span id="ixp"></span>**IXP**<br>Cloud Interconnect | Internet exchange points connect cloud and content providers, reducing public-Internet detours for supported cloud-network access. |
| <span id="fusion"></span>**Fusion**<br>Private Network Interconnect | Traffic enters over the Guangdong–Hong Kong dedicated line, then reaches worldwide nodes through Hong Kong as the international hub. |
| <span id="fusion-advanced"></span>**Fusion Advanced**<br>Private Network Interconnect | Higher scheduling priority, link redundancy and an additional Shanghai–Japan line support multiple devices and sustained transfers. |
| <span id="fusion-premium"></span>**Fusion Premium**<br>Private Network Interconnect | The highest scheduling priority and layered redundancy serve needs that place greater emphasis on latency, jitter and sustained availability. |
| <span id="gia"></span>**GIA**<br>Premium China Routing | Tier 1 transit combines with Premium Transit resources, including CN2 GIA, for higher-grade mainland-China routing needs. |

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

## Buying and renewing dedicated IPs

| Check | Requirement |
| --- | --- |
| Plan eligibility | A currently active plan is required; queued plans alone are not enough |
| Dedicated IP expiry | The new expiry must be on or after the expected plan expiry; check the earliest allowed date in the purchase dialog |
| Expected plan expiry | Current plan expiry plus the remaining duration of plans that can activate consecutively in the queue |
| Billing month | Exactly 30 days |

Edge-tier nodes are designed for international network environments. Connections from certain regions, such as mainland China, are not covered by SLA guarantees.

### Auto-renewal {#ip-auto-renewal}

| Item | Rule |
| --- | --- |
| Attempt window | Within 24 hours before IP expiry |
| Extension | 30 days; the system does not automatically increase billed months |
| Charge conditions | An active plan, sufficient funds including commission, and a new IP expiry on or after the expected plan expiry, including valid queued plans |
| Conditions not met | Charges pause, the setting stays on, and retries continue until expiry |

::: warning Check the renewal result before expiry
If 30 more days do not meet the earliest allowed expiry, manually choose more renewal months. An IP not renewed by expiry is reclaimed.
:::

[Open your account](https://oixcloud.com/user)

## Select your first node

1. Check permitted nodes, regions, lines and multipliers in the [node list](https://oixcloud.com/user/node).
2. Refresh the managed client profile. If a node is missing, check [filters](/en/account/subscriptions) before assuming an outage.
3. Select a suitable node and test the same target site or app.
4. If latency works but the application fails, confirm its connection actually uses that node, then compare another node in the same region.

For streaming-region requirements, see [streaming settings](/en/account/unlock); for automatic selection, use client policy groups. Change one variable at a time to distinguish capture, routing, node and destination problems.

## Verify a dedicated-IP purchase

1. Review the node, billing months, earliest required expiry and total in the purchase dialog.
2. Check the allocated address and expiry afterwards; payment success does not update the client by itself.
3. Ensure the node is retained in the official client's filter preview, then refresh the profile and establish a new connection.
4. Verify the exit in your actual application and allow time to resolve balance or plan eligibility before renewal.

Dedicated IPs and plans have separate expiry requirements. A long queued plan can make a single 30-day automatic IP extension insufficient; follow the renewal dialog's eligibility details.

## Check service status {#service-status}

After signing in, open [Service status](https://oixcloud.com/status) to check status and update times for nodes visible to your account. The page refreshes automatically and reports refresh failures before retrying. Node status is not an end-to-end connection test from your current network to the destination service.

If status is normal but access still fails, update the client configuration and compare against the same destination. Follow [Troubleshooting](/en/help/troubleshooting) and include the node, time and exact error.
