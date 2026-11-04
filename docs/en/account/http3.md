---
description: HTTP/3 support, smart fallback, dedicated IPs and bulk settings, with subscription refresh and connection checks.
---

# HTTP/3 and smart fallback

HTTP/3 runs over QUIC (UDP). Here it carries the Hollow connection between your client and the node; destination websites do not need to support HTTP/3. TCP is the default. Try HTTP/3 on one regularly used node first, with smart fallback enabled.

## Scope {#scope}

Only Hollow connections in official clients that support this feature read the setting. AnyTLS connections and clients without this support are unaffected. Use the corresponding client from the [download center](https://oixcloud.com/client), and check your current version and actual connection protocol. The app's name alone does not prove HTTP/3 is active.

| Node entry on the page | Setting scope |
| --- | --- |
| Regular node | Matching backends of the same logical node are updated together. |
| Dedicated IP | Applies separately to the specific address for your account; other dedicated IPs on that node are unaffected. |
| Traffic routing temporarily unavailable | Cannot be changed; adding the node to a subscription manually does not remove the restriction. |

Home ISP nodes excluded from default subscriptions also follow the [traffic routing restrictions](/en/account/nodes#isp-routing). Check the page for configurable entries.

## Enable and apply the setting {#enable}

<figure class="guide-figure">
  <a href="/illustrations/account-http3-en.svg?v=20261105-2" target="_blank" rel="noopener" aria-label="Set HTTP/3 and smart fallback">
    <img src="/illustrations/account-http3-en.svg?v=20261105-2" alt="Set HTTP/3 and smart fallback" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

1. Open **Traffic Routes → [HTTP/3](https://oixcloud.com/user/http3)** in the user center. Search for the node name or dedicated IP address.
2. Turn on **Enable HTTP/3** in that row and initially leave **Smart fallback** on. For a dedicated IP, check the complete address in the row.
3. Changes submit automatically. Wait for a successful save, then **refresh the subscription or managed profile in your client and wait for the update to finish**.
4. Select that node, close the target app's old connections and reconnect. Use the same website or app to check the result. Other devices sharing this account must also refresh their own profiles before adopting the setting.

Disabling HTTP/3 or changing smart fallback also requires a client subscription refresh and new connections. The page shows the saved transport policy, not the transport your client is currently using.

## Three transport states and smart fallback {#fallback}

| Enable HTTP/3 | Smart fallback | New connections |
| --- | --- | --- |
| Off | Inactive; its switch is unavailable | Use TCP. |
| On | On | Try HTTP/3 first; also try TCP if setup is slow and use whichever connects successfully first. |
| On | Off | Use HTTP/3 only; a failure cannot switch to TCP. |

With smart fallback enabled, the client pauses HTTP/3 retries after a failure and uses TCP during that period, then tries HTTP/3 again. The page can therefore show **HTTP/3 with smart fallback** while an actual connection uses TCP.

Smart fallback selects a transport only while establishing a connection. **It does not switch because a download is slow or migrate an established connection to another transport.** Check that UDP works reliably on your network before disabling fallback.

## Bulk settings for multiple nodes {#bulk-settings}

The list has no pagination. Search by name or address and filter by **Enabled**, **Disabled** or another status. On a phone, swipe the category bar horizontally.

1. Select individual nodes, or use **Select all** for every available entry matching the current search and filter, including rows below the visible screen. Changing the search or filter clears the selection.
2. Choose **Enable selected**, **Disable selected**, **Enable smart fallback** or **Disable smart fallback**. Check **Apply to N nodes**, then apply.
3. Fallback changes only apply to nodes with HTTP/3 already enabled. Unavailable entries and unchanged settings are skipped, so the applied count may be lower than the selected count. Each dedicated-IP row is handled separately.
4. Wait for the result, then refresh the client subscription and reconnect.

Entries are saved one at a time; a later failure does not undo successful changes. After a timeout or interruption, check the counts for confirmed saves, unconfirmed results and unattempted entries. Refresh the page before retrying entries that still need changes.

## Using WARP, IPv4 Only and relays {#other-settings}

HTTP/3 changes the client-to-node transport, WARP changes the node's route to websites, and [IPv4 Only](/en/account/unlock#ipv4-only) restricts the address family of destination connections. These settings can work together. HTTP/3 itself does not determine whether a website sees an IPv4 or IPv6 exit.

The two smart fallback controls have different effects: HTTP/3 falls back to TCP transport to the same node; [WARP fallback](/en/account/unlock#warp-ip-preference) uses the remote node's ordinary exit, which may change the IP or region seen by websites. Configure them separately.

The HTTP/3 switch itself does not delete relay rules or change WARP or IPv4 Only settings. With an [internal relay](/en/account/relay), it still controls the client's connection to the entry node; it does not convert the entire relay path to HTTP/3. With client policy groups or proxy chains, check the node and configuration actually selected.

## Performance and recommended use {#performance}

HTTP/3 can reduce connection setup delays and limit packet loss on one stream from blocking other streams. It may feel smoother on high-latency or lossy paths, but it is not guaranteed to outperform TCP.

UDP path quality, UDP restrictions on provider, corporate or campus networks, and device processing overhead can cause timeouts, slower speeds or instability. Smart fallback lets connection setup also try TCP; it does not guarantee connectivity on every network.

Compare connection success, latency and actual transfers using the same network, node and destination. If slowdowns or instability persist, disable HTTP/3, refresh the subscription and reconnect before comparing again. Avoid changing WARP, egress preferences and client rules at the same time, so you can identify the cause.

## Troubleshooting {#troubleshooting}

| Symptom | What to check |
| --- | --- |
| Saved, but the client still uses TCP | Refresh the subscription and establish new connections. Check that this is a supported Hollow connection and that smart fallback has not selected TCP. |
| Connections fail with smart fallback off | Check UDP connectivity. Re-enable fallback or disable HTTP/3, then refresh the subscription and retry. |
| One dedicated IP is unchanged | Match the complete address in the setting row to the address used by the client. Each address is saved separately. |
| A slow download does not switch to TCP | Fallback handles connection setup, not download speed. Disable HTTP/3, refresh the subscription and reconnect for a comparison. |
| A website supports HTTP/3, but the node transport is unclear | The website's own HTTP version and the client-to-node transport belong to separate connections; neither proves the other. |

If the issue persists, send a [support ticket](/en/help/support) with the client and version, network, node name or dedicated IP, both switch states, profile update time and exact error. Do not include passwords, Access Tokens or full subscription URLs.
