---
description: "Sign in and connect \u2014 setup, practical steps and troubleshooting"
---

# Sign in and connect

This guide is for **FlClash for oixCloud**. The upstream general-purpose client has different account integration. Download from the [software center](https://oixcloud.com/client).

## Downloads and system requirements {#downloads}

Use the [download center](https://oixcloud.com/client), or this fork's [latest GitHub release](https://github.com/pickrui/FlClash/releases/latest). Other forks may lack the account integration used here.

| System | Requirements | Package selection |
| --- | --- | --- |
| Windows | Windows 10 or later, 64-bit | `amd64` (x64) for Intel / AMD; `arm64` for ARM devices. Use `.exe` to install or `.zip` for the portable edition. |
| macOS | Standard builds require macOS 13.0 or later | `arm64.dmg` for Apple Silicon; `amd64.dmg` for Intel. |
| Android | Android 7.0 (API 24) or later | Usually `arm64-v8a.apk`; use `armeabi-v7a.apk` for a 32-bit OS or `x86_64.apk` for x86_64 devices and emulators. |
| Linux | 64-bit graphical desktop, glibc 2.35 or later, GTK 3 and other runtime libraries | Match `amd64` / `arm64` to `uname -m`, then choose DEB, RPM or AppImage. ARM64 RPM / AppImage packages are also available on GitHub. |

::: warning Final macOS 12 compatibility build
Standard builds cannot run on macOS 12. Use only the v0.9.2 [Apple Silicon compatibility build](https://github.com/pickrui/FlClash/releases/download/v0.9.2/flclash-v0.9.2-macos12-final-arm64.dmg) or [Intel compatibility build](https://github.com/pickrui/FlClash/releases/download/v0.9.2/flclash-v0.9.2-macos12-final-amd64.dmg). These filenames include `macos12-final`. They are no longer maintained and in-app updates are disabled; upgrade to macOS 13 or later to receive further updates.
:::

The DEB declares `libayatana-appindicator3-1` and `libsecret-1-0` as dependencies; let the package manager install them. RPM / AppImage packages also need compatible system libraries. AppImage does not bypass the glibc requirement. For SSH-only servers, see [background and server operation](#headless).

Use the release's `SHA256SUMS` for standard packages and `SHA256SUMS-macos12-final` for the macOS 12 compatibility builds. For missing Windows runtimes, see [DLL repair](/en/flclash/windows-dll).

## Illustrated steps

<figure class="guide-figure">
  <a href="/illustrations/flclash-connect-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Start from the dashboard">
    <img src="/illustrations/flclash-connect-en.svg?v=20261030-en1" alt="FlClash for oixCloud · Start from the dashboard" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

## Import your account configuration

<figure class="guide-figure">
  <a href="/illustrations/flclash-login-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Sign in to your account">
    <img src="/illustrations/flclash-login-en.svg?v=20261030-en1" alt="FlClash for oixCloud · Sign in to your account" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

1. Download FlClash for oixCloud from our download center, choose the package for your operating system and processor architecture, and sign in on the app's oixCloud page.
2. Choose email/password, an existing Access Token, or **Sign in with Google** when available. Google sign-in is for existing accounts and needs client and website support; follow the [Google sign-in steps](/en/account/security#google-client-login). Submit credentials with the login form's top-right checkmark. Wait for the active plan and managed profile and nodes to load before connecting.
3. Choose a node or policy group on the Proxies page and keep Rule mode for everyday use. On the oixCloud page, Refresh updates account information; Sync fetches the managed configuration again. Use Sync when you need to update nodes.

## Capture application traffic

- Desktop: start with **System Proxy** for applications that follow it. Enable **TUN** and complete system authorization when you need broader traffic capture.
- Android: allow the system VPN request and check that the target app is not excluded.

Use the play button in the dashboard **Status** card to start and the same card's pause button to stop. Card arrangements vary with window width; the start control is no longer fixed at the page's bottom right.

Capture settings control whether traffic enters the client. Rule and Global modes control what happens afterward. See [System Proxy and TUN](/en/flclash/capture).

## Verify the connection

Select a permitted, available node in Proxies, open the target service and inspect connections. Sync the managed configuration after plan or node changes; repeated sign-out is not a refresh procedure.

For sign-in failures, retain the exact error and version, then check networking, system time and account status.

For a missing-DLL error at Windows startup, identify the file and runtime using [Missing DLL repair](/en/flclash/windows-dll).

## Google sign-in troubleshooting

If the button is missing, check your installed version; a feature in the maintained source may not yet be in your stable build. If the browser remains open, use its Return to App link. Restart an expired flow from the client. For an unregistered-email message, sign in with the Google account matching your existing account or complete website registration first. Do not repeatedly reset tokens to troubleshoot a browser return.

## Headless and background operation {#headless}

FlClash for oixCloud is a graphical client. Its standard desktop packages do not provide a standalone command-line mode. Choose the approach that matches your device.

### Run in the background with an existing desktop

1. Sign in, sync the managed configuration and verify a connection in the interface first.
2. Open **General → Startup and background** and enable **Auto launch**, **Silent launch** and **Auto run**.
3. At the next system auto-launch, the app starts in the background and runs the proxy automatically. Open the window from the tray or menu bar when needed.

`--silent-launch` only requests a silent launch and also requires the **Silent launch** setting to be enabled. It still depends on a graphical environment and cannot run the app on an SSH-only server.

### Manage a Linux server or NAS through a browser

Use the FlClash for oixCloud Docker image to sign in and manage the app from another device's browser. The host does not need a local desktop, but the container still runs the graphical client. Follow the [FlClash Docker guide](https://github.com/pickrui/FlClash/blob/main/docker/README.md) for deployment.

::: warning Browser management access
The browser interface has no authentication by default; do not expose it directly to the Internet. System Proxy or TUN inside the container does not automatically capture traffic from the host or other LAN devices. Configure proxy ports and access scope separately as described in the Docker guide.
:::

### Use only the command line over SSH

Use the public oixCloud Helper Docker image to provide proxy ports through a configuration file. Follow [Helper on Linux and runtime diagnostics](/en/other/helper-linux) to validate the configuration, start the program and verify connectivity. Helper port mapping does not provide the same rule routing and TUN traffic capture as FlClash for oixCloud.
