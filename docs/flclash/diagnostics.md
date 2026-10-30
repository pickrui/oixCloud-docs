---
description: "网络自检与连接记录的操作步骤、适用范围与常见问题"
---

# 网络自检与连接记录

## Windows / macOS 网络自检

<figure class="guide-figure">
  <a href="/illustrations/flclash-diagnostics-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 运行网络自检">
    <img src="/illustrations/flclash-diagnostics-zh.svg?v=20261030-2" alt="FlClash for oixCloud · 运行网络自检" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

1. 保持出现问题时的配置与网络环境
2. 进入「工具 → 网络自检」，点「开始自检」
3. 先看失败和需要关注项，再按具体建议操作
4. 每次修复后重新检查，并复测原来的应用

自检会检查当前配置、内核响应、本地代理、系统代理、虚拟网卡、DNS 与少量 HTTPS 访问。通过并不代表所有节点、UDP、IPv6 或全部应用都正常

## 如何理解结果

| 结果 | 后续操作 |
| --- | --- |
| 没有流量接管 | 开启系统代理或 TUN，或配置目标应用的独立代理 |
| 本地端口失败 | 检查内核是否运行、端口是否被占用 |
| 系统代理不一致 | 检查其他代理软件或系统策略覆盖 |
| TUN 路由不符 | 核对管理员授权、其他 VPN 与路由 |
| 系统路径正常、代理失败 | 优先查看节点、规则与内核 DNS |

“系统网络路径”仍可能经过 TUN，不一定是物理直连。诊断取消或配置发生变化时，结果可能不完整

## 其他平台与规则排查

Android / Linux 可查看连接与日志。在请求或连接列表中筛选目标域名，核对命中规则、代理组和出口；关闭旧连接后重新发起请求

复制诊断报告前检查个人数据，通过 [服务单](/help/support) 提供版本、时间、网络类型和重现步骤。不要把完整订阅或令牌放到公开 Issue

## 按结果进入修复入口

当前 Windows / macOS 版本可从自检结果复制本地代理地址，并按问题进入端口、DNS 或虚拟网卡设置，也提供手动配置系统代理的引导。先阅读该项检查的说明，完成一次修改后返回重新自检，再复测原应用

复制的是当前本机监听地址；它不是订阅地址，也不意味着同一局域网的其他设备可以直接使用。若更改端口，手动填写过代理地址的软件也要更新

## 连接记录没有进程名称

先检查目标流量是否进入客户端、当前配置是否应用，以及是否需要进程类规则。当前版本可按规则需要才查找进程，普通连接没有进程名并不一定异常；设置位置与判断方法见 [查找进程](/flclash/rules#process-lookup)
