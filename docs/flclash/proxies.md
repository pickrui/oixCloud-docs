---
description: "节点、策略组与代理链的操作步骤、适用范围与常见问题"
---

# 节点、策略组与代理链

需要先添加第三方节点或导入其他订阅时，见 [添加单个节点](/flclash/import-nodes#single-node)、[导入订阅](/flclash/import-nodes#other-subscription) 和 [与托管节点混用](/flclash/mixed-nodes)

## 操作示意

<figure class="guide-figure">
  <a href="/illustrations/flclash-proxies-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 在策略组中选择节点">
    <img src="/illustrations/flclash-proxies-zh.svg?v=20261127-5" alt="FlClash for oixCloud · 在策略组中选择节点" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

<span id="choose-outbound"></span>

## 手动选择节点

1. 在桌面或 Android 打开「代理」。在分组标签或列表中打开目标网站使用的策略组；拿不准时，先访问一次，在「请求」查看它命中的规则和组名
2. 在手动选择组中点节点。若选的是另一个组，再打开那个组选择成员。切换分组标签只是查看该组，要点成员才会更换出口
3. 重新访问网站，在「请求」核对实际出口。规则模式下，不同网站可能命中不同的组

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

需要指定入口和最终出口时，按[代理链设置步骤](/flclash/proxy-chains)配置
