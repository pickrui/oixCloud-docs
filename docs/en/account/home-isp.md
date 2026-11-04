---
description: "Home ISP residential broadband node characteristics, subscription filtering, and setup steps using internal relay and client proxy chains"
---

# Home ISP user guide

Home ISP nodes provide genuine residential broadband exit IPs overseas. Because international residential broadband networks typically lack specialized transit optimizations toward certain regions like mainland China, pairing them with the website's internal relays or client proxy chains delivers both high stability and genuine residential exit IPs.

## Characteristics and use cases {#characteristics}

Home ISP is at the same tier as Edge and uses the same plan permissions, displayed separately in the [node list](https://oixcloud.com/user/node). Verify the nodes available to your account and their actual exits before connecting.

| Node category | Characteristics and use cases |
| --- | --- |
| Home ISP · Static IP | Normally uses a fixed exit IP, subject to the node's actual current exit; suitable for tasks requiring a long-term consistent IP address |
| Home ISP · Dynamic IP | The exit IP may change when broadband dial-up rotates; unsuitable for tasks requiring a long-term fixed address, but well suited for general browsing |

Static and dynamic categorize the node's broadband exit properties rather than an exclusive IP assigned to your account. Both categories are designed for international network environments, carry no commitment to availability or streaming unlocking, and offer no SLA for connections from mainland China.

Residential broadband exits originate from authentic residential ISP networks (such as AT&T, Verizon, Comcast, etc.). In third-party risk assessment databases, their IP type is classified as ISP / Residential rather than Data Center, making them ideal for:

- Accessing overseas services, e-commerce portals, or payment consoles with strict data-center IP restrictions
- Lowering risk triggers and verification challenges when signing in to international accounts or platforms
- Workflows requiring an authentic local residential network environment overseas

## Subscriptions and filters {#subscription}

Default inclusion is configured per node by the service, independently of the static or dynamic IP category. Home ISP nodes without default inclusion are not added automatically to regular subscriptions, Smart Selection, or fallback lists. For plans with CIA, IXP, Fusion or GIA, Smart Selection only includes the plan's default lines and leaves out Home ISP nodes, even those included by default.

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-filter-en.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="oixCloud · Keep only the ISP line in node filters">
    <img src="/illustrations/oixcloud-filter-en.svg?v=20261102-3" alt="oixCloud · Keep only the ISP line in node filters" width="1120" height="982" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

1. Open Node Filter in your client (`oixCloud → Node Filter` in oixCloud, or `Sidebar oixCloud → Node Filter` in FlClash), or edit the address in [Subscription Management](https://oixcloud.com/user/sub_manage) on the website.
2. In the Line section, click **ISP** to switch it to "Keep only". If you also need other lines, set them to "Keep only" as well.
3. Combine with region or name filters as needed. Confirm in the preview on the right or below that the intended residential broadband nodes are retained.
4. Save the filter and refresh your client configuration to load the Home ISP nodes into your node list.

ISP and Edge are separate lines; keeping only Edge does not include Home ISP nodes. Filtering solely by region or name will not automatically add excluded ISP nodes either.

::: warning Observe traffic routing restrictions
Home ISP nodes excluded from default subscriptions can be internal relay targets or exits, but **cannot serve as entries or intermediate hops**. External relay, HTTP/3, WARP, IPv4 Only, and streaming unlocking cannot be configured on them. Manually adding an ISP node to a subscription does not waive these restrictions; see [Traffic routing restrictions](/en/account/nodes#isp-routing).
:::

## Why use relays or proxy chains? {#why-relay-or-chain}

Overseas residential broadband access points are physically located in local residential areas without dedicated transit lines (such as Fusion Hong Kong/Japan direct lines) or mainland-optimized routes (such as GIA or CIA CMIN2). Connecting directly from mainland China to overseas residential broadband nodes frequently encounters high latency, jitter, packet loss, or unexpected connection interruptions over public international networks.

Relaying your traffic solves this bottleneck:

1. **Hop 1 (Entry)**: Choose a low-latency, dedicated line (Fusion series) or an optimized route (GIA / CIA / IXP) to travel swiftly across international boundaries.
2. **Hop 2 (Exit)**: Route via the target Home ISP node over high-capacity international backbones, ultimately accessing destination websites with an authentic residential IP.

| Approach | Features and advantages | Best suited for |
| --- | --- | --- |
| Website internal relay | Managed server-side forwarding; clients only connect to the entry node, functioning seamlessly across all clients, routers, and devices | Any client (including OpenClash, routers, and clients without native chaining support) |
| Client proxy chains | Chained locally on your device; flexible entry choices including policy groups and Best Available, with fine-grained local routing rules | oixCloud (Apple) and FlClash for oixCloud (cross-platform) |

## Method 1: Internal relay via the website {#internal-relay}

Website internal relays forward traffic between nodes within the service before egressing. Once configured, your client only connects to the designated entry node, and traffic automatically exits through the Home ISP node.

<figure class="guide-figure">
  <a href="/illustrations/account-relay-en.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="oixCloud · Arrange entry and residential exit in the path editor">
    <img src="/illustrations/account-relay-en.svg?v=20261102-3" alt="oixCloud · Arrange entry and residential exit in the path editor" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

1. Sign in to the website and open [Internal Relay](https://oixcloud.com/user/relay), then click "Add Path".
2. **Select the entry node**: For the first node, pick a high-speed entry optimized for your local network (such as a Fusion Hong Kong dedicated node or GIA optimized node).
3. **Add intermediate hops or choose the exit**: If multi-hop routing is needed, insert intermediate relay nodes (up to 17 nodes per path). Finally, select your target Home ISP node as the exit node.
4. **Verify node roles**: Ensure the Home ISP node is positioned strictly as the final hop (exit). Home ISP nodes excluded from default subscriptions cannot serve as entries or intermediate hops.
5. **Save the path**: Set the priority and click "Save Path". If shared segments with other entries are affected, confirm the prompt.
6. **Route specific domains (optional)**: If only certain traffic requires residential broadband, click "Add Single Rule" under Relay Rules, choose the entry origin and Home ISP target, and enter domain patterns such as `example.com` under "Forward only specified domains/IPs".
7. **Apply and connect in your client**: Update your subscription or managed profile, connect to the **entry node**, and verify that the egress IP on destination sites reflects the Home ISP broadband address.

No additional endpoint rules are required after the exit node. See [Relays and your own destinations](/en/account/relay) for management rules.

## Method 2: Client proxy chains {#proxy-chains}

Client proxy chains construct multi-hop paths locally on your device, forwarding requests from the first hop directly to the second hop to establish the exit connection.

### oixCloud proxy chains {#oixcloud-chain}

Applicable to iPhone, iPad, Mac, and synced Apple TV devices.

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-chains-en.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="oixCloud · Create a residential broadband proxy chain">
    <img src="/illustrations/oixcloud-chains-en.svg?v=20261102-3" alt="oixCloud · Create a residential broadband proxy chain" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>Simulated interface · Fictional data · Click to enlarge</figcaption>
</figure>

1. Ensure ISP is set to "Keep only" in `oixCloud → Node Filter` and the profile is refreshed so the Home ISP node appears in your list.
2. Go to the "Proxies" tab in the bottom bar, switch to the Proxy Chains section, and tap "Add" in the top right.
3. Name the chain, such as `ISP-Chain`.
4. **Add the first hop (Entry)**: Tap "Add Proxy" and choose a high-performance node or the "Best Available" policy group (policy groups are supported at any hop).
5. **Add the second hop (Exit)**: Tap "Add Proxy" again and select the target Home ISP node.
6. Tap the checkmark in the top right to save the proxy chain.
7. **Use the proxy chain**:
   - Global or manual mode: Select the proxy chain directly in the Home proxy card.
   - Rule mode: Go to `Proxies → Policies → Routing Rules`, add a new rule with "Domain Suffix", enter the target domain, and set the route target to the proxy chain.

For details on group interactions and derived paths, see [oixCloud policy groups and proxy chains](/en/oixcloud/policies#proxy-chains).

### FlClash for oixCloud proxy chains {#flclash-chain}

Applicable to Windows, Android, macOS, and Linux.

<figure class="guide-figure">
  <a href="/illustrations/flclash-chains-en.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Edit residential broadband chain order">
    <img src="/illustrations/flclash-chains-en.svg?v=20261102-3" alt="FlClash for oixCloud · Edit residential broadband chain order" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Simulated interface · Fictional data · Click to enlarge</figcaption>
</figure>

1. Ensure the ISP line is preserved under `Sidebar oixCloud → Node Filter` and configuration sync is complete.
2. Click "Profiles" in the sidebar, click the action menu (`⋮`) on your active profile card, and select "Proxy Chains".
3. Click "Add" in the top right and enter a distinct name (such as `Home-ISP-Chain`; do not reuse existing node or policy group names, and avoid commas).
4. **Arrange the forwarding order**: Under "Available proxies and policy groups", click `＋` on the items to add them. Drag handles to ensure the first hop is an entry dedicated node or group and the final hop is the Home ISP node.
5. Click the top-right checkmark to save and enable the chain, return to Profiles, and click "Apply".
6. **Use the proxy chain**:
   - Once applied, FlClash generates a policy group named after the chain. Select it directly in the "Proxies" list.
   - For selective routing, edit your personal rules under Overrides and direct target traffic to the chain name.

For detailed chain settings, see [FlClash nodes, groups and chains](/en/flclash/proxies#proxy-chains).

## Verification and troubleshooting {#troubleshooting}

After configuration, verify your connection and exit attributes:

1. **Verify exit IP attributes**: Open an IP check service in your browser to verify the displayed exit IP and geographic location, confirming the ASN organization is a residential broadband provider.
2. **Inspect client connection records**:
   - oixCloud: Tap the target entry in `Activity → Requests` to confirm the routing decision points to the proxy chain or internal relay.
   - FlClash: Inspect active connection details in "Connections" to confirm the multi-hop path from entry to Home ISP exit.
3. **Common troubleshooting steps**:
   - **Home ISP missing from the list**: Check whether Node Filter has "ISP" set to "Keep only" and whether the profile has been refreshed. Restoring default filters removes non-default ISP nodes; on plans with CIA, IXP, Fusion or GIA, Smart Selection then contains no ISP nodes.
   - **Internal relay rejected on save**: Verify that the Home ISP node is placed strictly as the exit hop. Excluded ISP nodes cannot act as entries or intermediate hops.
   - **Chain connection failures**: Test the entry node independently to ensure network reachability. Check each hop in the chain, ensuring no circular dependencies or conflicting underlying proxy settings exist.
   - **Dynamic IP rotations**: Dynamic residential broadband IPs change periodically. If stateful third-party sessions disconnect, disconnect and reconnect in your client to establish a fresh connection.
