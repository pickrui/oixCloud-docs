---
description: "覆写、策略组与附加规则的操作步骤、适用范围与常见问题"
---

# 覆写、策略组与附加规则

## 操作示意

<figure class="guide-figure">
  <a href="/illustrations/flclash-rules-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 添加域名后缀规则">
    <img src="/illustrations/flclash-rules-zh.svg?v=20260929-2" alt="FlClash for oixCloud · 添加域名后缀规则" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

## 选择覆写模式

<figure class="guide-figure">
  <a href="/illustrations/flclash-override-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 选择配置覆写模式">
    <img src="/illustrations/flclash-override-zh.svg?v=20260929-2" alt="FlClash for oixCloud · 选择配置覆写模式" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

打开配置操作菜单中的「覆写」

| 模式 | 行为 |
| --- | --- |
| 叠加 | 保留订阅规则与策略组，加入个人设置；个人规则优先于订阅规则，已有附加规则保持优先 |
| 自定义 | 自己维护规则与策略组，适合明确知道完整路由结构的用户 |

首次调整建议从叠加开始。自定义内容为空时不能得到一份可用路由，不要为了“清理默认规则”直接切换为空配置

## 为网站指定路线

1. 在覆写中添加个人规则，或进入「工具 → 高级配置 → 附加规则」
2. 选择域名后缀等规则类型，填写 `example.com` 这样的匹配值
3. 选择直连、拒绝或已存在的策略组；需要 Tailscale 时选择对应网络
4. 保存并应用，保持规则模式
5. 重新发起请求，在连接记录中核对命中规则

不要把完整网页地址填进域名字段。修改规则后旧连接可能继续存在，应重新打开目标页面再判断

## 添加策略组

在覆写中创建有明确名称和有效成员的组，再引用它。重命名或删除组时检查个人规则引用，避免留下不存在的目标

## 覆写脚本

「工具 → 高级配置 → 脚本」用于修改生成配置，不是网页 HTTP 重写脚本入口。使用可信脚本，先保存可恢复的配置，发生问题时停用脚本并对照

改动应放在长期保留的覆写入口，直接编辑下载来的订阅文件可能在下次同步时丢失

规则类型与匹配语法可参考 [mihomo 路由规则文档](https://wiki.metacubex.one/config/rules/)。具体目标名称以当前配置里的节点和策略组为准，不能直接照抄示例中的组名

## 叠加示例：只改一个域名的出口

先在代理页确认已有「工作」策略组，再在当前配置的叠加覆写中添加域名后缀 `example.com`，目标选择「工作」。保存并检查配置，使用规则模式访问一个测试目标

如果规则没有生效，按以下顺序检查：流量是否进入客户端、是否仍为规则模式、优先级更高的附加规则是否先匹配、组名是否存在，以及是否用旧连接验证。删除示例规则后重新应用，可恢复原订阅对此域名的处理

全局附加规则会影响不同配置，配置覆写中的个人规则只属于该配置。希望一个例外只用于一份订阅时，优先放在该配置的覆写里
