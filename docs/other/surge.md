---
description: 在 macOS 安装 oixCloud Helper，选择接入模式并连接 Surge
---

# oixCloud Helper 与 Surge

oixCloud Helper 是与 Surge Mac 配合运行的代理助手，也支持本地代理端口和 Linux。它不是 iPhone / iPad 的 `.sgmodule` 模块

<figure class="guide-figure">
  <a href="/illustrations/helper-surge-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="Helper · 从菜单栏接入 Surge">
    <img src="/illustrations/helper-surge-zh.svg?v=20261030-2" alt="Helper · 从菜单栏接入 Surge" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
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
3. 打开菜单栏 oixCloud 的「账户 → 登录…」，首次用邮箱和密码登录，生成 oixCloud Helper 专属 Token；之后可使用对应的 Access Token。Google 登录用户获取账户密码的方法与禁止客户端邮箱/密码登录的设置见 [首次登录说明](/account/security#first-client-login)
4. 等待套餐和节点获取完成。菜单顶部有操作进度和结果，失败时查看具体原因后再处理

## 选择接入模式

在「连接设置 → 接入模式…」选择，默认是本地多端口映射

| 模式 | 节点在哪里选择 | 适合的使用方式 |
| --- | --- | --- |
| 本地多端口映射 | Surge 的策略组 | 每个节点对应一个本地端口，由 Surge 选择或测试 |
| 单端口 | Helper 菜单里的节点或自动选择 | 所有使用该端口的连接跟随 Helper 当前选择 |

多端口模式的 Helper 菜单会提示在 Surge 中选择节点，不会出现与单端口相同的节点选择列表

## 接入 Surge 并验证

1. 确认 Surge Mac 已安装并可运行
2. 在 Helper「连接设置 → 接入 Surge」写入配置，并确认 Surge 实际切换到了这份配置
3. 在 Surge 开启所需的系统代理或增强模式，首次使用先保留规则模式
4. 多端口模式在 Surge 策略组选择节点；单端口模式在 Helper 选择节点
5. 打开目标网站，在 Surge 的连接记录核对命中策略与出口

Helper 和 Surge 都需要保持运行。写入配置成功不一定表示 Surge 自动切换成功；遇到提示时在 Surge 手动选择刚写入的配置

## 筛选、端口与日常更新

「连接设置 → 节点筛选…」可按线路、地区、名称预览保留的节点；恢复默认先清空草稿，再「保存」。保存后会重新获取节点并更新映射，随后再「接入 Surge」

更改接入模式、本地端口、局域网鉴权或筛选后，重新接入 Surge，避免旧配置仍引用旧端口或已移除节点。精简规则可在连接设置中调整；旧配置的 `oixParams` / `oixDefaultParams` 不再用于节点筛选

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
