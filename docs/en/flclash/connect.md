---
description: "Sign in and connect \u2014 setup, practical steps and troubleshooting"
---

# Sign in and connect

This guide is for **FlClash for oixCloud**. The upstream general-purpose client has different account integration. Download from the [software center](https://oixcloud.com/client).

## Illustrated steps

<figure class="guide-figure">
  <a href="/illustrations/flclash-connect-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Dashboard and traffic capture">
    <img src="/illustrations/flclash-connect-zh.svg?v=20260929-2" alt="Dashboard and traffic capture" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

## Import your account configuration

<figure class="guide-figure">
  <a href="/illustrations/flclash-login-zh.svg?v=20261016" target="_blank" rel="noopener" aria-label="Sign in with an account">
    <img src="/illustrations/flclash-login-zh.svg?v=20261016" alt="Sign in with an account" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

1. Download FlClash for oixCloud from our download center, choose the package for your operating system and processor architecture, and sign in on the app's oixCloud page.
2. Choose email/password, an existing Access Token, or **Sign in with Google** when available. Google sign-in is for existing accounts and needs client and website support; follow the [Google sign-in steps](/en/account/security#google-client-login). Wait for the active plan and managed profile and nodes to load before connecting.
3. Choose a node or policy group on the Proxies page and keep Rule mode for everyday use. On the oixCloud page, Refresh updates account information; Sync fetches the managed configuration again. Use Sync when you need to update nodes.

## Capture application traffic

- Desktop: start with **System Proxy** for applications that follow it. Enable **TUN** and complete system authorization when you need broader traffic capture.
- Android: allow the system VPN request and check that the target app is not excluded.

Capture settings control whether traffic enters the client. Rule and Global modes control what happens afterward. See [System Proxy and TUN](/en/flclash/capture).

Select an available node in Proxies, open the target service and inspect connections. Sync the managed configuration after plan or node changes; repeated sign-out is not a refresh procedure.

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

Use the separate oixCloud Helper Linux program or its Docker image to provide proxy ports through a configuration file. Follow [Helper on Linux and runtime diagnostics](/en/other/helper-linux) to validate the configuration, start the program and verify connectivity. Helper port mapping does not provide the same rule routing and TUN traffic capture as FlClash for oixCloud.
