---
description: "DNS overrides and network settings \u2014 setup, practical steps and troubleshooting"
---

# DNS overrides and network settings

## Begin with default DNS

<figure class="guide-figure">
  <a href="/illustrations/flclash-dns-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Configure DNS overrides">
    <img src="/illustrations/flclash-dns-zh.svg?v=20260929-2" alt="Configure DNS overrides" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

Open **Tools → Advanced Configuration → DNS**. When Override DNS is enabled, these settings replace the profile's DNS options. Editing fields without enabling the override may leave the original profile in control.

1. Record the current profile and override state.
2. Change only the setting being tested, using a reachable resolver.
3. Reapply the profile and test the same domain.
4. Restore the original value if it does not help, then investigate nodes or rules.

## Fake-IP and real addresses

DNS mode affects domain identification and routing. Some LAN services or apps need compatible handling. Adjust only confirmed exceptions rather than excluding every domain.

## Ports and DNS interception

Check the mixed port, listeners and TUN options in advanced network settings. If a port is occupied, choose an unused one and update apps with manually configured proxy ports.

DNS interception, appending system DNS and changing system DNS are different operations. For company domains, confirm resolver reachability and routing; switching to public DNS may not help.

## Managed-node lookups

Check system time, client version, profile and networking. Windows/macOS diagnostics distinguish system, core and managed-node DNS. One failed answer does not by itself prove an invalid token.

## Identify which field you need

| Field or switch | Role |
| --- | --- |
| Nameservers | Resolve ordinary destination domains |
| Proxy nameservers | Resolve proxy servers' own hostnames |
| Respect rules | Routes DNS connections according to rules; avoid circular DNS/proxy dependencies |
| Override DNS | Determines whether these client options replace the profile's DNS settings |

For failed node-hostname resolution, inspect proxy nameservers first. For internal company domains, check internal DNS and network reachability. Repeatedly switching fake-IP and real-address modes is not a substitute for identifying the failing stage.

Record original values and test the same domain through the same node. With TUN active, a diagnostic “system path” can still pass through TUN; interpret comparisons alongside current capture settings.
