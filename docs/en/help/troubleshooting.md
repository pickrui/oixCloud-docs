---
description: "Connection and speed troubleshooting \u2014 setup, practical steps and troubleshooting"
---

# Connection and speed troubleshooting

## Cannot sign in, or no nodes appear

First check that the website is reachable and your account is in good standing. Confirm that you are using the correct sign-in details: enter an Access Token in the token field and your account password in the password field. Check that your plan is valid, then refresh the configuration. Keep the client version and exact error message; avoid repeatedly submitting sign-in requests after consecutive failures.

## Connected, but websites do not load

Pause other VPNs or proxies and check that your network works. Then verify that system proxy, VPN, or TUN is enabled, and check the current mode and selected node in the policy group. Try another available node against the same website. If only one app has trouble, check whether it follows the system proxy settings or needs TUN.

## It works, but speed is low or latency is high

Check your remaining high-speed allowance, pay-as-you-go settings, and whether low-speed or fair-use restrictions apply. Compare a few nodes on the same network and at roughly the same time. Speed tests consume traffic. Assess latency, bandwidth, and streaming access separately, and avoid changing every setting based on one test.

## The node works, but the streaming region is wrong

Check the node actually used by the streaming service's policy group, its exit region, and your streaming settings. Reconnect, then reopen the app. Account region, platform caches, and the platform's own restrictions can also affect the result. Include the specific platform, node, and time of the error in your support ticket.

## Client-specific tools

- [oixCloud requests, DNS and network events](/en/oixcloud/diagnostics)
- [FlClash for oixCloud network check and connections](/en/flclash/diagnostics)

Change one setting at a time and record the before-and-after result.
