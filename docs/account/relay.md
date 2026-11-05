# 中继与自建落地

<div class="vps-providers">

## VPS 推荐 {#vps-providers}

业界享有名誉的商家

<div class="vps-provider-links">
  <a href="https://akile.ai/register?aff_code=f9cd9c94-8a32-491b-92d9-d7cb858748ed" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>AkileCloud</strong><small>多地区大带宽云服务器</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://cloud.isif.net/login?affiliation_code=adiao123" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>ISIF Cloud</strong><small>云服务器与网络服务</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://my.rfchost.com/aff.php?aff=542" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>RFC Host</strong><small>国际与中国方向优化云服务器</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://nube.sh/invite/2624168578884Z" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>Nube Cloud</strong><small>多地区云服务器与独立服务器</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://www.dmit.io/aff.php?aff=21" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>DMIT</strong><small>云服务器与独立服务器</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://hyvps.hytron.io/register?invite=8JqB2f37VzcP" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>HytronVPS</strong><small>亚太云服务器，按小时计费</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://www.vultr.com/?ref=7118937" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>Vultr</strong><small>全球多地区云计算平台</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://www.vmrack.net?ref_code=5nHUCVdwUDD" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>VMRACK</strong><small>云服务器、独立服务器与 CDN</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://lamhosting.com/aff.php?aff=148" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>LamHosting</strong><small>VPS、虚拟主机与独立服务器</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
</div>
</div>

先确定流量路径，再选择用户中心「流量路由」中的功能。网站的中继设置作用于账户，客户端的代理链则在对应客户端中配置

| 需求 | 使用方式 |
| --- | --- |
| 从一个站内节点进入，按顺序经过其他站内节点出站 | [内部中继](https://oixcloud.com/user/relay)的路径编辑器 |
| 为同一入口配置多个备选出口，或只转发指定域名/IP | 内部中继的单条规则 |
| 通过站内入口转发到自己部署的落地服务器 | [外部中继](https://oixcloud.com/user/cusrelay)的协议保持模式 |
| 转发至已有 SSH、远程桌面或游戏服务 | 外部中继的协议转换模式，按页面允许的端口设置 |
| 在本机组合已有代理节点 | [oixCloud 代理链](/oixcloud/policies)或 [FlClash for oixCloud 代理链](/flclash/proxies#代理链) |

未默认下发的 Home ISP 可以作为内部中继目标／出口，不能作为入口或中间节点，也不能配置外部中继。手动加入订阅不会解除这些限制，已有配置继续生效并可删除。选择前查看[流量路由限制](/account/nodes#isp-routing)与 [Home ISP 使用指南](/account/home-isp)

::: warning 先核对 WARP 与现有中继
开启 WARP 会清理以该逻辑节点为来源或目标的内部中继，以及以它为来源的外部中继，关闭 WARP 不会自动重建。先记录仍需保留的配置；创建中继时也不能选用存在 WARP 冲突的节点。同一起源节点已有外部中继时，不能再用它新增内部转发规则；已有内部转发规则或外部中继时，也不能重复创建外部中继
:::

## 内部中继

内部中继把流量从一个站内节点转到其他站内节点再出站。页面上方的「中继路径」图展示你的配置，下方的「中继规则」列出路径中的每一段。**路径图不是实时连通性检测**，系统转发规则仍可能影响实际走向

### 添加多级路径

<figure class="guide-figure">
  <a href="/illustrations/account-relay-zh.svg?v=20261105-2" target="_blank" rel="noopener" aria-label="oixCloud · 在路径编辑器排列入口与出口">
    <img src="/illustrations/account-relay-zh.svg?v=20261105-2" alt="oixCloud · 在路径编辑器排列入口与出口" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据 · 点击放大查看操作位置</figcaption>
</figure>

1. 打开[内部中继](https://oixcloud.com/user/relay)，点击「添加路径」
2. 按流量经过的顺序选择节点：第一个是入口节点，客户端连接它；最后一个是出口节点，由它访问目标；中间可以插入中继节点，一条路径包含 2–17 个节点，不可重复选择同一节点条目。选择独享 IP 时核对具体地址，不能只看节点名称
3. 用每个节点右侧的按钮前移、后移或移除节点，「预览路径」会同步显示走向
4. 选择优先级后点击「保存路径」。同一入口优先使用更高优先级的规则，用户可选「最低、低、中、高」。若提示影响其他入口共用的路段，先核对受影响的入口和规则，再确认应用

出口节点之后不需要手动添加终止规则。若系统或「所有节点」规则可能继续转发，系统会自动补上路径终点设置，它不会出现在规则列表中。遇到分支、域名条件或不完整节点组而无法编辑整条路径时，按提示使用「单条编辑」

### 添加单条规则

需要为同一个起源节点设置多个目标，或者只转发部分网站时，在「中继规则」中点击「添加单条规则」

1. 选择起源节点和优先级，再勾选一个或多个目标节点，一次最多选择 10 个。已经存在的目标显示为「已添加」，不会重复添加
2. 同一优先级的多个目标组成负载均衡组，建议每组不超过 4 个；这表示从中选择出口，不是按顺序经过所有目标。目标不可用时可改用其他可用目标或较低优先级的规则，不保证故障中的旧连接无缝续传
3. 只转发部分访问时，填写「仅转发指定域名/IP」，写法见[域名/IP 匹配](#domain-rules)。留空表示全部流量，高优先级的全量规则可能覆盖较低优先级的条件规则

「所有节点（不含 Fusion）」是广泛生效的起源范围，不等于只修改当前连接的节点。规则列表中的「编辑路径」打开该规则所在的整条路径，「单条编辑」只修改这一段；编辑或删除某段会影响所有经过它的路径

### 生效与状态

| 状态 | 含义 |
| --- | --- |
| 已生效 | 按当前节点状态和优先级，该规则处于可用档位；具体访问仍需匹配规则 |
| 备用 | 更高优先级的可用规则优先使用 |
| 不可用 | 起源或目标不满足当前可用条件 |
| 配置中 | 刚保存，等待状态更新 |

保存后更新客户端订阅或托管配置，使用支持中继的协议，选中入口节点；等待节点同步，关闭目标应用的旧连接，再建立新连接检查实际出口。上述状态不能单独证明目标网站或流媒体可以访问

## 创建外部中继

外部中继把流量送到指定主机和端口。先确定需要哪种模式，再填写表单；**「协议保持模式」未勾选时就是协议转换模式**，部分线路会自动勾选并锁定协议保持模式

| 模式 | 客户端收到的信息 | 目标服务器准备 |
| --- | --- | --- |
| 协议保持 | 订阅改用起源地址、个人端口和账户的 AnyTLS 连接凭据 | 在自己管理的落地服务器运行表单生成的安装指令，监听端口与目标端口一致 |
| 协议转换 | 保留该节点原有的协议和连接信息；起源解密后转发原始 TCP / UDP | 已有 SSH、RDP、游戏等服务，无需运行协议保持的安装指令 |

<figure class="guide-figure">
  <a href="/illustrations/account-cusrelay-zh.svg?v=20261105-2" target="_blank" rel="noopener" aria-label="oixCloud · 填写外部中继目标与模式">
    <img src="/illustrations/account-cusrelay-zh.svg?v=20261105-2" alt="oixCloud · 填写外部中继目标与模式" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据 · 点击放大查看操作位置</figcaption>
</figure>

1. 打开[外部中继](https://oixcloud.com/user/cusrelay)，点击「添加中继规则」，选择可用且没有冲突的「起源节点」。「起源端口」是账户个人端口，只读
2. 填写「目标地址」和「目标端口」。目标地址填 IP 或域名，不带协议前缀、路径和端口；目标端口初始为个人端口，必须改成实际服务的监听端口并保持有效值。普通外部目标两种模式均允许 `22`、`23`、`3306`、`3389` 或 `10000–65535`，系统节点按页面校验结果处理；本机及普通内网地址不能作为外部目标
3. 按需填写备注；「仅转发指定域名/IP」通常留空，需要限制时先阅读下方的匹配边界。备注会用作订阅中的节点名，最多 30 个字符，避免与已有节点或其他规则重名。匹配规则留空表示全部流量
4. 根据上表决定是否勾选「协议保持模式」。勾选后，在自己管理的目标服务器运行页面当前生成的命令，确保监听端口和防火墙一致；可选 DNS 字段填写 IPv4 格式的 DNS 服务器地址，不是目标服务器的地址。命令包含账户连接凭据，不要公开或放入服务单
5. 点击「添加中继规则」或「保存修改」，阅读确认弹窗后提交。成功返回列表后核对来源、目标、端口和「协议保持」状态，再更新客户端订阅或托管配置，选中对应节点建立新连接，验证实际应用

填写目标地址时，页面会自动检查是否为系统节点并更新端口提示，**不会探测目标端口是否开放，也不会验证 TCP、UDP 或应用协议是否可用**。不需要查找单独的「测试连通性」按钮；应直接检查目标服务，再通过中继验证实际业务

外部中继适用于 SSH / RDP、游戏及直播服务，不推荐用于视频点播或大文件传输，禁止转发 Web 网站和网页管理面板。连接 VPN、SS 等其他代理时，优先使用客户端代理链，把本站节点作为前置代理

## 域名/IP 匹配 {#domain-rules}

内部中继的单条规则和外部中继表单共用「仅转发指定域名/IP」字段，每行一条，也可用英文逗号分隔

| 示例 | 匹配范围 |
| --- | --- |
| `example.com` | 仅这个域名 |
| `+.example.com` | 主域及其全部子域 |
| `*.example.com` | 仅子域，不含主域 |
| `1.1.1.1` | 单个 IP |
| `example.com:443` | 这个域名的指定端口 |

规则只匹配域名/IP 和端口，不能按网页路径或查询参数分流，不要把完整网页 URL 当成路径规则。客户端若已经把域名解析为 IP 再提交，域名规则可能无法命中；需核对客户端提交的目标，不能只看浏览器地址栏

外部中继使用个人端口连接时，非空匹配规则依赖连接开始时能识别的主机名；无法识别或不匹配会拒绝连接，并且这种限制下不转发原始 UDP。协议保持模式不能用它筛选加密隧道内最终访问的网站，SSH、游戏等也不要填入无法从连接中识别的域名。通常留空；要按最终网站选择路线，使用客户端分流或内部中继的条件规则

## 多节点列表与批量删除 {#bulk-delete}

内部、外部中继列表都不分页。内部中继的路径图可滚动查看，若提示超出展示范围，以下方规则列表核对完整配置；长列表可用浏览器查找定位节点

1. 删除前记录需要保留的路径、优先级、条件和外部目标，尤其核对被其他入口共用的内部路段
2. 勾选需删除的规则，或使用「全选」选中列表全部可选择规则，包括屏幕下方的记录；它不是只选择可见屏幕内的行
3. 点击「批量删除」，核对数量和删除提示后确认。操作按逻辑规则组生效，同一组的后端记录一起处理；不会只删除碰巧显示的某一台后端，也不是逐个节点切换功能开关
4. 等待结果并核对列表，更新订阅或托管配置、重新连接。网络错误或结果不明时先刷新检查，再决定是否重试

删除所选内部路段可能影响所有共用它的路径，不会自动删除整条路径的其他路段；删除外部规则会停止相应来源的外部转发。删除无法撤销，重新使用时需手动重建

## 与其他设置配合及性能 {#other-settings}

| 设置 | 与中继的关系 |
| --- | --- |
| [HTTP/3](/account/http3) | 调整受支持客户端到入口节点的传输，不会把内部路径的每一跳都改为 HTTP/3；外部协议保持模式改用 AnyTLS，不使用这项 HTTP/3 传输设置 |
| [IPv4 Only](/account/unlock#ipv4-only) | 不删除中继；内部路径经过开启节点时，限制继续作用于最终目标连接，但不能控制外部服务器或后续第三方代理的最终出口 |
| [WARP](/account/unlock#warp-ip-preference) | 与使用同一节点的普通中继存在冲突，启用前按页首提示记录配置 |
| [流媒体地区](/account/unlock#streaming-regions) | 内部转发先决定下一跳，最终处理目标连接的节点再应用其可用解锁设置；仅修改入口的地区不能保证中继出口采用它 |

多一跳会增加网络往返、故障点及转发开销，速度受最慢一段限制；只有所选路线更合适时才可能改善体验。负载均衡不等于合并多个节点的带宽，也不保证提高单个下载的速度。先比较同一网络、目标和时段下的直接使用与单级中继，再按需要增加跳数；计费说明见[流量与计费](/account/traffic)

## 排查顺序

- 保存被拒绝：检查节点权限、Home ISP 限制、WARP、起源占用及目标端口；节点暂时不可用时，等待恢复后再保存
- 提示与已有中继设置冲突：打开提示中的规则，用「单条编辑」调整或删除后再保存路径；同一来源的多个目标不等于多跳路径
- 提示已为所有节点停用中继：在中继规则中删除起源为「所有节点」、目标为「停用中继」的那一条
- 提示与系统转发设置冲突：换用其他节点或联系支持，不要反复添加相同规则
- 外部目标不可达：确认目标监听地址、端口、防火墙和服务状态；协议保持模式还需核对当前安装指令、账户凭据与客户端订阅
- 已保存但路径未变：等待同步、更新订阅、关闭旧连接，确认客户端选中正确入口，目标命中相应域名/IP 规则
- 速度或流媒体地区不符：先减少中继跳数、核对最终出口和解锁设置；路径图、端口提示和延迟测试都不能代替实际业务验证
