---
description: HTTP/3 support, smart fallback, dedicated IPs and bulk settings, with subscription refresh and connection checks.
---

# HTTP/3 and smart fallback

HTTP/3 runs over QUIC (UDP). Here it carries the Hollow connection between your client and the node; destination websites do not need to support HTTP/3. It is off by default. Try **Smart fallback** on one regularly used node first. UDP traffic is forwarded as usual whichever option you choose.

## Scope {#scope}

Only Hollow connections in official clients that support this feature read the setting. AnyTLS connections and clients without this support are unaffected. Use the corresponding client from the [download center](https://oixcloud.com/client), and check your current version and actual connection protocol. The app's name alone does not prove HTTP/3 is active.

| Node entry on the page | Setting scope |
| --- | --- |
| Regular node | Matching backends of the same logical node are updated together. |
| Dedicated IP | Applies separately to the specific address for your account; other dedicated IPs on that node are unaffected. |
| Traffic routing temporarily unavailable | Cannot be changed; adding the node to a subscription manually does not remove the restriction. |
| Node set to [CDN](#cdn) | Official clients that support CDN use AnyTLS instead, so this setting is not used. The row shows a notice. |

Home ISP nodes excluded from default subscriptions also follow the [traffic routing restrictions](/en/account/nodes#isp-routing). Check the page for configurable entries.

## Enable and apply the setting {#enable}

<figure class="guide-figure">
  <a href="/illustrations/account-http3-en.svg?v=20261107-1" target="_blank" rel="noopener" aria-label="Set HTTP/3 and smart fallback">
    <img src="/illustrations/account-http3-en.svg?v=20261107-1" alt="Set HTTP/3 and smart fallback" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

1. Open **Traffic Routes → Protocols → [Hollow](https://oixcloud.com/user/http3)** in the user center. Search for the node name or dedicated IP address.
2. Choose **Smart fallback** in that row. For a dedicated IP, check the complete address in the row.
3. Your choice submits automatically. Wait for a successful save, then **refresh the subscription or managed profile in your client and wait for the update to finish**.
4. Select that node, close the target app's old connections and reconnect. Use the same website or app to check the result. Other devices sharing this account must also refresh their own profiles before adopting the setting.

Choosing another option also requires a client subscription refresh and new connections. The page shows the saved setting, not the connection your client is currently using.

## The three options and smart fallback {#fallback}

| Option | New connections |
| --- | --- |
| Off | Do not use HTTP/3; use a regular connection. |
| Smart fallback | Try HTTP/3 first; also try a regular connection if setup is slow and use whichever connects successfully first. |
| HTTP/3 only | Use HTTP/3 only; a failure cannot switch to a regular connection. |

A regular connection runs over TCP and forwards UDP traffic just the same. These options only decide how the client connects to the node; they do not affect UDP forwarding.

With smart fallback, the client pauses HTTP/3 retries after a failure and uses a regular connection during that period, then tries HTTP/3 again. A connection can therefore skip HTTP/3 even when **Smart fallback** is selected.

Smart fallback chooses only while establishing a connection. **It does not switch because a download is slow or migrate an established connection.** Check that UDP works reliably on your network before choosing **HTTP/3 only**.

## Bulk settings for multiple nodes {#bulk-settings}

The list has no pagination. Search by name or address and filter by **Enabled**, **Disabled** or another status.

1. Select individual nodes, or use the checkbox in the table header for every available entry matching the current search and filter, including rows below the visible screen. Changing the search or filter clears the selection.
2. In the bulk action menu in the table header, choose **Off**, **Smart fallback** or **HTTP/3 only**. Check the count on **Apply (N)**, then apply.
3. Unavailable entries and unchanged settings are skipped, so the applied count may be lower than the selected count. Each dedicated-IP row is handled separately.
4. Wait for the result, then refresh the client subscription and reconnect.

Entries are saved one at a time; a later failure does not undo successful changes. After a timeout or interruption, check the counts for confirmed saves, unconfirmed results and unattempted entries. Refresh the page before retrying entries that still need changes.

## Using WARP, IPv4 Only and relays {#other-settings}

HTTP/3 changes the client-to-node transport, WARP changes the node's route to websites, and [IPv4 Only](/en/account/unlock#ipv4-only) restricts the address family of destination connections. These settings can work together. HTTP/3 itself does not determine whether a website sees an IPv4 or IPv6 exit.

The two smart fallback controls have different effects: HTTP/3 falls back to a regular connection to the same node; [WARP fallback](/en/account/unlock#warp-ip-preference) uses the remote node's ordinary exit, which may change the IP or region seen by websites. Configure them separately.

This setting itself does not delete relay rules or change WARP or IPv4 Only settings. With an [internal relay](/en/account/relay), it still controls the client's connection to the entry node; it does not convert the entire relay path to HTTP/3. With client policy groups or proxy chains, check the node and configuration actually selected.

## Performance and recommended use {#performance}

HTTP/3 can reduce connection setup delays and limit packet loss on one stream from blocking other streams. It may feel smoother on high-latency or lossy paths, but it is not guaranteed to outperform a regular connection.

UDP path quality, UDP restrictions on provider, corporate or campus networks, and device processing overhead can cause timeouts, slower speeds or instability. Smart fallback lets connection setup also try a regular connection; it does not guarantee connectivity on every network.

Compare connection success, latency and actual transfers using the same network, node and destination. If slowdowns or instability persist, switch back to **Off**, refresh the subscription and reconnect before comparing again. Avoid changing WARP, egress preferences and client rules at the same time, so you can identify the cause.

## Use CDN for a node {#cdn}

Under **Traffic Routes → Protocols**, the [AnyTLS tab](https://oixcloud.com/user/anytls) lets you choose **Direct** or **CDN** per node. The default is Direct. Official clients use Hollow by default and switch to AnyTLS on nodes set to CDN; third-party clients connect directly over AnyTLS and are not affected. Only official clients that support this feature read the setting. After changing it, refresh the client subscription and establish new connections.

The page lists only nodes that can use CDN, so it can be empty. A node with an external relay does not use CDN even when selected; the row shows a notice.

## Troubleshooting {#troubleshooting}

| Symptom | What to check |
| --- | --- |
| Saved, but the client is not using HTTP/3 | Refresh the subscription and establish new connections. Check that this is a supported Hollow connection, that the node is not set to CDN, and that smart fallback has not selected a regular connection. |
| Connections fail with **HTTP/3 only** | Check UDP connectivity. Choose **Smart fallback** or **Off**, then refresh the subscription and retry. |
| One dedicated IP is unchanged | Match the complete address in the setting row to the address used by the client. Each address is saved separately. |
| A slow download does not switch | Fallback handles connection setup, not download speed. Switch back to **Off**, refresh the subscription and reconnect for a comparison. |
| A website supports HTTP/3, but the node transport is unclear | The website's own HTTP version and the client-to-node transport belong to separate connections; neither proves the other. |

If the issue persists, send a [support ticket](/en/help/support) with the client and version, network, node name or dedicated IP, the selected option, profile update time and exact error. Do not include passwords, Access Tokens or full subscription URLs.
