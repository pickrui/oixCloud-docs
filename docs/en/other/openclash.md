---
description: Install OpenClash on OpenWrt, sign in, select the integrated profile and verify client traffic
---

# OpenClash installation and configuration

For OpenWrt / LuCI. The [download center](https://oixcloud.com/client#router) links to upstream installation guidance. [Upstream releases](https://github.com/vernesong/OpenClash/releases/latest) provide `.ipk` / `.apk` packages but do not guarantee the oixCloud account integration described below. Confirm that your installed maintained build includes that entry before following the account workflow. Changing only the core cannot add the account tab to a generic build.

## Firmware and dependency requirements

| Item | Selection |
| --- | --- |
| Firmware | OpenWrt / LuCI with feeds supplying the required kernel modules and dependencies; the router model alone is insufficient. |
| Package manager | `.ipk` for `opkg`, `.apk` for `apk`. The LuCI plugin package is marked `all`; the proxy core still needs the correct CPU architecture. |
| Firewall | Match dependencies to Firewall4 / nftables or Firewall3 / iptables; see the [maintained repository's installation instructions](https://github.com/pickrui/OpenClash/tree/dev#快速开始). |
| Storage and memory | Reserve space for the plugin, core, configurations and runtime cache. Resolve firmware/feed mismatches if matching kernel modules are unavailable. |

## 1. Install or update the plugin

1. Existing users should back up under **Services → OpenClash → Plugin Settings → Version Update** first. Backups can contain credentials and subscription URLs.
2. Download the matching package from the relevant release page or the provider of your maintained build: `.ipk` for `opkg` firmware or `.apk` for `apk` firmware. Upload through **System → Software**.
3. Select dependencies for both the package manager and firewall: Firewall4/nftables and Firewall3/iptables require different combinations. Use the corresponding release instructions.
4. Check the CPU build architecture on the update page. To update the plugin, wait for download-address checks, select an available **Plugin** version and wait for the log to finish before refreshing.

The LuCI plugin and proxy core update separately. Updating only the core cannot add a new web menu. For installation failures, inspect the package error, free storage and firmware dependencies.

## 2. Sign in to oixCloud

Signing in downloads and selects `oixCloud.yaml` and starts or restarts OpenClash. Switching profiles briefly interrupts any traffic already using the router’s proxy.

1. Open LuCI at the router’s LAN address and go to **Services → OpenClash → Plugin Settings → oixCloud**.
2. Sign in with email and password, or choose **Sign in with Google**, allow the pop-up and select the email of an existing oixCloud account. For **Token Login**, paste the [full Access Token shown when you create it](/en/account/access-tokens#manual-token).
3. Keep LuCI open while the profile downloads and starts. Check that `oixCloud.yaml` is active on the status page. If the download fails, return to the oixCloud tab and select **Update Config**.

Once signed in, the router can load managed nodes without device approval. The first sign-in sends a new-device alert to your account; see [New devices and sign-in alerts](/en/account/client-sign-in#device-approval). Plugin 0.48.014 and earlier cannot tell devices apart, so under **Signed-in clients** on the website it shares one row with other routers on the same old version. Update the plugin and sign in again to list it separately.

## 3. Select the profile and start


<figure class="guide-figure">
  <a href="/illustrations/openclash-running-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Confirm the managed profile is running">
    <img src="/illustrations/openclash-running-en.svg?v=20261127-5" alt="Confirm the managed profile is running" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

1. Check that `oixCloud.yaml` is selected in the profile area on **Overviews (Running Status)**. Older plugin versions may show `oixCloud - smart.yaml`.
2. Select it and use **Switch** if another profile is active. Wait for any resulting restart; enable the start switch if it is still stopped.
3. Inspect logs for successful configuration loading and core startup. The core version should include `oix`.
4. Begin with the generated profile and **Rule** mode, then select an available node or group in the dashboard.

While signed in, the integrated build selects the dedicated core automatically.

### Import an ordinary subscription URL {#import-url}

1. Under [User Center → Subscription addresses](https://oixcloud.com/user#subscription-details), copy the full main **Clash/Stash** URL. It provides a complete profile. The separate Provider URL supplies nodes to an existing profile.
2. Add an entry under **Config Subscribe**. Fill in **Config Alias** and **Subscribe Address**, save, then update that entry.
3. Select the downloaded profile on the status page and switch to it. For CIA, IXP, Fusion or GIA included in your plan, use the account sign-in steps above. [Nodes available to ordinary subscriptions](/en/account/subscriptions#missing-nodes).

### Common-port capture scope {#common-ports}

The maintained build enables common-port proxying by default: listed destination ports use the proxy, while others go direct. Check the router's actual settings for existing installations. If a game, call or self-hosted service uses uncommon ports, review **Plugin Settings → Traffic Control → Common Ports Proxy Mode**, adjust, restart and verify.

UDP forwarding remains subject to the port range. Port filtering does not identify all BT/P2P traffic and does not authorize BT/P2P downloads or account sharing.

## 4. Verify from a LAN device

1. Check the device's gateway, DNS and OpenClash access controls for your main-router or secondary-router setup.
2. Visit both a direct destination and a destination requiring a proxy.
3. Check the target, matched rule and outbound in the dashboard's connection records.

An account card, latency result or Running status alone does not prove that device traffic is captured. Browser secure DNS, other DNS plugins, IPv6 and secondary-router gateways can change the path.

## 5. Updates and node filters

<figure class="guide-figure">
  <a href="/illustrations/openclash-filter-en.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="Node Filter and Update Config on the OpenClash account tab">
    <img src="/illustrations/openclash-filter-en.svg?v=20261127-3" alt="Node Filter and Update Config on the OpenClash account tab" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

- **Update the managed profile** under **Plugin Settings → oixCloud → Update Config**. If `oixCloud.yaml` is running, the plugin restarts to load the update. If another profile is active or the service is stopped, the plugin saves the file. Switch to it and start the service when needed.
- **Filter managed nodes** with **Node Filter** on the same tab. Preview and save on the website, then return to the plugin and select **Update Config**. Devices using the same subscription URL receive the changes on their next refresh. [Subscriptions and filters](/en/account/subscriptions).
- **Update an ordinary subscription** under **Config Subscribe**, where you can also set the entry’s automatic update schedule.
- Back up before plugin/core upgrades, and use the matching update control. A plugin upgrade and a subscription refresh are separate operations.

## After the first connection

- [Switch TUN or configure router DNS](/en/other/openclash-network)
- [Select nodes, add rules or chain proxies](/en/other/openclash-routing)
- [Update or manually replace the oix core](/en/other/openclash-core)

## Troubleshooting

| Symptom | Next step |
| --- | --- |
| No oixCloud tab | Confirm that the maintained build includes account integration; a generic upstream package or a core-only update does not guarantee the tab. |
| Core download/start fails | Read the current log, then check CPU architecture, time, space and dependencies. The dedicated core has its own download source; GitHub reachability alone is inconclusive. |
| Signed in but no profile | Select **Update Config** on the oixCloud tab, check the download or startup message, then look for `oixCloud.yaml` on the status page. |
| Router running but device fails | Check device gateway, DNS, access controls and IPv6, then inspect connections. |

Before reporting, generate debug logs from **Running Log → Generate Log** and include plugin/core versions, mode and reproduction time, with credentials removed. References: [maintained OpenClash integration](https://github.com/pickrui/OpenClash/tree/dev) and [OpenClash upstream installation guide](https://github.com/vernesong/OpenClash#快速开始).
