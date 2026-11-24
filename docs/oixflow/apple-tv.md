---
description: "Apple TV 连接与同步的操作步骤、适用范围与常见问题"
---

# Apple TV 连接与同步

电视端侧重遥控器操作、节点选择和连接，不提供 iPhone / iPad 的全部编辑功能

## 安装与系统要求

Apple TV 需要 tvOS 18.0 或更高版本，用于发布账户与配置的 iPhone / iPad 也需运行 iOS / iPadOS 18.0 或更高版本。在电视的 App Store 搜索并安装 oixFlow，使用非中国大陆地区的 Apple 账户

也可以通过 TestFlight 安装测试版，手机或平板与电视的 TestFlight 须使用同一 App Store 账户：

1. 在 Apple TV 的 App Store 安装 TestFlight
2. 在 iPhone 或 iPad 上安装 [TestFlight](https://apps.apple.com/app/id899247664)，用同一 App Store 账户接受 [oixFlow 测试邀请](https://testflight.apple.com/join/bThPJNaf)
3. 在电视上打开 TestFlight，选择 oixFlow 并点「安装」；有新构建时在这里点「更新」

首次加入需有名额，构建须在有效期内并支持当前 tvOS 版本

中国大陆区 Apple ID 无法直接安装或更新。有关手机或平板上的邀请和商店地区选项，见 [TestFlight 安装与更新](/oixflow/connect#testflight)

## 方式一：接收手机或平板配置


<figure class="guide-figure">
  <a href="/illustrations/apple-tv-sync-zh.svg?v=20261123-1" target="_blank" rel="noopener" aria-label="oixFlow · 在电视设置中打开同步">
    <img src="/illustrations/apple-tv-sync-zh.svg?v=20261123-1" alt="oixFlow · 在电视设置中打开同步" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据</figcaption>
</figure>

1. iPhone / iPad 与 Apple TV 使用同一 Apple 账户，并统一更新客户端版本
2. 手机或平板先完成登录与节点配置
3. 手机进入「设置 → iCloud 同步」，开启「同步到 Apple TV」
4. 电视进入「设置」开启 iCloud 同步，按提示处理已有配置
5. 等待节点出现，选择出口并连接，在电视上的目标应用验证

同步可能涉及替换电视已有配置，确认前先阅读提示。电视保留自己的连接与路由设置，可以调整规则集去向；模块不在电视同步范围内

## 账户与节点来源

当前电视端的 oixCloud 账户页展示从 iPhone / iPad 同步来的账户。账户登录、退出和托管节点筛选在手机或平板上完成，电视不提供同样的账户管理流程

Tailscale 账户授权是独立功能，不能用来登录 oixCloud 托管账户

## 批准 Apple TV {#approval}

Apple TV 第一次获取节点前需要批准。同一 Apple 账户下已经批准的 iPhone / iPad 会自动代为批准：电视显示「在 iPhone 上打开 oixFlow 即可自动完成批准」时，在手机上打开 oixFlow，稍等片刻电视会自动获取节点

手机端需要已登录并开启「同步到 Apple TV」。手机长时间未打开或不在身边时，在电视账户页打开「批准这台设备」，用手机扫码在网页上批准，或私聊已绑定的 Telegram 机器人发送屏幕上的命令；核对指纹一致后再批准。其他客户端的批准方式见 [批准新设备](/account/security#device-approval)

## 日常使用

使用遥控器切换节点或策略组，检查延迟与连接状态。复杂的节点、链和规则整理优先在手机或平板完成后同步

## 同步或连接失败

先确认两端 Apple 账户、客户端版本和同步开关，再检查电视的网络与套餐状态。节点已出现但视频异常时，核对所选出口和平台地区，不要仅反复同步相同配置

## 在局域网浏览器查看与切换 {#local-control}

支持此功能的电视版本可在「设置 → 局域网控制台」临时开启访问，在同一网络的手机或电脑上查看状态并切换节点。电视提供地址与访问密钥的二维码，操作见 [局域网控制台](/oixflow/local-control#apple-tv)

控制台要求电视上的连接已运行，不能远程替尚未连接的电视启动连接，也不提供完整的配置编辑
