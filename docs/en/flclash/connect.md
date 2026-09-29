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
  <a href="/illustrations/flclash-login-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Sign in with an account">
    <img src="/illustrations/flclash-login-zh.svg?v=20260929-2" alt="Sign in with an account" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

1. Download FlClash for oixCloud from our download center, choose the package for your operating system and processor architecture, and sign in on the app's oixCloud page.
2. Sign in with an Access Token or your email and password. Once your plan is active, the client automatically imports the managed configuration. Wait for the nodes to appear, then start the connection.
3. Choose a node or policy group on the Proxies page and keep Rule mode for everyday use. On the oixCloud page, Refresh updates account information; Sync fetches the managed configuration again. Use Sync when you need to update nodes.

## Capture application traffic

- Desktop: start with **System Proxy** for applications that follow it. Enable **TUN** and complete system authorization when you need broader traffic capture.
- Android: allow the system VPN request and check that the target app is not excluded.

Capture settings control whether traffic enters the client. Rule and Global modes control what happens afterward. See [System Proxy and TUN](/en/flclash/capture).

Select an available node in Proxies, open the target service and inspect connections. Sync the managed configuration after plan or node changes; repeated sign-out is not a refresh procedure.

For sign-in failures, retain the exact error and version, then check networking, system time and account status.

For a missing-DLL error at Windows startup, identify the file and runtime using [Missing DLL repair](/en/flclash/windows-dll).
