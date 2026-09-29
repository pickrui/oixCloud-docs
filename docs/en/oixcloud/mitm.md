---
description: "MITM certificates and HTTPS rewriting \u2014 setup, practical steps and troubleshooting"
---

# MITM certificates and HTTPS rewriting

For iPhone / iPad. Ordinary proxy access does not require MITM.

## Install and trust

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-mitm-generate-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Generate a certificate on this device">
    <img src="/illustrations/oixcloud-mitm-generate-zh.svg?v=20260929-2" alt="Generate a certificate on this device" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

1. Open **Settings → MITM → MITM Certificates** and inspect **This Device**.
2. If no certificate exists, choose **Generate Certificate**. To share an existing account certificate with another device, use the account-certificate controls instead.
3. Choose **Install Trust Profile** and complete profile installation in iOS Settings.
4. Under **General → About → Certificate Trust Settings**, enable full trust for that root certificate.
5. Return to the app, enable MITM as prompted, and check the intended hosts and rules.

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-mitm-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Install the generated trust profile">
    <img src="/illustrations/oixcloud-mitm-zh.svg?v=20260929-2" alt="Install the generated trust profile" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

Replacing the local certificate requires installing and trusting the new one; an old installed profile will not trust it. Regenerating certificates is not a general fix for connection failures.

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
