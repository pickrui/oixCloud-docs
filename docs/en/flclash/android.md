---
description: "Android apps and background operation \u2014 setup, practical steps and troubleshooting"
---

# Android apps and background operation

Open **Tools → Access Control**. This application list is Android-specific.

## Choose which apps enter VPN

<figure class="guide-figure">
  <a href="/illustrations/flclash-android-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Choose which apps enter the VPN">
    <img src="/illustrations/flclash-android-en.svg?v=20261030-en1" alt="FlClash for oixCloud · Choose which apps enter the VPN" width="1120" height="1120" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

| Mode | Meaning |
| --- | --- |
| Whitelist mode | Only selected apps enter the VPN |
| Blacklist mode | Selected apps bypass the VPN; other apps follow the VPN settings |

1. Open the top-right More menu on **App Access Control** and choose **Turn on**.
2. Choose **More → Settings → Mode**, select whitelist or blacklist mode, then return to select apps.
3. Use the top-right **Save** checkmark and reconnect VPN as prompted. The bottom status bar shows the current mode and selection count.
4. Verify one app first; do not confuse excluding an app with allowing it into the VPN.

Traffic entering the VPN still follows routing rules. Access control does not assign a separate remote node to every app.

## Missing apps

Grant the system's installed-app-list permission when requested, then refresh. If the interface offers package-name entry, use the real package name rather than the display name.

## Disconnects in the background

Check system VPN status, battery optimization, background restrictions and startup permissions. Settings differ by device manufacturer.

Competing VPNs can interrupt capture. Pause the other VPN and reproduce. Compare Wi-Fi and mobile networking separately when only one fails.

## Verify after changes

After changing access rules, reopen the target app and check connections. An excluded app not appearing in core connection records is expected; DNS changes do not fix that exclusion.
