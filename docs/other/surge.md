---
description: 在 macOS 安装 oixCloud Helper，选择接入模式并连接 Surge
---

# oixCloud Helper 与 Surge

oixCloud Helper 是与 Surge Mac 配合运行的代理助手，也支持本地代理端口和 Linux。它不是 iPhone / iPad 的 `.sgmodule` 模块

<figure class="guide-figure">
  <a href="/illustrations/helper-surge-zh.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="Helper · 从菜单栏接入 Surge">
    <img src="/illustrations/helper-surge-zh.svg?v=20261127-3" alt="Helper · 从菜单栏接入 Surge" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

## 下载与系统要求 {#downloads}

Helper 的系统要求与 FlClash for oixCloud 不同，不要混用安装包

| macOS | Helper 文件 | 处理器 |
| --- | --- | --- |
| 14 及以上 | `oixcloud-external-proxy-program-arm64` | Apple Silicon |
| 14 及以上 | `oixcloud-external-proxy-program-amd64` | Intel |
| 12 / 13 | `oixcloud-external-proxy-program-legacy` | 通用版，支持 Apple Silicon 与 Intel |

推荐下载 [公开启动包 ZIP](https://github.com/pickrui/oixcloud-external-proxy-program/archive/refs/heads/main.zip)，解压后运行 `启动 oixCloud.command`，启动器会按系统和架构选择当前发行文件。也可按 [公开安装说明](https://github.com/pickrui/oixcloud-external-proxy-program/blob/main/docs/configuration.md) 使用 Homebrew 或手动安装。macOS 11 不受支持；Legacy 尚未经过充分实机验证。Surge Mac 当前稳定版也要求 macOS 12.0 及以上，下载见 [Surge 官网](https://nssurge.com/)，系统下限见 [官方更新源](https://nssurge.com/mac/latest/appcast-signed.xml)

## 安装和登录

1. 按上表下载启动包，或从 [最新发行页](https://github.com/pickrui/oixcloud-external-proxy-program/releases/latest) 手动选择对应的可执行文件
2. 使用启动包时双击「启动 oixCloud.command」，首次使用选择「常驻启动」；直接下载发行页可执行文件时，按公开安装说明安装并以 `--tray` 启动
3. 点菜单栏的 oixCloud 图标，选「登录…」。用邮箱和密码登录，或粘贴在网站[新增时显示的完整 Access Token](/account/security#manual-token)。已有账户也可点「使用 Google 登录」，在这台 Mac 的浏览器中选择相同邮箱
4. 回到 Helper 等待节点加载。有套餐后仍看不到节点，可点「节点 → 更新节点」。刚开通套餐时也可直接这样刷新

登录成功后 Helper 即可获取托管节点，不需要批准设备；首次登录时账户会收到新设备登录提醒，见 [新设备登录与提醒](/account/security#device-approval)

## 选择接入模式

在「设置 → 接入模式…」选择，默认是本地多端口映射

| 模式 | 节点在哪里选择 | 适合的使用方式 |
| --- | --- | --- |
| 本地多端口映射 | Surge 的策略组 | 每个节点对应一个本地端口，由 Surge 选择或测试 |
| 单端口 | Helper 菜单里的节点或自动选择 | 所有使用该端口的连接跟随 Helper 当前选择 |

多端口模式的 Helper 菜单会提示在 Surge 中选择节点，不会出现与单端口相同的节点选择列表

## 接入 Surge 并验证

1. 确认 Surge Mac 已安装并可运行
2. 在 Helper 点「客户端接入 → 接入 Surge」，确认 Surge 已切换到这份配置
3. 在 Surge 开启所需的系统代理或增强模式，首次使用先保留规则模式
4. 多端口模式在 Surge 策略组选择节点；单端口模式在 Helper 选择节点
5. 打开目标网站，在 Surge 的连接记录核对命中策略与出口

Helper 和 Surge 都需要保持运行。写入配置成功不一定表示 Surge 自动切换成功；遇到提示时在 Surge 手动选择刚写入的配置

### 选择节点与策略组 {#routing}

<figure class="guide-figure">
  <a href="/illustrations/helper-nodes-zh.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="在单端口模式的 Helper 节点菜单中选择自动或具体节点">
    <img src="/illustrations/helper-nodes-zh.svg?v=20261127-4" alt="在单端口模式的 Helper 节点菜单中选择自动或具体节点" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>操作示意 · 虚构数据</figcaption>
</figure>

- **本地多端口映射**：点 macOS 菜单栏的 **Surge** 图标，打开目标网站命中的手动策略组，选择映射节点。若成员又是一个组，打开那个组再选节点
- **单端口**：点菜单栏的 **oixCloud → 节点**，选择具体节点会关闭自动选择。要恢复自动选择，再点「自动选择」。使用这个端口的应用共用该出口

### 给网站指定出口或使用代理链 {#routing-rules}

1. 要让规则在重新接入 Surge 后保留，使用文本编辑器打开或新建 `~/.config/oixcloud-external-proxy-program/custom.conf`。在已有的 `[Rule]` 下加入规则；空文件可直接填入以下两行

   ```ini
   [Rule]
   DOMAIN-SUFFIX,example.com,DIRECT
   ```

2. 要指定策略组，把 `DIRECT` 换成 Surge 当前配置里显示的组名。保存，在 Helper 打开「客户端接入」，再点「接入 Surge」或「重新接入 Surge」。在 Surge 使用规则模式，重新访问网站并核对请求的规则和策略
3. 需要把两个**由 Surge 直接连接的远程代理**串成一条链时，在自己维护的 `[Proxy]` 中给出口代理追加 `underlying-proxy=入口策略名`，再让规则或手动组选择出口策略。Helper 的本地映射端口各自连接自己的节点；托管节点多跳可按账户权限设置[内部中继](/account/relay#内部中继)，在 Surge 选它的入口。见 [Surge 代理链参数](https://manual.nssurge.com/policies/parameters.html#underlying-proxy)

## 筛选、端口与日常更新

1. 打开「节点 → 节点筛选」，按线路、地区或名称选择，等预览显示要保留的节点，再点「保存」。要恢复智能优选，点「恢复默认」并确认，再「保存」
2. 保存后 Helper 会获取节点并更新映射。在网站改了筛选时，回到 Helper 点「节点 → 更新节点」。其他设备是否一起变化取决于[所用的订阅地址](/account/subscriptions)
3. Surge 还显示旧节点时，点「客户端接入 → 重新接入 Surge」。想自动更新，可在首次手动接入后开启「节点更新后自动接入 Surge」，此选项默认关闭

更改接入模式、本地端口或局域网鉴权后，按 Helper 提示重新接入 Surge。「精简规则」在「客户端接入」中设置

需要供其他应用或设备使用时，见 [本地端口与局域网接入](/other/helper-mapping)；服务器运行见 [Linux 与运行诊断](/other/helper-linux)

## 常见问题

| 提示或现象 | 处理 |
| --- | --- |
| 本机配置服务未就绪 | 等待登录与节点获取，检查端口占用及 Helper 的操作反馈 |
| 配置已写入但未自动切换 | 在 Surge 手动选择生成的配置，再检查接管设置 |
| 切换全局模式后旧版本失效 | 先回到规则模式并重新接入 Surge，再更新 Helper；全局模式下增加普通 DIRECT 规则不能修复代理回环 |
| DNS、TLS、证书时间或登录门户报错 | 按具体提示检查解析、系统时间及当前网络，完成网络登录；不要跳过 HTTPS 证书校验 |
| Token 或套餐受限 | 核对账户状态、套餐和凭据，不要把所有失败都当成节点故障 |

「工具 → 诊断…」提供诊断入口；原始日志在 `~/Library/Logs/oixcloud/`，分享前检查隐私内容。更多发行说明见 [Helper 公开文档](https://github.com/pickrui/oixcloud-external-proxy-program)
