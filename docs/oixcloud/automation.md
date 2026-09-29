---
description: "自动化与按需连接的操作步骤、适用范围与常见问题"
---

# 自动化与按需连接

适用于 iPhone / iPad

## 始终开启

「设置」中的「始终开启」使用系统按需 VPN 行为，让系统按条件建立连接。启用后观察锁屏、切换 Wi-Fi 与蜂窝后的状态

若需要某些网络直连，先查看 [网络预设](/oixcloud/networks)。排查系统按需连接时，临时关闭相关选项并记录结果，避免与其他 VPN 的按需规则同时启用

## 自动化脚本

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-automation-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="oixCloud · 设置脚本触发方式">
    <img src="/illustrations/oixcloud-automation-zh.svg?v=20260929-2" alt="oixCloud · 设置脚本触发方式" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

1. 进入「设置 → 自动化」，新建脚本
2. 填写名称，按脚本原作者要求选择客户端类型
3. 设置手动、定时或支持的网络事件触发方式
4. 填写参数与超时，在 VPN 连接期间先手动运行一次
5. 核对执行结果，再启用自动触发

脚本在 VPN 扩展内运行，VPN 未连接时不要期待定时任务继续执行。脚本需要正确结束；定时规则匹配时，仍在运行的同一脚本不会叠加执行

## 快捷指令

在系统快捷指令中添加应用提供的动作，先单独运行验证，再加入自己的自动化流程。具体动作取决于安装的客户端版本和系统展示

自动化脚本与 HTTP 请求/响应重写是不同入口，修改网页流量请使用 [模块](/oixcloud/modules) 或 [MITM](/oixcloud/mitm)

脚本可主动访问网络，只使用可信来源，并在填写账号或 Cookie 前确认脚本用途
