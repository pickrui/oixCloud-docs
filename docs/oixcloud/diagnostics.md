---
description: "请求记录与诊断的操作步骤、适用范围与常见问题"
---

# 请求记录与诊断

适用于 iPhone / iPad

## 找到走错路线的请求

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-requests-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="oixCloud · 查看请求的路由判定">
    <img src="/illustrations/oixcloud-requests-zh.svg?v=20260929-2" alt="oixCloud · 查看请求的路由判定" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

1. 保持 VPN 连接，只重现一次目标操作
2. 打开请求记录，按域名筛选对应请求
3. 查看请求详情中的命中规则、来源、路由与出口
4. 对照当前模式、网络配置、规则优先级和所选策略组

看不到目标请求时，先检查流量是否进入 VPN，是否被排除路由绕过，以及应用是否仍在复用旧连接

## 选择合适的诊断入口

| 现象 | 优先查看 |
| --- | --- |
| 域名无法解析或解析不符 | DNS 检查与 DNS 规则 |
| 网站走错节点 | 路由诊断与请求详情 |
| HTTPS 重写无效 | MITM 诊断、证书与模块状态 |
| 切网后断开或反复重连 | 网络事件 |
| 需要客服协助 | 设置中的诊断包 |

## 导出诊断包

进入「设置 → 诊断包」，按界面选择范围，导出后先检查内容再通过服务单提供。诊断用于说明当次状态，不等于已验证所有节点或应用

网络事件保留连接生命周期信息，有助于把发生时间与切网、断开、重连对应起来。反馈时附上时区与重现步骤

节点名称、域名、账户信息及其他个人数据应在公开分享前检查和隐藏。完整配置、Access Token 与证书私钥不要提交到公开仓库
