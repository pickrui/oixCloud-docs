---
description: "DNS overrides and network settings \u2014 setup, practical steps and troubleshooting"
---

# DNS overrides and network settings

## Begin with default DNS

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
