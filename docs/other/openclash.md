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

进入「服务 → OpenClash → 插件设置 → oixCloud」，首次选择邮箱密码登录，生成 OpenClash 专属 Token；之后可选择 Token 登录，填写对应 Access Token 本身，不是订阅网址。Google 登录用户获取账户密码的方法与禁止客户端邮箱/密码登录的设置见 [首次登录说明](/account/security#first-client-login)

等待账户信息、配置和内核处理完成。插件会创建或更新 `oixCloud - smart` 订阅；能看到套餐与流量仅表示账户信息获取成功，还需检查正在使用的配置

## 3. 选择配置并启动


<figure class="guide-figure">
  <a href="/illustrations/openclash-running-zh.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="OpenClash · 确认正在运行专用配置">
    <img src="/illustrations/openclash-running-zh.svg?v=20261102-3" alt="OpenClash · 确认正在运行专用配置" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据 · 点击放大查看操作位置</figcaption>
</figure>

1. 到「运行状态」的配置文件区域找到 `oixCloud - smart.yaml`
2. 如果当前不是它，选中并「切换」；等待由切换触发的重启完成，仍未运行时再打开启动开关
3. 查看运行日志，确认配置加载和内核启动成功，内核版本应包含 `oix`
4. 初次使用保留专用配置和「策略代理 / Rule」模式，再到控制面板选择可用节点或策略组

保留账户登录时，集成版本会优先选择专用内核，无需额外打开「Smart 内核」开关。不要把专用订阅交给第三方转换器再导入，转换可能丢失需要的配置

### 常用端口代理范围 {#common-ports}

当前维护版本默认启用常用端口代理，只把所列目标端口交给代理，其他端口直连；已有设置以路由器实际配置为准。游戏、语音或自建服务使用非常用端口时，在「插件设置 → 流量控制」中核对「仅允许常用端口流量」，调整后重新启动并验证

UDP 转发开启后仍受端口范围限制。端口过滤不等于识别所有 BT／P2P，不能作为允许 BT／P2P 下载或共享账户的依据

## 4. 用局域网设备验证

1. 确认测试设备的网关、DNS 和 OpenClash 访问控制符合当前路由器或旁路由方案
2. 分别访问直连站点和需要代理的站点
3. 在控制面板的连接记录中核对目标、命中规则和出口

只有账户卡片、正常延迟或「运行中」状态，不能证明测试设备的流量已经接管。浏览器安全 DNS、其他 DNS 插件、IPv6 和旁路由网关都可能影响路径

## 5. 更新与节点筛选

- 更新配置：在运行状态页的配置区域更新，或在「配置订阅」设置自动更新时间，完成后确认当前配置与节点
- 筛选节点：oixCloud 标签的「节点筛选」打开网站编辑器；保存后重启 OpenClash 立即获取，或等待内核下次订阅更新。同账户的 OpenClash 设备共享筛选，见 [订阅与筛选](/account/subscriptions)
- 升级插件或内核：先备份，在版本更新中分别选择对应下载入口，不要把插件升级和订阅更新混为一件事

## 6. 更换与更新 oix 内核 {#kernel-update}

<figure class="guide-figure">
  <a href="/illustrations/openclash-version-zh.svg?v=20261103-1" target="_blank" rel="noopener" aria-label="OpenClash · 在版本更新中升级或更换 oix 内核">
    <img src="/illustrations/openclash-version-zh.svg?v=20261103-1" alt="OpenClash · 在版本更新中升级或更换 oix 内核" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据 · 点击放大查看操作位置</figcaption>
</figure>

oix 内核基于 Mihomo 深度定制，包含针对 oixCloud 节点的专属优化、智能调度与通信支持，在 OpenClash 中对应 Meta 内核路径 `/etc/openclash/core/clash_meta`（小闪存模式为 `/tmp/etc/openclash/core/clash_meta`）。在维护版本中登录账户后，系统会自动检测 `oix_token` 并将核心类型设为 `Oix`，优先调用该内核；若需在线更新或手动替换特定版本，可按以下方式操作

### 在线更新内核

1. 打开「服务 → OpenClash → 插件设置 → 版本更新」
2. 核对页面顶部的 CPU「编译版本」，例如 `linux-arm64`、`linux-amd64-v1` 或 `linux-armv7`
3. 在版本列表的内核列中点击版本号链接触发更新；维护版本会自动从专属源拉取对应架构的 `mihomo-oix` 内核包
4. 等待更新日志提示替换成功，系统会自动写入 `/etc/openclash/core/clash_meta` 并赋予 `4755` 权限
5. 返回「运行状态」重新启动 OpenClash，在状态卡片与运行日志中确认内核版本包含 `oix`

### 手动上传与替换内核

若路由器无法直连下载源，或需测试特定构建的 oix 内核，可手动通过命令行上传替换：

1. **准备内核文件**：根据路由器 CPU 架构获取对应的 oix 内核压缩包（格式为 `mihomo-<arch>-<version>.gz`），在电脑或终端中解压出二进制文件，或直接在路由器中解压：
   ```sh
   gzip -dc mihomo-linux-arm64-v1.gz > clash_meta
   ```
2. **停止 OpenClash**：在 LuCI「运行状态」中关闭 OpenClash 启动开关，确保没有正在运行的内核进程占用文件
3. **上传到路由器**：使用 SCP、SFTP 或终端命令将二进制文件传输至路由器的 OpenClash 内核路径：
   ```sh
   scp clash_meta root@192.168.1.1:/etc/openclash/core/clash_meta
   ```
4. **赋予执行权限**：通过 SSH 登录路由器，赋予该文件执行权限：
   ```sh
   chmod 4755 /etc/openclash/core/clash_meta
   ```
5. **验证内核版本**：在 SSH 中直接执行该文件核对版本信息：
   ```sh
   /etc/openclash/core/clash_meta -v
   ```
   正常输出应显示版本号及包含 `oix` 或 `alpha-oix` 的标识；若报错 `cannot execute binary file`，说明内核的 CPU 架构与路由器不符，需更换正确架构的包
6. **启动并验证**：返回 OpenClash 网页界面打开启动开关，在运行日志中确认内核正常运行

::: warning 上传前核对存储空间与小闪存设置
OpenClash 内核体积约在 15–30 MB 之间。上传前在终端运行 `df -h` 确认 `/etc` 所在的分区（通常为 `/overlay` 或 rootfs）有足够的剩余空间；若路由器启用了「小闪存模式」，目标路径应相应调整为 `/tmp/etc/openclash/core/clash_meta`
:::

## 常见问题

| 现象 | 下一步 |
| --- | --- |
| 没有 oixCloud 标签 | 确认维护版本包含账户集成；上游通用安装包不保证有此入口，只有内核更新也无法增加标签 |
| 内核下载或启动失败 | 看当次日志，再查 CPU 架构、时间、空间和依赖；专用内核有独立下载来源，不能只凭 GitHub 是否可访问判断 |
| 登录成功却没有配置 | 检查配置订阅中的 `oixCloud - smart`，更新成功后明确切换到该配置 |
| 路由器已运行，设备仍异常 | 核对设备网关、DNS、访问控制和 IPv6，再看连接记录 |

反馈前在「运行日志 → 生成日志」导出调试信息，附插件与内核版本、运行模式和复现时间，并隐藏凭据。参考 [维护中的 OpenClash 集成](https://github.com/pickrui/OpenClash/tree/dev) 与 [OpenClash 上游安装说明](https://github.com/vernesong/OpenClash#快速开始)
