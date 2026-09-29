---
description: "Modules, arguments and order \u2014 setup, practical steps and troubleshooting"
---

# Modules, arguments and order

For iPhone / iPad. Modules do not sync to Apple TV.

Modules can combine routing, DNS, rewriting and scripts. They are unnecessary for a basic proxy connection.

## Import

1. Open **Proxies → Modules → Import Module** or **Subscribe Module**.
2. Select a file or paste the author's resource URL.
3. Choose its actual client format and review rules, scripts and unsupported items.
4. Edit required arguments, then enable the relevant content.
5. Test the target service. HTTPS rewriting also requires [MITM certificate trust](/en/oixcloud/mitm).

Format suggestions are only guidance. A successful import does not guarantee that every API from another client is supported.

## Maintain modules

Use the module menu to update subscriptions, change arguments or organize categories. Categories organize the list; **Module Order** controls execution priority.

After updates, review warnings and inactive content, especially changed scripts, DNS and hosts.

## Resolve conflicts

Modules apply in order. The first eligible module owns a conflicting DNS override; scripts matching the same host also respect module order.

Start with one related module, verify, then enable others individually. Recreate connections after changing order. Disable a module for comparison before deleting it. Removal also removes its contributed rules, scripts and MITM hosts.

Scripts can read matching request/response data and make their own network requests. Use trusted authors and keep private arguments out of public reports.
