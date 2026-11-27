# oixClash 流量接管、DNS 与节点选择 {#oixclash-network}

## 切换模式并验证设备接管 {#capture-mode}

在「运行」勾选「开启」并点「保存并应用」，等服务恢复。从「运行 → 节点切换 → 打开控制面板」进入 MetaCubeXD，在「配置 → 核心配置 → 运行模式」选「规则」「全局」或「直连」。要按网站分流就选「规则」，切换后从接管范围内的设备重新访问网站，在「连接」按设备 IP 或域名核对实际出口

这个插件用路由器防火墙接管局域网设备，生成的配置关闭 TUN。日常使用不需要在设备上开启系统代理或在控制面板另开 TUN。若请求没有进入控制面板，检查设备策略、网关、常用端口和大陆 IP 绕过设置

## 在这台路由器设置 DNS {#configure-dns}

<figure class="guide-figure">
  <a href="/illustrations/oixclash-dns-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Merlin 路由器的自定义直连 DNS、代理 DNS 与保存按钮">
    <img src="/illustrations/oixclash-dns-zh.svg?v=20261127-5" alt="Merlin 路由器的自定义直连 DNS、代理 DNS 与保存按钮" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

1. 打开 oixClash 的「DNS 设置 → 展开 DNS 设置」。要沿用订阅的解析器，保持「使用自定义 DNS」未勾选；要在本机覆盖，勾选这一项
2. 「直连 DNS」可填 IPv4 地址（可带端口）或 HTTPS 地址；「代理 DNS」填 HTTPS 地址，由 `Proxy` 组发送，无需手加 `#Proxy`。每栏可填 1 至 4 个地址，用英文逗号分隔
3. 点「保存并应用」，等状态恢复后点「自检」。选择接管范围内的设备，以路由器为 DNS 解析一个新域名。想验证具体上游时，使用能查看查询记录的解析器核对该域名。「面板下发的 DNS」一直显示订阅原值
4. 要恢复面板设置，取消勾选「使用自定义 DNS」再保存。原来输入的地址会保留，方便以后再用

## 选择节点、策略组或中继入口 {#routing}

<figure class="guide-figure">
  <a href="/illustrations/metacubexd-groups-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="在 oixClash 打开的 MetaCubeXD 面板里选择节点">
    <img src="/illustrations/metacubexd-groups-zh.svg?v=20261127-5" alt="在 oixClash 打开的 MetaCubeXD 面板里选择节点" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>操作示意 · 虚构数据</figcaption>
</figure>

1. 在软件中心打开 oixClash，找到「运行 → 节点切换」，点「打开控制面板」。在 MetaCubeXD 的「代理」中展开目标网站使用的手动选择组，点需要的节点。选中子组时，再打开子组选择成员
2. 想让一个网站走指定组，按下面的[账号自定义规则](/other/oixclash-rules#routing-rules)把域名指向该组。用局域网设备重新访问，在控制面板的「连接」查看命中规则和出口
3. 插件的节点切换页只负责选用已有出口。要让托管流量经过多跳，有相应权限的账户可在网站配置[内部中继](/account/relay#内部中继)，然后在路由器的手动选择组选中这条路径的**入口节点**
