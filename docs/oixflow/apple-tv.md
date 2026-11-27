---
description: "Apple TV 连接与同步的操作步骤、适用范围与常见问题"
---

# Apple TV 连接与同步

电视端侧重遥控器操作、节点选择和连接，不提供 iPhone / iPad 的全部编辑功能

## 安装与系统要求

Apple TV 需要 tvOS 18.0 或更高版本，用于发布账户与配置的 iPhone / iPad 也需运行 iOS / iPadOS 18.0 或更高版本。使用非中国大陆地区的 Apple 账户，在电视的 App Store 搜索 oixFlow，可用地区以 [App Store 页面](https://apps.apple.com/app/id6838819085) 为准

也可以通过 TestFlight 安装测试版，手机或平板与电视的 TestFlight 须使用同一 App Store 账户：

1. 在 Apple TV 的 App Store 安装 TestFlight
2. 在 iPhone 或 iPad 上安装 [TestFlight](https://apps.apple.com/app/id899247664)，用同一 App Store 账户接受 [oixFlow 测试邀请](https://testflight.apple.com/join/CfGzSk6M)
3. 在电视上打开 TestFlight，选择 oixFlow 并点「安装」；有新构建时在这里点「更新」

首次加入需有名额，构建须在有效期内并支持当前 tvOS 版本

中国大陆区 Apple ID 无法直接安装或更新。有关手机或平板上的邀请和商店地区选项，见 [TestFlight 安装与更新](/oixflow/connect#testflight)

## 方式一：接收手机或平板配置


<figure class="guide-figure">
  <a href="/illustrations/apple-tv-sync-zh.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="oixFlow · 在电视设置中打开同步">
    <img src="/illustrations/apple-tv-sync-zh.svg?v=20261127-3" alt="oixFlow · 在电视设置中打开同步" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据</figcaption>
</figure>

1. iPhone / iPad 与 Apple TV 使用同一 Apple 账户，并统一更新客户端版本
2. 手机或平板先完成登录与节点配置
3. 手机进入「设置 → iCloud 同步」，开启「同步到 Apple TV」
4. 电视已有本地节点、订阅或策略组时，开启同步会用手机或平板的配置替换它们。要接收这份配置，在电视「设置」开启「iCloud 同步」并确认
5. 等待节点出现，选择出口并连接，在电视上的目标应用验证

电视会保留原来的本地配置供关闭同步时恢复。电视的连接与路由设置可独立调整，模块由手机或平板管理

## 账户与节点来源

- **已开启 iCloud 同步**：在发布配置的 iPhone 或 iPad 登录 oixCloud，进入「oixCloud → 节点筛选」保存条件，或点「刷新节点」。第三方订阅在手机或平板的「代理 → 服务器」中更新。等电视「代理」出现新节点，再选择出口
- **单独使用电视**：保持电视「设置 → iCloud 同步」关闭，在「代理」点添加，输入节点分享链接或兼容订阅的完整网址，点「继续」。以后在该订阅标题旁点更新按钮即可。登录托管账户仍通过手机或平板同步

Tailscale 账户授权是独立功能，不能用来登录 oixCloud 托管账户

## Apple TV 的登录 {#approval}

Apple TV 继续通过 iPhone / iPad 的「同步到 Apple TV」登录：手机或平板需要已登录并开启这个开关，电视收到同步后即可获取节点，不需要批准，也不需要再由 iPhone 确认

手机或平板用邮箱/密码或 Google 登录时，电视使用这次登录后，会列在网站[已登录的客户端](/account/client-sign-in#signed-in-clients)对应记录下。点该记录的「下线」会让两端一起退出。使用手动 Access Token 时，在该 Token 下查看设备。要恢复，在手机或平板重新登录，再确认「同步到 Apple TV」仍开启

<span id="routing"></span>

## 日常使用

<figure class="guide-figure">
  <a href="/illustrations/apple-tv-routing-zh.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="Apple TV 主页选择器中的自动优选、链式代理和订阅节点">
    <img src="/illustrations/apple-tv-routing-zh.svg?v=20261127-4" alt="Apple TV 主页选择器中的自动优选、链式代理和订阅节点" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>操作示意 · 虚构数据</figcaption>
</figure>

1. 用遥控器点主页的当前节点卡片。展开选择器后，点独立节点、订阅中的节点、已有的链，或在有可用成员时点「自动优选」。点「全部测试」可以先比较列表中的节点和链
2. 要让某个服务走自建策略组，进「设置 → 模式」选「规则」，再进「设置 → 路由规则」。点已启用的规则集，选要使用的组、节点或链。停用的内置规则集第一次点按会启用，再点一次选择去向
3. 使用 iCloud 镜像时，在发布配置的 iPhone 或 iPad 上[创建策略组或代理链](/oixflow/proxy-chains#create-chain)、添加规则，等电视收到后选择。使用电视本地配置时，也可在「路由规则 → 添加规则」填写域名、选择去向并保存
4. 重新打开电视上的目标服务，核对新连接的出口

## 在电视切换模式和 DNS {#capture-dns}

<figure class="guide-figure">
  <a href="/illustrations/apple-tv-dns-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Apple TV 的 DNS 同步与本机自定义 DNS">
    <img src="/illustrations/apple-tv-dns-zh.svg?v=20261127-5" alt="Apple TV 的 DNS 同步与本机自定义 DNS" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

1. 用遥控器点主页电源按钮，按系统提示允许 VPN，等主页显示已连接。在「设置 → 模式」选「规则」「全局」或「直连」。返回该菜单，勾号表示当前选择
2. 打开「设置 → DNS」。已开启「DNS 同步」时，电视接收 iPhone 或 iPad 的 DNS 设置，在发布设备上修改，等两端 iCloud 同步后再核对电视显示的服务器
3. 只想改这台电视时，关闭「DNS 同步」，点「自定义 DNS」，填写可达服务器并确认。这项修改保存在电视上。以后重新开启 DNS 同步时，收到的设置会替换本机 DNS
4. 回到主页确认 VPN 已连接，在目标应用发起新连接，查看主页流量是否增加。要确认具体 DNS 上游，可用能查看查询记录的解析器，访问一个此前未查询过的域名，再检查该解析器是否收到了查询

## 同步或连接失败

先确认两端 Apple 账户、客户端版本和同步开关，再检查电视的网络与套餐状态。节点已出现但视频异常时，核对所选出口和平台地区，不要仅反复同步相同配置

## 在局域网浏览器查看与切换 {#local-control}

支持此功能的电视版本可在「设置 → 局域网控制台」临时开启访问，在同一网络的手机或电脑上查看状态并切换节点。电视提供地址与访问密钥的二维码，操作见 [局域网控制台](/oixflow/local-control#apple-tv)

控制台要求电视上的连接已运行，不能远程替尚未连接的电视启动连接，也不提供完整的配置编辑
