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
  <a href="/illustrations/oixflow-login-zh.svg?v=20261125-1" target="_blank" rel="noopener" aria-label="oixFlow · 登录账户">
    <img src="/illustrations/oixflow-login-zh.svg?v=20261125-1" alt="oixFlow · 登录账户" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

1. 安装 oixFlow 后打开「oixCloud」账户页。需要购买套餐或充值时，到网站用户中心办理
2. 默认用邮箱和密码登录；已有 Access Token 时从页面底部切换，也可选择「使用 Google 登录」。Google 只登录已有账户，并需客户端和网站同时支持，步骤见 [Google 登录说明](/account/security#google-client-login)。确认套餐生效，等待托管节点加载完成再连接
3. 在主页选择节点或策略组，保持「规则」模式并点状态卡片的电源按钮；首次连接时，按系统提示允许添加 VPN 配置

## 只使用自己的节点

oixFlow 也能使用兼容的自有节点或订阅。在「代理 → 服务器 → 添加」使用链接、二维码或手动填写；本地配置文件使用单独的导入入口。托管账户并非自有节点的前提，具体步骤和混用方法见 [节点与订阅](/oixflow/proxies#single-node)

## 刷新与验证

oixCloud 账户页下拉刷新用于更新账户信息，「刷新节点」用于重新获取托管节点；套餐或节点变化后请使用「刷新节点」。策略组决定使用哪个出口，分流规则决定哪些请求走该出口；保持规则模式才能按分流设置使用

连接后打开目标网站，在 [请求与诊断](/oixflow/diagnostics) 中核对出口。账户登录成功但没有节点时，先核对套餐和节点筛选条件

## 退出账户

客户端退出只清理本机登录状态，不撤销同类设备共用的登录令牌。需要撤销时，到网站令牌页操作；账户同步开启时，也应核对其他设备的同步状态

## Google 登录排查

没有按钮、浏览器未返回、流程超时或邮箱未注册时，按统一的 [Google 登录排查](/account/security#google-troubleshooting) 处理
