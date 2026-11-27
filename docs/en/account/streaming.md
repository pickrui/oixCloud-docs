# Streaming regions and YouTube background playback {#streaming-regions}

<span id="按流媒体服务选择地区"></span><span id="select-regions-by-streaming-service"></span>

This public-beta feature currently supports selected Hong Kong IXP, Fusion-family and GIA nodes. Available nodes depend on account access; the current page determines which services and regions can be chosen. Dedicated IPs are outside this setting's scope. An absent option cannot be enabled by manually entering another region.

<figure class="guide-figure">
  <a href="/illustrations/account-media-unlock-en.svg?v=20261107-1" target="_blank" rel="noopener" aria-label="Choose streaming regions per node and service">
    <img src="/illustrations/account-media-unlock-en.svg?v=20261107-1" alt="Choose streaming regions per node and service" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

1. Open [Streaming unlock](https://oixcloud.com/user/media-unlock). Search for a node or filter for custom settings, node defaults or unavailable nodes. To clear all custom regions on several nodes, select them and restore their defaults in bulk. To change just one service, follow the steps below.
2. Find the service under that node and choose a region from its dropdown. Services are independent, so leave others unchanged. The choice applies across the backends of that logical node.
3. Changes save automatically. Wait for **Saved** below the dropdown; there is no separate save button. After an error or timeout, refresh to check the result rather than treating the displayed dropdown value as proof of a server save.
4. Wait for node synchronization, close the service's old connections, then reconnect through the modified node and verify the library and actual playback. A region-only change **does not require a subscription refresh**. If you also changed relays or HTTP/3, follow those guides to update the client profile.

To restore defaults, select **Follow node default** for that service. This removes that node/service's custom region without clearing other services or disabling all unlock behavior. If the field says **Settings differ; please select a region again**, reselect the desired region or default and wait for the save to make the node's settings consistent.

A chosen region does not guarantee that every request, item of content or unrelated website exits there. It does not replace the platform's account, membership or content requirements. A generic IP-check website may use a different exit from the streaming service; verify the intended service's library and playback.

## WARP, relays and IPv4 Only {#streaming-routing}

- **WARP takes precedence.** When enabled on the node, it handles connections instead of applying the saved streaming region. Even WARP's fallback to ordinary egress does not then apply this streaming-region setting. The region choice is retained; turn WARP off, wait for synchronization and retest if you want to use it.
- **Internal relays forward first.** The node that finally handles the destination connection and its available unlock rules determine the region. Saving a region only at the entry does not ensure the exit uses it. Check the [internal relay path](/en/account/relay) first.
- **IPv4 Only restricts the address family.** It does not choose a region for you. IPv6-only targets may fail and unlock results may change; see [IPv4 Only](/en/account/unlock#ipv4-only).
- **Unlock-outbound failures can change the region.** A missing or failed unlock outbound can fall back to the node's ordinary egress. This page has no switch that disconnects unless the chosen region is retained; a saved region is not a fixed-region guarantee.

The additional unlock route can increase latency or affect throughput. Compare the default and chosen region on one node and service before changing others. If playback fails, avoid changing WARP, relays and several regions simultaneously, so you can identify which change affects the result.

## YouTube background playback compatibility {#youtube-playback}

Enable **YouTube background playback compatibility** under **Account-wide settings** on the [Traffic Routes overview](https://oixcloud.com/user/route) if you have a YouTube membership and need this behavior. It defaults to off and may reduce performance when enabled; leave it off if unnecessary.

After saving, wait for node synchronization and reconnect before testing background playback. This is an account-wide setting for all nodes. It does not replace YouTube membership and is separate from streaming region selection.
