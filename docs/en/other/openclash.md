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
2. Sign in with email and password, or choose **Sign in with Google**, allow the pop-up and select the email of an existing oixCloud account. For **Token Login**, paste the [full Access Token shown when you create it](/en/account/security#manual-token).
3. Keep LuCI open while the profile downloads and starts. Check that `oixCloud.yaml` is active on the status page. If the download fails, return to the oixCloud tab and select **Update Config**.

Once signed in, the router can load managed nodes without device approval. The first sign-in sends a new-device alert to your account; see [New devices and sign-in alerts](/en/account/security#device-approval). Plugin 0.48.014 and earlier cannot tell devices apart, so under **Signed-in clients** on the website it shares one row with other routers on the same old version. Update the plugin and sign in again to list it separately.

## 3. Select the profile and start


<figure class="guide-figure">
  <a href="/illustrations/openclash-running-en.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="Confirm the managed profile is running">
    <img src="/illustrations/openclash-running-en.svg?v=20261127-3" alt="Confirm the managed profile is running" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

1. Check that `oixCloud.yaml` is selected in the profile area on **Overview / Running Status**. Older plugin versions may show `oixCloud - smart.yaml`.
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

### Choose a node or switch a group {#routing}

<figure class="guide-figure">
  <a href="/illustrations/metacubexd-groups-en.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="Choose a node in a MetaCubeXD Select group and check the exit in Connections">
    <img src="/illustrations/metacubexd-groups-en.svg?v=20261127-4" alt="Choose a node in a MetaCubeXD Select group and check the exit in Connections" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Illustrated interface · Fictional data</figcaption>
</figure>

1. In **Services → OpenClash → Running Status**, open MetaCubeXD from the dashboard area and go to **Proxies**. If you need the group name, visit the site once and check its matched rule and group in **Connections**.
2. Expand the matching Select group and choose a node. If the member is another group, open it to choose its member. Automatic groups such as URLTest and Fallback follow their own strategies.
3. Keep Rule mode on and revisit the site from a LAN device. Check the exit in **Connections**.

### Add a website rule on the router {#routing-rules}

<figure class="guide-figure">
  <a href="/illustrations/openclash-routing-en.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="Priority rule editor and Apply Settings button in OpenClash">
    <img src="/illustrations/openclash-routing-en.svg?v=20261127-4" alt="Priority rule editor and Apply Settings button in OpenClash" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Illustrated interface · Fictional data</figcaption>
</figure>

In LuCI, open **Services → OpenClash → Overwrite Settings → Rules Setting** and enable **Custom Clash Rules**. Add a line under the existing `rules:` in **Priority**. This example sends the test domain directly.

```yaml
rules:
  - DOMAIN-SUFFIX,example.com,DIRECT
```

Keep existing entries and a single `rules:` key. To proxy the site, replace `DIRECT` with a group in the active profile. Click **Apply Settings** at the bottom, wait for the core to restart, then make a new connection from a LAN device. This override is stored on the router. When switching profiles, check that the target group exists there too.

### Chain two nodes {#create-chain}

<figure class="guide-figure">
  <a href="/illustrations/openclash-chain-en.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="Set Dialer-proxy on the OpenClash exit node to the name of the entry">
    <img src="/illustrations/openclash-chain-en.svg?v=20261127-4" alt="Set Dialer-proxy on the OpenClash exit node to the name of the entry" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Illustrated interface · Fictional data</figcaption>
</figure>

1. Use a YAML profile you maintain with both an entry and an exit node. To start from an existing file, open its **⋮ → Copy Config** menu in **Config Manage** and edit the copy. Subscription updates regenerate the managed file.
2. Open **⋮ → Servers Manage** for your file and click **Read Config**. Under **Proxies**, edit the **exit node**, set `Dialer-proxy` to the name of the existing **entry node**, and click **Commit Settings**.
3. Back in **Servers Manage**, click **Apply Settings** to write the file. Switch to it in **Config Manage** and wait for the core to run. Choose the **exit node** in a dashboard Select group. New connections now go through the entry before reaching the exit.

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

## 6. Replace or update the oix core {#kernel-update}

<figure class="guide-figure">
  <a href="/illustrations/openclash-version-en.svg?v=20261105-3" target="_blank" rel="noopener" aria-label="OpenClash · Update or replace the oix core in Version Update">
    <img src="/illustrations/openclash-version-en.svg?v=20261105-3" alt="OpenClash · Update or replace the oix core in Version Update" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

The oix core is a Mihomo build supporting oixCloud managed nodes; an ordinary Mihomo package is not a substitute. The maintained integration prioritizes it after sign-in. Plugin, core and subscription updates are separate operations.

### Online core update

1. Open **Services → OpenClash → Plugin Settings → Version Update**. Export a backup including the core and save it to your computer first.
2. Check the CPU build architecture, such as `linux-arm64`, `linux-amd64-v1` or `linux-armv7`.
3. Click the version link in the Core column and wait for the log to confirm download, validation and replacement using the matching dedicated package.
4. Return to **Overview / Running Status**, start OpenClash if needed, check that the version contains `oix`, and verify a connection from a LAN device.

The usual installation path is `/etc/openclash/core/clash_meta`; small-flash mode uses `/tmp/etc/openclash/core/clash_meta`. The updater selects the path for the active mode and sets executable permissions.

### Manual core replacement via SSH

If online updates fail, download a `.gz` file matching the CPU build architecture from the [mihomo-oix Pre-Alpha release](https://github.com/vernesong/mihomo-oix/releases/tag/Pre-Alpha). Do not use an ordinary Mihomo build, a different CPU architecture or a desktop installer.

::: warning Back up and check space before replacing
Export a backup including the old core, and record the architecture and installation path. File size varies by version and architecture; use the actual extracted size. Run `df -h` to check temporary and destination storage. These commands assume ordinary mode and router address `192.168.1.1`. Use your actual address; in small-flash mode, replace the destination with `/tmp/etc/openclash/core/clash_meta`.
:::

1. Extract on your computer, replacing the placeholder with the actual downloaded filename:
   ```sh
   gzip -dc 'mihomo-<arch>-<version>.gz' > clash_meta
   ```
2. Stop OpenClash in LuCI's Running Status page, then upload the new file to a temporary location:
   ```sh
   scp clash_meta root@192.168.1.1:/tmp/clash_meta.new
   ```
3. Sign in to the router over SSH and confirm the new file runs and its version contains `oix`:
   ```sh
   chmod 755 /tmp/clash_meta.new
   /tmp/clash_meta.new -v
   ```
   If it fails, check architecture, file integrity and the exact error before replacing anything.
4. Confirm the destination path, copy the file and set permissions as the plugin does:
   ```sh
   cp /tmp/clash_meta.new /etc/openclash/core/clash_meta
   chmod 4755 /etc/openclash/core/clash_meta
   /etc/openclash/core/clash_meta -v
   ```
5. Start OpenClash from the web interface, inspect logs and test from a LAN device. If it fails, stop it, extract the old core from your backup and restore it with the same upload and validation steps. Repeated subscription updates do not fix a core that cannot start.

After successful verification, remove the uploaded `/tmp/clash_meta.new` if desired. Keep the computer-side backup for recovery.

## Troubleshooting

| Symptom | Next step |
| --- | --- |
| No oixCloud tab | Confirm that the maintained build includes account integration; a generic upstream package or a core-only update does not guarantee the tab. |
| Core download/start fails | Read the current log, then check CPU architecture, time, space and dependencies. The dedicated core has its own download source; GitHub reachability alone is inconclusive. |
| Signed in but no profile | Select **Update Config** on the oixCloud tab, check the download or startup message, then look for `oixCloud.yaml` on the status page. |
| Router running but device fails | Check device gateway, DNS, access controls and IPv6, then inspect connections. |

Before reporting, generate debug logs from **Running Log → Generate Log** and include plugin/core versions, mode and reproduction time, with credentials removed. References: [maintained OpenClash integration](https://github.com/pickrui/OpenClash/tree/dev) and [OpenClash upstream installation guide](https://github.com/vernesong/OpenClash#快速开始).
