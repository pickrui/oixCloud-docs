---
description: "MITM certificates and HTTPS rewriting \u2014 setup, practical steps and troubleshooting"
---

# MITM certificates and HTTPS rewriting

For iPhone / iPad. Ordinary proxy access does not require MITM.

## Install and trust

1. Open **Settings → MITM** and certificate management.
2. Use the app's installation flow and install the downloaded certificate profile in iOS Settings.
3. Under **General → About → Certificate Trust Settings**, enable full trust for that root certificate.
4. Return to the app, enable MITM as prompted, and check the intended hosts and rules.

Installing the profile and trusting its root are separate steps. See [Apple's certificate-trust instructions](https://support.apple.com/102390).

## Enable and verify rules

Review imported hosts and scripts. Remote MITM rule sets start disabled. Enable only the required sets and keep host scope narrow. HTTPS module rewriting also needs the master switch, a trusted certificate and active module content.

Connect the VPN, reopen the service and inspect request details or MITM diagnostics. An imported rule alone does not prove interception.

| Symptom | Check |
| --- | --- |
| No match | Host scope and master/set/module switches |
| Certificate error | Installation, full trust and certificate pinning |
| A feature breaks | Disable the relevant set or module and compare |

Pinned applications may reject interception. Do not disable global certificate verification; exclude unsuitable hosts and retain their original TLS connection.

To stop, disable MITM or the relevant set and recreate connections. Remove the profile in system settings if no longer needed. Never share its private key.
