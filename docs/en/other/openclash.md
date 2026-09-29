---
description: "OpenClash on a router \u2014 setup, practical steps and troubleshooting"
---

# OpenClash on a router

## Connect

1. Open the OpenClash installation page from our download center. In your OpenWrt router's System → Software page, install the .ipk or .apk package appropriate for its package manager.
2. Go to Services → OpenClash → Plugin Settings → oixCloud, and sign in with your email and password or an Access Token.
3. Signing in creates or updates the oixCloud - smart configuration and downloads the required core. Select that configuration in configuration management and start OpenClash. Wait for the core to run and the nodes to load, then choose a policy group in the dashboard and test connectivity.

If the oixCloud tab is missing, update OpenClash first. Check the runtime log if the core download fails. This account integration requires the Oix core; a standard Clash configuration is not a direct substitute. After the router reports that it is running, test from a LAN device to confirm that its gateway, DNS, and access-control settings actually route traffic through it.

[Software center](https://oixcloud.com/client) · [Troubleshooting](/en/help/troubleshooting)
