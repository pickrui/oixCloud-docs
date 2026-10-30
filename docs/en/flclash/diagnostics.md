---
description: "Network checks and connections \u2014 setup, practical steps and troubleshooting"
---

# Network checks and connections

## Windows / macOS network check

<figure class="guide-figure">
  <a href="/illustrations/flclash-diagnostics-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Run a network self-check">
    <img src="/illustrations/flclash-diagnostics-en.svg?v=20261030-en1" alt="FlClash for oixCloud · Run a network self-check" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

1. Keep the failing profile and network environment.
2. Open **Tools → Network self-check** and select **Run self-check**.
3. Review failures and attention items before taking their suggested actions.
4. Rerun after each fix and retest the original application.

Checks cover the active profile, core, listeners, system proxy, TUN, DNS and a few HTTPS probes. Passing does not prove that every node, app, UDP or IPv6 path works.

## Understand the results

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

## Open the relevant fix from a result

Current Windows/macOS versions can copy the local proxy address from diagnostic results, open port, DNS or TUN settings, and show manual system-proxy setup guidance. Read the result's explanation, make one change, return to rerun diagnostics, then retest the original application.

The copied value is the current local listener address, not a subscription URL or a guarantee of access from other LAN devices. Update applications with manually configured proxy addresses after changing the port.

## Connection records without process names

First check capture, the applied profile and whether process rules are needed. Current versions can look up processes only when rules require them, so ordinary records without a process name are not necessarily faulty. See [process lookup](/en/flclash/rules#process-lookup) for the setting and checks.
