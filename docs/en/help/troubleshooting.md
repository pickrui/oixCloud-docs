---
description: "Connection and speed troubleshooting \u2014 setup, practical steps and troubleshooting"
---

# Connection and speed troubleshooting

Choose the closest symptom, then work through its checks. Change one condition at a time and keep the before-and-after results.

| Symptom | Check first |
| --- | --- |
| [Cannot sign in or no nodes appear](#cannot-sign-in-or-no-nodes-appear) | Website, account, credentials and plan validity |
| [Connected but websites do not load](#connected-but-websites-do-not-load) | Local network, traffic capture, mode and selected node |
| [Slow speeds or high latency](#it-works-but-speed-is-low-or-latency-is-high) | High-speed allowance, restrictions and comparable node tests |
| [Limited with traffic remaining](#limits) | Points, requests, Working nodes and account notices |
| [Wrong streaming region](#the-node-works-but-the-streaming-region-is-wrong) | Actual exit, unlock settings and platform conditions |
| [Local resolvers in a DNS test](#a-dns-test-lists-local-resolvers) | Intentional direct access, routing lookups and traffic capture |

## Cannot sign in, or no nodes appear

Try signing in to the [User Center](https://oixcloud.com/user) first, then follow the row that matches what you see.

| What you see | What to do |
| --- | --- |
| Website sign-in works, but the client rejects your credentials | Enter your account password in the password field or a valid Access Token in the token field. If you disabled password sign-in for clients, use another [supported sign-in method](/en/account/security#first-client-login). |
| You paid, but the client shows no active plan | Check both your top-up history and Plan Management for an active plan. If you see only a top-up or a plan pending activation, follow the [payment and activation checks](/en/help/support#payment) before paying again. |
| Your plan is active, but a node is missing | Search for its name in the website’s [node list](https://oixcloud.com/user/node). If it appears there, [check the subscription and update the client](/en/account/subscriptions#missing-nodes). |

## Connected, but websites do not load

1. Pause other VPNs or proxies. Check that a site you normally reach directly opens on the current network.
2. Connect the client and open the affected site once. On iPhone or iPad, use [oixCloud’s Network Check and request history](/en/oixcloud/diagnostics#network-check). In FlClash for oixCloud, run the [network self-check](/en/flclash/diagnostics) on Windows or macOS, or inspect connections and logs on Android or Linux.
3. If the request is missing, check whether the app uses the system proxy or is excluded from the VPN or TUN. If the request appears, check the matched rule and outbound, then try the same site on another available node.

If you connect directly to Edge or Home ISP from mainland China, check the [node types](/en/account/nodes#node-types). If your plan includes CIA, IXP, Fusion or GIA, try one of those on the same network and client. Note which node worked and which timed out.

## It works, but speed is low or latency is high

Check your remaining high-speed allowance, pay-as-you-go settings, and whether low-speed or fair-use restrictions apply. Compare a few nodes on the same network and at roughly the same time. Speed tests consume traffic. Assess latency, bandwidth, and streaming access separately, and avoid changing every setting based on one test.

## Why am I limited with traffic still remaining? {#limits}

Traffic allowance, points and plan speed apply separately. Use the [limit comparison](/en/account/traffic#limits), then inspect activity requests and Working nodes in [Account Profile](https://oixcloud.com/user/profile). Few currently open connections do not mean few new requests over a minute; repeated speed tests add activity too.

For a points-limit notice, reduce abnormal activity and observe subsequent points using the [fair-use recovery rules](/en/account/fair-use#recovery). Disconnecting completely leaves no activity records and does not guarantee points will rise. Avoid guessing by repeatedly changing nodes, reinstalling the client or buying plans.

Automated abnormal-use detection is active. If the account shows a suspension or ban, stop abnormal use and follow [the support instructions](/en/help/support#restrictions). Do not treat it as temporary throttling that points recovery will automatically remove.

## The node works, but the streaming region is wrong

Check the node actually used by the streaming service's policy group, its exit region, and your streaming settings. Reconnect, then reopen the app. Account region, platform caches, and the platform's own restrictions can also affect the result. Include the specific platform, node, and time of the error in your support ticket.

## A DNS test lists local resolvers

Distinguish intentional direct lookups, lookups needed for routing and queries that bypass the client. DNS encryption, proxy DNS and VPN / TUN capture address different stages; Global mode does not guarantee zero leaks.

Follow the client-specific steps and verification guidance: [oixCloud DNS and IPv6](/en/oixcloud/dns#dns-leaks-settings-that-help) or [FlClash for oixCloud DNS and capture](/en/flclash/dns#dns-leaks-check-managed-dns-and-traffic-capture-first).

## Client-specific tools


<figure class="guide-figure">
  <a href="/illustrations/flclash-diagnostics-en.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="Run a network self-check">
    <img src="/illustrations/flclash-diagnostics-en.svg?v=20261102-3" alt="Run a network self-check" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>FlClash for oixCloud desktop example · Follow the relevant guide for other clients</figcaption>
</figure>

- [oixCloud requests, DNS and network events](/en/oixcloud/diagnostics)
- [FlClash for oixCloud network check and connections](/en/flclash/diagnostics)
