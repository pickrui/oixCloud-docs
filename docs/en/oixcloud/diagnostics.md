---
description: "Requests and diagnostics \u2014 setup, practical steps and troubleshooting"
---

# Requests and diagnostics

For iPhone / iPad.

## Inspect the wrong route

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-requests-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="oixCloud · Inspect a request’s routing decision">
    <img src="/illustrations/oixcloud-requests-en.svg?v=20261030-en1" alt="oixCloud · Inspect a request’s routing decision" width="1120" height="1120" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

1. Keep the connection active and reproduce the target operation once.
2. Open **Activity → Requests** (the network icon) and search for the domain.
3. Open details and inspect the matched rule, source, route and outbound.
4. Compare these with the current mode, active network profile, rule priority and policy group.

If the request is absent, check capture, excluded routes and reused connections first.

## Choose a tool

| Symptom | Start with |
| --- | --- |
| Wrong or missing DNS answer | **Activity → DNS** and DNS rules |
| Wrong node | **Activity → Routing** and request details |
| HTTPS rewrite not applied | **Activity → MITM**, trust and modules |
| Disconnects after network changes | **Activity → Events** |
| Support investigation | **Settings → Diagnostic Package** |

## Export

Open **Settings → Diagnostic Package**, select **Export Diagnostic Package**, and wait for the system share sheet. Save and inspect the file before attaching it to a ticket. If export fails, retain the error and retry.

The app generates anonymized diagnostics designed to exclude server addresses, subscription URLs, credentials, certificates and traffic content. Review separately added screenshots and logs yourself. The package describes the state at export; it does not validate every application or node.

Network events help correlate disconnects and reconnects with the time of a network change. Include the time zone and reproduction steps.

Review names, domains and personal data before public sharing. Never put complete configurations, access tokens or certificate private keys into a public repository.
