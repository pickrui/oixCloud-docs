---
description: "Network checks and connections \u2014 setup, practical steps and troubleshooting"
---

# Network checks and connections

## Windows / macOS network check

<figure class="guide-figure">
  <a href="/illustrations/flclash-diagnostics-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Read network-check results">
    <img src="/illustrations/flclash-diagnostics-zh.svg?v=20260929-2" alt="Read network-check results" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

1. Keep the failing profile and network environment.
2. Open **Tools → Network Check** and run it.
3. Review failures and attention items before taking their suggested actions.
4. Rerun after each fix and retest the original application.

Checks cover the active profile, core, listeners, system proxy, TUN, DNS and a few HTTPS probes. Passing does not prove that every node, app, UDP or IPv6 path works.

| Result | Next check |
| --- | --- |
| No traffic capture | Enable System Proxy/TUN or configure the app |
| Local port failure | Running core and port conflicts |
| System proxy mismatch | Competing software or organization policy |
| TUN route mismatch | Authorization, other VPNs and routes |
| System path works, proxy fails | Node, rules and core DNS |

The system network path may still use TUN; it is not necessarily a physical direct connection. Cancelled checks or profile changes can leave incomplete results.

## Other platforms and routing

On Android/Linux, use connections and logs. Filter by the target domain, inspect the rule/group/outbound, then create a fresh connection after changing settings.

Review personal data before copying reports. Include version, time, network type and reproduction steps in a [support ticket](/en/help/support), never full tokens or subscriptions in public issues.
