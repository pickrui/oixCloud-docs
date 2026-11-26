---
description: "登录与首次连接的操作步骤、适用范围与常见问题"
---

# 登录与首次连接

适用于 FlClash for oixCloud；上游通用版的账户入口与本教程不同，请从 [软件中心](https://oixcloud.com/client) 下载

## 下载与系统要求 {#downloads}

优先从 [软件中心](https://oixcloud.com/client) 下载；也可使用本分支的 [最新 GitHub 发行页](https://github.com/pickrui/FlClash/releases/latest)，不要误装其他分支的通用版

| 系统 | 要求 | 安装包选择 |
| --- | --- | --- |
| Windows | Windows 10 及以上，64 位系统 | Intel / AMD 用 `amd64`（x64），ARM 设备用 `arm64`；`.exe` 为安装版，`.zip` 为便携版 |
| macOS | 普通版要求 macOS 13.0 及以上 | Apple Silicon 用 `arm64.dmg`，Intel 用 `amd64.dmg` |
| Android | Android 7.0（API 24）及以上 | 通常选 `arm64-v8a.apk`；32 位系统选 `armeabi-v7a.apk`，x86_64 设备或模拟器选 `x86_64.apk` |
| Linux | 64 位图形环境、glibc 2.35 及以上、GTK 3 等运行库 | 按 `uname -m` 选择 `amd64` / `arm64`，再选 `.deb`、`.rpm` 或 AppImage；ARM64 的 RPM / AppImage 可在 GitHub 发行页获取 |

::: warning macOS 12 兼容版
使用 macOS 12 Monterey 时，到[发行页](https://github.com/pickrui/FlClash/releases/latest)选择文件名带有 `macos12` 的 DMG，Apple Silicon 选 `arm64`，Intel 选 `amd64`。如果该版只提供普通 DMG，可下载 v0.9.4 兼容包（[Apple Silicon](https://github.com/pickrui/FlClash/releases/download/v0.9.4/flclash-v0.9.4-macos12-arm64.dmg)、[Intel](https://github.com/pickrui/FlClash/releases/download/v0.9.4/flclash-v0.9.4-macos12-amd64.dmg)）。兼容版需手动更新，先退出 FlClash 再安装
:::

Linux 的 DEB 包声明依赖 `libayatana-appindicator3-1` 和 `libsecret-1-0`，应由包管理器安装依赖；RPM / AppImage 也仍需要兼容的系统运行库。AppImage 不会绕过 glibc 要求，只有 SSH 的服务器请看本页 [后台与服务器运行](#headless)

下载后，普通安装包用发行页的 `SHA256SUMS` 核对，macOS 12 兼容包用同一版本的 `SHA256SUMS-macos12` 核对。Windows 缺少运行库时见 [DLL 修复](/flclash/windows-dll)

## 操作示意

<figure class="guide-figure">
  <a href="/illustrations/flclash-connect-zh.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 仪表盘启动与接管">
    <img src="/illustrations/flclash-connect-zh.svg?v=20261102-3" alt="FlClash for oixCloud · 仪表盘启动与接管" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

## 导入账户配置

<figure class="guide-figure">
  <a href="/illustrations/flclash-login-zh.svg?v=20261125-1" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 登录账户">
    <img src="/illustrations/flclash-login-zh.svg?v=20261125-1" alt="FlClash for oixCloud · 登录账户" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

1. 从软件中心下载 FlClash for oixCloud，选择适合设备系统与架构的安装包，打开应用中的「oixCloud」页面登录
2. 默认用邮箱和密码登录。已有 oixCloud 账户也可选「使用 Google 登录」，或在表单底部切换到 Access Token 后粘贴完整令牌。[Google 登录步骤](/account/security#google-client-login)
3. 等托管配置下载完成，在「配置」确认已选中 oixCloud，再到「代理」选择节点或策略组。日常使用保持「规则」模式

新设备首次登录会收到账户提醒，成功后即可使用套餐内的节点。使用 Access Token 时，在网站[新增并保存完整令牌](/account/security#manual-token)，只显示一次。只想导入自己的订阅，可直接按[普通订阅导入步骤](/flclash/profiles#other-subscription)操作

套餐或筛选变动后，在「oixCloud」页点「刷新节点」。旧版若分开显示「刷新」和「同步」，选「同步」

## 让应用使用代理

- 桌面系统：先启用「系统代理」供支持系统代理的应用使用；需要接管更多应用时，再配置「虚拟网卡」并完成系统授权
- Android：启动时允许系统的 VPN 连接请求；检查是否把目标应用排除在 VPN 之外

在仪表盘的「状态」卡片点击播放按钮启动，停止时使用同一卡片的暂停按钮。桌面布局与窄窗口的卡片排列可能不同，不再按旧图寻找页面右下角的固定启动按钮

这两个设置决定流量是否进入客户端；「规则 / 全局」决定进入以后如何选择出口。详见 [系统代理与虚拟网卡](/flclash/capture)

仪表盘顶部的状态按钮可查看内核状态。支持应用内更新的版本也会在这里显示下载进度；点开状态卡后，可以切换卡片查看更新是否已准备好安装

## 验证连接

在「代理」打开目标网站使用的手动选择组，点一个可用节点。重新访问网站，在「连接」核对命中规则与出口。[自动组的首选节点](/flclash/proxies#choose-outbound)可在同一页设置。套餐或节点变化后刷新托管配置即可

登录失败时保留原始报错与客户端版本，先排查网络、系统时间及账户状态

Windows 启动提示找不到 DLL 时，先按 [缺少 DLL 修复](/flclash/windows-dll) 核对具体文件和运行库

## Google 登录排查

没有按钮、浏览器未返回、流程超时或邮箱未注册时，按统一的 [Google 登录排查](/account/security#google-troubleshooting) 处理

## 无图形界面与后台运行 {#headless}

FlClash for oixCloud 是图形客户端，常规桌面安装包没有独立的纯命令行运行模式。根据设备环境选择下面的方式

### 已有桌面环境，希望后台运行

1. 先在界面登录账户、同步托管配置并验证连接
2. 打开「常规 → 启动与后台」，开启「自启动」「静默启动」「自动运行」
3. 下次随系统自启动时，应用在后台启动并自动运行代理；需要操作时从托盘或菜单栏打开窗口

`--silent-launch` 只用于静默启动，并且需要同时开启「静默启动」设置，仍然依赖图形环境，不能用于只有 SSH 的服务器

### Linux 服务器或 NAS，希望通过浏览器操作

可使用 FlClash for oixCloud 的 Docker 镜像，在另一台设备的浏览器中登录和管理。宿主机无需本地桌面，容器内部仍运行图形客户端；部署步骤见 [FlClash for oixCloud Docker 教程](https://github.com/pickrui/FlClash/blob/main/docker/README_zh_CN.md)

::: warning 浏览器管理界面的访问范围
浏览器管理界面默认没有鉴权，不要直接暴露到公网。容器中的系统代理或虚拟网卡不会自动接管宿主机或其他局域网设备的流量，需按 Docker 教程单独配置代理端口与访问范围
:::

### 只有 SSH，希望使用纯命令行

可使用 oixCloud Helper 的公开 Docker 镜像，通过配置文件提供代理端口。按 [Helper Linux 与运行诊断](/other/helper-linux) 完成配置检查、启动和连接验证；Helper 的端口映射不等同于 FlClash for oixCloud 的规则分流与虚拟网卡接管
