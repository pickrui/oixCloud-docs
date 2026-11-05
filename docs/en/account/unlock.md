# IPv4 Only, WARP and streaming regions

Use **Traffic Routes** in the user center to adjust IPv4 Only, WARP and streaming regions per node. Identify the node you actually use in the [node list](https://oixcloud.com/user/node), then open the corresponding category. These settings take effect on the server; account-wide switches have separate scopes:

| Setting | Scope | Default |
| --- | --- | --- |
| IPv4 Only | Website connections handled by the selected supported node | Off |
| WARP and streaming regions | The selected supported node and service | Check that node's page |
| Block STUN connections | All devices using the account on supported nodes | On |
| YouTube background playback compatibility | All nodes for the account | Off |

Home ISP nodes excluded from default subscriptions cannot be selected for new or modified IPv4 Only, WARP or streaming-unlock settings, even after explicitly adding them to a subscription. Existing settings remain active; see [traffic routing restrictions](/en/account/nodes#isp-routing).

## Use only IPv4 for website exits {#ipv4-only}

IPv4 Only makes the selected node connect to websites using IPv4 only. Use it when you need an IPv4 exit or have trouble with the node's IPv6 exit.

<figure class="guide-figure">
  <a href="/illustrations/account-ipv4-only-en.svg?v=20261105-1" target="_blank" rel="noopener" aria-label="Find nodes and enable IPv4 Only in bulk">
    <img src="/illustrations/account-ipv4-only-en.svg?v=20261105-1" alt="Find nodes and enable IPv4 Only in bulk" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

1. Open [IPv4 Only](https://oixcloud.com/user/ipv4-only), search for the node name and optionally filter by **Disabled**.
2. Turn on **IPv4 Only** in that row and wait for the automatic save result. For multiple nodes, follow [bulk operations](#bulk-settings) below.
3. Wait for node synchronization, close the target app's old connections, then establish a new connection through that node and check the exit IP seen by the website. **No subscription refresh is required.**

This feature preserves relay rules. When an internal relay path passes through a node with IPv4 Only enabled, the restriction continues to apply to that path's final destination connections. Your connection to the node, internal relay links and the WARP tunnel itself can still use IPv6. [HTTP/3](/en/account/http3) controls the client-to-node transport and does not determine the address family seen by websites.

IPv6-only websites and literal IPv6 destinations become unreachable. A client that resolves a domain to an IPv6 address before submitting it may also encounter this failure. The restriction covers destination connections handled by the node; it cannot control the final exits of external forwarding servers or further third-party proxies. Dedicated IP nodes are outside this setting's scope; check the page for configurable nodes.

IPv4 Only does not guarantee higher speeds: performance depends on the IPv4 route, and some streaming-unlock results may change. Compare the same destination on one node first. If problems appear, turn the switch off, wait for synchronization and reconnect.

## Enable WARP for a node

<figure class="guide-figure">
  <a href="/illustrations/account-warp-en.svg?v=20261105-1" target="_blank" rel="noopener" aria-label="Check WARP fallback and the IPv4 Only override">
    <img src="/illustrations/account-warp-en.svg?v=20261105-1" alt="Check WARP fallback and the IPv4 Only override" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

1. Open [WARP settings](https://oixcloud.com/user/warp) and locate the node.
2. Record relays you still need before enabling WARP: it removes internal relays using this logical node as source or destination, and external relays using it as their source.
3. Toggle WARP. If a relay-cleanup notice appears, review its effect before confirming. Changes submit automatically; wait for the save result, then adjust **Smart Fallback** and **Egress preference** as needed and check the results.
4. If relays were removed, refresh the client profile. Wait for node synchronization, close old connections and reconnect through that node, then check the target website.

Disabling WARP does not restore deleted relays. WARP may change the exit IP and region, and its additional forwarding path may increase latency or reduce speed. It does not guarantee faster access or successful streaming unlock.

| Setting | When WARP is unavailable |
| --- | --- |
| Smart fallback on | Uses the remote node's ordinary outbound; its IP or region may change. |
| Smart fallback off | Rejects the connection instead of switching to the ordinary outbound. |

This does not switch your device to Direct mode. Consider the fallback behavior if you require a particular exit.

### WARP egress preference and IPv4 Only {#warp-ip-preference}

The IPv4 / IPv6 choice under **Egress preference** is a preference: a destination with only the other address family can still use it. Choose IPv4 Only when the exit must strictly use IPv4.

| IPv4 Only | WARP | Website connection |
| --- | --- | --- |
| Off | Off | Uses the node's default egress policy. |
| Off | On | Prefers IPv4 or IPv6 according to the WARP setting. |
| On | Off | The node uses IPv4 only. |
| On | On | Both WARP and any permitted smart fallback use IPv4 only. |

With IPv4 Only enabled, the WARP row's egress preference switch becomes unavailable and is replaced by an **IPv4 Only** management link. **The saved WARP preference is preserved and resumes when IPv4 Only is turned off.** For example, a previous IPv6 choice returns to Prefer IPv6. This does not disable WARP or smart fallback, or enable WARP if it was off.

If you changed IPv4 Only on another page, refresh the open WARP page before checking its state. Bulk changes to the WARP egress preference also skip nodes with IPv4 Only enabled.

## Find and update multiple nodes {#bulk-settings}

Traffic route categories show their lists without pagination; on a phone, swipe the category bar horizontally. HTTP/3, WARP, IPv4 Only and streaming unlock provide node search. The first three also offer status filters and bulk settings; streaming unlock is configured separately for each node and service. Internal and external relay [bulk deletion](/en/account/relay#bulk-delete) has its own scope.

1. Search in the relevant category and optionally filter by **Enabled**, **Disabled** or another status. WARP can also filter for IPv4 Only nodes.
2. Select individual nodes or use **Select all** for **every available node matching the current search and filter**, including rows below the visible screen. Changing the search or filter clears the selection.
3. Choose a bulk action, check **Apply to N nodes**, then apply it. Unavailable nodes and nodes already at the requested value are skipped, so the applied count may be lower than the selected count.
4. Wait for the save results. Before confirming a WARP relay-cleanup notice, review which relays it affects. Smart fallback changes only apply to nodes with the corresponding feature enabled; WARP preference changes also skip IPv4 Only nodes.

Nodes are saved one at a time. A later failure does not undo completed changes. If a timeout or similar interruption stops the batch, the page distinguishes confirmed saves, unconfirmed results and unattempted nodes. Refresh to check their state before retrying the nodes that still need changes.

<span id="select-regions-by-streaming-service"></span>

## Select regions by streaming service {#streaming-regions}

This public-beta feature currently supports selected Hong Kong IXP, Fusion-family and GIA nodes. Available nodes depend on account access; the current page determines which services and regions can be chosen. Dedicated IPs are outside this setting's scope. An absent option cannot be enabled by manually entering another region.

<figure class="guide-figure">
  <a href="/illustrations/account-media-unlock-en.svg?v=20261105-2" target="_blank" rel="noopener" aria-label="Choose streaming regions per node and service">
    <img src="/illustrations/account-media-unlock-en.svg?v=20261105-2" alt="Choose streaming regions per node and service" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

1. Open [Streaming unlock](https://oixcloud.com/user/media-unlock) and search for the node you actually use. The list has no pagination. Search only locates nodes and does not change settings; this page has no bulk region-setting action.
2. Find the service under that node and choose a region from its dropdown. Services are independent, so leave others unchanged. The choice applies across the backends of that logical node.
3. Changes save automatically. Wait for **Saved** beside the service name; there is no separate save button. After an error or timeout, refresh to check the result rather than treating the displayed dropdown value as proof of a server save.
4. Wait for node synchronization, close the service's old connections, then reconnect through the modified node and verify the library and actual playback. A region-only change **does not require a subscription refresh**. If you also changed relays or HTTP/3, follow those guides to update the client profile.

To restore defaults, select **Follow node default** for that service. This removes that node/service's custom region without clearing other services or disabling all unlock behavior. If the field says **Settings differ; please select a region again**, reselect the desired region or default and wait for the save to make the node's settings consistent.

A chosen region does not guarantee that every request, item of content or unrelated website exits there. It does not replace the platform's account, membership or content requirements. A generic IP-check website may use a different exit from the streaming service; verify the intended service's library and playback.

### WARP, relays and IPv4 Only {#streaming-routing}

- **WARP takes precedence.** When enabled on the node, it handles connections instead of applying the saved streaming region. Even WARP's fallback to ordinary egress does not then apply this streaming-region setting. The region choice is retained; turn WARP off, wait for synchronization and retest if you want to use it.
- **Internal relays forward first.** The node that finally handles the destination connection and its available unlock rules determine the region. Saving a region only at the entry does not ensure the exit uses it. Check the [internal relay path](/en/account/relay) first.
- **IPv4 Only restricts the address family.** It does not choose a region for you. IPv6-only targets may fail and unlock results may change; see [IPv4 Only](#ipv4-only).
- **Unlock-outbound failures can change the region.** A missing or failed unlock outbound can fall back to the node's ordinary egress. This page has no switch that disconnects unless the chosen region is retained; a saved region is not a fixed-region guarantee.

The additional unlock route can increase latency or affect throughput. Compare the default and chosen region on one node and service before changing others. If playback fails, avoid changing WARP, relays and several regions simultaneously, so you can identify which change affects the result.

## Calls, remote access and STUN {#stun}

Check **Block STUN connections** on the [Streaming unlock](https://oixcloud.com/user/media-unlock) page. It defaults to on. If voice/video calls, remote access or device connectivity fail, record its original value and try turning it off.

After saving, wait for node synchronization, close old connections in the target app and retest. The switch affects all devices using this account on supported nodes, not just the current browser or client. Restore it if there is no improvement, then inspect client UDP settings, rules and traffic capture.

## YouTube background playback compatibility {#youtube-playback}

Enable **YouTube background playback compatibility** on the [Streaming unlock](https://oixcloud.com/user/media-unlock) page if you have a YouTube membership and need this behavior. It defaults to off and may reduce performance when enabled; leave it off if unnecessary.

After saving, wait for node synchronization and reconnect before testing background playback. This is an account-wide setting for all nodes. It does not replace YouTube membership and is separate from streaming region selection.

## If the result is unexpected

- Confirm you selected the modified node and a routing rule did not send the service elsewhere.
- Check whether IPv4 Only is enabled, whether the destination is IPv6-only, and whether WARP fell back. Streaming settings must also support the service and node.
- Close the target app's old connections before retrying. A connected client or successful latency test alone does not prove streaming access.
- Include the node, service, selected region, error time and message when contacting support, without passwords or full subscription URLs.
