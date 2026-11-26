---
description: "连接与速度排查的操作步骤、适用范围与常见问题"
---

# 连接与速度排查

先选择最接近的现象，再按对应章节逐项检查。每次只改变一个条件，保留前后的结果

| 现象 | 优先检查 |
| --- | --- |
| [无法登录或没有节点](#无法登录-或节点列表为空) | 官网与账户状态、登录凭据、套餐有效期 |
| [网站有节点，订阅里找不到](#missing-subscription) | 接入方式、当前订阅、筛选预览与刷新结果 |
| [流量用光或到期后没续上](#plan-continuation) | 待激活套餐、流量重置或续费队列 |
| [已连接但网页打不开](#显示已连接-但网页打不开) | 本机网络、流量接管、模式与实际节点 |
| [速度慢或延迟高](#能用-但速度慢或延迟高) | 剩余高速流量、限速状态、同条件节点对照 |
| [有流量但仍被限速](#limits) | 积分、活动请求、Working nodes 与账户通知 |
| [流媒体地区不对](#节点可用-但流媒体地区不对) | 实际出口、解锁设置与第三方平台条件 |
| [DNS 测试出现本地解析器](#dns-测试出现本地解析器) | 预期直连、路由解析与客户端接管范围 |

## 无法登录，或节点列表为空

先在 [用户中心](https://oixcloud.com/user) 确认能否登录，再按看到的情况操作

| 你看到的情况 | 下一步 |
| --- | --- |
| 网站密码登录失败 | 在[网站登录页](https://oixcloud.com/auth/login)使用已添加的 Passkey，或输入账户密码及已启用的两步验证码。确需找回密码时，可点「忘记密码」用邮件重置。重置会撤销所有客户端登录和 Access Token、更换主订阅地址、关闭两步验证并清除 Passkey |
| 网站能登录，客户端提示凭据错误 | 在相应的登录框填账户密码或完整 Access Token。若已禁止客户端邮箱/密码登录，改用 Access Token 或受支持的 Google 登录。[核对登录方式](/account/security#first-client-login) |
| 邮箱/密码或 Google 登录的设备突然下线 | 在[已登录的客户端](https://oixcloud.com/user/token#devices)核对记录。共用一次登录的设备会一起下线，连续 180 天未使用的登录也会被清理。重新登录仍要用的设备，Apple TV 可从已重新登录的 iPhone 或 iPad [再次同步](/oixflow/apple-tv#approval) |
| 用 Access Token 的设备突然下线 | 检查 Token 是否已到期、删除或重新生成。已重新生成时使用新值，到期或已删除时[新增 Token](/account/security#manual-token)，并更新使用它的设备或脚本。修改账户密码也会撤销所有客户端登录和 Access Token |
| 客户端提示设备登记已失效 | 退出客户端再登录，成功后即可获取节点，无需另行批准 |
| 客户端提示设备时间与服务器相差过大 | 打开系统自动校时，路由器开启 NTP 后重试 |
| 已付款，仍提示没有有效套餐 | 按[付款与激活排查](/help/support#payment)核对充值记录和套餐管理里的「使用中」记录 |

收到陌生设备提醒时，核对提醒中的登录记录，再按[新设备登录与提醒](/account/security#device-approval)撤销相应凭据

<figure class="guide-figure">
  <a href="/illustrations/account-tokens-zh.svg?v=20261127-1" target="_blank" rel="noopener" aria-label="已登录的客户端中共用登录的设备与自行创建的 Access Token 分开显示">
    <img src="/illustrations/account-tokens-zh.svg?v=20261127-1" alt="已登录的客户端中共用登录的设备与自行创建的 Access Token 分开显示" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>示例中 iPhone 和 Apple TV 共用一次登录，路由器使用单独的 Access Token</figcaption>
</figure>

### 网站有节点，订阅里找不到 {#missing-subscription}

1. 在网站[节点列表](https://oixcloud.com/user/node)搜索同一名称。网站也没有时，核对「使用中」的套餐和线路权限
2. 网站有、客户端没有时，先看接入方式。普通第三方订阅可获取有权限且格式支持的 Edge、Home ISP 及账户独享 IP。套餐含 CIA、IXP、Fusion 或 GIA 时，用支持该线路的专用客户端登录
3. 查看**这台设备实际使用的订阅**。在筛选预览中检查线路、地区和名称，保留要用的节点。oixFlow（iPhone / iPad）和 FlClash for oixCloud 在账户页点「刷新节点」。第三方客户端更新导入的地址，再选中该配置。其他客户端见[分客户端步骤](/account/subscriptions#missing-nodes)

若首次导入提示地址无效，按[复制完整订阅地址](/start/quick-start#import-subscription)重试。使用单独创建的个人地址时，先在[订阅管理](https://oixcloud.com/user/sub_manage)核对那条地址及其筛选。曾手动重置主订阅时，使用旧主地址的设备需要换上新地址，使用个人地址或托管配置的设备需要刷新节点参数。发现地址泄露时，按[泄露后的对应处理](/account/security#泄露后的对应处理)操作

## 显示已连接，但网页打不开

1. 暂停其他 VPN 或代理，先确认当前网络能打开平时可直连的网站
2. 连接客户端，打开一次出错的网站，再查看连接记录。iPhone / iPad 用 [oixFlow 的网络检测与请求记录](/oixflow/diagnostics#network-check)；FlClash for oixCloud 在 Windows / macOS 可运行 [工具 → 网络自检](/flclash/diagnostics)，Android / Linux 查看连接与日志
3. 找不到这次请求时，检查应用是否使用系统代理，或是否被 VPN / TUN 排除。能找到请求时，查看它命中的规则和实际出口，再用同一网站对比另一个可用节点

在中国大陆直连 Edge 或 Home ISP 遇到问题时，可在同一网络和客户端上换用套餐内的 CIA、Fusion、GIA 或[托管 IXP 节点](/account/nodes#ixp-access)，再访问同一个网站。若是从云主机连接面板给出的 IXP 地址，按 [IXP 分段排查](/account/nodes#ixp-troubleshooting) 检查本机到前置机、前置机到 IXP 的连接

## 能用，但速度慢或延迟高

核对剩余高速额度、按量设置、是否进入低速或公平使用限制；在同一网络与时间段对比少量节点。测速会消耗流量，延迟、带宽和流媒体表现应分别判断，不要只根据一次测速更改全部配置

### 流量用光或到期后没续上 {#plan-continuation}

打开[套餐管理](https://oixcloud.com/user/bought)，核对到期时间和待激活队列。账户可正常接续时，已购买且符合条件的下一份套餐优先启用

| 页面状态 | 没有可接续套餐时怎么查 |
| --- | --- |
| 普通套餐流量用光，还没到期 | 看当前记录是否已开启[自动重置流量](/account/plans#traffic-reset)，以及余额与佣金是否够付重置价。未重置会在有效期内进入[低速模式](/account/traffic#low-speed) |
| 套餐已到期 | 看[续费队列](/account/plans#auto-renew)第一份符合资格的记录和续费价。资金不足，系统不会改扣更便宜的备选 |

## 流量还有剩余，为什么仍被限速？ {#limits}

剩余流量、积分和套餐速率分别生效，先按 [限速类型对照表](/account/traffic#limits) 判断原因，再检查 [账户信息](https://oixcloud.com/user/profile) 的活动请求与 Working nodes。长连接数量少不代表一分钟内建立的新请求少，重复测速也会增加用量

若收到积分限速通知，按 [公平使用算法与恢复条件](/account/fair-use#recovery) 减少异常活动并观察后续积分；完全断开后没有活动记录，不保证积分上涨。不要通过反复更换节点、重装客户端或购买套餐来猜测解决办法

平台已启用自动异常检测系统。若页面显示暂停或封禁，停止异常使用并按 [服务单说明](/help/support#restrictions) 联系支持；不要把它当作等待积分恢复就能解除的临时限速

## 节点可用，但流媒体地区不对

核对流媒体对应策略组实际使用的节点、出口地区与解锁设置，重新连接后重开应用。账号地区、平台缓存及平台自身限制也会影响结果；提交服务单时注明具体平台、节点与出错时间

## DNS 测试出现本地解析器

先区分预期直连、路由判断产生的解析与绕过客户端的查询。DNS 加密、DNS 经代理以及 VPN / TUN 接管是不同环节，全局模式也不是零泄漏保证

按客户端查看操作步骤与验证方法：[oixFlow DNS 与 IPv6](/oixflow/dns#dns-泄漏-哪些设置有帮助)、[FlClash for oixCloud DNS 与接管](/flclash/dns#dns-泄漏-先检查托管配置和接管方式)

## 客户端专用诊断


<figure class="guide-figure">
  <a href="/illustrations/flclash-diagnostics-zh.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 运行网络自检">
    <img src="/illustrations/flclash-diagnostics-zh.svg?v=20261102-3" alt="FlClash for oixCloud · 运行网络自检" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>FlClash for oixCloud 桌面界面示例 · 其他客户端按对应教程操作</figcaption>
</figure>

- [oixFlow 请求、DNS 与网络事件](/oixflow/diagnostics)
- [FlClash for oixCloud 网络自检与连接记录](/flclash/diagnostics)
