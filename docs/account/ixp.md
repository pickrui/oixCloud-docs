# IXP 云网互联接入 {#ixp}

在手机或电脑上日常使用，直接选[客户端里的托管 IXP 节点](#ixp-access)，无需购买云主机。已有能接入 IXP 的云主机，也可以[用 GOST 转发](#ixp-connectivity)。华南接入香港、华东接入日本，见[专线接入对照](/account/nodes#dedicated-lines)

## 在客户端选择托管 IXP 节点 {#ixp-access}

1. 打开[节点列表](https://oixcloud.com/user/node)，选择 **IXP**，找到目标节点。Pass Alu、Pass Bronze 及更高等级套餐通常包含 IXP，具体以账户权限为准。卡片提示购买或升级套餐时，先核对当前生效的套餐
2. 在[软件中心](https://oixcloud.com/client)提供的专用客户端登录并更新托管节点。oixFlow（iPhone / iPad）和 FlClash for oixCloud 都可在「oixCloud」账户页点「刷新节点」。普通第三方订阅不下发 IXP。如果托管配置里也找不到它，按[缺少节点的排查步骤](/account/subscriptions#missing-nodes)检查智能优选和线路筛选
3. 在 oixFlow 主页选择这个节点，或在 FlClash for oixCloud 的「代理」中打开目标网站使用的手动策略组，选中这个节点。连接后重新打开目标网站，在请求或连接记录中核对实际选中的节点

## 用 GOST 在前置机上设置 IXP 端口转发 {#ixp-connectivity}

**手机或电脑 → 你的 Linux 云主机（前置机）→ IXP 节点 → 目标网站**

节点卡片上的「仅允许云厂 BGP 网络连入」指的是 **IXP 入口地址**。普通家宽和移动网络无法直连它。先确认目标节点的接入点支持这台云主机的网络和地域，仅凭 VPS 标有「BGP」无法判断

**1. 在网站找到节点参数**

打开[节点列表](https://oixcloud.com/user/node)，选 **IXP**，点目标节点卡片上的 **配置信息**。在弹出的 AnyTLS 窗口看两处

- 在 **服务器地址** 中复制 **IPv4 (IXP)**。如果前置机支持 IPv6，也可复制页面提供的 **IPv6 (IXP)**。GOST 用这里单列的 IXP 地址
- 在 **认证与传输** 中记下 **端口**，它是 GOST 的目标端口。**密码和 SNI** 留给手机或电脑上的 AnyTLS 客户端

若弹窗提示「这个节点暂未提供连接配置」或没有 IXP 地址，可回到[托管节点](#ixp-access)。如果 AnyTLS 客户端就运行在受支持的云主机上，可以直接用上述参数连接。从手机或电脑经这台云主机接入，再继续下面两步

**2. 在云主机上启动 GOST**

用 SSH 登录前置机，在 Bash 中运行以下命令，把 GOST v3 安装到当前用户目录

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/go-gost/gost/master/install.sh) --version v3.3.3 --prefix "$HOME/.local"
```

在云安全组和主机防火墙中，只对自己的公网 IP 或可信网络放行 **TCP 18443**。然后运行下面这条命令，把 `192.0.2.80:24443` 换成面板里的 **IXP 地址和端口**，保留中间的冒号。`18443` 是前置机监听端口，空闲时可以照用

```bash
~/.local/bin/gost -L 'tcp://:18443/192.0.2.80:24443'
```

先保持 SSH 窗口打开，继续下一步。如果面板提供 **IPv6 (IXP)** 且前置机能访问它，命令中的目标写成 `[IPv6地址]:端口`

**3. 在手机或电脑上添加 AnyTLS 节点**

在同一个「配置信息」窗口点 **复制链接**，或用支持扫码的客户端扫描 **AnyTLS** 二维码。导入为独立节点，取一个新名字，例如「我的 IXP 前置」，再修改服务器和端口

| 客户端字段 | 填什么 |
| --- | --- |
| 服务器 | 你的前置机公网 IP 或域名 |
| 端口 | `18443`，或你选的前置机监听端口 |
| 密码、SNI | 保留导入的值。手动添加时，照填「认证与传输」中的值 |

添加入口见 [oixFlow](/oixflow/import-nodes#single-node) 或 [FlClash for oixCloud](/flclash/import-nodes#single-node)。保存并选中新节点，打开目标网站，在连接记录中确认这次请求走了它

::: details 关闭 SSH 后也想继续使用？
测试成功后按 `Ctrl+C` 停止前台进程，用相同的 IXP 地址和端口在后台启动

```bash
nohup ~/.local/bin/gost -L 'tcp://:18443/192.0.2.80:24443' > ~/ixp-gost.log 2>&1 &
```

现在可以关闭 SSH 窗口。云主机重启后需再次运行这条命令
:::

## IXP 连接失败时从哪里查？ {#ixp-troubleshooting}

| 现象 | 下一步 |
| --- | --- |
| 本机连不上前置机 | 确认 GOST 仍在运行，核对客户端填的前置机地址、监听端口，以及安全组和防火墙允许的来源地址 |
| 前置机连不上 IXP | 在前置机上用 `nc -vz IXP地址 节点端口` 测试，将两个参数换成面板里的值。超时时核对接入点、云网络、地域和出站规则。家宽上的 ping 测不到这段连接 |
| TCP 能连通，但 AnyTLS 握手或认证失败 | 检查 GOST 命令末尾的节点端口，再核对客户端的密码和 SNI 是否来自同一节点 |
| 客户端已连接，目标网站仍走其他出口 | 重新发起请求，在连接记录中核对命中的策略组及节点。经前置机成功走 IXP 的请求，网站看到的是 IXP 线路的最终出口。进一步排查见[连接与速度排查](/help/troubleshooting) |
