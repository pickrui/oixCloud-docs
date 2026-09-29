---
description: "Network profiles and local access \u2014 setup, practical steps and troubleshooting"
---

# Network profiles and local access

For iPhone / iPad.

## Apply settings by network

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-networks-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Edit a network profile">
    <img src="/illustrations/oixcloud-networks-zh.svg?v=20260929-2" alt="Edit a network profile" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

Open **Settings**, then **Network Profiles** in the **Network** section. Network is a section heading, not an intermediate page.

1. Add the current Wi-Fi, enter an exact Wi-Fi name (SSID), or create a cellular profile.
2. Set mode, Final Route, routing rules, DNS and IPv6 as needed. Inherit follows global settings.
3. Save, connect and inspect the active profile and actual requests on that network.
4. Switch to a network without a matching profile and verify that global settings apply again.

Direct mode sends traffic directly. A Direct Final Route only affects unmatched traffic; matching rules can still use a proxy. Enable **Auto Connect** in a profile if required. Global **Always On** takes priority over this option.

A profile can use custom routing rules. Check this choice when global rule changes appear ineffective.

## Profiles and excluded routes

Network Profiles selects settings for the current Wi-Fi or cellular environment. **Proxies → Policies → Routing Rules → Excluded Routes** makes matching destination domains or networks direct. Exclusions precede ordinary rules, so verify address ranges first.

## Local proxy service

Open **Proxy Service** in the Network section of Settings and configure the port and access scope. Another device must use this device's LAN address and the matching proxy protocol/port.

Keep the client connected on a reachable network. Other devices must support the protocol. Use trusted LANs and do not forward the listener to the public internet.

IPv6, Enhanced Compatibility and Apple push capture solve different problems. Keep defaults unless needed, and read in-app explanations before changing broad capture options.
