# Diagnose and fix DNS leaks {#dns-leaks-check-managed-dns-and-traffic-capture-first}

<span id="dns-泄漏-先检查托管配置和接管方式"></span>

The current maintained server implementation generates a FlClash for oixCloud profile that sends ordinary default DNS through DoH via the `Proxy` group. It keeps separate resolvers for proxy startup and direct destinations. Domain-specific policies can still take precedence. Older local profiles, custom subscriptions, scripts and DNS overrides may change this behavior; a Connected status alone does not verify it.

1. Select **Refresh nodes** on the account page (**Sync** on older builds), confirm the managed profile updated successfully, and select it.
2. Record and remove personal DNS override entries under **Tools → Advanced Configuration → DNS** while checking the managed settings. Turn off **Append System DNS** under **Tools → General** so ordinary upstream DNS does not also include system resolvers.
3. Confirm that `Proxy` ultimately selects a working proxy node, not `DIRECT`. Group names are case-sensitive; other subscriptions may not contain this group.
4. Enable **TUN** on desktop and confirm authorization and routes. On Android, authorize VPN access and ensure access control includes the test app. System HTTP / HTTPS proxy settings alone cannot guarantee capture of system DNS or every app.
5. Reopen the target app and use fresh test hostnames to check resolvers and outbounds. Inspect personal overrides and scripts if an updated profile still behaves unexpectedly.

<span id="按平台补充检查"></span>

## Platform checks

| Platform | Action and limits |
| --- | --- |
| macOS | Keep **Tools → Advanced Configuration → Network → Auto Set System DNS** enabled with TUN and verify that the system DNS change succeeded. Queries to a LAN router may bypass TUN; do not test only public resolver addresses. |
| Windows | Enable TUN and inspect multiple adapters, other VPNs and system DNS. Add the Strict route override in the network settings' TUN section when needed; see below. |
| Android | Enable **DNS hijacking** and disable **Allow apps to bypass VPN** under **Tools → Advanced Configuration → Network**, and include the target app in VPN access control; turn system **Private DNS** off while diagnosing.<br>Always-on VPN and blocking connections without VPN are separate Android settings, subject to OS support. |
| Linux | Check TUN automatic routes, the system resolver and competing network managers. Confirm queries enter the core, not merely that the local proxy port responds. |

Browser Secure DNS and app-owned DoH / DoT are not intercepted as ordinary port-53 DNS. Record and temporarily disable those separate settings when diagnosing. If you keep them, route their connections through the intended proxy and verify IPv4 and IPv6 separately. Disabling DNS IPv6 resolution only affects AAAA answers; it does not disable system IPv6.

<span id="windows-严格路由"></span>

## Strict routing on Windows

The current Windows / Linux interface offers this setting without a separate override script.

1. Open **Tools → Advanced Configuration → Network** and choose **Add override entry** in the **TUN** section.
2. Add **Strict route** and enable it, or check its value if already added.
3. Reapply the profile, confirm TUN is enabled, and inspect the effective configuration and DNS path. A custom profile's own TUN settings take precedence over app-level overrides, so check those too.

On Windows the setting suppresses DNS leaks from multi-adapter resolution and may affect software such as VirtualBox. Remove the added entry or restore its previous value and reapply if compatibility problems occur. It does not choose the DNS upstream's proxy and is not system protection after the client exits. With IPv6 disabled, strict routing also blocks this device's IPv6 connections. See the [mihomo TUN reference](https://wiki.metacubex.one/en/config/inbound/tun/#strict-route).

<span id="自定义-dns-时-必须同时确定出站"></span>

## Custom DNS also needs an outbound choice

`https://` and `tls://` indicate encrypted DNS transport. To send ordinary DNS through a proxy, choose its outbound explicitly: for example, the current managed profile uses `https://1.1.1.1/dns-query#Proxy`. The suffix requires an existing `Proxy` group that ultimately selects a proxy node.

`respect-rules: true` routes the DNS connection according to routing rules, which may still choose direct access. It is not a leak-prevention switch. Do not enable it blindly or resolve a proxy node through DNS that requires that same unresolved node to connect; that creates a dependency loop.

Also review `nameserver-policy`, `fallback`, `direct-nameserver` and `proxy-server-nameserver`. Domain policies can override default resolvers, fallback queries can send additional requests, and direct destinations and node startup have separate DNS needs. Changing only `nameserver` does not establish that all queries use the proxy. Preserve managed-node DNS policies. See the [mihomo DNS reference](https://wiki.metacubex.one/en/config/dns/).

<span id="怎样判断是否仍有泄漏"></span>

## Check whether queries still leak

A DNS test lists resolvers; a different country or IP from the node does not by itself establish a leak. Compare the queried hostname, routing rule and actual outbound. Local DNS for a direct destination may match the intended split routing, but sending an intended proxy destination to the local ISP resolver needs investigation.

Use fresh random test hostnames to avoid cache effects. Compare VPN / TUN capture, DNS overrides, app-owned DNS and IPv6 one at a time, checking outbounds in [connections and network diagnostics](/en/flclash/diagnostics). Where possible, capture traffic on your own physical adapter or router: check UDP / TCP port 53 and direct encrypted-DNS connections, then repeat after network changes and reconnections. One passing browser test does not prove protection for every app or during disconnection.
