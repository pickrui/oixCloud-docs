# OpenClash 流量接管与 DNS {#openclash-network}

## 切换代理模式或启用 TUN {#capture-mode}

<figure class="guide-figure">
  <a href="/illustrations/openclash-modes-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="OpenClash 运行状态里的代理模式、DNS 模式和 TUN">
    <img src="/illustrations/openclash-modes-zh.svg?v=20261127-5" alt="OpenClash 运行状态里的代理模式、DNS 模式和 TUN" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

1. 在 LuCI 打开「服务 → OpenClash → 运行状态」。要按网站分流，在「代理模式」点「规则」；要把进入内核的普通连接交给全局组，点「全局」；需要临时直连时点「直连」
2. 需要路由器用虚拟网卡接管时，在同页「运行模式」选择「TUN」，等待服务恢复运行。这里的 Fake-IP / Redir-Host 决定 DNS 返回地址的方式，可以保留原选择
3. 用以这台路由器为网关、已纳入访问控制的设备重新访问一个网站。在控制面板「连接」按域名或设备 IP 找到这条新连接，核对出口。若看不到，检查[端口范围](/other/openclash#common-ports)和绕过设置

## 设置并验证路由器 DNS {#configure-dns}

<figure class="guide-figure">
  <a href="/illustrations/openclash-dns-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="在覆写设置为普通域名填写 DNS 上游并应用配置">
    <img src="/illustrations/openclash-dns-zh.svg?v=20261127-5" alt="在覆写设置为普通域名填写 DNS 上游并应用配置" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

1. 日常使用可保留配置自带的 DNS。在「插件设置 → DNS 设置 → 本地 DNS 劫持」查看局域网 DNS 如何转给 OpenClash，按当前网络使用 Dnsmasq 转发或防火墙转发
2. 要更换解析器，打开「覆写设置 → DNS 设置」，勾选「自定义上游 DNS 服务器」。在下方的服务器表添加或编辑 `nameserver` 项，填写可达解析器的地址、协议和端口，启用该行，点「应用配置」
3. 等服务恢复，在「配置管理」打开当前配置的「⋯」菜单，选择「下载运行配置」，核对 `dns.nameserver`。在局域网设备上运行 `nslookup example.com 路由器的局域网IP`，将最后一项换成实际地址，确认收到应答。要验证上游确实收到某次查询，可使用能查看查询记录的解析器和未缓存的新域名
