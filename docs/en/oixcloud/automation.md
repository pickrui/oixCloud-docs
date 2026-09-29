---
description: "Automation and on-demand VPN \u2014 setup, practical steps and troubleshooting"
---

# Automation and on-demand VPN

For iPhone / iPad.

## Always On

**Always On** uses the system's on-demand VPN behavior. After enabling it, check lock-screen, Wi-Fi and mobile-network transitions. For network-specific settings, see [network profiles](/en/oixcloud/networks).

When diagnosing on-demand behavior, temporarily disable the relevant setting and compare. Avoid overlapping on-demand rules from multiple VPNs.

## Automation scripts

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-automation-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Choose automation triggers">
    <img src="/illustrations/oixcloud-automation-zh.svg?v=20260929-2" alt="Choose automation triggers" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

1. Open **Settings → Automation** and create a script.
2. Name it and select the client API expected by its author.
3. Choose manual, scheduled or a supported network-event trigger.
4. Set arguments and timeout, then run it manually while connected.
5. Check the result before enabling automatic triggers.

Scripts run inside the VPN extension. Do not expect schedules to keep running while the VPN is disconnected. Scripts must finish correctly; another scheduled instance is skipped while that script is already running.

## Shortcuts

Use the app's actions in Apple Shortcuts, verify an action on its own, then add it to your workflow. Available actions depend on the installed version and system interface.

Automation is separate from HTTP request/response rewriting; use [modules](/en/oixcloud/modules) or [MITM](/en/oixcloud/mitm) for that. Scripts can make network requests, so review their purpose before supplying account data or cookies.
