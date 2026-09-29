---
description: "DNS and IPv6 \u2014 setup, practical steps and troubleshooting"
---

# DNS and IPv6

For iPhone / iPad.

## Start with defaults

Change **Settings → DNS** only for a specific need, such as private domains, a chosen resolver or a reproducible lookup failure.

Custom DNS accepts the formats listed in the interface: plain IP, DoH, DoH3, DoQ, DoT and TCP. Separate multiple servers with commas; leave the field empty for automatic defaults. This setting serves lookups outside the tunnel and related cases, not necessarily every DNS request.

## Add a domain-specific DNS rule

1. Open **Settings → DNS → Add DNS Rule**.
2. Choose Exact, Suffix or Wildcard and enter a domain.
3. Choose Addresses, Alias, Split DNS or Always Real IP.
4. Save and order rules; the first match wins.
5. Make a new request and inspect the DNS result.

For example, send your private company domain to a reachable company resolver rather than sending all public names there. Check the route to that resolver first.

## IPv6

Inspect **Settings → IPv6**. Device networking, the node and the destination all affect availability. Compare one change at a time, then restore what you need.

Modules can contribute DNS settings too. Check [module order](/en/oixcloud/modules) when results differ from expectations. Avoid changing DNS, nodes and routing simultaneously.
