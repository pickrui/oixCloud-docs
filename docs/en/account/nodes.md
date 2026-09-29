---
description: "Nodes and connection options \u2014 setup, practical steps and troubleshooting"
---

# Nodes and connection options

## How should I choose a node?

Start with the region you need and the nodes available to your account, then compare latency and actual access. Low latency does not mean fast downloads or guaranteed streaming access. Nodes in the same region can behave differently because they use different entry points, exits, and routes.

## Rule, Global, and Direct modes

Rule mode matches destinations to routing policies. Global mode sends traffic captured by the client to the selected proxy. Direct mode connects without a proxy node. Global mode does not mean every app on the system is captured: that still depends on whether VPN, TUN, or system proxy settings apply.

## Protocols, ports, and advanced options

Use the managed configuration generated for your client. Avoid copying port and protocol combinations from old tutorials. An option works only when both the node and client support it. Keep the defaults when unsure, and refresh the configuration and test a connection after making changes.

## Buying and renewing dedicated IPs

Buying or renewing a dedicated IP requires a currently active plan. Queued plans alone are not enough; activate a plan first. The new IP expiry must be on or after the expected plan expiry: the current plan expiry plus the remaining duration of plans that can activate consecutively in the queue. Check the earliest allowed IP expiry in the purchase dialog. Each billed month is exactly 30 days.

Edge-tier nodes are designed for international network environments. Connections from certain regions, such as mainland China, are not covered by SLA guarantees.

Auto-renewal attempts to add 30 days within 24 hours before the IP expires. It requires a currently active plan, sufficient funds including commission, and an IP expiry on or after the expected plan expiry, including valid queued plans. If 30 more days are not enough, manually choose more renewal months. The system does not automatically increase the number of billed months. If conditions are not met, charges pause while the setting stays on and retries continue until expiry. An IP not renewed by expiry is reclaimed.

[Open your account](https://oixcloud.com/user)
