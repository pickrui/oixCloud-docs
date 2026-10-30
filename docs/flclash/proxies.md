---
description: "节点、策略组与代理链的操作步骤、适用范围与常见问题"
---

# 节点、策略组与代理链

## 操作示意

<figure class="guide-figure">
  <a href="/illustrations/flclash-proxies-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 在策略组中选择节点">
    <img src="/illustrations/flclash-proxies-zh.svg?v=20261030-2" alt="FlClash for oixCloud · 在策略组中选择节点" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

## 手动选择节点

进入「代理」，打开负责目标流量的策略组，选择节点。规则模式下，不同服务可能由不同组处理；只更改默认组，不一定改变流媒体等专用组的出口

访问目标服务后，在连接记录中核对实际走过的代理链路

## 自动测速与故障转移

| 配置中的组 | 如何决定成员 |
| --- | --- |
| 手动选择 | 由你选择成员 |
| 自动测速、故障转移或负载均衡 | 按该组自身策略决定成员 |

测速结果不等于下载速度或流媒体解锁能力

先测试少量可见节点，比较同一网络下的结果。全部失败时也要检查测试地址及本机网络，见 [网络自检](/flclash/diagnostics)

## 新建自己的策略组

在配置的「覆写」中添加策略组、设置类型和成员，再把个人规则指向它。叠加与自定义模式的作用范围不同，先阅读 [覆写](/flclash/rules)

不要创建没有成员的组，或让两个组互相引用

## 代理链

<figure class="guide-figure">
  <a href="/illustrations/flclash-chains-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 编辑代理链顺序">
    <img src="/illustrations/flclash-chains-zh.svg?v=20261030-2" alt="FlClash for oixCloud · 编辑代理链顺序" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

打开配置菜单中的「链式代理」，按转发顺序添加至少两个成员，第一个为入口，最后一个为出口。当前版本可选择节点，也可选择编辑器列出的受支持策略组；不要把 oixCloud Apple 客户端「策略组只能放在第一跳」的限制套用到这里

| 最后一跳 | 保存后如何使用 |
| --- | --- |
| 节点 | 选择带 `节点名 (via 前一跳名称)` 的派生入口；单独选择原节点仍使用原路线 |
| 策略组 | 选择对应策略组，或让规则指向它；组的实际节点按其策略决定 |

保存并应用配置后，在相关策略组中选择正确入口，或把规则指向它，再通过连接记录核对完整路径。派生入口会在适用的手选组中显示，不能再沿用「选中原出口节点就会套用代理链」的旧做法。链中每段都应先独立验证

代理链是逐段转发，负载均衡是把不同连接分配给不同成员，两者不能互相替代。连接出现问题时先恢复单节点对照，再检查每一段
