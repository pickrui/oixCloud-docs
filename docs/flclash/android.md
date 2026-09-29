---
description: "Android 应用访问与后台运行的操作步骤、适用范围与常见问题"
---

# Android 应用访问与后台运行

入口：「工具 → 访问控制」，仅 Android 提供这一应用列表

## 选择哪些应用进入 VPN

<figure class="guide-figure">
  <a href="/illustrations/flclash-android-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 选择进入 VPN 的应用">
    <img src="/illustrations/flclash-android-zh.svg?v=20260929-2" alt="FlClash for oixCloud · 选择进入 VPN 的应用" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

| 模式 | 含义 |
| --- | --- |
| 只允许所选应用 | 只有选中应用的流量进入 VPN |
| 排除所选应用 | 选中应用不进入 VPN，其余应用按 VPN 设置处理 |

选择模式后再勾选应用，保存并按提示重新建立 VPN。先用一款应用验证，避免把“排除”误当成“允许”

进入 VPN 之后，流量仍会按规则选择代理或直连。访问控制不等同于给每个应用指定一个远程节点

## 找不到应用

按系统要求允许读取应用列表，再刷新。可使用界面提供的包名录入方式时，应填写真实包名，不用应用显示名称代替

## 切到后台后断开

检查系统 VPN 状态与电池优化、后台运行、自启动等限制。不同品牌设置路径不同，以系统说明为准

同时使用多个 VPN 通常会造成接管冲突。先关闭其他 VPN，再重现；仅在 Wi-Fi 或蜂窝异常时分别测试并记录网络类型

## 调整后验证

重新打开目标应用，查看连接记录。应用已被排除时，没有对应内核请求属于预期，不应通过修改 DNS 来补救
