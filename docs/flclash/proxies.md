---
description: "节点、策略组与代理链的操作步骤、适用范围与常见问题"
---

# 节点、策略组与代理链

需要先添加第三方节点或导入其他订阅时，见 [添加单个节点](/flclash/profiles#single-node)、[导入订阅](/flclash/profiles#other-subscription) 和 [与托管节点混用](/flclash/profiles#managed-mix)

## 操作示意

<figure class="guide-figure">
  <a href="/illustrations/flclash-proxies-zh.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 在策略组中选择节点">
    <img src="/illustrations/flclash-proxies-zh.svg?v=20261127-4" alt="FlClash for oixCloud · 在策略组中选择节点" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

<span id="choose-outbound"></span>

## 手动选择节点

1. 在桌面或 Android 打开「代理」。在分组标签或列表中打开目标网站使用的策略组；拿不准时，先访问一次，在「连接」查看它命中的规则和组名
2. 在手动选择组中点节点。若选的是另一个组，再打开那个组选择成员。切换分组标签只是查看该组，要点成员才会更换出口
3. 重新访问网站，在「连接」核对实际出口。规则模式下，不同网站可能命中不同的组

## 自动测速与故障转移

| 组类型 | 点成员后的效果 |
| --- | --- |
| 手动选择（Selector） | 以后使用选中的成员 |
| 自动测速（URLTest）或故障转移（Fallback） | 点节点设为「首选」，再点同一节点可取消首选，恢复自动选择 |
| 负载均衡等其他组 | 组按自身策略分配连接 |

桌面可右键点成员，Android 可长按成员，在菜单里查看当前的「选中」或「首选」状态

延迟只能用来比较当前网络下的响应时间。所有节点测速都失败时，检查测试地址和本机网络，见[网络自检](/flclash/diagnostics)

## 新建自己的策略组

在「配置」打开当前订阅的菜单，选「覆写 → 叠加 → 代理组」。自定义配置则从「编辑」进入「代理组」。添加组名、类型和成员并保存，再让目标网站的[规则](/flclash/rules#website-rule)使用该组。成员可以是节点或其他组，避免相互引用

<span id="create-chain"></span>

## 代理链

<figure class="guide-figure">
  <a href="/illustrations/flclash-chains-zh.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 编辑代理链顺序">
    <img src="/illustrations/flclash-chains-zh.svg?v=20261127-4" alt="FlClash for oixCloud · 编辑代理链顺序" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

1. 打开「配置」。托管或普通订阅从该配置的菜单进「链式代理」；自定义配置从菜单进「编辑 → 更多 → 链式代理」。点「添加」并给链命名
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
