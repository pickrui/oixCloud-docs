---
description: Install OpenClash on OpenWrt, sign in, select the integrated profile and verify client traffic
---

# OpenClash installation and configuration

For OpenWrt / LuCI. Use the build linked by the [download center](https://oixcloud.com/client/router); generic or older distributions may not expose the same account entry.

## 1. Install or update the plugin

1. Existing users should back up under **Services → OpenClash → Plugin Settings → Version Update** first. Backups can contain credentials and subscription URLs.
2. Download the matching package from the release page linked by the download center: `.ipk` for `opkg` firmware or `.apk` for `apk` firmware. Upload through **System → Software**.
3. Select dependencies for both the package manager and firewall: Firewall4/nftables and Firewall3/iptables require different combinations. Use the corresponding release instructions.
4. Check the CPU build architecture on the update page. To update the plugin, wait for download-address checks, select an available **Plugin** version and wait for the log to finish before refreshing.

The LuCI plugin and proxy core update separately. Updating only the core cannot add a new web menu. For installation failures, inspect the package error, free storage and firmware dependencies.

## 2. Sign in to oixCloud

Open **Services → OpenClash → Plugin Settings → oixCloud** and use email/password or Token Login. Supply an Access Token itself, not a subscription URL.

Wait for account information, profile download and core processing. The plugin creates or updates the `oixCloud - smart` subscription. Visible plan and traffic data proves account retrieval, not that the correct profile is active.

## 3. Select the profile and start

1. Find `oixCloud - smart.yaml` in the profile area on **Overview / Running Status**.
2. Select it and use **Switch** if another profile is active. Wait for any resulting restart; enable the start switch if it is still stopped.
3. Inspect logs for successful configuration loading and core startup. The core version should include `oix`.
4. Begin with the generated profile and **Rule** mode, then select an available node or group in the dashboard.

While signed in, the integrated build prioritizes the dedicated core; the separate Smart Core switch is not required. Do not pass the dedicated subscription through a third-party converter, which can discard required settings.

## 4. Verify from a LAN device

1. Check the device's gateway, DNS and OpenClash access controls for your main-router or secondary-router setup.
2. Visit both a direct destination and a destination requiring a proxy.
3. Check the target, matched rule and outbound in the dashboard's connection records.

An account card, latency result or Running status alone does not prove that device traffic is captured. Browser secure DNS, other DNS plugins, IPv6 and secondary-router gateways can change the path.

## 5. Updates and node filters

- Update the profile from Overview or configure an automatic schedule under **Config Subscribe**; verify the selected profile and nodes afterwards.
- Open **Node Filter** on the oixCloud tab to edit on the website. Restart OpenClash after saving to fetch immediately, or wait for the core's next subscription update. OpenClash devices on the same account share the filter; see [Subscriptions and filters](/en/account/subscriptions).
- Back up before plugin/core upgrades, and use the matching update control. A plugin upgrade and a subscription refresh are separate operations.

## Troubleshooting

| Symptom | Next step |
| --- | --- |
| No oixCloud tab | Check the build linked by the download center, update the plugin and refresh browser cache. |
| Core download/start fails | Read the current log, then check CPU architecture, time, space and dependencies. The dedicated core has its own download source; GitHub reachability alone is inconclusive. |
| Signed in but no profile | Check and update `oixCloud - smart` under Config Subscribe, then explicitly switch to it. |
| Router running but device fails | Check device gateway, DNS, access controls and IPv6, then inspect connections. |

Before reporting, generate debug logs from **Running Log → Generate Log** and include plugin/core versions, mode and reproduction time, with credentials removed. References: [maintained OpenClash integration](https://github.com/pickrui/OpenClash) and [OpenClash manual](https://github.com/vernesong/OpenClash/wiki).
