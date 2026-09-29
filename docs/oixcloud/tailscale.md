---
description: "Tailscale、子网与出口节点的操作步骤、适用范围与常见问题"
---

# Tailscale、子网与出口节点

适用于 iPhone / iPad；Apple TV 提供简化的账户授权入口

## 添加并授权网络

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-tailscale-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="oixCloud · 添加并授权 Tailscale 网络">
    <img src="/illustrations/oixcloud-tailscale-zh.svg?v=20260929-2" alt="oixCloud · 添加并授权 Tailscale 网络" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

1. 打开「设置」，在「网络」分区进入「Tailscale」并添加网络
2. 选择交互式登录，打开授权页面并授权当前设备；或填写属于该 Tailnet 的认证密钥
3. 返回应用等待完成，若提示等待设备审批，在 Tailnet 管理后台批准
4. 启动 oixCloud VPN，检查网络状态，再访问已知设备的地址或 MagicDNS 名称

仅登录不会接管流量。认证密钥是设备注册凭据，不是后台管理员 API Key

## 自动路由

自动路由默认处理已知对等设备地址、分配的 MagicDNS 后缀和已批准的子网路由，其他流量仍由你的路由配置决定

当前设备所在局域网中的地址继续走本地。若远程子网与本地网络使用相同地址段，需要显式规则；先确认你要访问哪一端，避免把本地设备流量误送进 Tailnet

## 使用出口节点

先确认 Tailnet 里已有在线、获准的出口节点，在该网络设置中选择出口，再把希望使用它的流量指向对应 Tailscale 策略

自动发现设备或填入出口节点，不等于所有互联网流量已切换。用实际请求的出口验证结果

## 多设备与 Headscale

每台设备单独授权。同步或复制配置不会复制本机登录身份；自托管 Headscale 的地址由管理者提供，变更控制服务器或网络身份后重新核对登录状态

## 连不上时

按顺序检查 VPN 已启动、设备授权、对端在线、访问权限、子网审批与出口节点状态。登录页面过期时创建新登录，不要把同一旧授权链接反复分享给其他设备

## 功能范围与管理端配置

这里的 Tailscale 是出站连接功能，不把本机发布为子网路由器、出口节点或可被 Tailnet 主动访问的服务。移除网络会删除关联策略和本机身份，管理后台的旧设备记录需要另行检查

远端子网需配置路由发布、审批与访问权限，参见 [Tailscale 子网路由文档](https://tailscale.com/docs/features/subnet-routers)。互联网出口还需获准的出口节点和使用权限，参见 [出口节点文档](https://tailscale.com/docs/features/exit-nodes)；本客户端仍通过前述策略选择要送往出口的流量
