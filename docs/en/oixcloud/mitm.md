---
description: "MITM certificates and HTTPS rewriting \u2014 setup, practical steps and troubleshooting"
---

# MITM certificates and HTTPS rewriting

For iPhone / iPad. Ordinary proxy access does not require MITM.

## Install and trust

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-mitm-generate-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="oixCloud · Generate your first MITM certificate">
    <img src="/illustrations/oixcloud-mitm-generate-en.svg?v=20261030-en1" alt="oixCloud · Generate your first MITM certificate" width="1120" height="1120" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

1. Open **Settings → MITM → MITM Certificates** and inspect **This Device**.
2. If no certificate exists, choose **Generate Certificate**. To use the same account certificate as an existing device, retrieve it through the account-certificate controls instead.
3. Choose **Install Trust Profile** and complete profile installation in iOS Settings.
4. Under **General → About → Certificate Trust Settings**, enable full trust for that root certificate.
5. Return to the app, enable MITM as prompted, and check the intended hosts and rules.

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-mitm-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="oixCloud · Install this device’s MITM certificate">
    <img src="/illustrations/oixcloud-mitm-en.svg?v=20261030-en1" alt="oixCloud · Install this device’s MITM certificate" width="1120" height="1120" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

::: warning Trust a replacement certificate again
Replacing the local certificate requires installing and trusting the new one; an old installed profile will not trust it. Regenerating certificates is not a general fix for connection failures.
:::

Installing the profile and trusting its root are separate steps. See [Apple's certificate-trust instructions](https://support.apple.com/en-us/102390).

<span id="enable-and-verify-rules"></span>

## Enable rules

Review imported hosts and scripts. Remote MITM rule sets start disabled. Enable only the required sets and keep host scope narrow. HTTPS module rewriting also needs the master switch, a trusted certificate and active module content.

## Verify that it works

Connect, reopen the service and inspect request details or MITM diagnostics. An imported rule alone does not prove interception.

| Symptom | Check |
| --- | --- |
| No match | Host scope and master/set/module switches |
| Certificate error | Installation, full trust and certificate pinning |
| A feature breaks | Disable the relevant set or module and compare |

Pinned applications may reject interception. Do not disable global certificate verification; exclude unsuitable hosts and retain their original TLS connection.

## Disable MITM

To stop, disable MITM or the relevant set and recreate connections. Remove the profile in system settings if no longer needed. Never share its private key.

## Never decrypt a particular domain {#never-decrypt}

For certificate pinning or a service incompatible with rewriting, open **Settings → MITM → Never Decrypt**, enter the exact hostname, then choose **Never Decrypt This Domain**. Request details and the MITM Inspector offer the same action.

The exclusion applies to that exact domain on this device, across all TLS ports. Add subdomains separately. Module and subscription updates cannot override it. Reconnect after changing it; existing connections keep their previous behavior. Use **Allow MITM for This Domain** in the list to restore interception.

Excluded domains retain their original TLS connection. HTTPS rewrites, scripts and HTTP-based routing stop applying, while ordinary routing and plain HTTP rules remain unchanged. Current versions also skip domains with no applicable HTTPS rules automatically. A connection that is not decrypted is not necessarily a certificate failure; inspect its reason first.

## Exclusion scopes {#exclusion-scope}

| Setting | Effect on HTTPS decryption |
| --- | --- |
| An enabled Surge-style module's hostname exclusion | Shared across Surge-style modules; native modules and native MITM sets may still handle the host |
| A hostname exclusion in a native `.amod` module's embedded MITM set | Excludes the host only from that embedded set; other applicable sources can still handle it |
| A native MITM rule set's hostname exclusion | Excludes the host only from that set; other applicable sets can still handle it |
| Device-local Never Decrypt | Prevents all modules and sets from decrypting that exact domain and survives subscription updates |

Use **Never Decrypt** when the entire device should leave a domain encrypted. An exclusion in one module or native set is not equivalent. Shared Surge-style HTTPS exclusions do not disable plain HTTP rules; plain HTTP still follows each module's own matching and exclusion conditions.

Open **Activity → MITM** to inspect the domain's decision and matching sources. Compare changes with new connections; exclusion problems do not require repeatedly generating certificates. Module updates may change hosts, so repeat the [module verification steps](/en/oixcloud/modules) afterwards.

For centralized rule-set updates, see [External Resources](/en/oixcloud/routing#external-resources).
