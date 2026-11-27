---
description: Install oixClash on a Merlin router, sign in, turn on the proxy and verify LAN devices
---

# oixClash installation and configuration

For Merlin firmware with the KoolCenter software center (Merlin mods and modified stock firmware). Use the build linked by the [download center](https://oixcloud.com/client#router). oixClash takes over LAN devices with the configuration oixCloud delivers, so LAN devices need the correct gateway and DNS but no separate client installation. The plugin cannot import other subscriptions. The plugin page is in Chinese, so its labels below are given in Chinese with a translation.

## 1. Choose the package

Open **软件中心** (Software Center) in the router admin page, check the platform it reports, then click the matching package below to download it directly. You do not need to open GitHub:

<div class="oixclash-downloads">

| Platform | Package | Common models |
| --- | --- | --- |
| HND 32-bit (armv7) | [Download](https://dl.dler.io/oixclash_hnd_armv7.tar.gz) | RT-AX58U, TUF-AX5400 |
| HND 64-bit (arm64) | [Download](https://dl.dler.io/oixclash_hnd_arm64.tar.gz) | RT-AX86U, RT-AX88U, GT-AX6000, GT-AX11000 |
| mtk | [Download](https://dl.dler.io/oixclash_mtk.tar.gz) | TUF-AX4200Q, TX-AX6000, RT-AX57 Go and similar |
| qca | [Download](https://dl.dler.io/oixclash_qca.tar.gz) | RT-AX89X |
| ipq32 | [Download](https://dl.dler.io/oixclash_ipq32.tar.gz) | ZenWiFi BD4 |
| ipq64 | [Download](https://dl.dler.io/oixclash_ipq64.tar.gz) | Model code TUF_6500 |

</div>

These links follow the latest stable release. You can also download the [SHA256 checksums](https://dl.dler.io/oixclash-SHA256SUMS) to verify file integrity. If a direct link is unavailable, use the matching platform file from the [latest GitHub release](https://github.com/pickrui/oixclash-merlin/releases/latest).

In-plugin updates choose the architecture automatically, including the first update from an older version. For offline installation, run `uname -m` over SSH on the router. Choose the 32-bit package for `armv7l` or `armv8l` and the 64-bit package for `aarch64`. Both packages include the core. The original `oixclash_hnd.tar.gz` link also works and requires the router to be online to fetch the matching package.

In-plugin updates reuse a compatible core. Upgrading from the core bundled with 0.0.14 to 0.0.39 requires a new core and needed about 20 MiB of free JFFS space in testing. If the installer reports insufficient space, it preserves the previous version and settings. Free the amount of space shown in the log and try again. Models with 512 MB of RAM or more can use the defaults; smaller models, including 256 MB routers, can use [memory optimization](#low-memory), available from 0.0.3. In normal mode, extracting the core into RAM consumes memory in addition to the running proxy, GeoIP data and dashboard. The amount depends on the build and architecture.

## 2. Install offline

1. Open **软件中心 → 离线安装** (Software Center → Offline Install) and upload the downloaded package.
2. Keep the file name. Remove any `(1)` a browser adds to repeated downloads, or the software center refuses the package.
3. When the installation finishes, return to the software center and open oixClash.

If the platform does not match, the software center says so and stops; install the package for your platform instead.

## 3. Sign in to oixCloud

<figure class="guide-figure">
  <a href="/illustrations/oixclash-login-en.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="oixClash · Sign in to oixClash">
    <img src="/illustrations/oixclash-login-en.svg?v=20261127-3" alt="oixClash · Sign in to oixClash" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English reference with Chinese control names · Chinese-only plugin UI</figcaption>
</figure>

Under **oixCloud 账号** (oixCloud account), choose a sign-in method.

- **登录令牌** (sign-in token) — paste the full [Access Token shown when you create it](/en/account/access-tokens#manual-token), then click **登录** (Sign in).
- **邮箱和密码** (email and password) — enter your oixCloud email and password, then click **登录**. The password is used only for this sign-in.
- **Google 登录** (Google sign-in) — open the plugin at the router’s LAN address or `router.asus.com`. Click **Google 登录**, allow the pop-up and choose the email of your existing oixCloud account. Keep the router page open until your account appears.

After signing in, the page shows the account, plan, expiry date and traffic. The router can then load managed nodes without device approval. The first sign-in sends a new-device alert to your account; see [New devices and sign-in alerts](/en/account/client-sign-in#device-approval).

## 4. Turn on the proxy

<figure class="guide-figure">
  <a href="/illustrations/oixclash-running-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="oixClash · Enable proxying and optimize memory">
    <img src="/illustrations/oixclash-running-en.svg?v=20261030-en1" alt="oixClash · Enable proxying and optimize memory" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English reference with Chinese control names · Chinese-only plugin UI</figcaption>
</figure>

1. Under **运行** (Run), turn on the switch and click **保存并应用** (Save and Apply).
2. Wait for the log to report a successful start. The first run also downloads GeoIP data and takes a moment.
3. **运行状态** (Status) shows the core as running with its version. This confirms startup; verify a LAN connection in the next section.

oixClash captures main-LAN DNS and eligible TCP according to device and port settings. From 0.0.14, **运行 → 仅代理常用端口** (Run → Common ports only) is enabled by default: common web/mail destination ports are captured and other ports go direct. An existing disabled setting is preserved.

For a game, call or other service using uncommon ports, disable **仅代理常用端口** if needed and save. UDP also requires **UDP 转发** (UDP forwarding); verify after the status reports it active. Without UDP forwarding, keep **屏蔽 QUIC** (Block QUIC) on for browser TCP fallback.

Port filtering cannot identify every BT/P2P transfer; downloads on common ports can still use the proxy. Device bypass, DNS capture and QUIC blocking retain their own settings, so the UDP switch alone does not establish capture. QUIC blocking does not affect private networks such as the LAN or a VPN.

### Small-memory routers {#low-memory}

From oixClash 0.0.3, **内存优化** (Memory Optimization) turns on automatically at first installation when detected total memory is below 384 MB. Upgrades preserve an existing choice. You can also change it under **运行 → 内存优化**.

1. Enable **内存优化** and click **保存并应用**. Applying settings stops the proxy before checking the configuration, so LAN traffic temporarily goes direct. If validation fails, inspect the recovery result: current versions attempt to restore the previous settings and running state. Do not assume the new settings were applied.
2. After startup, check the text below this option. **内核在 JFFS 上运行** means the core file runs from flash. **JFFS 空间不足，内核仍解压到内存** means it is still extracted to RAM; free space used by unneeded plugins, then save and verify again.
3. Click **自检** (Self-check), check free JFFS space and available memory, then verify a LAN connection as described below.

| Change | What to consider |
| --- | --- |
| Store the core and dashboard on JFFS when space permits | Reduces memory used by files but needs more flash space. The proxy process still uses RAM. |
| Use a smaller GeoIP database | Covers only CN and a few other regions. Check matching if custom `GEOIP` rules reference other regions. |
| Cap the core's memory | Reclaims memory early near the cap to limit peaks, which costs CPU time at that point. It does not guarantee every configuration will run on a 256 MB router. |

After disabling memory optimization, a core already stored on JFFS stays there. The next plugin update restores the compressed archive for extraction to RAM at run time.

## 5. Verify with a LAN device

1. Let the test device use the gateway and DNS the router hands out, and turn off the browser's secure DNS before testing.
2. Visit a site that should go direct and one that needs the proxy.
3. Click **打开控制面板** (Open Dashboard) and check the destination, matched rule and outbound in the connection list.

Traffic of the router itself and of guest networks does not pass through oixClash. Devices that use IPv6 bypass the proxy; the status warns about it. To avoid this bypass, set the connection type on the router's **IPv6** page to disabled and verify from a LAN device. The website's [IPv4 Only](/en/account/unlock#ipv4-only) controls remote-node egress and does not fix IPv6 bypass on the router.

## 6. Nodes, filters and updates

<figure class="guide-figure">
  <a href="/illustrations/oixclash-filter-en.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="Node Filter beside the oixClash account and Update Nodes at the bottom">
    <img src="/illustrations/oixclash-filter-en.svg?v=20261127-3" alt="Node Filter beside the oixClash account and Update Nodes at the bottom" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English reference with Chinese control names · Chinese-only plugin UI</figcaption>
</figure>

- **Switch nodes**: click **打开控制面板** and pick a node in a proxy group; the choice survives restarts.
- **Filter nodes** using **节点筛选** (Node Filter) beside the account. Preview and save on the website, then return to the plugin, click **更新节点** (Update Nodes) and check the dashboard. A running plugin also updates daily. A stopped plugin fetches nodes the next time you enable it.
- **刷新** (Refresh) beside the account updates plan and traffic details. The node filter follows the subscription URL used by the router. [Subscriptions and filters](/en/account/subscriptions).
- **Update the plugin**: while it is turned on, the plugin checks for a new version daily, or click **检查更新** (Check for Updates) next to the version. When **更新到 x.y.z** (Update to x.y.z) appears, click it; the plugin downloads and verifies the package before installing, and the proxy pauses briefly.

If the in-plugin updater cannot verify a package, or an older self-check reports missing `sha256sum`, download the matching package from this page and update through **软件中心 → 离线安装** (Software Center → Offline Install). Do not install a package with a checksum mismatch; download it again and verify SHA256.

## After the first connection

- [Set router DNS, capture mode or active node](/en/other/oixclash-network)
- [Edit account rules](/en/other/oixclash-rules)

## Troubleshooting

| Symptom | Next step |
| --- | --- |
| Offline install reports a platform mismatch or a bad file name | Download the package for the platform the software center reports and remove `(1)` from the file name |
| **运行状态** shows 登录已失效 (sign-in expired) | Click 退出登录 (Sign out), then sign in again |
| Status shows 账号没有可用的套餐 (no active plan) | Renew, then click **保存并应用** |
| Status shows 路由器时间尚未同步 (router time not synchronized), or the log says the time is wrong | Check the time zone and NTP server under **Administration → System**; the plugin starts by itself once the time syncs |
| Not enough memory; the core cannot start | Enable memory optimization, close unneeded plugins, then click **保存并应用**. After a memory failure, the watchdog retries every 30 minutes. |
| Memory optimization is on, but the core is still extracted to RAM | Check JFFS space and the plugin log, free flash space, then save again. Enabling the option alone does not confirm a successful move. |
| The in-plugin updater cannot verify a package | Download the package for your platform and install it offline; do not skip integrity verification. |
| UDP forwarding does not take effect | Click **自检** (Self-check) and look at the TPROXY and policy routing items; firmware without support only loses UDP, TCP stays proxied |
| Conflict with fancyss or MerlinClash | Turn off the other proxy plugin; only one can run |
| The router runs but a device still misbehaves | Check the device's gateway, DNS and IPv6, then the dashboard's connection list |
| The same node is slower through the router than on a phone or computer | • **Check the core architecture**: Click **自检** (Self-check) and check the core—64-bit hnd models should show **使用 arm64 内核** (using the arm64 core); to switch from armv7, install the HND 64-bit package offline. 32-bit models are limited by the CPU.<br>• **Check port filtering**: Speed tests on uncommon ports go direct, so turn off **仅代理常用端口** (Common ports only) temporarily before comparing |

Before contacting support, click **自检** and send its result together with the plugin log from **查看日志** (View Log), with account details hidden.
