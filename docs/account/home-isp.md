---
description: "Home ISP 家宽节点的筛选、内部中继与客户端代理链设置，以及出口验证方法"
---

# Home ISP 使用指南

Home ISP 提供海外家庭宽带出口。先确认目标节点可用，再按需要选择内部中继或客户端代理链；增加入口节点可能改善接入路径，也会增加一段连接，效果需要在自己的网络上验证

## 节点特点与适用场景 {#characteristics}

Home ISP 与 Edge 使用相同套餐权限，在 [节点列表](https://oixcloud.com/user/node) 中单独展示

| 节点分类 | 选择时注意 |
| --- | --- |
| Home ISP · 静态 IP | 通常使用相对固定的出口地址，仍应核对节点当前出口 |
| Home ISP · 动态 IP | 出口地址可能变化，不适合长期绑定固定 IP 的用途 |

两类都不是分配给个人账户的独享 IP，也不承诺可用性、流媒体解锁或中国大陆接入 SLA。住宅网络属性不保证第三方平台放行、减少验证或保持会话，地区与 IP 分类以目标服务的实际判断为准

## 获取与加入订阅 {#subscription}

默认下发由服务方逐节点设置，与静态／动态分类无关。含 CIA、IXP、Fusion 或 GIA 的套餐，智能优选不包含 Home ISP；未默认下发的 ISP 也不会因默认节点为空而被自动补入

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-filter-zh.svg?v=20261105-3" target="_blank" rel="noopener" aria-label="oixCloud · 同时保留入口线路与 ISP">
    <img src="/illustrations/oixcloud-filter-zh.svg?v=20261105-3" alt="oixCloud · 同时保留入口线路与 ISP" width="1120" height="982" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据 · 图中同时保留 Fusion 与 ISP · 点击放大</figcaption>
</figure>

1. 在 oixCloud 或 FlClash for oixCloud 打开「oixCloud → 节点筛选」，或在网页 [订阅管理](https://oixcloud.com/user/sub_manage) 编辑对应地址
2. 将 **ISP** 设为「仅保留」。使用客户端代理链时，将入口所属线路也设为「仅保留」，否则入口可能被筛掉
3. 核对地区、名称条件和节点预览，确认需要的入口与出口都在保留列表中
4. 保存并等待客户端完成节点更新；各客户端的自动刷新与手动同步入口见 [订阅与筛选](/account/subscriptions)

ISP 与 Edge 是两条独立线路；只选 Edge，或只按地区、名称筛选，不会加入未默认下发的 ISP

::: warning 先核对节点角色
未默认下发的 Home ISP 只能作为内部中继目标／出口，不能作为入口或中间节点，且不能配置外部中继、HTTP/3、WARP、IPv4 Only 和流媒体解锁。主动加入订阅不会解除限制，详见 [流量路由限制](/account/nodes#isp-routing)
:::

## 为什么需要中转或链式代理？ {#why-relay-or-chain}

当本地直连 Home ISP 表现不佳时，可以比较「本地 → 可用入口 → Home ISP → 目标服务」与单节点连接。先用两跳验证；增加跳数不保证降低延迟、提高速度或解决出口本身的问题

| 方案 | 在哪里配置 | 客户端如何使用 |
| --- | --- | --- |
| 内部中继 | 网站「流量路由 → 内部中继」 | 连接入口节点，由服务端继续转发 |
| 客户端代理链 | 支持代理链的客户端 | 选择保存的链名，或把分流规则指向它 |

先选一种方案验证，避免同时叠加两套路径而难以判断实际出口。每段路径的可用性、延迟和计费倍率都应分别核对

## 方案一：面板内部中继配置 {#internal-relay}

以下步骤为入口流量配置一条完整路径。WARP、外部中继和已有路径可能影响可选节点，按页面提示处理，具体见 [设置之间的关系](/account/relay#other-settings)

<figure class="guide-figure">
  <a href="/illustrations/account-relay-zh.svg?v=20261105-2" target="_blank" rel="noopener" aria-label="oixCloud · 内部中继路径编辑器">
    <img src="/illustrations/account-relay-zh.svg?v=20261105-2" alt="oixCloud · 内部中继路径编辑器" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>通用路径编辑器示意 · 本例只需选择入口和 Home ISP 出口，中间跳按需添加 · 点击放大</figcaption>
</figure>

1. 打开 [内部中继](https://oixcloud.com/user/relay)，点击「添加路径」
2. 首个位置选择当前网络可用、页面允许作为入口的节点，例如有权限的 Fusion 或 GIA 节点
3. 最后一个位置选择目标 Home ISP，先使用「入口 → Home ISP」两跳；路径最多 17 个节点，不能重复同一条目
4. 核对优先级和预览，点击「保存路径」。若影响共用路段，先检查涉及的其他路径再确认
5. 更新客户端订阅或托管配置，选择**入口节点**，建立新连接并验证目标服务的实际出口

只想让指定网站走家宽时，应改用 [按域名/IP 的单条规则](/account/relay#domain-rules)。不要先保留同一入口的无条件路径，再叠加条件规则并认为其他流量会自动绕过家宽；先核对已有规则、优先级与共用路段

路径图只展示配置关系，不证明连通性。终点处理、共享路段和批量删除统一见 [内部中继教程](/account/relay)

## 方案二：客户端链式代理 {#proxy-chains}

先确认入口与 Home ISP 都已加入当前节点列表。客户端代理链按入口到出口建立连接；链中成员必须可用，并满足该客户端的代理链约束

### oixCloud 客户端代理链 {#oixcloud-chain}

以下编辑步骤适用于 iPhone / iPad；Apple TV 从手机或平板 [同步配置](/oixcloud/apple-tv)，不提供相同的代理链编辑器

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-chains-zh.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="oixCloud · 按顺序创建代理链">
    <img src="/illustrations/oixcloud-chains-zh.svg?v=20261102-3" alt="oixCloud · 按顺序创建代理链" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>通用代理链编辑器示意 · 本例用实际入口节点和 Home ISP 替换图中成员 · 点击放大</figcaption>
</figure>

1. 在「代理」中新建代理链，填写易辨认的名称，例如 `Home-ISP-Chain`
2. 使用「添加代理」依次加入入口节点、Home ISP 出口，核对路由预览并保存
3. 在主页选中该链。规则模式下，路由目标为「代理」的流量使用主页选择；指定节点、策略组、直连或拒绝的规则仍按原目标处理
4. 只让指定网站使用该链时，在「代理 → 策略 → 路由规则」中添加「域名尾缀」规则，填入实际域名并将目标设为链名
5. 建立新连接，在「活动 → 请求」中核对匹配规则和出口

需要自动选择入口时，使用代理链编辑器允许的个人策略组，先检查其成员。组类型、后续跳组的影响及冲突处理见 [策略组与代理链](/oixcloud/policies#创建代理链)

### FlClash for oixCloud 链式代理 {#flclash-chain}

适用于支持该功能的 Windows、macOS、Android 和 Linux 版本

<figure class="guide-figure">
  <a href="/illustrations/flclash-chains-zh.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 编辑代理链顺序">
    <img src="/illustrations/flclash-chains-zh.svg?v=20261102-3" alt="FlClash for oixCloud · 编辑代理链顺序" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>通用代理链编辑器示意 · 本例用实际入口节点和 Home ISP 替换图中成员 · 点击放大</figcaption>
</figure>

1. 在「配置」中打开当前配置的菜单，选择「链式代理」，新增并命名
2. 按「入口 → Home ISP」加入两个不同成员，用拖动手柄调整顺序，保存并确认该链已启用
3. 等待配置应用成功。在「代理」选择生成的链名，或在配置覆写中将个人规则的目标设为该链名；若当前手选组没有包含它，按 [代理链教程](/flclash/proxies#代理链) 调整成员或规则
4. 使用新连接核对规则和出口。选择原来的 Home ISP 节点不等于选择代理链

## 验证与排查 {#troubleshooting}

| 现象 | 检查方法 |
| --- | --- |
| 找不到入口或 Home ISP | 同时保留入口线路与 ISP，检查地区、名称条件、套餐权限及同步结果 |
| 中继保存被拒绝 | 检查节点角色、WARP／外部中继冲突及页面报错；未默认下发的 ISP 只能作为最终出口 |
| 连接失败或变慢 | 先对照单独入口，再检查后续路径；减少不必要的跳数，避免循环和冲突的底层代理 |
| 出口不是预期家宽 | 检查该目标的新连接是否命中预期规则。客户端记录能显示客户端选择的链或入口，但不保证显示服务端内部中继的每一跳 |
| 动态 IP 变化后会话失效 | 重新建立连接，并按目标服务要求重新验证或登录；重连不保证恢复第三方会话 |

IP 查询网站也必须走同一条预期路径，才有对照意义；它的地区和 ASN 分类不能证明另一网站使用同一出口，也不能保证第三方风控或流媒体可用
