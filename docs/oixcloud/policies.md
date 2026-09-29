---
description: "策略组、自动选择与代理链的操作步骤、适用范围与常见问题"
---

# 策略组、自动选择与代理链

适用于 iPhone / iPad，配置可按同步范围发送到 Apple TV

## 选择策略组

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-policies-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="oixCloud · 创建策略组">
    <img src="/illustrations/oixcloud-policies-zh.svg?v=20260929-2" alt="oixCloud · 创建策略组" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

在「代理 → 策略」中添加策略组，填写名称、选择类型并添加成员。保存后，还要在首页或对应分流规则中选择它，流量才会使用该组

| 类型 | 适合的需求 |
| --- | --- |
| 自动测速 | 依据配置的连接测试选择成员 |
| 故障转移 | 优先使用前面的成员，不可用时切换 |
| 负载均衡 | 将不同连接分配给可用成员 |
| 智能 | 根据实际连接表现学习路线，在建立连接失败时尝试其他成员 |

首页的「自动优选」是内置自动组；你创建的策略组会作为独立出口供选择。没有可用成员时，先检查成员来源、筛选条件与测试结果

## 调整测速与优先级

使用当前网络能访问的测试地址，先保留默认间隔。智能策略的优先级数值越小越优先，1.0 为中性；不要仅因为一次高延迟就把大量成员排除

自动切换通常影响新建连接，正在进行的下载或视频不应被当作切换验证依据。关闭目标应用的旧连接后再复测

## 创建代理链

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-chains-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="oixCloud · 按顺序创建代理链">
    <img src="/illustrations/oixcloud-chains-zh.svg?v=20260929-2" alt="oixCloud · 按顺序创建代理链" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

1. 在「代理」切换到代理链区域，添加至少两个节点
2. 按实际转发顺序排列入口与后续节点
3. 保存后在首页或规则的目标中选中这条链
4. 对目标网站检查最终出口，再比较速度与稳定性

链越长不代表越快。任意一段不可用都会影响整条链；先分别验证每个节点，避免把链自身或相互依赖的策略组接回链中
