---
description: OpenWrt 上安装 OpenClash、登录账户、选择专用配置并验证设备联网
---

# OpenClash 安装与配置指南

适用于 OpenWrt / LuCI。[软件中心](https://oixcloud.com/client#router) 的 OpenClash 入口通向上游安装说明；[上游发行页](https://github.com/vernesong/OpenClash/releases/latest) 提供 `.ipk` / `.apk`，但不保证包含下文的 oixCloud 账户集成。使用账户登录流程前，先确认已安装包含该入口的维护版本；通用发行版不能仅靠更换内核增加这个标签

## 固件与依赖要求

| 项目 | 选择方式 |
| --- | --- |
| 固件 | OpenWrt / LuCI，且软件源能提供所需内核模块与依赖；不能只凭路由器型号判断 |
| 包管理器 | `opkg` 选 `.ipk`，`apk` 选 `.apk`；LuCI 插件包标记为 `all`，代理内核仍须匹配 CPU 架构 |
| 防火墙 | 按 Firewall4 / nftables 或 Firewall3 / iptables 选择依赖，见 [维护仓库的安装说明](https://github.com/pickrui/OpenClash/tree/dev#快速开始) |
| 空间与内存 | 为插件、代理内核、配置和运行缓存预留空间；缺少对应固件版本的内核模块时应先解决软件源匹配问题 |

## 1. 安装或更新插件

1. 已安装用户先到「服务 → OpenClash → 插件设置 → 版本更新」备份现有配置；备份可能含账号、令牌和订阅地址，妥善保存
2. 首次安装从对应的发行页或维护版本提供方获取安装包：`opkg` 固件用 `.ipk`，`apk` 固件用 `.apk`，在「系统 → 软件包」上传安装
3. 依赖同时按包管理器和防火墙类型选择：Firewall4 / nftables 与 Firewall3 / iptables 的依赖组合不同，使用发布页对应命令，不要混装
4. 在「版本更新」核对设备 CPU 的「编译版本」。更新插件时先等待地址检测，再点击可用地址的「插件」版本，等日志完成后刷新页面

LuCI 插件和代理内核可单独更新。找不到新菜单时，仅更新内核不会更新网页界面；安装失败先查看软件包错误、存储空间和固件依赖

## 2. 登录 oixCloud

登录成功后，插件会下载 `oixCloud.yaml`，切换到这份配置并启动或重启 OpenClash。路由器正在代理流量时，切换会短暂中断连接

1. 通过路由器的局域网地址打开 LuCI，进入「服务 → OpenClash → 插件设置 → oixCloud」
2. 用邮箱和密码登录，或选「使用 Google 登录」，允许弹窗并在其中选择已有 oixCloud 账户的邮箱。用令牌时选「Token 登录」，粘贴网站[新增时显示的完整 Access Token](/account/access-tokens#manual-token)
3. 保持 LuCI 页面打开，等配置下载和启动完成。在「运行状态」确认当前配置为 `oixCloud.yaml`。若提示配置下载失败，回到 oixCloud 标签点「更新配置」重试

登录成功后路由器即可获取托管节点，不需要批准设备；首次登录时账户会收到新设备登录提醒，见 [新设备登录与提醒](/account/client-sign-in#device-approval)。0.48.014 及更早的插件不区分设备，网站「已登录的客户端」里会和其他同样旧版的路由器合在一行，更新插件后重新登录即可单独列出

## 3. 选择配置并启动


<figure class="guide-figure">
  <a href="/illustrations/openclash-running-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="OpenClash · 确认正在运行专用配置">
    <img src="/illustrations/openclash-running-zh.svg?v=20261127-5" alt="OpenClash · 确认正在运行专用配置" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据</figcaption>
</figure>

1. 在「运行状态」的配置文件区域确认 `oixCloud.yaml` 已选中。升级前的旧版可能显示 `oixCloud - smart.yaml`
2. 如果当前不是它，选中并「切换」；等待由切换触发的重启完成，仍未运行时再打开启动开关
3. 查看运行日志，确认配置加载和内核启动成功，内核版本应包含 `oix`
4. 初次使用保留专用配置和「策略代理 / Rule」模式，再到控制面板选择可用节点或策略组

保留账户登录时，集成版本会优先选择专用内核，无需额外打开「Smart 内核」开关

### 用普通订阅网址导入 {#import-url}

1. 在[用户中心 → 订阅地址](https://oixcloud.com/user#subscription-details)复制 Clash/Stash 的完整主订阅网址。它可以直接作为配置导入；下方 Provider 地址需要已有配置引用
2. 在 OpenClash「配置订阅」添加一项，填写「配置文件名」和「订阅地址」，保存后更新该项
3. 到「运行状态」选中刚下载的配置并切换。要使用套餐内的 CIA、IXP、Fusion 或 GIA，请使用上面的账户登录方式。[普通订阅能看到哪些节点](/account/subscriptions#missing-nodes)

### 常用端口代理范围 {#common-ports}

当前维护版本默认启用常用端口代理，只把所列目标端口交给代理，其他端口直连；已有设置以路由器实际配置为准。游戏、语音或自建服务使用非常用端口时，在「插件设置 → 流量控制」中核对「仅允许常用端口流量」，调整后重新启动并验证

UDP 转发开启后仍受端口范围限制。端口过滤不等于识别所有 BT／P2P，不能作为允许 BT／P2P 下载或共享账户的依据

## 4. 用局域网设备验证

1. 确认测试设备的网关、DNS 和 OpenClash 访问控制符合当前路由器或旁路由方案
2. 分别访问直连站点和需要代理的站点
3. 在控制面板的连接记录中核对目标、命中规则和出口

只有账户卡片、正常延迟或「运行中」状态，不能证明测试设备的流量已经接管。浏览器安全 DNS、其他 DNS 插件、IPv6 和旁路由网关都可能影响路径

## 5. 更新与节点筛选

<figure class="guide-figure">
  <a href="/illustrations/openclash-filter-zh.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="OpenClash 账户页的「节点筛选」和「更新配置」按钮">
    <img src="/illustrations/openclash-filter-zh.svg?v=20261127-3" alt="OpenClash 账户页的「节点筛选」和「更新配置」按钮" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据</figcaption>
</figure>

- **更新托管配置**：在「插件设置 → oixCloud」点「更新配置」。如果正在运行 `oixCloud.yaml`，插件会重启并加载新配置；如果正在用其他配置或已停止，只保存文件，需要时再切换启动
- **筛选托管节点**：在同一标签点「节点筛选」，在打开的网站预览并保存，然后回插件点「更新配置」。使用同一条订阅地址的设备在各自刷新后生效。[订阅与筛选](/account/subscriptions)
- **更新普通订阅**：在「配置订阅」更新对应的地址，也可为该项设置自动更新时间
- 升级插件或内核：先备份，在版本更新中分别选择对应下载入口，不要把插件升级和订阅更新混为一件事

## 连接后的设置

- [切换 TUN 或配置路由器 DNS](/other/openclash-network)
- [选择节点、添加规则或串联代理](/other/openclash-routing)
- [在线更新或手动替换 oix 内核](/other/openclash-core)

## 常见问题

| 现象 | 下一步 |
| --- | --- |
| 没有 oixCloud 标签 | 确认维护版本包含账户集成；上游通用安装包不保证有此入口，只有内核更新也无法增加标签 |
| 内核下载或启动失败 | 看当次日志，再查 CPU 架构、时间、空间和依赖；专用内核有独立下载来源，不能只凭 GitHub 是否可访问判断 |
| 登录成功却没有配置 | 回到 oixCloud 标签点「更新配置」，读完下载或启动提示，再到「运行状态」核对 `oixCloud.yaml` |
| 路由器已运行，设备仍异常 | 核对设备网关、DNS、访问控制和 IPv6，再看连接记录 |

反馈前在「运行日志 → 生成日志」导出调试信息，附插件与内核版本、运行模式和复现时间，并隐藏凭据。参考 [维护中的 OpenClash 集成](https://github.com/pickrui/OpenClash/tree/dev) 与 [OpenClash 上游安装说明](https://github.com/vernesong/OpenClash#快速开始)
