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
