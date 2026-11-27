# IPv4 Only, WARP and streaming regions

Use **Traffic Routes** in the user center to adjust IPv4 Only, WARP and streaming regions per node. Identify the node you actually use in the [node list](https://oixcloud.com/user/node), then open the corresponding category. The [overview page](https://oixcloud.com/user/route) lists nodes with custom settings and holds the account-wide switches. These settings take effect on the server; account-wide switches have separate scopes:

| Setting | Scope | Default |
| --- | --- | --- |
| IPv4 Only | Website connections handled by the selected supported node | Off |
| WARP, [streaming regions](/en/account/streaming) | The selected supported node and service | Check that node's page |
| Block STUN connections | All devices using the account on supported nodes | On |
| YouTube background playback compatibility | All nodes for the account | Off |

For IPv4 Only, WARP or streaming unlock, choose an available node on the feature page. An administrator can restrict a node or a backend in its group. See [traffic routing restrictions](/en/account/home-isp#isp-routing).

## Use only IPv4 for website exits {#ipv4-only}

IPv4 Only makes the selected node connect to websites using IPv4 only. Use it when you need an IPv4 exit or have trouble with the node's IPv6 exit.

<figure class="guide-figure">
  <a href="/illustrations/account-ipv4-only-en.svg?v=20261107-1" target="_blank" rel="noopener" aria-label="Find nodes and enable IPv4 Only in bulk">
    <img src="/illustrations/account-ipv4-only-en.svg?v=20261107-1" alt="Find nodes and enable IPv4 Only in bulk" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

1. Open [IPv4 Only](https://oixcloud.com/user/ipv4-only), search for the node name and optionally filter by **Disabled**.
2. Turn on **IPv4 Only** in that row and wait for the automatic save result. For multiple nodes, follow [bulk operations](#bulk-settings) below.
3. Wait for node synchronization, close the target app's old connections, then establish a new connection through that node and check the exit IP seen by the website. **No subscription refresh is required.**

This feature preserves relay rules. When an internal relay path passes through a node with IPv4 Only enabled, the restriction continues to apply to that path's final destination connections. Your connection to the node, internal relay links and the WARP tunnel itself can still use IPv6. [HTTP/3](/en/account/http3) controls the client-to-node transport and does not determine the address family seen by websites.

IPv6-only websites and literal IPv6 destinations become unreachable. A client that resolves a domain to an IPv6 address before submitting it may also encounter this failure. The restriction covers destination connections handled by the node; it cannot control the final exits of external forwarding servers or further third-party proxies. Dedicated IP nodes are outside this setting's scope; check the page for configurable nodes.

IPv4 Only does not guarantee higher speeds: performance depends on the IPv4 route, and some streaming-unlock results may change. Compare the same destination on one node first. If problems appear, turn the switch off, wait for synchronization and reconnect.

## Enable WARP for a node

<figure class="guide-figure">
  <a href="/illustrations/account-warp-en.svg?v=20261107-1" target="_blank" rel="noopener" aria-label="Check WARP fallback and the IPv4 Only override">
    <img src="/illustrations/account-warp-en.svg?v=20261107-1" alt="Check WARP fallback and the IPv4 Only override" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

1. Open [WARP](https://oixcloud.com/user/warp) and locate the node.
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

With IPv4 Only enabled, the WARP row's egress preference is replaced by an **IPv4 Only** management link. **The saved WARP preference is preserved and resumes when IPv4 Only is turned off.** For example, a previous IPv6 choice returns to Prefer IPv6. This does not disable WARP or smart fallback, or enable WARP if it was off.

If you changed IPv4 Only on another page, refresh the open WARP page before checking its state. Bulk changes to the WARP egress preference also skip nodes with IPv4 Only enabled.

## Find and update multiple nodes {#bulk-settings}

Traffic route categories show their lists without pagination. HTTP/3, WARP and IPv4 Only offer node search, status filters and bulk settings. Streaming regions are set per node and service. You can also filter nodes and restore their defaults in bulk. Internal and external relay [bulk deletion](/en/account/relay#bulk-delete) has its own scope.

1. Search in the relevant category and optionally filter by **Enabled**, **Disabled** or another status.
2. Select individual nodes or use the checkbox in the table header for **every available node matching the current search and filter**, including rows below the visible screen. Changing the search or filter clears the selection.
3. Choose a bulk action, check the count on **Apply (N)**, then apply it. Unavailable nodes and nodes already at the requested value are skipped, so the applied count may be lower than the selected count.
4. Wait for the save results. Before confirming a WARP relay-cleanup notice, review which relays it affects. WARP smart fallback changes only apply to nodes with WARP enabled; preference changes also skip IPv4 Only nodes.

The panel checks every submitted node before saving the batch. If any node cannot be changed, the entire batch is rejected. If the request times out without a result, refresh the page to check the saved settings before retrying.

## Calls, remote access and STUN {#stun}

Check **Block STUN connections** under **Account-wide settings** on the [Traffic Routes overview](https://oixcloud.com/user/route). It defaults to on. If voice/video calls, remote access or device connectivity fail, record its original value and try turning it off.

After saving, wait for node synchronization, close old connections in the target app and retest. The switch affects all devices using this account on supported nodes, not just the current browser or client. Restore it if there is no improvement, then inspect client UDP settings, rules and traffic capture.

## If the result is unexpected

- Confirm you selected the modified node and a routing rule did not send the service elsewhere.
- Check whether IPv4 Only is enabled, whether the destination is IPv6-only, and whether WARP fell back. Streaming settings must also support the service and node.
- Close the target app's old connections before retrying. A connected client or successful latency test alone does not prove streaming access.
- Include the node, service, selected region, error time and message when contacting support, without passwords or full subscription URLs.
