---
description: "Requests and diagnostics \u2014 setup, practical steps and troubleshooting"
---

# Requests and diagnostics

For iPhone / iPad.

## Inspect the wrong route

1. Keep the VPN connected and reproduce the target operation once.
2. Filter request records by its domain.
3. Open details and inspect the matched rule, source, route and outbound.
4. Compare these with the current mode, active network profile, rule priority and policy group.

If the request is absent, check capture, excluded routes and reused connections first.

## Choose a tool

| Symptom | Start with |
| --- | --- |
| Wrong or missing DNS answer | DNS inspector and rules |
| Wrong node | Route diagnostics and request details |
| HTTPS rewrite not applied | MITM diagnostics, trust and modules |
| Disconnects after network changes | Network events |
| Support investigation | Diagnostic Package in Settings |

## Export

Choose the relevant range in **Settings → Diagnostic Package**, export and inspect it before sharing through a ticket. A diagnostic package describes that session, not every application or node.

Network events help correlate disconnects and reconnects with the time of a network change. Include the time zone and reproduction steps.

Review names, domains and personal data before public sharing. Never put complete configurations, access tokens or certificate private keys into a public repository.
