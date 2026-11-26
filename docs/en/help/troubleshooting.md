---
description: "Connection and speed troubleshooting \u2014 setup, practical steps and troubleshooting"
---

# Connection and speed troubleshooting

Choose the closest symptom, then work through its checks. Change one condition at a time and keep the before-and-after results.

| Symptom | Check first |
| --- | --- |
| [Cannot sign in or no nodes appear](#cannot-sign-in-or-no-nodes-appear) | Website, account, credentials and plan validity |
| [A website node is missing from the subscription](#missing-subscription) | Connection method, URL in use, filter preview and refresh result |
| [Data ran out or renewal did not happen](#plan-continuation) | Pending plans, traffic reset or renewal queue |
| [Connected but websites do not load](#connected-but-websites-do-not-load) | Local network, traffic capture, mode and selected node |
| [Slow speeds or high latency](#it-works-but-speed-is-low-or-latency-is-high) | High-speed allowance, restrictions and comparable node tests |
| [Limited with traffic remaining](#limits) | Points, requests, Working nodes and account notices |
| [Wrong streaming region](#the-node-works-but-the-streaming-region-is-wrong) | Actual exit, unlock settings and platform conditions |
| [Local resolvers in a DNS test](#a-dns-test-lists-local-resolvers) | Intentional direct access, routing lookups and traffic capture |

## Cannot sign in, or no nodes appear

Try signing in to the [User Center](https://oixcloud.com/user) first, then follow the row that matches what you see.

| What you see | What to do |
| --- | --- |
| Website password sign-in fails | On the [website sign-in page](https://oixcloud.com/auth/login), use a registered passkey or enter your account password and the two-step code if enabled. If you need a password reset, **Forgot password** sends an email. Resetting revokes all client sign-ins and Access Tokens, changes the main subscription URL, turns off two-step verification and removes passkeys. |
| Website sign-in works, but the client rejects your credentials | Enter the account password or full Access Token in its respective field. If client password sign-in is disabled, use an Access Token or supported Google sign-in. [Check sign-in methods](/en/account/security#first-client-login). |
| A device signed in with email/password or Google suddenly signs out | Check its entry under [Signed-in clients](https://oixcloud.com/user/token#devices). Devices sharing a sign-in are signed out together. Sign-ins unused for 180 days are also removed. Sign in again on the devices you use. For Apple TV, [sync again](/en/oixflow/apple-tv#approval) from a signed-in iPhone or iPad. |
| A device using an Access Token suddenly signs out | Check whether the token expired, was deleted or was regenerated. Use the new value after regeneration. For an expired or deleted token, [create a new one](/en/account/security#manual-token) and update the devices or scripts that used it. Changing the account password also revokes all client sign-ins and Access Tokens. |
| The client reports an invalid device registration | Sign out in the client and sign in again. Nodes can then load without a separate approval. |
| The client says the device clock is too far from the server | Enable automatic date and time, or NTP on a router, then try again. |
| You paid, but the client shows no active plan | Follow the [payment and activation checks](/en/help/support#payment) to compare your top-up history with the **Active** record in Plan Management. |

If a new-device alert is unfamiliar, check the sign-in it identifies and follow the [steps for revoking that credential](/en/account/security#device-approval).

<figure class="guide-figure">
  <a href="/illustrations/account-tokens-en.svg?v=20261127-1" target="_blank" rel="noopener" aria-label="Signed-in clients sharing one sign-in are listed separately from manually created Access Tokens">
    <img src="/illustrations/account-tokens-en.svg?v=20261127-1" alt="Signed-in clients sharing one sign-in are listed separately from manually created Access Tokens" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>The iPhone and Apple TV share a sign-in in this example. The router uses a separate Access Token.</figcaption>
</figure>

### A website node is missing from the subscription {#missing-subscription}

1. Search for the same name in the website’s [node list](https://oixcloud.com/user/node). If it is missing there too, check the **Active** plan and its included lines.
2. If only the client is missing the node, check how it connects. Ordinary third-party subscriptions can include Edge, Home ISP and your assigned dedicated IPs within your plan and format. For CIA, IXP, Fusion or GIA included in your plan, sign in to a dedicated client that supports the line.
3. Check the **subscription this device actually uses**. In the filter preview, check the line, region and name filters and keep the nodes you need. On the account page, use **Refresh Nodes** in oixFlow on iPhone or iPad, or **Refresh nodes** in FlClash for oixCloud. In a third-party client, update the imported URL and select that profile. See the [steps for each client](/en/account/subscriptions#missing-nodes).

If a first import rejects the URL, [copy the full subscription URL](/en/start/quick-start#import-subscription) and try again. If you use a separate personal URL, check that entry and its filters in [Subscription Management](https://oixcloud.com/user/sub_manage). After a manual reset of the main subscription, replace the old main URL on devices that use it. Devices using a personal URL or a managed profile need to refresh their node credentials. If a URL was exposed, follow the [steps for that type of URL](/en/account/security#match-the-response-to-the-leak).

## Connected, but websites do not load

1. Pause other VPNs or proxies. Check that a site you normally reach directly opens on the current network.
2. Connect the client and open the affected site once. On iPhone or iPad, use [oixFlow’s Network Check and request history](/en/oixflow/diagnostics#network-check). In FlClash for oixCloud, run the [network self-check](/en/flclash/diagnostics) on Windows or macOS, or inspect connections and logs on Android or Linux.
3. If the request is missing, check whether the app uses the system proxy or is excluded from the VPN or TUN. If the request appears, check the matched rule and outbound, then try the same site on another available node.

If a direct connection to Edge or Home ISP fails from mainland China, try the same site on the same network and client using a CIA, Fusion, GIA or [managed IXP node](/en/account/nodes#ixp-access) included in your plan. If you use a cloud server to reach the IXP address from the panel, follow [IXP connection troubleshooting](/en/account/nodes#ixp-troubleshooting) to check the path from the device to the forwarder and from the forwarder to IXP.

## It works, but speed is low or latency is high

Check your remaining high-speed allowance, pay-as-you-go settings, and whether low-speed or fair-use restrictions apply. Compare a few nodes on the same network and at roughly the same time. Speed tests consume traffic. Assess latency, bandwidth, and streaming access separately, and avoid changing every setting based on one test.

### Data ran out or renewal did not happen {#plan-continuation}

Open [Plan Management](https://oixcloud.com/user/bought) and check the active plan’s expiry and the pending queue. When your account is eligible to continue, the next eligible prepaid plan starts first.

| What you see | What to check if no eligible plan is pending |
| --- | --- |
| An ordinary plan ran out of data before expiry | Check the active record’s [automatic traffic reset](/en/account/plans#traffic-reset) and whether balance and commission cover the reset price. If no reset takes place, [low-speed access](/en/account/traffic#low-speed) applies until expiry. |
| The plan expired | Check the first eligible record in the [renewal queue](/en/account/plans#auto-renew) and its price. If funds are short, the system does not charge a cheaper backup. |

## Why am I limited with traffic still remaining? {#limits}

Traffic allowance, points and plan speed apply separately. Use the [limit comparison](/en/account/traffic#limits), then inspect activity requests and Working nodes in [Account Profile](https://oixcloud.com/user/profile). Few currently open connections do not mean few new requests over a minute; repeated speed tests add activity too.

For a points-limit notice, reduce abnormal activity and observe subsequent points using the [fair-use recovery rules](/en/account/fair-use#recovery). Disconnecting completely leaves no activity records and does not guarantee points will rise. Avoid guessing by repeatedly changing nodes, reinstalling the client or buying plans.

Automated abnormal-use detection is active. If the account shows a suspension or ban, stop abnormal use and follow [the support instructions](/en/help/support#restrictions). Do not treat it as temporary throttling that points recovery will automatically remove.

## The node works, but the streaming region is wrong

Check the node actually used by the streaming service's policy group, its exit region, and your streaming settings. Reconnect, then reopen the app. Account region, platform caches, and the platform's own restrictions can also affect the result. Include the specific platform, node, and time of the error in your support ticket.

## A DNS test lists local resolvers

Distinguish intentional direct lookups, lookups needed for routing and queries that bypass the client. DNS encryption, proxy DNS and VPN / TUN capture address different stages; Global mode does not guarantee zero leaks.

Follow the client-specific steps and verification guidance: [oixFlow DNS and IPv6](/en/oixflow/dns#dns-leaks-settings-that-help) or [FlClash for oixCloud DNS and capture](/en/flclash/dns#dns-leaks-check-managed-dns-and-traffic-capture-first).

## Client-specific tools


<figure class="guide-figure">
  <a href="/illustrations/flclash-diagnostics-en.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="Run a network self-check">
    <img src="/illustrations/flclash-diagnostics-en.svg?v=20261102-3" alt="Run a network self-check" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>FlClash for oixCloud desktop example · Follow the relevant guide for other clients</figcaption>
</figure>

- [oixFlow requests, DNS and network events](/en/oixflow/diagnostics)
- [FlClash for oixCloud network check and connections](/en/flclash/diagnostics)
