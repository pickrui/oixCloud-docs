---
description: "Network profiles and local access \u2014 setup, practical steps and troubleshooting"
---

# Network profiles and local access

For iPhone / iPad.

## Apply settings by network

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-networks-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="oixCloud · Apply settings for one network">
    <img src="/illustrations/oixcloud-networks-en.svg?v=20261030-en1" alt="oixCloud · Apply settings for one network" width="1120" height="1120" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

Open **Settings**, then **Network Profiles** in the **Network** section. Network is a section heading, not an intermediate page.

1. Add the current Wi-Fi, enter an exact Wi-Fi name (SSID), or create a cellular profile.
2. Set mode, Final Route, routing rules, DNS and IPv6 as needed. Inherit follows global settings.
3. Save, connect and inspect the active profile and actual requests on that network.
4. Switch to a network without a matching profile and verify that global settings apply again.

| Setting | Effect |
| --- | --- |
| Direct mode | Sends traffic directly |
| Direct Final Route | Only affects unmatched traffic; matching rules can still use a proxy |
| Auto Connect | Starts VPN on the matching network; global Always On takes priority |
| Inherit | Uses the corresponding global setting |

A profile can use custom routing rules. Check this choice when global rule changes appear ineffective.

## Profiles and excluded routes

Network Profiles selects settings for the current Wi-Fi or cellular environment. **Proxies → Policies → Routing Rules → Excluded Routes** makes matching destination domains or networks direct. Exclusions precede ordinary rules, so verify address ranges first.

## Local proxy service

Open **Proxy Service** in the Network section of Settings and configure the port and access scope. Another device must use this device's LAN address and the matching proxy protocol/port.

Keep the client connected on a reachable network. Other devices must support the protocol. Use trusted LANs and do not forward the listener to the public internet.

## Advanced network controls

IPv6, Enhanced Compatibility and Apple push capture solve different problems. Keep defaults unless needed and change one setting at a time. Read in-app explanations before changing options such as **Include All Networks** or on-demand connections.

To inspect this device and switch its node from a browser on the same network, use [Local Controller](/en/oixcloud/local-control). Its HTTPS control port is separate from the HTTP/SOCKS5 proxy service.
