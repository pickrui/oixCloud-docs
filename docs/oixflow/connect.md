---
description: "登录与首次连接的操作步骤、适用范围与常见问题"
---

# 登录与首次连接

适用于 iPhone / iPad，电视端请看 [Apple TV](/oixflow/apple-tv)

## 安装与系统要求

| 设备 | 最低系统 | 安装入口 |
| --- | --- | --- |
| iPhone | iOS 18.0 | [App Store](https://apps.apple.com/app/id6838819085) · [TestFlight](#testflight) |
| iPad | iPadOS 18.0 | 同 iPhone |

### 通过 TestFlight 安装或更新 {#testflight}

首次安装时，在 iPhone 或 iPad 上安装 [TestFlight](https://apps.apple.com/app/id899247664)，打开 [oixFlow 测试邀请](https://testflight.apple.com/join/CfGzSk6M)，点「接受」再点「安装」。已加入测试的用户可直接打开 TestFlight，在 oixFlow 旁点「更新」。首次加入需有测试名额，安装和更新都需要尚未过期且兼容当前系统的构建

**中国大陆区 Apple ID 无法直接安装或更新**。Apple 已停用 oixFlow 在中国大陆的内部测试、外部测试和公开邀请。以下是用户分享的临时切换商店方法，能否安装或更新以 TestFlight 显示为准

1. 用 iPhone 或 iPad 打开[商店地区选择页](https://www.liangjianghu.com/searchads-appstore-switch)，点「US 美国」
2. 从后台退出 TestFlight，再重新打开。找到 oixFlow 后点「安装」或「更新」，首次加入请打开上方测试邀请

::: details 使用 Mac 或打不开地区选择页？
添加 [App Store Region 快捷指令](https://www.icloud.com/shortcuts/cd008a5e6d1440689173d548ce0eac78)，运行后选择「United States」，再重开 TestFlight。也可以在 [Store Redirect](https://apps.apple.com/cn/app/store-redirect/id1601434613) 中选择美国

如果曾启用 TestFlight 的 MitM 模块或规则，请先停用或删除
:::

## 操作示意

<figure class="guide-figure">
  <a href="/illustrations/oixflow-connect-zh.svg?v=20261123-1" target="_blank" rel="noopener" aria-label="oixFlow · 主页连接与节点选择">
    <img src="/illustrations/oixflow-connect-zh.svg?v=20261123-1" alt="oixFlow · 主页连接与节点选择" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

## 登录托管账户

<figure class="guide-figure">
  <a href="/illustrations/oixflow-login-zh.svg?v=20261126-1" target="_blank" rel="noopener" aria-label="oixFlow · 登录账户">
    <img src="/illustrations/oixflow-login-zh.svg?v=20261126-1" alt="oixFlow · 登录账户" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

1. 安装 oixFlow 后打开「oixCloud」账户页。需要购买套餐或充值时，到网站用户中心办理
2. 默认用邮箱和密码登录；已有 Access Token 时从页面底部切换，也可选择「使用 Google 登录」。Google 只登录已有账户，并需客户端和网站同时支持，步骤见 [Google 登录说明](/account/client-sign-in#google-client-login)。确认套餐生效，等待托管节点加载完成再连接
3. 在主页点当前节点卡片，[选一个节点或策略组](/oixflow/policies#choose-outbound)，保持「规则」模式并点状态卡片的电源按钮；首次连接时，按系统提示允许添加 VPN 配置

登录成功后即可获取托管节点，不需要批准设备；新设备第一次登录时账户会收到提醒，见 [新设备登录与提醒](/account/client-sign-in#device-approval)。要用 Access Token 登录，先在网站 [新增 Access Token](/account/access-tokens#manual-token)，完整内容只显示一次

## 只使用自己的节点

使用自己的节点或订阅时，直接打开「代理 → 服务器 → 添加」。订阅网址选「链接」，节点文件选「文件」，添加后在主页选择节点即可连接。[节点、订阅与完整配置的导入步骤](/oixflow/import-nodes#third-party-subscription)

## 在 iPhone 或 iPad 切换模式 {#capture-mode}

1. 在「主页」点状态卡片的电源按钮，首次连接时允许系统添加 VPN 配置。看到「已连接」后，oixFlow 的 VPN 已启动，设备上的应用可以使用它
2. 在主页选「规则」「全局」或「直连」。规则模式按网站匹配出口；全局模式让一般流量走当前代理；直连模式让一般流量直接出站。使用大号辅助字体时，从「模式」菜单选择
3. 重新访问一个网站，到「活动 → 请求」打开刚才的请求，核对域名和实际出口。主页切换模式不会断开 VPN。若当前[网络预设](/oixflow/networks)指定了模式，主页改动会写入该预设；继承模式时改的是全局设置

要改解析器，到[设置 DNS 并测试](/oixflow/dns#configure-dns)。为其他设备提供 HTTP 或 SOCKS 端口时，使用[代理服务](/oixflow/networks)，本机应用由主页的 VPN 接管

## 刷新与验证

套餐或筛选有变动时，点「oixCloud」账户页右上角的圆形箭头「刷新节点」，等节点加载完成。下拉只更新账户资料，第三方订阅则在「代理 → 服务器」里单独更新

连接后打开目标网站，在 [请求与诊断](/oixflow/diagnostics) 中核对出口。账户登录成功但没有节点时，先核对套餐和节点筛选条件

## 退出账户

在「oixCloud → 账户管理 → 退出登录」确认后，本机会清除登录状态。要在服务器上撤销邮箱/密码或 Google 登录，请到网站[已登录的客户端](/account/client-sign-in#signed-in-clients)点「下线」，共用该凭据的设备（包括已同步的 Apple TV）也会退出。手动 Access Token 在网站的「Access Token」列表管理

## Google 登录排查

没有按钮、浏览器未返回、流程超时或邮箱未注册时，按统一的 [Google 登录排查](/account/client-sign-in#google-troubleshooting) 处理
