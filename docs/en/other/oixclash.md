---
description: Install oixClash on a Merlin router, sign in, turn on the proxy and verify LAN devices
---

# oixClash installation and configuration

For Merlin firmware with the KoolCenter software center (Merlin mods and modified stock firmware). Use the build linked by the [download center](https://oixcloud.com/client/router). oixClash takes over LAN devices with the configuration oixCloud delivers, so devices need no setup; other subscriptions cannot be imported. The plugin page is in Chinese, so its labels below are given in Chinese with a translation.

## 1. Choose the package

Open **软件中心** (Software Center) in the router admin page, check the platform it reports, then click the matching package below to download it directly. You do not need to open GitHub:

<div class="oixclash-downloads">

| Platform | Package | Common models |
| --- | --- | --- |
| hnd | [Download](https://dl.dler.io/oixclash_hnd.tar.gz) | Most models, such as RT-AX86U, RT-AX88U, GT-AX6000 and GT-AX11000 |
| mtk | [Download](https://dl.dler.io/oixclash_mtk.tar.gz) | TUF-AX4200Q, TX-AX6000, RT-AX57 Go and similar |
| qca | [Download](https://dl.dler.io/oixclash_qca.tar.gz) | RT-AX89X |
| ipq32 | [Download](https://dl.dler.io/oixclash_ipq32.tar.gz) | ZenWiFi BD4 |
| ipq64 | [Download](https://dl.dler.io/oixclash_ipq64.tar.gz) | Model code TUF_6500 |

</div>

These links follow the latest stable release. You can also download the [SHA256 checksums](https://dl.dler.io/oixclash-SHA256SUMS) to verify file integrity.

The package is about 18 MB and needs room on JFFS. At run time the core takes about 48 MB of memory plus what the proxy itself uses, so a model with 512 MB of RAM or more is recommended.

## 2. Install offline

1. Open **软件中心 → 离线安装** (Software Center → Offline Install) and upload the downloaded package.
2. Keep the file name. Remove any `(1)` a browser adds to repeated downloads, or the software center refuses the package.
3. When the installation finishes, return to the software center and open oixClash.

If the platform does not match, the software center says so and stops; install the package for your platform instead.

## 3. Sign in to oixCloud

Under **oixCloud 账号** (oixCloud account), choose how to sign in:

- **登录令牌** (sign-in token): paste the access token copied from the oixCloud website or app, not a subscription URL.
- **邮箱和密码** (email and password): the password is only used for this sign-in and is not stored on the router.

After signing in, the page shows the account, plan, expiry date and traffic. A token from another oixCloud client is swapped for oixClash's own token, so its node filter is kept separately; tokens created on the website cannot be swapped and are used as they are.

## 4. Turn on the proxy

1. Under **运行** (Run), turn on the switch and click **保存并应用** (Save and Apply).
2. Wait for the log to report a successful start. The first run also downloads GeoIP data and takes a moment.
3. **运行状态** (Status) shows the core as running with its version.

oixClash takes over TCP and DNS of devices on the main LAN. To proxy UDP such as games and voice calls, tick **UDP 转发** (UDP forwarding) and save; it only works once the status reads that UDP is forwarded. Without UDP forwarding, keep **屏蔽 QUIC** (Block QUIC) on so browsers fall back to TCP, which is proxied.

## 5. Verify with a LAN device

1. Let the test device use the gateway and DNS the router hands out, and turn off the browser's secure DNS before testing.
2. Visit a site that should go direct and one that needs the proxy.
3. Click **打开控制面板** (Open Dashboard) and check the destination, matched rule and outbound in the connection list.

Traffic of the router itself and of guest networks does not pass through oixClash. Devices that use IPv6 bypass the proxy; the status warns about it, and setting the connection type on the **IPv6** page to disabled is recommended.

## 6. Nodes, filters and updates

- **Switch nodes**: click **打开控制面板** and pick a node in a proxy group; the choice survives restarts.
- **Node filter**: **订阅管理** (Subscription Management) in the account row opens the website editor. After saving, click **更新节点** (Update Nodes) in the plugin to fetch them now, or wait for the daily update. The filter applies to every oixClash signed in to the same account; see [Subscriptions and filters](/en/account/subscriptions).
- **Update the plugin**: while it is turned on, the plugin checks for a new version daily, or click **检查更新** (Check for Updates) next to the version. When **更新到 x.y.z** (Update to x.y.z) appears, click it; the plugin downloads and verifies the package before installing, and the proxy pauses briefly.

## 7. Edit account custom rules

From oixClash 0.0.2, **自定义规则** (Custom Rules) edits the same [account rules](https://oixcloud.com/user/rule) as the website. These rules precede the defaults. Saving affects other clients that use this account rule list. Saving an empty editor deletes the entire account list, so keep a copy of anything you need first.

1. Sign in and click **读取面板规则** (Read Panel Rules). Wait until the status confirms that the rules are ready to edit.
2. Enter one standard Surge-format rule per line, without `rules:` or a leading dash. Lines starting with `#` or `//` are comments. Use `DIRECT`, `REJECT`, or a policy group that exists in the configuration.
3. Click **保存到面板并更新** (Save to Panel and Update), then read the log. A running plugin updates and checks the configuration; a stopped plugin fetches and checks it when next enabled.
4. Make a new connection from a LAN device and verify the matched rule and outbound in the dashboard.

```text
DOMAIN-SUFFIX,example.com,DIRECT
DOMAIN,ads.example.com,REJECT
```

The router editor handles up to 8192 UTF-8 bytes. Some characters use multiple bytes. Edit longer lists on the website and then click **更新节点** (Update Nodes); do not truncate the list to fit the editor.

| Message or situation | What to do |
| --- | --- |
| Another page changed the rules | Keep a separate copy of your draft, read the latest rules, then merge your changes instead of overwriting the newer content. |
| Saved to the panel, but not applied on the router | The website list has changed. Fix the rule or network problem, then click **更新节点** and verify a connection. |
| Reading fails, or this version has no editor | Edit account rules on the website, then click **更新节点**. Reading and saving within the plugin also require support from the website. |

Reading again replaces unsaved edits, so review the confirmation first. Account rules and node filters have different sharing scopes; see [Subscriptions and filters](/en/account/subscriptions#account-rules).

## Troubleshooting

| Symptom | Next step |
| --- | --- |
| Offline install reports a platform mismatch or a bad file name | Download the package for the platform the software center reports and remove `(1)` from the file name |
| **运行状态** shows 登录已失效 (sign-in expired) | Click 退出登录 (Sign out), then sign in again |
| Status shows 账号没有可用的套餐 (no active plan) | Renew, then click **保存并应用** |
| Status shows 路由器时间尚未同步 (router time not synchronized), or the log says the time is wrong | Check the time zone and NTP server under **Administration → System**; the plugin starts by itself once the time syncs |
| UDP forwarding does not take effect | Click **自检** (Self-check) and look at the TPROXY and policy routing items; firmware without support only loses UDP, TCP stays proxied |
| Conflict with fancyss or MerlinClash | Turn off the other proxy plugin; only one can run |
| The router runs but a device still misbehaves | Check the device's gateway, DNS and IPv6, then the dashboard's connection list |

Before contacting support, click **自检** and send its result together with the plugin log from **查看日志** (View Log), with account details hidden.
