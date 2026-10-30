---
description: "Strict DNS, split DNS and three independent IPv6 controls"
---

# DNS and IPv6

For iPhone/iPad versions of oixCloud that expose these controls. See the separate [Apple TV guide](/en/oixcloud/apple-tv). Check your installed version if a setting is missing.

## Check the effective source first

Open **Settings → DNS** and read the Automatic, Custom or Strict DNS summary and its source. A network profile or module can override global DNS. When the page reports an override, editing the global address may not change the resolver used on this network.

**Custom DNS** accepts the displayed plain-IP, DoH, DoH3, DoQ, DoT and TCP formats. Separate servers with commas. Correct invalid input before leaving the field; an empty field restores the default selection for the current mode.

<span id="dns-leaks-settings-that-help"></span>

## Strict DNS {#strict-dns}

To prevent public DNS queries handled by the VPN from falling back to system DNS:

1. Connect the VPN, then enable **Strict DNS** in **Settings → DNS**.
2. Check the effective servers and source at the top. With no configured servers, the default is Cloudflare DoH. Only encrypted custom servers are eligible for public queries, and proxied queries require `https://` DoH.
3. **Skip DNS Lookups for Routing** is forced on and **Allow System DNS Fallback** is forced off. These controls cannot be changed independently while Strict DNS is active.
4. Make a new connection and check resolution and outbound in [requests and DNS diagnostics](/en/oixcloud/diagnostics). For failures, check the effective resolver, proxy and rules before treating a timeout as an invalid account token.

Strict DNS skips DNS lookups used for IP-based classification. Domain rules and the final route still apply, so routes depending on IP, GeoIP or ASN classification may change. Disabling Strict DNS restores the saved choices for the other two controls.

Its scope is DNS captured by the VPN. Local names and proxy bootstrap use dedicated paths. App-provided DoH/DoT, excluded traffic and requests outside the VPN are not all controlled by this switch. Captured public TCP/53 queries are refused rather than allowed as a plaintext fallback.

## Two separate compatibility options

| Control | Effect |
| --- | --- |
| Skip DNS Lookups for Routing | Avoids local lookups for IP-based routing; direct connections and DNS exceptions can still resolve locally. It does not force every query through a proxy |
| Allow System DNS Fallback | Allows the system resolver when configured servers cannot answer. Valid negative answers do not trigger fallback; Strict DNS always disables it |

Encryption protects the connection to the resolver; it does not select a proxy outbound by itself. In ordinary mode, changing an address to `https://` does not prove there are no local DNS queries.

## Add a domain-specific DNS rule

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-dns-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="Add a domain-specific DNS rule">
    <img src="/illustrations/oixcloud-dns-zh.svg?v=20261030-2" alt="Add a domain-specific DNS rule" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

1. Open **Settings → DNS → Add DNS Rule**.
2. Choose exact, suffix or wildcard matching and enter a domain, such as your own `corp.example.com`.
3. Choose addresses, alias, split DNS or **Always Real IP**, and supply the actual reachable resolver or address.
4. Save and reorder. The first match from top to bottom wins. Make a new request and verify both the answer and the route to it.

The illustrated `192.0.2.53` is a documentation address, not a usable resolver. Confirm access to the corporate network before assigning its DNS. A correct answer does not establish a route to that address.

## Check three independent IPv6 controls {#ipv6-controls}

| Location | Scope |
| --- | --- |
| Settings → IPv6 → Auto IPv6 / App IPv6 Traffic | Whether the VPN captures application IPv6. The summary shows the effective state and source. Turn Auto off to choose manually |
| Settings → DNS → IPv6 DNS Resolution | Whether local hostname lookups request IPv6 answers. It does not enable the VPN IPv6 interface or control remote DNS and literal IPv6 addresses |
| Settings → IPv6 → Proxy Connection → Server IP Version | Default address family for connecting to proxy-server hostnames. A node menu/editor can override it; changes apply to new connections |

Network profiles can override global IPv6 settings. **Hide VPN Icon** and Reflection's **Local Device Compatibility** can cause IPv6 to bypass the VPN; check the effective summary first. Disabling IPv6 DNS resolution neither disables system IPv6 nor proves it is captured.

## Verify and troubleshoot

- Test with fresh random domains to reduce cache effects. A DNS test shows resolvers; a country or IP differing from the proxy node is not proof of a leak.
- Check IPv4 and IPv6 separately, along with the selected node, DNS source, network profile and modules. Retest after Wi-Fi/cellular changes or reconnecting.
- Check app-provided secure DNS, system DNS profiles and other VPNs separately. Port 53 checks do not cover every encrypted DNS path.
- **Include All Networks** affects system traffic capture and does not replace DNS outbound policy. Read its compatibility and update guidance before enabling it.
- For one failing domain, inspect its DNS rule and local/Tailscale route. If all public lookups fail in Strict DNS, check usable HTTPS DNS servers and the proxy first.

Capture traffic on your own router or network when you need to verify the physical path. One successful web DNS test does not prove coverage of every app or disconnected periods.
