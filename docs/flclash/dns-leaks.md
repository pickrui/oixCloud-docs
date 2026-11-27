# 检查与修复 DNS 泄漏 {#dns-泄漏-先检查托管配置和接管方式}

<span id="dns-leaks-check-managed-dns-and-traffic-capture-first"></span>

当前维护版本的服务端为 FlClash for oixCloud 生成的托管配置，将普通目标域名的默认 DNS 设为经 `Proxy` 组发送的 DoH，并为节点启动解析、直连目标保留独立解析器。特定域名策略仍可能优先于默认 DNS；本地旧配置、自定义订阅、脚本和 DNS 覆写也可能改变行为，不能只凭“已连接”认定生效

1. 在账户页点「刷新节点」（旧版为「同步」），确认托管配置更新成功，并选中这份配置
2. 在「工具 → 进阶配置 → DNS」先记录并移除个人 DNS 覆写项，验证托管设置；在「工具 → 常规」关闭「追加系统DNS」，避免给普通 DNS 上游额外加入系统解析器
3. 在代理页确认 `Proxy` 组最终选中可用代理节点，没有落到 `DIRECT`。组名区分大小写，其他订阅未必有这个组
4. 桌面端开启「虚拟网卡」，确认授权与路由生效；Android 同意 VPN 授权，并确认测试应用未被访问控制排除。仅开启系统 HTTP / HTTPS 代理不能保证接管系统 DNS 或所有应用
5. 重新打开目标应用，用新的测试域名验证解析器和实际出口；更新配置后仍异常时检查个人覆写与脚本

<span id="platform-checks"></span>

## 按平台补充检查

| 平台 | 操作与限制 |
| --- | --- |
| macOS | 「工具 → 进阶配置 → 网络」中保留「自动设置系统 DNS」开启，并启用 TUN；检查系统 DNS 修改是否成功。发往局域网路由器的 DNS 可能绕过 TUN，不要只检查公共 DNS |
| Windows | 启用 TUN，并检查多网卡、其他 VPN 和系统 DNS；需要严格路由时在网络设置的「虚拟网卡」中添加对应覆写项，见下方说明 |
| Android | 在「工具 → 进阶配置 → 网络」开启「DNS劫持」、关闭「允许应用绕过VPN」，并确认应用未被排除；排查时将系统「私人 DNS」设为关闭<br>常驻 VPN 与断线阻止连接由 Android 系统另行配置，并受系统版本支持情况限制 |
| Linux | 检查 TUN 自动路由、系统解析器与其他网络管理服务是否冲突；确认查询真正进入内核，而不只是本地代理端口可用 |

浏览器安全 DNS、应用内置 DoH / DoT 不会被普通端口 53 接管。排查时先记录并停用这些独立设置；如需保留，应让其连接通过预期代理，并单独验证 IPv4 / IPv6。关闭 DNS 的 IPv6 解析只影响 AAAA 回答，不等于关闭系统 IPv6

<span id="strict-routing-on-windows"></span>

## Windows 严格路由

当前 Windows / Linux 界面提供此项，无需为它单独编写覆写脚本

1. 打开「工具 → 进阶配置 → 网络」，在「虚拟网卡」部分点「添加覆写项」
2. 添加「严格路由」并开启；若该项已添加，直接核对其值
3. 重新应用配置，确认 TUN 已启用，再检查生效配置与 DNS 路径；自定义配置自己的 TUN 设置优先于应用级覆写，也需一并核对

Windows 下该选项用于抑制多网卡 DNS 泄漏，可能影响 VirtualBox 等网络；出现兼容问题时移除新增覆写项或恢复原值并重新应用。它不改变 DNS 上游的代理选择，也不等于客户端退出后的系统断网保护；关闭 IPv6 时，严格路由还会阻断本机 IPv6 连接，详见 [mihomo TUN 文档](https://wiki.metacubex.one/config/inbound/tun/#strict-route)

<span id="custom-dns-also-needs-an-outbound-choice"></span>

## 自定义 DNS 时，必须同时确定出站

`https://` 或 `tls://` 只说明 DNS 传输加密。若要求普通域名解析经过代理，需要显式选择 DNS 连接的出口，例如当前托管配置使用的 `https://1.1.1.1/dns-query#Proxy`；这个后缀要求配置中确实存在 `Proxy` 组，且最终选择代理节点

`respect-rules: true` 表示 DNS 连接按路由规则选择出站，规则仍可能选中直连，并不是“防泄漏”开关。不要盲目开启，也不要把代理节点自身的解析指向一个必须先连接该节点才能访问的 DNS，否则会形成循环依赖

同时检查 `nameserver-policy`、`fallback`、`direct-nameserver` 和 `proxy-server-nameserver`：域名策略可以优先于默认解析器，后备查询也可能额外发出，直连和节点启动解析各有用途。只更换 `nameserver` 不能证明全部查询都经过代理；不要删除托管节点专用解析策略。字段含义见 [mihomo DNS 文档](https://wiki.metacubex.one/config/dns/)

<span id="check-whether-queries-still-leak"></span>

## 怎样判断是否仍有泄漏

DNS 测试显示的是解析器，解析器国家或 IP 与节点不同不一定是泄漏。应结合测试域名、规则和实际出站判断：直连目标使用本地 DNS 可能符合分流设置，但应代理的目标被交给本地运营商解析器就需要继续排查

使用生成随机新域名的测试避免缓存影响，依次对比 VPN / TUN 接管、DNS 覆写、应用自带 DNS 和 IPv6；通过 [连接记录与网络自检](/flclash/diagnostics) 核对出站。有条件时在自己的物理网卡或路由器抓包，分别检查 UDP / TCP 53、加密 DNS 的直接连接，并在切换网络、重连后复测。一次网页测试通过不能证明所有应用和断线期间都受保护
