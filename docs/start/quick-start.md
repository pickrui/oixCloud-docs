---
description: "第一次使用的操作步骤、适用范围与常见问题"
---

# 第一次使用

先完成一次正常连接，再按需求启用高级功能

## 连接前确认

首次在网站用邮箱注册时，昵称可以留空，系统会自动生成。需要邀请码或邮箱验证码时，按注册页提示填写

1. 打开 [用户中心](https://oixcloud.com/user)，确认账户正常、套餐已激活且仍在有效期内
2. 先核对 [下载与系统要求](/clients/#requirements)，再到 [软件中心](https://oixcloud.com/client) 下载对应系统和架构的官方客户端
3. 先暂停其他 VPN，保持默认配置，选择一个可用节点

充值到账不等于套餐已生效。从套餐购买流程进入收银台付款后，系统会尝试自动完成那笔购买；先核对充值记录和套餐记录，避免重复下单。单独充值后需按自己的目标购买套餐或激活已有套餐，详见 [购买、续费与切换](/account/plans)

## 首次登录定制客户端

使用邮箱/密码、Access Token，或客户端提供的「使用 Google 登录」。Google 入口只登录已有账户，需要客户端和网站同时支持；Apple TV 通过 iPhone 同步，不在电视端重复这套流程

登录成功后这台设备即可获取节点，不需要另外批准。用邮箱/密码或 Google 登录的设备会列在 [Access Token 管理](https://oixcloud.com/user/token#devices) 的「已登录的客户端」；要用 Access Token 登录，先在同一页面点「新增 Token」，完整内容只显示一次。该页「客户端登录方式与安全提示」里的「禁止客户端使用邮箱/密码登录」只关闭密码方式，不影响已登录的设备、现有 Token、网页登录和受支持的 Google 登录。详见 [登录定制客户端](/account/security#first-client-login)

## 选择你的设备

| 设备 | 教程 |
| --- | --- |
| <span class="platform gi-apple">iPhone / iPad</span> | [<span class="gi gi-oixflow" aria-hidden="true"></span>oixFlow 首次连接](/oixflow/connect) |
| <span class="platform gi-apple">Apple TV</span> | [<span class="gi gi-oixflow" aria-hidden="true"></span>Apple TV 连接与同步](/oixflow/apple-tv) |
| <span class="platform gi-windows">Windows</span> <span class="platform gi-apple">macOS</span> <span class="platform gi-android">Android</span> <span class="platform gi-linux">Linux</span> | [<span class="gi gi-flclash" aria-hidden="true"></span>FlClash for oixCloud 首次连接](/flclash/connect) |
| <span class="platform gi-openwrt">OpenWrt 路由器</span> | [<span class="gi gi-openclash" aria-hidden="true"></span>OpenClash](/other/openclash) |
| <span class="platform gi-router">Merlin 路由器</span> | [<span class="gi gi-oixclash" aria-hidden="true"></span>oixClash](/other/oixclash) |
| <span class="platform gi-apple">使用 Surge 的 Mac</span> | [<span class="gi gi-helper" aria-hidden="true"></span>Surge 助手](/other/surge) |

## 怎么确认已经可用


<figure class="guide-figure">
  <a href="/illustrations/flclash-connect-zh.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 仪表盘启动与接管">
    <img src="/illustrations/flclash-connect-zh.svg?v=20261102-3" alt="FlClash for oixCloud · 仪表盘启动与接管" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>FlClash for oixCloud 桌面界面示例 · 其他客户端按对应教程操作</figcaption>
</figure>

打开平时需要代理的网站，再检查客户端是否出现流量或连接记录。仅看到 VPN 图标或连接开关开启，还不能证明目标网站可用

失败时先看 [连接排查](/help/troubleshooting)，不要一次修改节点、DNS、模式和订阅全部选项
