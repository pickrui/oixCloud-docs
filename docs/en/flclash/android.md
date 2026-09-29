---
description: "Android apps and background operation \u2014 setup, practical steps and troubleshooting"
---

# Android apps and background operation

Open **Tools → Access Control**. This application list is Android-specific.

## Choose which apps enter VPN

<figure class="guide-figure">
  <a href="/illustrations/flclash-android-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Select Android apps for VPN access">
    <img src="/illustrations/flclash-android-zh.svg?v=20260929-2" alt="Select Android apps for VPN access" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

| Mode | Meaning |
| --- | --- |
| Allow selected apps only | Only selected apps enter the VPN |
| Exclude selected apps | Selected apps bypass the VPN |

Choose the mode first, select apps, save and reconnect as prompted. Verify one app before expanding the selection.

Traffic entering the VPN still follows routing rules. Access control does not assign a separate remote node to every app.

## Missing apps

Grant the system's installed-app-list permission when requested, then refresh. If the interface offers package-name entry, use the real package name rather than the display name.

## Disconnects in the background

Check system VPN status, battery optimization, background restrictions and startup permissions. Settings differ by device manufacturer.

Competing VPNs can interrupt capture. Pause the other VPN and reproduce. Compare Wi-Fi and mobile networking separately when only one fails.

After changing access rules, reopen the target app and check connections. An excluded app not appearing in core connection records is expected; DNS changes do not fix that exclusion.
