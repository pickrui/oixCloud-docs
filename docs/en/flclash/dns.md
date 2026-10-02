---
description: "DNS overrides and network settings \u2014 setup, practical steps and troubleshooting"
---

# DNS overrides and network settings

## Begin with default DNS

<figure class="guide-figure">
  <a href="/illustrations/flclash-dns-zh.svg?v=20260929-3" target="_blank" rel="noopener" aria-label="Configure DNS overrides">
    <img src="/illustrations/flclash-dns-zh.svg?v=20260929-3" alt="Configure DNS overrides" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

Open **Tools → Advanced Configuration → DNS**. When Override DNS is enabled, these settings replace the profile's DNS options. Editing fields without enabling the override may leave the original profile in control.

1. Record the current profile and override state.
2. Change only the setting being tested, using a reachable resolver.
3. Reapply the profile and test the same domain.
4. Restore the original value if it does not help, then investigate nodes or rules.

## Fake-IP and real addresses

DNS mode affects domain identification and routing. Some LAN services or apps need compatible handling. Adjust only confirmed exceptions rather than excluding every domain.

## Ports and DNS interception

Check the mixed port under **Tools → Basic configuration → Port**; TUN options are under **Tools → Advanced Configuration → Network**. If a port is occupied, choose an unused one and update apps with manually configured proxy ports.

DNS interception, appending system DNS and changing system DNS are different operations. For company domains, confirm resolver reachability and routing; switching to public DNS may not help.

## Managed-node lookups

Check system time, client version, profile and networking. Windows/macOS diagnostics distinguish system, core and managed-node DNS. One failed answer does not by itself prove an invalid token.

## Identify which field you need

| Field or switch | Role |
| --- | --- |
| Nameservers | Resolve ordinary destination domains |
| Proxy nameservers | Resolve proxy servers' own hostnames |
| Respect rules | Routes DNS connections according to rules; avoid circular DNS/proxy dependencies |
| Override DNS | Determines whether these client options replace the profile's DNS settings |

For failed node-hostname resolution, inspect proxy nameservers first. For internal company domains, check internal DNS and network reachability. Repeatedly switching fake-IP and real-address modes is not a substitute for identifying the failing stage.

Record original values and test the same domain through the same node. With TUN active, a diagnostic “system path” can still pass through TUN; interpret comparisons alongside current capture settings.

## DNS leaks: check managed DNS and traffic capture first

The current maintained server implementation generates a FlClash for oixCloud profile that sends ordinary default DNS through DoH via the `Proxy` group. It keeps separate resolvers for proxy startup and direct destinations. Domain-specific policies can still take precedence. Older local profiles, custom subscriptions, scripts and DNS overrides may change this behavior; a Connected status alone does not verify it.

1. Use **Sync** on the account page, confirm the managed profile updated successfully, and select it.
2. Leave **Tools → Advanced Configuration → DNS → Override DNS** off while checking the managed settings. Turn off **Append System DNS** under **Tools → Basic configuration** so ordinary upstream DNS does not also include system resolvers.
3. Confirm that `Proxy` ultimately selects a working proxy node, not `DIRECT`. Group names are case-sensitive; other subscriptions may not contain this group.
4. Enable **TUN** on desktop and confirm authorization and routes. On Android, authorize VPN access and ensure access control includes the test app. System HTTP / HTTPS proxy settings alone cannot guarantee capture of system DNS or every app.
5. Reopen the target app and use fresh test hostnames to check resolvers and outbounds. Inspect personal overrides and scripts if an updated profile still behaves unexpectedly.

### Platform checks

| Platform | Action and limits |
| --- | --- |
| macOS | Keep **Tools → Advanced Configuration → Network → Auto Set System DNS** enabled with TUN and verify that the system DNS change succeeded. Queries to a LAN router may bypass TUN; do not test only public resolver addresses. |
| Windows | Enable TUN and inspect multiple adapters, other VPNs and system DNS. For strict routing, a trusted override script can set `tun.strict-route: true`; see below. |
| Android | Enable **DNS Hijacking** and disable **Allow Bypass** under **Tools → Advanced Configuration → Network**; include the target app in VPN access control. Turn system **Private DNS** off while diagnosing. Always-on VPN and blocking connections without VPN are separate Android settings, subject to OS support. |
| Linux | Check TUN automatic routes, the system resolver and competing network managers. Confirm queries enter the core, not merely that the local proxy port responds. |

Browser Secure DNS and app-owned DoH / DoT are not intercepted as ordinary port-53 DNS. Record and temporarily disable those separate settings when diagnosing. If you keep them, route their connections through the intended proxy and verify IPv4 and IPv6 separately. Disabling DNS IPv6 resolution only affects AAAA answers; it does not disable system IPv6.

### Strict routing on Windows

The current interface has no separate Strict Route switch. Users familiar with configuration scripts can add these lines inside their existing `main(config)` under **Tools → Advanced Configuration → Script**, preserving existing logic and returning `config`:

```js
config.tun = config.tun || {};
config.tun['strict-route'] = true;
```

This is not a complete script and does not enable TUN for you. Save and apply it, connect with TUN enabled, then inspect the effective configuration and DNS path. On Windows the setting suppresses DNS leaks from multi-adapter resolution and may affect software such as VirtualBox. Revert the added setting and reapply if compatibility problems occur. It does not choose the DNS upstream's proxy and is not system protection after the client exits. See the [mihomo TUN reference](https://wiki.metacubex.one/en/config/inbound/tun/#strict-route).

## Custom DNS also needs an outbound choice

`https://` and `tls://` indicate encrypted DNS transport. To send ordinary DNS through a proxy, choose its outbound explicitly: for example, the current managed profile uses `https://1.1.1.1/dns-query#Proxy`. The suffix requires an existing `Proxy` group that ultimately selects a proxy node.

`respect-rules: true` routes the DNS connection according to routing rules, which may still choose direct access. It is not a leak-prevention switch. Do not enable it blindly or resolve a proxy node through DNS that requires that same unresolved node to connect; that creates a dependency loop.

Also review `nameserver-policy`, `fallback`, `direct-nameserver` and `proxy-server-nameserver`. Domain policies can override default resolvers, fallback queries can send additional requests, and direct destinations and node startup have separate DNS needs. Changing only `nameserver` does not establish that all queries use the proxy. Preserve managed-node DNS policies. See the [mihomo DNS reference](https://wiki.metacubex.one/en/config/dns/).

## Check whether queries still leak

A DNS test lists resolvers; a different country or IP from the node does not by itself establish a leak. Compare the queried hostname, routing rule and actual outbound. Local DNS for a direct destination may match the intended split routing, but sending an intended proxy destination to the local ISP resolver needs investigation.

Use fresh random test hostnames to avoid cache effects. Compare VPN / TUN capture, DNS overrides, app-owned DNS and IPv6 one at a time, checking outbounds in [connections and network diagnostics](/en/flclash/diagnostics). Where possible, capture traffic on your own physical adapter or router: check UDP / TCP port 53 and direct encrypted-DNS connections, then repeat after network changes and reconnections. One passing browser test does not prove protection for every app or during disconnection.
