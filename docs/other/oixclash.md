---
description: Merlin 路由器安装 oixClash、登录账户、开启代理并验证局域网设备
---

# oixClash 安装与配置指南

适用于安装了 KoolCenter 软件中心的 Merlin 固件（梅林改版、官改）。安装包以 [软件中心](https://oixcloud.com/client#router) 提供的版本为准。oixClash 按 oixCloud 下发的配置接管局域网设备，局域网设备须使用正确的网关与 DNS，无需逐台安装客户端；插件不支持导入其他订阅

## 1. 选择安装包

在路由器管理页进入「软件中心」，确认识别的平台后，点击下表中的安装包直接下载，无需打开 GitHub：

<div class="oixclash-downloads">

| 平台 | 安装包 | 常见机型 |
| --- | --- | --- |
| HND 32 位（armv7） | [下载](https://dl.dler.io/oixclash_hnd_armv7.tar.gz) | RT-AX58U、TUF-AX5400 |
| HND 64 位（arm64） | [下载](https://dl.dler.io/oixclash_hnd_arm64.tar.gz) | RT-AX86U、RT-AX88U、GT-AX6000、GT-AX11000 |
| mtk | [下载](https://dl.dler.io/oixclash_mtk.tar.gz) | TUF-AX4200Q、TX-AX6000、RT-AX57 Go 等 |
| qca | [下载](https://dl.dler.io/oixclash_qca.tar.gz) | RT-AX89X |
| ipq32 | [下载](https://dl.dler.io/oixclash_ipq32.tar.gz) | ZenWiFi BD4 |
| ipq64 | [下载](https://dl.dler.io/oixclash_ipq64.tar.gz) | 型号代码 TUF_6500 |

</div>

下载地址会跟随最新正式版本更新，也可下载 [SHA256 校验文件](https://dl.dler.io/oixclash-SHA256SUMS) 核对文件完整性；直链不可用时，使用 [最新 GitHub 发行页](https://github.com/pickrui/oixclash-merlin/releases/latest) 中相同平台的文件

插件内更新会自动选择架构，旧版用户也可直接点「检查更新」。离线安装时，在路由器 SSH 中运行 `uname -m`，显示 `armv7l` 或 `armv8l` 选 32 位，显示 `aarch64` 选 64 位。两种分架构包都已包含内核。旧的 `oixclash_hnd.tar.gz` 链接仍可用，路由器需要联网才能用它取得对应的分架构包

插件内更新会复用仍兼容的内核。从 0.0.14 自带内核升级到 0.0.39 时必须更换内核，本次测试需要约 20 MiB 可用 JFFS 空间。若提示空间不足，旧版本和设置会保留，释放日志提示的空间后再重试。512MB 及以上内存的机型可按默认设置运行；256MB 等小内存机型可使用 0.0.3 起提供的[内存优化](#low-memory)。普通模式下，内核解压到内存的文件、代理进程、GeoIP 数据和控制面板都会占用内存，具体用量随构建和架构变化

## 2. 离线安装

1. 打开「软件中心 → 离线安装」，选择下载的安装包上传
2. 不要修改文件名；浏览器重复下载时加上的「(1)」要删掉，否则软件中心会拒绝安装
3. 看到安装完成后返回软件中心，打开 oixClash

平台不符时软件中心会直接提示并停止安装，换成对应平台的安装包即可

## 3. 登录 oixCloud

<figure class="guide-figure">
  <a href="/illustrations/oixclash-login-zh.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="oixClash · 登录账号">
    <img src="/illustrations/oixclash-login-zh.svg?v=20261127-3" alt="oixClash · 登录账号" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

在路由器的「oixCloud 账号」选择一种登录方式：

- **登录令牌**：粘贴网站[新增 Access Token](/account/security#manual-token)时显示的完整令牌，再点「登录」
- **邮箱和密码**：填 oixCloud 的邮箱和密码，再点「登录」。密码只用于本次登录
- **Google 登录**：通过路由器的局域网地址或 `router.asus.com` 打开插件页面，点「Google 登录」，允许弹窗，选择与已有 oixCloud 账号相同的邮箱。保持原页面打开，等它显示账号信息

登录后显示账号、套餐、到期时间与流量。登录成功后即可获取托管节点，不需要批准设备；首次登录时账户会收到新设备登录提醒，见 [新设备登录与提醒](/account/security#device-approval)

## 4. 开启代理

<figure class="guide-figure">
  <a href="/illustrations/oixclash-running-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="oixClash · 运行与内存优化">
    <img src="/illustrations/oixclash-running-zh.svg?v=20261030-2" alt="oixClash · 运行与内存优化" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

1. 在「运行」打开开关，点「保存并应用」
2. 等日志显示「启动成功」。首次运行会下载 GeoIP 等数据，需要一些时间
3. 「运行状态」显示运行中和内核版本后，继续按第 5 节验证局域网连接；进程启动不等于目标网站可用

oixClash 按设备策略接管主局域网设备的 DNS，以及符合端口设置的 TCP。0.0.14 起「运行 → 仅代理常用端口」默认开启，只接管网页、邮件等常用目标端口，其他端口直连；已有的关闭设置会保留

需要代理游戏、语音等非常用端口时，先按需求关闭「仅代理常用端口」并保存；需要 UDP 时，还须开启「UDP 转发」，运行状态出现「UDP 已转发」后再验证。未开启 UDP 转发时，建议保持「屏蔽 QUIC」，浏览器会改用 TCP

常用端口过滤不能识别全部 BT／P2P，使用常用端口的下载仍可能进入代理。设备直连名单、DNS 接管与 QUIC 屏蔽各自生效，不能只按 UDP 开关判断是否接管；屏蔽 QUIC 不影响局域网、VPN 等私有网段

### 小内存设备 {#low-memory}

oixClash 0.0.3 起提供「内存优化」。首次安装时，检测到总内存不足 384MB 会自动开启；升级时保留已有选择，也可在「运行 → 内存优化」手动调整

1. 勾选「内存优化」并点「保存并应用」。应用期间会先停止代理再检查配置，局域网暂时直连；若配置检查失败，先查看恢复结果（当前版本会尝试恢复旧设置与运行状态，不能假定新设置已应用）
2. 启动后检查该选项下方的提示：「内核在 JFFS 上运行」表示内核文件已移到闪存；若提示「JFFS 空间不足，内核仍解压到内存」，先释放不需要的插件占用，再保存并验证
3. 点「自检」，检查 JFFS 剩余空间和可用内存，再按下一节验证局域网连接

| 调整 | 需要了解 |
| --- | --- |
| 空间允许时，内核和控制面板存放在 JFFS | 减少内存文件占用，但需要更多闪存空间；代理进程本身仍使用内存 |
| 使用精简 GeoIP 库 | 仅覆盖 CN 等少数地区，使用其他地区 `GEOIP` 自定义规则时需留意匹配结果 |
| 限制内核内存上限 | 接近上限时提前回收，压住内存峰值，此时 CPU 开销会升高；不能保证所有配置都能在 256MB 机型运行 |

关闭内存优化后，已放到 JFFS 的内核仍继续使用；下次更新插件时才恢复为压缩包并在运行时解压到内存

## 5. 用局域网设备验证

1. 测试设备使用路由器下发的网关和 DNS；先关闭浏览器的安全 DNS 再测试
2. 分别访问直连站点和需要代理的站点
3. 点「打开控制面板」，在连接记录中核对目标、命中规则和出口

路由器自身和访客网络的流量不经过 oixClash。设备通过 IPv6 上网时会绕过代理，运行状态会提示。需要避免该绕过时，在路由器的「IPv6」页面把连接类型设为停用，并用局域网设备验证；网站的 [IPv4 Only](/account/unlock#ipv4-only) 控制远程节点出口，不能解决路由器的 IPv6 绕过

### 切换模式并验证设备接管 {#capture-mode}

在「运行」勾选「开启」并点「保存并应用」，等服务恢复。从「运行 → 节点切换 → 打开控制面板」进入 MetaCubeXD，在「配置 → 核心配置 → 运行模式」选「规则」「全局」或「直连」。要按网站分流就选「规则」，切换后从接管范围内的设备重新访问网站，在「连接」按设备 IP 或域名核对实际出口

这个插件用路由器防火墙接管局域网设备，生成的配置关闭 TUN。日常使用不需要在设备上开启系统代理或在控制面板另开 TUN。若请求没有进入控制面板，检查设备策略、网关、常用端口和大陆 IP 绕过设置

### 在这台路由器设置 DNS {#configure-dns}

<figure class="guide-figure">
  <a href="/illustrations/oixclash-dns-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Merlin 路由器的自定义直连 DNS、代理 DNS 与保存按钮">
    <img src="/illustrations/oixclash-dns-zh.svg?v=20261127-5" alt="Merlin 路由器的自定义直连 DNS、代理 DNS 与保存按钮" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

1. 打开 oixClash 的「DNS 设置 → 展开 DNS 设置」。要沿用订阅的解析器，保持「使用自定义 DNS」未勾选；要在本机覆盖，勾选这一项
2. 「直连 DNS」可填 IPv4 地址（可带端口）或 HTTPS 地址；「代理 DNS」填 HTTPS 地址，由 `Proxy` 组发送，无需手加 `#Proxy`。每栏可填 1 至 4 个地址，用英文逗号分隔
3. 点「保存并应用」，等状态恢复后点「自检」。选择接管范围内的设备，以路由器为 DNS 解析一个新域名。想验证具体上游时，使用能查看查询记录的解析器核对该域名。「面板下发的 DNS」一直显示订阅原值
4. 要恢复面板设置，取消勾选「使用自定义 DNS」再保存。原来输入的地址会保留，方便以后再用


### 选择节点、策略组或中继入口 {#routing}

<figure class="guide-figure">
  <a href="/illustrations/metacubexd-groups-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="在 oixClash 打开的 MetaCubeXD 面板里选择节点">
    <img src="/illustrations/metacubexd-groups-zh.svg?v=20261127-5" alt="在 oixClash 打开的 MetaCubeXD 面板里选择节点" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>操作示意 · 虚构数据</figcaption>
</figure>

1. 在软件中心打开 oixClash，找到「运行 → 节点切换」，点「打开控制面板」。在 MetaCubeXD 的「代理」中展开目标网站使用的手动选择组，点需要的节点。选中子组时，再打开子组选择成员
2. 想让一个网站走指定组，按下面的[账号自定义规则](#routing-rules)把域名指向该组。用局域网设备重新访问，在控制面板的「连接」查看命中规则和出口
3. 插件的节点切换页只负责选用已有出口。要让托管流量经过多跳，有相应权限的账户可在网站配置[内部中继](/account/relay#内部中继)，然后在路由器的手动选择组选中这条路径的**入口节点**

## 6. 节点、筛选与更新

<figure class="guide-figure">
  <a href="/illustrations/oixclash-filter-zh.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="oixClash 账号旁的「节点筛选」和页面底部的「更新节点」">
    <img src="/illustrations/oixclash-filter-zh.svg?v=20261127-3" alt="oixClash 账号旁的「节点筛选」和页面底部的「更新节点」" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据</figcaption>
</figure>

- 切换节点：点「打开控制面板」，在策略组中选择节点；选择会在重启后保留
- **节点筛选**：点账号旁的「节点筛选」，在网站预览并保存。回到插件点「更新节点」，再到控制面板查看。插件运行时也会每天更新，未运行时会在下次开启时获取
- 账号旁的「刷新」只更新套餐、流量等账号信息。筛选随这台路由器所用的订阅地址生效，见[订阅与筛选](/account/subscriptions)
- 更新插件：开启插件后每天检查一次新版本，也可以点版本号旁的「检查更新」。出现「更新到 x.y.z」后点击，插件会下载并校验安装包再安装，期间代理会短暂中断

若插件内更新提示无法校验安装包，或旧版自检提示缺少 `sha256sum`，请从本页下载对应平台的安装包，通过「软件中心 → 离线安装」更新。安装包校验不通过时不要继续安装，重新下载并核对 SHA256

<span id="routing-rules"></span>

## 7. 编辑账号自定义规则

oixClash 0.0.2 起可在插件的「自定义规则」中编辑网站上的同一份 [账号规则](https://oixcloud.com/user/rule)，账号规则排在默认规则之前。保存会影响使用这份规则的其他客户端；清空后保存会删除整份账号规则，操作前先保留需要的内容

<figure class="guide-figure">
  <a href="/illustrations/oixclash-rules-zh.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="oixClash · 账号自定义规则">
    <img src="/illustrations/oixclash-rules-zh.svg?v=20261127-4" alt="oixClash · 账号自定义规则" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

1. 登录后点击「读取面板规则」，确认显示「已读取面板规则，可编辑后保存」
2. 每行写一条标准 Surge 格式的规则，无需 `rules:` 或行首短横线；`#` 或 `//` 开头的行是注释。策略填写 `DIRECT`、`REJECT` 或配置中已有的策略组名称
3. 点击「保存到面板并更新」，查看日志：插件运行中会更新并检查配置；插件未运行时，在下次开启时获取并检查
4. 用局域网设备建立新连接，在控制面板核对命中规则和出口

```text
DOMAIN,ads.example.com,REJECT
DOMAIN-SUFFIX,example.com,DIRECT
```

把更具体的域名放在前面。上例先拒绝 `ads.example.com`，其余 `example.com` 子域名直连

路由器编辑器最多处理 8192 个 UTF-8 字节，中文等字符会占多个字节。更长的规则请在网站编辑，再点插件「更新节点」，不要截短原规则来适配编辑器

| 提示或情况 | 处理方式 |
| --- | --- |
| 规则已被其他页面修改 | 先另存当前草稿，重新读取最新规则，再合并需要的修改；不要直接覆盖别处的新内容 |
| 面板保存成功，但路由器尚未应用 | 网站上的规则已经改变，先修正规则或网络问题，再点「更新节点」并验证连接 |
| 无法读取，或当前版本没有规则入口 | 在网站编辑账号规则，保存后点「更新节点」获取；插件内读取和保存还需要站点支持 |

重新读取会替换未保存的草稿，先确认提示。账号规则与节点筛选的共享范围不同，见 [订阅与筛选](/account/subscriptions#account-rules)

## 常见问题

| 现象 | 下一步 |
| --- | --- |
| 离线安装提示平台不符或文件名有误 | 按软件中心识别的平台下载安装包，删掉文件名里的「(1)」 |
| 运行状态提示「登录已失效」 | 点「退出登录」后重新登录 |
| 提示「账号没有可用的套餐」 | 续费后点「保存并应用」 |
| 提示「路由器时间尚未同步」或时间不准确 | 在「系统管理 → 系统设置」检查时区和 NTP 服务器；时间同步后插件会自动启动 |
| 提示内存不足、内核无法启动 | 开启内存优化，关闭不需要的其他插件后点「保存并应用」；发生内存不足后，看门狗改为每 30 分钟自动重试 |
| 内存优化已开启，内核仍解压到内存 | 检查 JFFS 空间和插件日志，释放闪存空间后重新保存；勾选内存优化本身不代表内核已迁移成功 |
| 插件内更新提示无法校验安装包 | 按本页的对应平台下载并离线安装，不要跳过完整性校验 |
| UDP 转发没有生效 | 点「自检」，查看 TPROXY 与策略路由两项；部分固件不支持时只影响 UDP，TCP 照常代理 |
| 提示与科学上网或 MerlinClash 冲突 | 先关闭另一个代理插件，同时只能开启一个 |
| 路由器已运行，设备仍异常 | 核对设备的网关、DNS 和 IPv6，再看控制面板的连接记录 |
| 同一节点在路由器上速度慢于手机、电脑 | • **核对内核架构**：点「自检」查看内核，64 位 hnd 机型应显示「使用 arm64 内核」（需要从 armv7 切换时离线安装 HND 64 位包）；32 位机型的速度受 CPU 限制<br>• **核对端口设置**：测速服务使用非常用端口时会直连，对比前可临时关闭「仅代理常用端口」 |

反馈前点「自检」，把自检结果和「查看日志」中的插件日志一并发送，并隐藏账号信息
