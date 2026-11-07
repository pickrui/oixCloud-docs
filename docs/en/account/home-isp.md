---
description: "Filter Home ISP nodes, configure internal relays or client proxy chains, and verify the actual exit"
---

# Home ISP user guide

Home ISP provides overseas residential broadband exits. Check the destination node first, then choose an internal relay or client proxy chain if needed. Adding an entry may improve the access path but adds another connection stage; compare the result on your own network.

## Characteristics and use cases {#characteristics}

Home ISP uses the same plan permissions as Edge and appears separately in the [node list](https://oixcloud.com/user/node).

| Node category | What to check |
| --- | --- |
| Home ISP · Static IP | Normally uses a relatively stable exit address; still verify the node's current exit |
| Home ISP · Dynamic IP | The exit address can change, so it is unsuitable for long-term fixed-IP requirements |

Neither category assigns an IP exclusively to your account or guarantees availability, streaming access or a mainland-China access SLA. A residential network does not guarantee that a third-party platform will permit access, reduce verification or preserve sessions. Region and IP classification depend on the destination service.

## Subscriptions and filters {#subscription}

The service sets default inclusion per node, independently of its static or dynamic category. Smart Selection excludes Home ISP on plans with CIA, IXP, Fusion or GIA. ISP nodes excluded by default are not added merely because the default selection is empty.

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-filter-en.svg?v=20261105-3" target="_blank" rel="noopener" aria-label="oixCloud · Retain the entry line and ISP together">
    <img src="/illustrations/oixcloud-filter-en.svg?v=20261105-3" alt="oixCloud · Retain the entry line and ISP together" width="1120" height="1120" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation · Fictional data · Both Fusion and ISP are retained in this example · Click to enlarge</figcaption>
</figure>

1. Open **oixCloud → Node Filter** in oixCloud or FlClash for oixCloud, or edit the corresponding address in [Subscription Management](https://oixcloud.com/user/sub_manage).
2. Set **ISP** to **Only**. For a client proxy chain, set the entry node's line to **Only** too, or the filter may remove the entry.
3. Check region and name conditions and confirm that both the required entry and exit appear in the preview.
4. Save and wait for node updates. See [Subscriptions and filters](/en/account/subscriptions) for each client's automatic refresh and manual sync controls.

ISP and Edge are separate lines. Selecting only Edge, a region or a name does not add ISP nodes excluded by default.

::: warning Check node roles first
Home ISP nodes excluded by default can only be internal relay targets or exits, not entries or intermediate hops. External relay, HTTP/3, CDN, WARP, IPv4 Only and streaming-unlock settings are unavailable on them. Explicit subscription selection does not remove these [traffic routing restrictions](/en/account/nodes#isp-routing).
:::

## Why use relays or proxy chains? {#why-relay-or-chain}

If direct access to Home ISP performs poorly, compare a single node with `Your device → Available entry → Home ISP → Destination`. Start with two hops. More hops do not guarantee lower latency, higher speed or a solution to problems at the exit itself.

| Method | Configure in | Use from the client |
| --- | --- | --- |
| Internal relay | Website: Traffic Routes → Relay → Internal relay | Connect to the entry; the servers forward onward |
| Client proxy chain | A client supporting proxy chains | Select the saved chain name or target it with a routing rule |

Verify one method first. Combining both at once makes the actual route harder to diagnose. Check each segment's availability, latency and traffic multiplier.

## Method 1: Internal relay via the website {#internal-relay}

These steps configure a complete path for entry traffic. WARP, external relays and existing paths can affect node eligibility. Follow the page's feedback and [setting interactions](/en/account/relay#other-settings).

<figure class="guide-figure">
  <a href="/illustrations/account-relay-en.svg?v=20261107-1" target="_blank" rel="noopener" aria-label="oixCloud · Internal relay path editor">
    <img src="/illustrations/account-relay-en.svg?v=20261107-1" alt="oixCloud · Internal relay path editor" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>General path-editor example · Select an entry and Home ISP exit; intermediate hops are optional · Click to enlarge</figcaption>
</figure>

1. Open [Internal relay](https://oixcloud.com/user/relay) and choose **Add path**.
2. Select a working node that the page permits as an entry, such as an available Fusion or GIA node.
3. Select Home ISP last. Start with `Entry → Home ISP`; a path allows up to 17 nodes without repeating the same entry.
4. Check priority and preview, then choose **Save path**. Review affected paths before confirming a shared-segment change.
5. Update the client subscription or managed profile, select the **entry node**, and verify the destination's actual exit with a new connection.

For selected websites only, use a [domain/IP-specific individual rule](/en/account/relay#domain-rules) instead. Do not retain an unconditional path from the same source, add a conditional rule, and assume other traffic will bypass Home ISP. Check existing rules, priority and shared segments first.

The path diagram shows configuration, not connectivity. See the [internal relay guide](/en/account/relay) for endpoint handling, shared segments and bulk deletion.

## Method 2: Client proxy chains {#proxy-chains}

Confirm that the entry and Home ISP nodes are both in the current node list. The client connects through members in entry-to-exit order; members must be available and meet that client's chain constraints.

### oixCloud proxy chains {#oixcloud-chain}

These editing steps apply to iPhone / iPad. Apple TV [receives synced configuration](/en/oixcloud/apple-tv) from a phone or tablet and does not offer the same chain editor.

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-chains-en.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="oixCloud · Create a chain in forwarding order">
    <img src="/illustrations/oixcloud-chains-en.svg?v=20261102-3" alt="oixCloud · Create a chain in forwarding order" width="1120" height="1120" loading="lazy">
  </a>
  <figcaption>General chain-editor example · Replace its members with your entry and Home ISP nodes · Click to enlarge</figcaption>
</figure>

1. Create a chain in **Proxies** and give it a recognizable name, such as `Home-ISP-Chain`.
2. Use **Add Proxy** to add the entry, then the Home ISP exit. Check the route preview and save.
3. Select the chain on Home. In Rule mode, traffic targeting **Proxy** follows the Home selection; rules targeting a specific node, group, Direct or Reject keep their own destinations.
4. For selected websites, add a **Domain Suffix** rule under **Proxies → Policies → Routing Rules**, enter the actual domain and target the chain name.
5. Make a new connection and inspect the rule and outbound under **Activity → Requests**.

For automatic entry selection, use a personal policy group offered by the chain editor and check its members first. See [policy groups and chains](/en/oixcloud/policies#proxy-chains) for group types, effects of later-hop groups and conflicts.

### FlClash for oixCloud proxy chains {#flclash-chain}

For Windows, macOS, Android and Linux versions supporting this feature.

<figure class="guide-figure">
  <a href="/illustrations/flclash-chains-en.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Edit chain order">
    <img src="/illustrations/flclash-chains-en.svg?v=20261102-3" alt="FlClash for oixCloud · Edit chain order" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>General chain-editor example · Replace its members with your entry and Home ISP nodes · Click to enlarge</figcaption>
</figure>

1. Open **Proxy chains** from the current profile's menu in **Profiles**, then add and name a chain.
2. Add two different members in `Entry → Home ISP` order, use the drag handles if needed, save and confirm the chain is enabled.
3. Wait for the profile to apply. Select the generated chain name in **Proxies** or target it with a personal override rule. If a manual selector does not list it, adjust its members or rules as described in the [chain guide](/en/flclash/proxies#proxy-chains).
4. Verify the rule and outbound on a new connection. Selecting the original Home ISP node does not select the chain.

## Verification and troubleshooting {#troubleshooting}

| Symptom | What to check |
| --- | --- |
| Missing entry or Home ISP | Retain both the entry line and ISP; check region/name conditions, plan permissions and sync results |
| Relay save rejected | Check node roles, WARP/external-relay conflicts and the error; ISP nodes excluded by default can only be final exits |
| Connection fails or slows down | Compare the entry alone, then check later segments; reduce unnecessary hops and resolve loops or underlying-proxy conflicts |
| Unexpected exit | Check whether a new connection to that destination matches the intended rule. Client records show the selected client chain or entry, but may not show every server-side internal relay hop |
| Session lost after a dynamic IP change | Reconnect and complete any verification or sign-in required by the destination; reconnecting does not guarantee session recovery |

An IP-check website must use the same intended route to provide a useful comparison. Its region or ASN classification does not prove another website uses that exit or guarantee streaming access or acceptance by a third-party platform.
