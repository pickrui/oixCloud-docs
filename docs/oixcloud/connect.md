---
description: "登录与首次连接的操作步骤、适用范围与常见问题"
---

# 登录与首次连接

适用于 iPhone / iPad，电视端请看 [Apple TV](/oixcloud/apple-tv)

## 安装与系统要求

| 设备 | 最低系统 | 安装入口 |
| --- | --- | --- |
| iPhone | iOS 18.0 | [App Store](https://apps.apple.com/us/app/oixcloud/id6782528093) |
| iPad | iPadOS 18.0 | 同一 App Store 应用 |

App Store 下载需要非中国大陆地区的 Apple 账户；测试版从 [软件中心](https://oixcloud.com/client#apple) 进入 TestFlight，需有可用名额且构建未过期。测试版要求以 TestFlight 中的构建说明为准，不能用它绕过系统要求

## 操作示意

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-connect-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="oixCloud · 主页连接与节点选择">
    <img src="/illustrations/oixcloud-connect-zh.svg?v=20261030-2" alt="oixCloud · 主页连接与节点选择" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

## 登录托管账户

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-login-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="oixCloud · 登录账户">
    <img src="/illustrations/oixcloud-login-zh.svg?v=20261030-2" alt="oixCloud · 登录账户" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

1. 从软件中心进入 App Store 或 TestFlight 安装 oixCloud，打开应用中的「oixCloud」账户页登录
2. 选择邮箱/密码、已有 Access Token，或当前版本提供的「使用 Google 登录」。Google 只登录已有账户，并需客户端和网站同时支持，步骤见 [Google 登录说明](/account/security#google-client-login)。确认套餐生效，等待托管节点加载完成再连接
3. 在主页选择节点或策略组，保持「规则」模式并点状态卡片的电源按钮；首次连接时，按系统提示允许添加 VPN 配置

## 只使用自己的节点

oixCloud 也能使用兼容的自有节点或订阅。在「代理 → 服务器 → 添加」使用链接、二维码或手动填写；本地配置文件使用单独的导入入口。托管账户并非自有节点的前提，具体步骤和混用方法见 [节点与订阅](/oixcloud/proxies#single-node)

## 刷新与验证

oixCloud 账户页下拉刷新用于更新账户信息，「刷新节点」用于重新获取托管节点；套餐或节点变化后请使用「刷新节点」。策略组决定使用哪个出口，分流规则决定哪些请求走该出口；保持规则模式才能按分流设置使用

连接后打开目标网站，在 [请求与诊断](/oixcloud/diagnostics) 中核对出口。账户登录成功但没有节点时，先核对套餐和节点筛选条件

## 退出账户

客户端退出只清理本机登录状态，不撤销同类设备共用的登录令牌。需要撤销时，到网站令牌页操作；账户同步开启时，也应核对其他设备的同步状态

## Google 登录排查

没有按钮时先核对安装版本；维护源码中的新功能不一定已经进入当前 App Store 或稳定版。浏览器未返回时使用「返回 App」，超时后从客户端重新开始。提示邮箱未注册时，选择已有账户对应的 Google 邮箱，或先在网站完成注册；不要为排查浏览器跳转而反复刷新 Token
