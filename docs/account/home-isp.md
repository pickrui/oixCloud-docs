---
description: "Home ISP 家庭宽带节点的特点、订阅筛选，以及通过内部中继与客户端链式代理使用的操作步骤"
---

# Home ISP 使用指南

Home ISP 节点提供纯正的海外家庭宽带住宅 IP 出口。由于国际家宽网络通常缺少针对中国大陆的专项路由优化，建议配合站内「内部中继」或客户端「链式代理」组合使用，兼顾优质连接体验与纯净住宅出口

## 节点特点与适用场景 {#characteristics}

Home ISP 与 Edge 同级，按相同套餐权限开放，在 [节点列表](https://oixcloud.com/user/node) 中单独展示。选择前核对账户当前可见节点与实际出口

| 节点分类 | 特点与适用场景 |
| --- | --- |
| Home ISP · 静态 IP | 通常使用相对固定的落地 IP，实际以节点当前出口为准；适合需要长期维持稳定出口地址的业务 |
| Home ISP · 动态 IP | 落地 IP 会随宽带拨号周期性变动，不适合需要绑定固定 IP 的场景；适合需要轮换出口的常规访问 |

静态／动态描述的是节点的宽带落地属性，不代表为个人账户分配独享 IP；两类均面向国际网络环境，不作任何可用性或流媒体解锁承诺，不提供面向中国大陆的 SLA 保障

家庭宽带出口来自真实住宅 ISP 网络（如 AT&T、Verizon、Comcast 等），其 IP 属性在第三方风控数据库中通常标记为 ISP / Residential，而非机房 Data Center，适合以下场景：

- 访问对机房 IP 有严格风控限制的海外平台、电商或支付管理后台
- 降低跨国业务、社交平台或海外账户登录时的风控触发概率
- 需要特定海外本地住宅网络环境的访问需求

## 获取与加入订阅 {#subscription}

是否默认下发由服务方逐节点设置，与静态／动态分类无关。未开启默认下发的 Home ISP 不会自动进入普通订阅、智能优选或回退列表。含 CIA、IXP、Fusion 或 GIA 的套餐，智能优选只下发套餐的默认线路，开启默认下发的 Home ISP 也不包含

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-filter-zh.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="oixCloud · 在节点筛选中保留 ISP 线路">
    <img src="/illustrations/oixcloud-filter-zh.svg?v=20261102-3" alt="oixCloud · 在节点筛选中保留 ISP 线路" width="1120" height="982" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据 · 点击放大查看操作位置</figcaption>
</figure>

1. 打开客户端「节点筛选」（oixCloud 的「oixCloud → 节点筛选」、FlClash 的「侧栏 oixCloud → 节点筛选」），或在网页 [订阅管理](https://oixcloud.com/user/sub_manage) 中编辑对应订阅
2. 在「线路」区域找到 **ISP**，点击切换为「仅保留」；如需同时使用其他线路，一并将它们设为「仅保留」
3. 按需搭配地区或名称筛选，在右侧或下方预览中确认目标家宽节点已包含在保留列表中
4. 保存筛选条件并更新客户端托管配置，节点列表即可加载该 Home ISP 节点

ISP 与 Edge 是两条相互独立的线路，仅筛选 Edge 不会包含 Home ISP；仅按地区或名称筛选也不会自动加入未开启默认下发的 ISP 节点

::: warning 严格遵循流量路由限制
未开启默认下发的 Home ISP 可以作为内部中继的目标／出口节点，但**不能作为入口或中间节点**；外部转发、HTTP/3、WARP 和流媒体解锁均不可配置。主动将 ISP 加入订阅不会解除这些限制，具体规则见 [流量路由限制](/account/nodes#isp-routing)
:::

## 为什么需要中转或链式代理？ {#why-relay-or-chain}

海外家庭宽带物理接入点位于海外居民区，不具备面向中国大陆的专属专线（如 Fusion 广港／沪日）或回国路由优化（如 GIA / CIA CMIN2）。直接从中国大陆直连海外家庭宽带节点，通常会经历公网国际跳板，容易产生高延迟、抖动、丢包甚至偶发连接阻断

通过中转组合可以彻底解决该问题：

1. **第一跳（入口）**：选择连接大陆稳定高速的专线（Fusion 系列）或优化线路（GIA / CIA / IXP），负责快速跨过国际公网或专线通道
2. **第二跳（出口）**：选择目标 Home ISP 节点，由海外高速骨干网络将流量送达家宽落地，最终以纯正住宅 IP 访问目标服务

| 方案 | 特点与优势 | 适用场景 |
| --- | --- | --- |
| 面板内部中继 | 服务端节点间转发，客户端只需连接入口节点；跨所有客户端、路由器与设备通用 | 任意客户端（包括 OpenClash、路由器、无链式代理功能的应用） |
| 客户端链式代理 | 本地客户端编排链路，灵活性高；入口可选策略组或自动优选，并支持本地分流规则 | oixCloud (Apple) 与 FlClash for oixCloud (多平台) |

## 方案一：面板内部中继配置 {#internal-relay}

面板内部中继把流量从一个站内节点转发到其他站内节点再出站。配置完成后，客户端只需连接入口节点，即可自动经由 Home ISP 出口

<figure class="guide-figure">
  <a href="/illustrations/account-relay-zh.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="oixCloud · 在内部中继路径编辑器中配置入口与家宽出口">
    <img src="/illustrations/account-relay-zh.svg?v=20261102-3" alt="oixCloud · 在内部中继路径编辑器中配置入口与家宽出口" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据 · 点击放大查看操作位置</figcaption>
</figure>

1. 登录面板打开 [内部中继](https://oixcloud.com/user/relay)，点击「添加路径」
2. **选择入口节点**：在第一个节点位置，选择对你当前本地网络速度最优的站内节点（例如 Fusion 香港专线节点或 GIA 优化节点）
3. **添加中继或直接选择出口**：如需多跳可在中间插入中继节点（一条路径最多 17 个节点）；最后选择目标 Home ISP 节点作为出口节点
4. **核对节点角色**：确认 Home ISP 仅放在路径的最后一跳（出口）；未默认下发的 Home ISP 不能作为入口或中间跳
5. **保存路径**：设置优先级并点击「保存路径」；如果该改动影响共用路段，按提示确认保存
6. **分流指定目标（可选）**：如果只需特定网站走家宽，可在「中继规则」中点击「添加单条规则」，起源选入口节点，目标选家宽节点，并在「仅转发指定域名/IP」填入目标域名，例如 `example.com`
7. **客户端应用与连接**：保存后在客户端更新托管配置，选择你所设置的**入口节点**建立连接；访问网站的实际出口 IP 将呈现为该 Home ISP 节点的宽带地址

出口节点之后无需额外设置中继规则，系统会自动完成终点配置。管理规则见 [中继与自建落地](/account/relay)

## 方案二：客户端链式代理 {#proxy-chains}

客户端链式代理在你的设备本地完成链路串联，由第一跳节点将请求直接转发至第二跳节点建立出口连接

### oixCloud 客户端代理链 {#oixcloud-chain}

适用于 iPhone、iPad、Mac 及同步配置的 Apple TV

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-chains-zh.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="oixCloud · 创建家宽代理链">
    <img src="/illustrations/oixcloud-chains-zh.svg?v=20261102-3" alt="oixCloud · 创建家宽代理链" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

1. 确保已在「oixCloud → 节点筛选」中将 ISP 设为「仅保留」并保存刷新，使家宽节点出现在节点列表中
2. 在底栏进入「代理」，切换到「链式代理」区域，点击右上角「添加」
3. 填写链名称，例如 `家宽代理链`
4. **添加第一跳（入口）**：点击「添加代理」，选择连接表现优异的节点，或选择「自动优选」策略组（支持在首跳使用策略组）
5. **添加第二跳（出口）**：再次点击「添加代理」，选择目标 Home ISP 节点
6. 点击右上角勾号保存代理链
7. **使用代理链**：
   - 全局或手选模式：在主页节点选择卡片中直接选中该代理链
   - 分流规则模式：在「代理 → 策略 → 路由规则」中新建规则，类型选择「域名后缀」并填入目标域名，路由目标选择该代理链

详细代理链与策略组交互规则见 [oixCloud 策略组与代理链](/oixcloud/policies#创建代理链)

### FlClash for oixCloud 链式代理 {#flclash-chain}

适用于 Windows、Android、macOS 及 Linux

<figure class="guide-figure">
  <a href="/illustrations/flclash-chains-zh.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 编辑家宽代理链顺序">
    <img src="/illustrations/flclash-chains-zh.svg?v=20261102-3" alt="FlClash for oixCloud · 编辑家宽代理链顺序" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

1. 确保在侧栏「oixCloud → 节点筛选」中勾选保留 ISP，并完成配置同步
2. 点击侧栏「配置」，在当前激活配置的卡片右侧点击操作菜单（`⋮`），选择「链式代理」
3. 点击右上角「新增」，填写清晰的链名（例如 `ISP-Chain`；链名不要与已有节点或策略组同名，不含逗号）
4. **排列转发顺序**：在编辑器下方「可用节点与策略组」中点击节点右侧的 `＋` 号添加成员；使用右侧拖动手柄调整顺序，确保第一跳为入口专线／优化组，最后一跳为出口 Home ISP 节点
5. 点击右上角勾号保存并启用链式代理，返回配置页点击「立即应用」
6. **使用代理链**：
   - 成功应用后，FlClash 会自动生成同名策略组，可在「代理」列表中直接切换选中该代理链
   - 如需精确分流，在配置覆写中编辑个人规则，将规则目标直接指向该链名

详细链式代理操作见 [FlClash 节点与代理链](/flclash/proxies#代理链)

## 验证与排查 {#troubleshooting}

配置完成后，按以下步骤核对出口与连接状态：

1. **核对出口 IP 属性**：在浏览器访问公网 IP 诊断网站，核对当前显示的出口 IP 与地理位置，并确认 ASN 组织为住宅宽带运营商
2. **检查客户端链路记录**：
   - oixCloud：在「活动 → 请求」中点击目标请求，核对路由判定是否显示为该代理链或入口中继
   - FlClash：在「连接」详情中查看当前连接的代理走向，核对是否经由入口节点转至家宽出口
3. **常见问题排查**：
   - **节点列表找不到 Home ISP**：检查节点筛选是否将「ISP」设为「仅保留」，保存后是否刷新了托管订阅；恢复默认筛选会重新排除未默认下发的 ISP 节点；含 CIA、IXP、Fusion 或 GIA 的套餐恢复为智能优选后不含任何 ISP
   - **中继保存被系统拒绝**：检查是否误将 Home ISP 放在了第一跳入口或中间中继位置；未开启默认下发的 ISP 仅允许作为最终出口
   - **连接报错或无法打开网页**：先单独选择入口节点测试其网络连通性；再核对代理链中各跳是否可用，避免产生节点自循环或策略组相互引用
   - **动态 IP 变动影响**：动态家宽节点的出口 IP 会不定期更新；若遇到依赖连接状态的第三方会话断开，在客户端断开并重新建立连接即可恢复
