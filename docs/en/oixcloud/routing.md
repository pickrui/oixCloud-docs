---
description: "Routing rules and priority \u2014 setup, practical steps and troubleshooting"
---

# Routing rules and priority

For iPhone / iPad. Apple TV mainly consumes synced rules and allows rule-set destination changes.

## Illustrated steps

[![oixCloud · Routing rule](/illustrations/oixcloud-rules-zh.svg)](/illustrations/oixcloud-rules-zh.svg)

*Simulated interface in Chinese, with fictional nodes and data. Layout varies by version; open the image for a larger view.*

## Route a website

1. Keep **Rule** mode and open **Proxies → Routing Rules**.
2. Add a custom rule, such as domain suffix `example.com`.
3. Choose Direct, Reject, the current proxy, or a particular node, chain or policy group.
4. Save, create a new request and inspect its matched rule and outbound.

A domain field takes a hostname, not `https://` or a page path. A suffix includes subdomains; an exact domain matches that host only.

## Understand priority

- **Excluded Routes** applies first and keeps matching destinations direct or outside the tunnel.
- **Routing Guide** lets you reorder sources. The visual order of settings sections is separate.
- **List Order** uses the first matching rule or set.
- **Most Specific** compares matches across sets within a source. Standalone custom rules remain ordered.
- Unmatched traffic uses the **Final Route**.

Global and Direct modes do not apply normal routing rules.

## Import and edit sets

Import supported `.arrs`, `.list` or `.conf` files, or subscribe by URL. Review the preview, then assign a destination to the set. Updating a subscription preserves its local routing choice.

Tap a built-in set name to search or edit its contents. The separate destination control changes routing. **Restore Default** discards local content overrides; an empty override is different from restoring defaults.

GeoIP/ASN needs its database. HTTPS path/header matching needs readable HTTP data and may require [MITM](/en/oixcloud/mitm).
