---
description: "Requests and diagnostics \u2014 setup, practical steps and troubleshooting"
---

# Requests and diagnostics

For iPhone / iPad.

## Check the current network and node {#network-check}

1. Stay on the network where the problem occurred. Open **Home → Network Check** and tap **Run Check**. Connect oixFlow first to test the current proxy.
2. Compare the direct and proxy results. If direct access works but the proxy times out, select another available node on the same network and tap **Check Again**. If only the router fails to reply, it may ignore ping. Check the direct and proxy results as well.
3. To compare TCP and UDP, open **Node Diagnostics** on the same screen, tap **Test All**, then search for the node by name. TCP shows the node latency test result. A successful UDP check means the test destination answered a DNS query sent through that node.
4. Reopen the affected site or app. If it still fails after a successful check, inspect the route taken by that request using the steps below.

After disconnecting, check **Last Session** on Home for the previous connection. To narrow down a delay, open **Current Network** and compare the device, gateway, internet and proxy stages. Connect the VPN before checking the proxy stage.

## Inspect the wrong route

<figure class="guide-figure">
  <a href="/illustrations/oixflow-requests-en.svg?v=20261123-1" target="_blank" rel="noopener" aria-label="oixFlow · Inspect a request’s routing decision">
    <img src="/illustrations/oixflow-requests-en.svg?v=20261123-1" alt="oixFlow · Inspect a request’s routing decision" width="1120" height="1120" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. Keep the connection active and reproduce the target operation once.
2. Open **Activity → Requests** (the network icon) and search for the domain.
3. Open details and inspect the matched rule, source, route and outbound.
4. Compare these with the current mode, active network profile, rule priority and policy group.

If the request is absent, check capture, excluded routes and reused connections first.

Route checks show the exit actually used by the request. Compare it with the expected node or policy group. STUN checks distinguish a send timeout from a response timeout. Keep the full message when reporting the result.

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
