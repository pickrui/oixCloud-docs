---
pageClass: guide-index
description: 按设备与应用查找连接和设置教程
---

# 客户端教程

还没有安装应用时，先到 [软件中心](https://oixcloud.com/client) 下载

| 设备 | 应用与教程 |
| --- | --- |
| <span class="platform gi-apple">iPhone / iPad</span> | [<span class="gi gi-oixflow" aria-hidden="true"></span>oixFlow](/oixflow/) |
| <span class="platform gi-apple">Apple TV</span> | [<span class="gi gi-oixflow" aria-hidden="true"></span>oixFlow：Apple TV 连接与同步](/oixflow/apple-tv) |
| <span class="platform gi-windows">Windows</span> <span class="platform gi-apple">macOS</span> <span class="platform gi-android">Android</span> <span class="platform gi-linux">Linux</span> | [<span class="gi gi-flclash" aria-hidden="true"></span>FlClash for oixCloud](/flclash/) |
| <span class="platform gi-openwrt">OpenWrt 路由器</span> | [<span class="gi gi-openclash" aria-hidden="true"></span>OpenClash](/other/openclash) |
| <span class="platform gi-router">Merlin 路由器</span> | [<span class="gi gi-oixclash" aria-hidden="true"></span>oixClash](/other/oixclash) |
| <span class="platform gi-apple">使用 Surge 的 Mac</span> | [<span class="gi gi-helper" aria-hidden="true"></span>oixCloud Helper 与 Surge](/other/surge) |

## 下载与系统要求 {#requirements}

| 客户端与设备 | 当前系统要求 | 下载入口 |
| --- | --- | --- |
| oixFlow：iPhone / iPad | iOS / iPadOS 18.0 及以上 | [App Store](https://apps.apple.com/app/id6838819085) · [TestFlight 安装与更新](/oixflow/connect#testflight) |
| oixFlow：Apple TV | tvOS 18.0 及以上；账户与配置同步还需兼容的 iPhone / iPad | [App Store](https://apps.apple.com/app/id6838819085) · [安装与同步](/oixflow/apple-tv) |
| FlClash for oixCloud：桌面与 Android | Windows 10+；macOS 13.0+；Android 7.0+；Linux 需图形环境与兼容运行库 | [安装包、架构与兼容版](/flclash/connect#downloads) |
| oixCloud Helper：Mac | macOS 14+ 用普通版；macOS 12 / 13 用 Legacy | [下载与 Surge 接入](/other/surge#downloads) |
| oixCloud Helper：Linux / NAS | Docker Engine 与 Compose；amd64 / arm64 | [容器部署](/other/helper-linux) |
| OpenClash / oixClash：路由器 | 分别需要兼容的 OpenWrt / LuCI 或带 KoolCenter 软件中心的 Merlin 固件 | [OpenClash](/other/openclash)、[oixClash 平台包](/other/oixclash) |

以上要求按 2026-10-30 的公开发行信息核对。下载入口跟随当前发行版，旧系统不要仅凭版本号相同就选择普通安装包；TestFlight 还受测试名额、构建有效期与该构建的系统要求限制

## 按操作查找

| 我想要 | 阅读教程 |
| --- | --- |
| 准备开始使用 | [第一次使用](/start/quick-start) |
| 把订阅导入其他兼容客户端 | [订阅与筛选](/account/subscriptions) |
| 区分节点、策略组与流量接管 | [基础概念](/start/concepts) |
| 排查已连接但无法访问 | [连接与速度排查](/help/troubleshooting) |
| 修复 Windows 缺少 DLL | [FlClash for oixCloud 缺少 DLL 修复](/flclash/windows-dll) |
| 为 OpenClash 更换或更新 oix 专用内核 | [更换与更新 oix 内核](/other/openclash#kernel-update) |
| 使用 Home ISP 住宅 IP 并设置中继或代理链 | [Home ISP 使用指南](/account/home-isp) |
| 查找 Helper 的端口与局域网设置 | [Helper 本地端口与局域网](/other/helper-mapping) |
| 在 Linux 运行 Helper | [Helper Linux 与诊断](/other/helper-linux) |

::: info 按实际平台操作
不同应用与平台支持的功能不同，请按对应教程操作；套餐、流量和账户设置统一在 [账户与服务](/account/) 查找
:::
