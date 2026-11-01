---
description: "节点、策略组与代理链的操作步骤、适用范围与常见问题"
---

# 节点、策略组与代理链

需要先添加第三方节点或导入其他订阅时，见 [添加单个节点](/flclash/profiles#single-node)、[导入订阅](/flclash/profiles#other-subscription) 和 [与托管节点混用](/flclash/profiles#managed-mix)

## 操作示意

<figure class="guide-figure">
  <a href="/illustrations/flclash-proxies-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 在策略组中选择节点">
    <img src="/illustrations/flclash-proxies-zh.svg?v=20261030-2" alt="FlClash for oixCloud · 在策略组中选择节点" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
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
  <a href="/illustrations/flclash-chains-zh.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 编辑代理链顺序">
    <img src="/illustrations/flclash-chains-zh.svg?v=20261102-3" alt="FlClash for oixCloud · 编辑代理链顺序" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

1. 打开「配置」，在当前配置的菜单中进入「链式代理」，新增并填写容易辨认的链名
2. 按转发顺序添加至少两个不同成员，第一个为入口，最后一个为出口；拖动手柄调整顺序。每一跳可选节点或编辑器列出的手动选择、自动测速、故障转移、负载均衡组
3. 保存并确认链已启用，等待配置应用成功。当前维护版本会生成以链名命名的策略组，可在「代理」列表中使用，或在规则目标中直接选择链名；旧版缺少入口时先检查 [安装版本](/flclash/connect#downloads)
4. 建立新连接，在 [连接记录](/flclash/diagnostics) 中核对入口、各跳与最终出口

链名不要与已有节点、策略组、代理提供者、Tailscale 网络或内置策略同名，也不要使用 `MATCH` 或逗号

| 最后一跳 | 保存后如何使用 |
| --- | --- |
| 节点 | 优先选择链名；`节点名 (via 前一跳名称)` 派生入口仍保留。单独选择原节点仍使用原路线 |
| 策略组 | 选择链名或对应策略组；组的实际节点按其策略决定 |

以节点结尾的链会以链名加入原本列有该出口节点的订阅手选组；链经过的组及其依赖组不会这样加入，个人策略组需自己添加成员。找不到链名时，也可直接把个人规则指向它；不要通过选中原出口节点验证代理链

### 策略组作为后续跳 {#group-hops}

例如 `入口 A → 出口组`：保存应用后，规则直接指向「出口组」或其他组引用它时，其具体节点也先经过 A，并按实际过链路线独立测速。原节点在其他地方仍保留原路线。嵌套组、DIRECT 和 REJECT 不继承前置路径；DIRECT 会跳过前面的跳

不要让组成员绕回链中各跳，或让同一组同时跟随不同前置路径。保存或启用新链可能停用有冲突的旧链；看到「相关代理链已更新」提示后，回到链列表核对各条开关，再验证新连接

### 保存后仍不通 {#chain-troubleshooting}

先核对当前配置、链开关、应用结果、规则目标和手选组是否选中链名。出现缺失成员、循环或拨号冲突时按提示修正；组内无可用节点不会自动绕过前置跳。各跳延迟不等于整条链可用，应分别测试节点，再验证完整路径

代理链是逐段转发，负载均衡是把不同连接分配给不同成员，两者不能互相替代。连接出现问题时先恢复单节点对照，再检查每一段
