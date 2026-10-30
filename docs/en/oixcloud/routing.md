---
description: "Routing rules and priority \u2014 setup, practical steps and troubleshooting"
---

# Routing rules and priority

For iPhone / iPad. Apple TV mainly consumes synced rules and allows rule-set destination changes.

## Illustrated steps

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-rules-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="oixCloud · Add a routing rule for a website">
    <img src="/illustrations/oixcloud-rules-en.svg?v=20261030-en1" alt="oixCloud · Add a routing rule for a website" width="1120" height="1120" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

## Route a website

1. Keep **Rule** mode and open **Proxies → Policies → Routing Rules**.
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

<span id="import-and-edit-sets"></span>

## Import rule sets

Import supported `.arrs`, `.list` or `.conf` files, or subscribe by URL. Review the preview, then assign a destination to the set. The file defines what to match; you choose the destination in the client. Subscription updates normally preserve that local choice, so you do not need to edit each domain entry.

## Edit built-in rule sets

Tap a built-in set name to view, search or edit its contents. The separate destination control changes routing. **Restore Default** discards local content overrides; an empty override is different from restoring defaults.

GeoIP/ASN rules need their corresponding databases. HTTP path/header matching requires readable HTTP data; matching HTTPS content also requires [MITM](/en/oixcloud/mitm).

## Check external resource updates together {#external-resources}

On iPhone / iPad, **Settings → External Resources** brings routing rules, modules, MITM rule sets and GeoIP/ASN databases together. Managed account nodes still refresh from the account page.

1. Search by name or source host, then open an entry for details. Resources with a remote source can be updated from their action menu.
2. Choose **Update All** for all remotely sourced resources and databases. It is not limited to the currently filtered search results.
3. Wait for completion and inspect success markers and failure messages separately. One failure does not stop other updates; partial completion is not complete success.
4. Check enabled state, routing destinations, module arguments and MITM hosts, then make a new request to verify the matched rule and outbound. Download completion does not mean a resource is enabled.

::: warning Keep a copy before deleting resources
Local imports without a remote source do not become the author's newer version automatically. Deleting a resource removes its contributed content and cannot be undone from this entry. Disable it for comparison first and retain its source or a copy for reimport before deletion.
:::

See [modules](/en/oixcloud/modules) and [MITM](/en/oixcloud/mitm) for runtime checks. Builds without **External Resources** can use each resource's own management page.
