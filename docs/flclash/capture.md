---
description: "系统代理与虚拟网卡的操作步骤、适用范围与常见问题"
---

# 系统代理与虚拟网卡

<span id="先选择接管方式"></span>

## 先选择接管方式 {#mode}

1. 在「仪表盘 → 状态」点播放按钮启动，在「出站模式」选「规则」「全局」或「直连」。日常选「规则」，网站会按分流规则选择出口。选「全局」时到「代理」选择全局组的出口；选「直连」时，进入客户端的普通请求直接连接目标
2. 按设备开启下方的系统代理、虚拟网卡或 Android VPN，然后重新打开目标网站。已有连接可能继续使用旧出口
3. 桌面侧栏点「请求」，窄屏或手机从「工具 → 更多 → 请求」进入，按域名打开刚产生的记录，核对规则与出口。能看到新记录说明该请求已进入客户端

## 桌面系统代理

<figure class="guide-figure">
  <a href="/illustrations/flclash-capture-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="在网络设置开启系统代理或虚拟网卡">
    <img src="/illustrations/flclash-capture-zh.svg?v=20261127-5" alt="在网络设置开启系统代理或虚拟网卡" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

在 Windows、macOS 或 Linux 的仪表盘打开「系统代理」，也可从「工具 → 进阶配置 → 网络 → 系统代理」开启。先用遵循系统代理的浏览器访问网站，再按上方步骤查请求

| 平台 | 怎样确认系统已采用本地代理 |
| --- | --- |
| Windows | 在系统「设置 → 网络和 Internet → 代理」查看手动代理的地址和端口 |
| macOS | 在终端运行 `scutil --proxy`，查看 HTTP / HTTPS 代理是否启用及其地址和端口 |
| Linux 图形桌面 | 打开桌面环境的「网络代理」设置查看 HTTP / HTTPS 地址和端口，再用遵循该设置的应用测试 |

地址应指向本机，端口应与「工具 → 常规 → 端口」的混合端口一致。有独立代理设置的应用需在应用内填入这个端口，或按下一节启用虚拟网卡

<span id="虚拟网卡"></span>

## 虚拟网卡 {#tun}

在桌面仪表盘打开「虚拟网卡」，也可到「工具 → 进阶配置 → 网络 → 选项」开启。完成系统要求的权限操作，等仪表盘显示已启用。要验证 TUN，用一个没有设置 HTTP 代理、也不使用系统代理的应用新建连接，到「请求」查它刚访问的域名或 IP 和出口

Windows 和 macOS 还可从「工具 → 网络自检」核对 TUN 路由。Linux 上若查不到记录，先检查该目标是否被路由排除，以及其他 VPN 是否接管了它

<span id="android-vpn"></span>

## Android

<figure class="guide-figure">
  <a href="/illustrations/flclash-android-vpn-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="在 Android 网络设置开启 VPN，再从仪表盘启动">
    <img src="/illustrations/flclash-android-vpn-zh.svg?v=20261127-5" alt="在 Android 网络设置开启 VPN，再从仪表盘启动" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

1. 打开「工具 → 进阶配置 → 网络」，开启「VPN」，回到仪表盘启动，首次使用时同意 Android 的 VPN 连接请求
2. 在系统 VPN 页面确认 FlClash for oixCloud 已连接。从[访问控制](/flclash/android)允许的应用发起新请求，到「工具 → 更多 → 请求」核对出口
3. Android 10 及以上，同一网络设置里的「系统代理」可为这个 VPN 提供 HTTP 代理。只想让应用走 VPN 时，开启「VPN」即可

## 验证

有请求记录但出口不对时，检查「出站模式」、命中规则和所选组；完全找不到请求时，先核对接管方式、应用排除及其他 VPN。需要验证解析服务器时，按[查看 DNS 查询](/flclash/dns#configure-dns)操作

## 代理冲突与端口占用

Windows / macOS 启动时可能提示「可能存在代理冲突」，列出已有系统代理、自动配置脚本或其他 VPN / 虚拟网卡。先确认这些设置的用途，可从提示进入「网络自检」；这是冲突线索，不代表已经证明它就是故障原因

混合端口被占用时，端口对话框会在找到可用端口后给出建议。核对后「保存并重试」，并同步更新手动配置了代理地址的应用。端口检查通过不保证其他程序之后不会占用它
