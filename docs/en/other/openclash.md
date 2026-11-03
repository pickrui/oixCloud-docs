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

Open **Services → OpenClash → Plugin Settings → oixCloud**. First use email/password to create the dedicated OpenClash token. You can then use **Token Login** with that Access Token itself, not a subscription URL. See [first sign-in](/en/account/security#first-client-login) for obtaining an oixCloud password after Google registration and restricting client password sign-in.

Wait for account information, profile download and core processing. The plugin creates or updates the `oixCloud - smart` subscription. Visible plan and traffic data proves account retrieval, not that the correct profile is active.

## 3. Select the profile and start


<figure class="guide-figure">
  <a href="/illustrations/openclash-running-en.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="Confirm the managed profile is running">
    <img src="/illustrations/openclash-running-en.svg?v=20261102-3" alt="Confirm the managed profile is running" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

1. Find `oixCloud - smart.yaml` in the profile area on **Overview / Running Status**.
2. Select it and use **Switch** if another profile is active. Wait for any resulting restart; enable the start switch if it is still stopped.
3. Inspect logs for successful configuration loading and core startup. The core version should include `oix`.
4. Begin with the generated profile and **Rule** mode, then select an available node or group in the dashboard.

While signed in, the integrated build prioritizes the dedicated core; the separate Smart Core switch is not required. Do not pass the dedicated subscription through a third-party converter, which can discard required settings.

### Common-port capture scope {#common-ports}

The maintained build enables common-port proxying by default: listed destination ports use the proxy, while others go direct. Check the router's actual settings for existing installations. If a game, call or self-hosted service uses uncommon ports, review **Plugin Settings → Traffic Control → Common Ports Proxy Mode**, adjust, restart and verify.

UDP forwarding remains subject to the port range. Port filtering does not identify all BT/P2P traffic and does not authorize BT/P2P downloads or account sharing.

## 4. Verify from a LAN device

1. Check the device's gateway, DNS and OpenClash access controls for your main-router or secondary-router setup.
2. Visit both a direct destination and a destination requiring a proxy.
3. Check the target, matched rule and outbound in the dashboard's connection records.

An account card, latency result or Running status alone does not prove that device traffic is captured. Browser secure DNS, other DNS plugins, IPv6 and secondary-router gateways can change the path.

## 5. Updates and node filters

- Update the profile from Overview or configure an automatic schedule under **Config Subscribe**; verify the selected profile and nodes afterwards.
- Open **Node Filter** on the oixCloud tab to edit on the website. Restart OpenClash after saving to fetch immediately, or wait for the core's next subscription update. OpenClash devices on the same account share the filter; see [Subscriptions and filters](/en/account/subscriptions).
- Back up before plugin/core upgrades, and use the matching update control. A plugin upgrade and a subscription refresh are separate operations.

## 6. Replace or update the oix kernel {#kernel-update}

<figure class="guide-figure">
  <a href="/illustrations/openclash-version-en.svg?v=20261103-1" target="_blank" rel="noopener" aria-label="OpenClash · Update or replace the oix kernel in Version Update">
    <img src="/illustrations/openclash-version-en.svg?v=20261103-1" alt="OpenClash · Update or replace the oix kernel in Version Update" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

The oix kernel is a customized build of Mihomo with dedicated routing and protocol optimizations for oixCloud nodes. In OpenClash, it occupies the Meta core path at `/etc/openclash/core/clash_meta` (or `/tmp/etc/openclash/core/clash_meta` when small-flash mode is enabled). In maintained builds, signing in to oixCloud sets `oix_token`, which automatically marks the core type as `Oix` and prioritizes this binary. You can update it online or replace it manually using the steps below.

### Online core update

1. Open **Services → OpenClash → Plugin Settings → Version Update**.
2. Check the CPU build architecture at the top of the page, such as `linux-arm64`, `linux-amd64-v1` or `linux-armv7`.
3. Click the version link under the Core column to start the download. Maintained builds retrieve the matching `mihomo-oix` package from the dedicated release source.
4. Wait for the log to confirm replacement. The system writes the binary to `/etc/openclash/core/clash_meta` and applies `4755` permissions automatically.
5. Return to **Overview / Running Status** and restart OpenClash. Confirm in the status card and logs that the core version includes `oix`.

### Manual core replacement via SSH

If the router cannot connect directly to download sources or you need to test a specific oix build, replace the binary manually:

1. **Prepare the core binary**: Download the matching oix core archive (`mihomo-<arch>-<version>.gz`), and decompress it on your computer or router:
   ```sh
   gzip -dc mihomo-linux-arm64-v1.gz > clash_meta
   ```
2. **Stop OpenClash**: In **Overview / Running Status**, toggle the master switch off to stop running core processes.
3. **Upload to the router**: Transfer the binary to the router's core path using SCP, SFTP, or terminal commands:
   ```sh
   scp clash_meta root@192.168.1.1:/etc/openclash/core/clash_meta
   ```
4. **Grant execute permissions**: Sign in via SSH and apply executable permissions:
   ```sh
   chmod 4755 /etc/openclash/core/clash_meta
   ```
5. **Verify the core build**: Run the core directly in SSH to verify its version:
   ```sh
   /etc/openclash/core/clash_meta -v
   ```
   The output should display version details containing `oix` or `alpha-oix`. If `cannot execute binary file` appears, the CPU architecture does not match your router.
6. **Start and verify**: Return to the OpenClash web interface, turn on the master switch, and verify that the core starts cleanly in the logs.

::: warning Check storage space and small-flash settings
The OpenClash core binary is typically 15–30 MB. Run `df -h` in the terminal to verify that the partition holding `/etc` (typically `/overlay` or rootfs) has sufficient free space. If small-flash mode is enabled, the target path is `/tmp/etc/openclash/core/clash_meta`.
:::

## Troubleshooting

| Symptom | Next step |
| --- | --- |
| No oixCloud tab | Confirm that the maintained build includes account integration; a generic upstream package or a core-only update does not guarantee the tab. |
| Core download/start fails | Read the current log, then check CPU architecture, time, space and dependencies. The dedicated core has its own download source; GitHub reachability alone is inconclusive. |
| Signed in but no profile | Check and update `oixCloud - smart` under Config Subscribe, then explicitly switch to it. |
| Router running but device fails | Check device gateway, DNS, access controls and IPv6, then inspect connections. |

Before reporting, generate debug logs from **Running Log → Generate Log** and include plugin/core versions, mode and reproduction time, with credentials removed. References: [maintained OpenClash integration](https://github.com/pickrui/OpenClash/tree/dev) and [OpenClash upstream installation guide](https://github.com/vernesong/OpenClash#快速开始).
