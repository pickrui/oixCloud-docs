---
description: "DNS and IPv6 \u2014 setup, practical steps and troubleshooting"
---

# DNS and IPv6

For iPhone / iPad.

## Start with defaults

Change **Settings → DNS** only for a specific need, such as private domains, a chosen resolver or a reproducible lookup failure.

Custom DNS accepts the formats listed in the interface: plain IP, DoH, DoH3, DoQ, DoT and TCP. Separate multiple servers with commas; leave the field empty for automatic defaults. This setting serves lookups outside the tunnel and related cases, not necessarily every DNS request.

## Add a domain-specific DNS rule

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-dns-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Add a domain-specific DNS rule">
    <img src="/illustrations/oixcloud-dns-zh.svg?v=20260929-2" alt="Add a domain-specific DNS rule" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

1. Open **Settings → DNS → Add DNS Rule**.
2. Choose Exact, Suffix or Wildcard and enter a domain.
3. Choose Addresses, Alias, Split DNS or Always Real IP.
4. Save and order rules; the first match wins.
5. Make a new request and inspect the DNS result.

For example, send your private company domain to a reachable company resolver rather than sending all public names there. Check the route to that resolver first.

## IPv6

Inspect **Settings → IPv6**. Device networking, the node and the destination all affect availability. Compare one change at a time, then restore what you need.

Modules can contribute DNS settings too. Check [module order](/en/oixcloud/modules) when results differ from expectations. Avoid changing DNS, nodes and routing simultaneously.

## Example: send only an internal domain to company DNS

Suppose you own `corp.example.com` and the company resolver is reachable from the current network:

1. Add a suffix match for `corp.example.com` with the split-DNS action.
2. Enter the company's actual resolver. The illustration's `192.0.2.53` is a documentation address, not a usable service.
3. Enable and save it before any broader rule that would match first.
4. Request a real internal hostname, verify its answer, then check VPN, routing or subnet permissions needed to reach that address.

A DNS answer does not establish a route to its address. Alias and address-record settings cannot replace network connectivity.

| Symptom | Next step |
| --- | --- |
| Every domain fails | Check resolver reachability and current network; revert the recent change for comparison. |
| Only internal domains fail | Check match type, order, company DNS and company-network access. |
| Correct address but failed connection | Check routing, node, IPv4/IPv6 and destination port. |
| Unexpected rule behavior | Check network-profile overrides and module-provided DNS settings. |

## DNS leaks: settings that help

A DNS test lists resolvers, which need not share the proxy exit's IP or country. Check whether a domain intended for the proxy was also sent by your device to an ISP or another unexpected resolver.

The current client captures system queries with an in-tunnel resolver and fake-IP. Direct connections, excluded-route checks, IP / GeoIP / ASN routing and real-IP exceptions can still require lookups outside the tunnel. A connection may use the proxy after a local DNS query has already occurred; Global mode does not guarantee that these queries disappear.

1. Confirm that oixCloud is connected and inspect the destination's actual outbound. Check [network profiles](/en/oixcloud/networks) and modules for DNS or routing overrides.
2. To avoid ordinary plaintext DNS, enter a reachable, certificate-valid DoH / DoT or other encrypted resolver under **Settings → DNS → Custom DNS Server**, such as `https://1.1.1.1/dns-query`. Save and make a new request. This encrypts the device-to-resolver connection; it **does not mean DNS is sent through the proxy**, and the resolver may still see your device's public IP.
3. Review Always Real IP and split-DNS rules and keep exceptions narrow. Domain rules can reduce lookups needed for routing, but higher-priority conditions such as excluded routes may still require resolution. Do not remove LAN rules just to change a test result.
4. Check browser Secure DNS, system encrypted-DNS profiles and other network extensions. Record the original settings and temporarily disable separately selected resolvers when testing client-managed DNS. If you retain an app's own DoH / DoT, verify that its connection uses the intended proxy; port-53 interception cannot control these encrypted queries.
5. Turn off **Settings → Advanced Settings → Hide VPN Icon**, then check actual IPv6 capture under **Settings → IPv6**. Suppressing AAAA answers does not disable IPv6 on the device. Verify both IPv4 and IPv6 exits.

### Include All Networks: scope and limits

For stronger system traffic capture, consider **Settings → Advanced Settings → Tunnel → Include All Networks**. It is mutually exclusive with Enhanced Compatibility Mode and may affect HomeKit, connection or reconnection, and app updates. Disconnect oixCloud before updating it.

This switch controls system traffic entering the tunnel. It does not automatically turn the client's own out-of-tunnel DNS into proxied DNS. Review local-network and excluded-route settings separately; this is not a guarantee of zero DNS leaks.

**If destination DNS must always use the proxy and must never fall back to direct access when the proxy fails, the current Custom DNS setting cannot guarantee that requirement.** The client needs a separate proxy DNS outbound and a fail-closed policy covering routing lookups, real-IP exceptions and other DNS record types. Changing a resolver address alone cannot provide it.

These menu paths apply to iPhone / iPad, not necessarily Apple TV.

## Verify the DNS path

1. Record the client version, mode, node, DNS settings and current Wi-Fi or cellular network.
2. Run a DNS test that generates fresh random hostnames before and after connecting, avoiding cached answers. Compare listed resolvers with your configured upstreams; their country or IP need not match the node.
3. Check domains, matched rules and outbounds in [request and DNS diagnostics](/en/oixcloud/diagnostics). A manual DNS check actively resolves a name; its result alone does not establish the DNS path of an ordinary proxied connection.
4. If an ISP resolver still appears, inspect routing lookups, direct rules, modules, app-specific DNS and IPv6 separately. Where possible, capture traffic on your own router or upstream network to establish whether queries leave directly.
5. Repeat after Wi-Fi / cellular changes and reconnections. Checking only UDP / TCP port 53 cannot exclude direct DoH / DoT / DoQ traffic. A successful normal connection does not establish protection during disconnection.
