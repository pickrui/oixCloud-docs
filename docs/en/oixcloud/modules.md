---
description: "Modules, arguments and order \u2014 setup, practical steps and troubleshooting"
---

# Modules, arguments and order

For iPhone / iPad. Modules do not sync to Apple TV.

Modules can combine routing, DNS, rewriting and scripts. They are unnecessary for a basic proxy connection.

## Import

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-modules-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Import and order modules">
    <img src="/illustrations/oixcloud-modules-zh.svg?v=20260929-2" alt="Import and order modules" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

1. Open **Proxies → Policies → Modules → Import Module** or **Subscribe Module**.
2. Select a file or paste the author's resource URL.
3. Choose its actual client format and review rules, scripts and unsupported items.
4. Edit required arguments, then enable the relevant content.
5. Test the target service. HTTPS rewriting also requires [MITM certificate trust](/en/oixcloud/mitm).

Format suggestions are only guidance. A successful import does not guarantee that every API from another client is supported.

## Maintain modules

| Operation | Purpose |
| --- | --- |
| Update subscription | Fetch remote content from the module menu |
| Change arguments | Edit arguments from the module menu |
| Categories | Organize the list without setting execution priority |
| Module Order | Control execution priority |

After updates, review warnings and inactive content, especially changed scripts, DNS and hosts.

## Resolve conflicts

Modules apply in order. The first eligible module owns a conflicting DNS override; scripts matching the same host also respect module order.

Start with one related module, verify, then enable others individually. Recreate connections after changing order. Disable a module for comparison before deleting it. Removal also removes its contributed rules, scripts and MITM hosts.

Scripts can read matching request/response data and make their own network requests. Use trusted authors and keep private arguments out of public reports.

### A host excluded by another module {#module-exclusions}

In versions supporting this behavior, loaded modules share MITM hostname exclusion decisions. If one loaded module excludes a host, the other modules do not decrypt HTTPS for it either. Moving the desired module earlier cannot override that exclusion.

For example, if one loaded module excludes `api.example.com`, another module declaring the host may be unable to run its HTTPS scripts. Check the reason in **Activity → MITM**, then disable relevant modules one at a time and retest with new connections.

Native MITM rule-set exclusions and the device's **Never Decrypt** list have different scopes. See [exclusion scopes](/en/oixcloud/mitm#exclusion-scope). A module containing only exclusions and no loadable content should not be used as a global exclusion switch.

## Verify a complete import

Identify the problem the module should solve and preserve your previous settings. After import, inspect parsing notices, enabled state, argument values and required MITM hosts. A module name in the list does not prove its script ran.

Visit a target the module should handle and inspect activity/module feedback. On failure, disable other modules affecting the same target, then check format, script compatibility and certificate trust. A module without HTTPS rewriting does not require generating a certificate just to import it.

Subscription updates can change rules, hosts and scripts. Recheck the same target after updating and confirm needed local arguments remain correct. A file import does not automatically change when its author updates a remote file.

## Manage module categories

Use a module's action menu to choose an existing category or **New Category**. The category header menu offers **Edit Category Name** and **Delete Category**. Names must be nonempty and unique.

Deleting a category moves its modules to **Uncategorized** without deleting them. Categories and list dragging organize display; adjust runtime conflict priority in **Module Order**. Verify with new connections instead of assuming list placement changes execution order.

See [External Resources](/en/oixcloud/routing#external-resources) for centralized updates. **Update All** is not limited to search results.
