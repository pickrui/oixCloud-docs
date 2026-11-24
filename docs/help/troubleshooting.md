---
description: "连接与速度排查的操作步骤、适用范围与常见问题"
---

# 连接与速度排查

先选择最接近的现象，再按对应章节逐项检查。每次只改变一个条件，保留前后的结果

| 现象 | 优先检查 |
| --- | --- |
| [无法登录或没有节点](#无法登录-或节点列表为空) | 官网与账户状态、登录凭据、套餐有效期 |
| [已连接但网页打不开](#显示已连接-但网页打不开) | 本机网络、流量接管、模式与实际节点 |
| [速度慢或延迟高](#能用-但速度慢或延迟高) | 剩余高速流量、限速状态、同条件节点对照 |
| [有流量但仍被限速](#limits) | 积分、活动请求、Working nodes 与账户通知 |
| [流媒体地区不对](#节点可用-但流媒体地区不对) | 实际出口、解锁设置与第三方平台条件 |
| [DNS 测试出现本地解析器](#dns-测试出现本地解析器) | 预期直连、路由解析与客户端接管范围 |

## 无法登录，或节点列表为空

先在 [用户中心](https://oixcloud.com/user) 确认能否登录，再按看到的情况操作

| 你看到的情况 | 下一步 |
| --- | --- |
| 网站能登录，客户端提示凭据错误 | 检查所选登录方式。密码栏填写账户密码，Token 栏填写有效的 Access Token。如果已关闭客户端密码登录，请改用 [客户端支持的登录方式](/account/security#first-client-login) |
| 已付款，客户端仍提示没有有效套餐 | 分别核对充值记录和套餐管理，确认有一笔「使用中」的套餐。若只有充值记录或显示「待激活」，按 [付款与激活排查](/help/support#payment) 继续，避免重复付款 |
| 客户端提示这台设备还没有批准 | 按 [批准新设备](/account/security#device-approval) 在网页或 Telegram 机器人中批准，客户端会自动获取节点 |
| 客户端提示设备时间与服务器相差过大 | 打开系统的「自动设置日期与时间」，路由器开启 NTP 校时后重试 |
| 已登录，有效套餐下仍找不到目标节点 | 在网站的 [节点列表](https://oixcloud.com/user/node) 搜索节点名称。网站能看到时，按 [缺少节点的排查步骤](/account/subscriptions#missing-nodes) 核对当前订阅并更新客户端 |

## 显示已连接，但网页打不开

1. 暂停其他 VPN 或代理，先确认当前网络能打开平时可直连的网站
2. 连接客户端，打开一次出错的网站，再查看连接记录。iPhone / iPad 用 [oixFlow 的网络检测与请求记录](/oixflow/diagnostics#network-check)；FlClash for oixCloud 在 Windows / macOS 可运行 [工具 → 网络自检](/flclash/diagnostics)，Android / Linux 查看连接与日志
3. 找不到这次请求时，检查应用是否使用系统代理，或是否被 VPN / TUN 排除。能找到请求时，查看它命中的规则和实际出口，再用同一网站对比另一个可用节点

在中国大陆直连 Edge 或 Home ISP 时，先查看 [节点类型](/account/nodes#node-types)。如果套餐包含 CIA、IXP、Fusion 或 GIA，可保持网络和客户端不变，换用其中一个节点重试；记录哪个能访问、哪个超时

## 能用，但速度慢或延迟高

核对剩余高速额度、按量设置、是否进入低速或公平使用限制；在同一网络与时间段对比少量节点。测速会消耗流量，延迟、带宽和流媒体表现应分别判断，不要只根据一次测速更改全部配置

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
