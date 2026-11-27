# OpenClash 策略组、规则与代理链 {#openclash-routing}

## 选择节点或切换策略组 {#routing}

<figure class="guide-figure">
  <a href="/illustrations/metacubexd-groups-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="在 MetaCubeXD 的手动选择组中点节点，再到连接查看出口">
    <img src="/illustrations/metacubexd-groups-zh.svg?v=20261127-5" alt="在 MetaCubeXD 的手动选择组中点节点，再到连接查看出口" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>操作示意 · 虚构数据</figcaption>
</figure>

1. 在「服务 → OpenClash → 运行状态」的控制面板区域打开 MetaCubeXD，进入「代理」。先在「连接」查看目标网站命中的规则和组名，就能找到要改的组
2. 展开该手动选择组，点需要的节点。如果选择的是另一个组，再展开它选择成员。自动测速、故障转移等组会按各自策略选路
3. 保持规则模式，从局域网设备重新访问目标，在「连接」核对实际出口

## 给网站加一条本机规则 {#routing-rules}

<figure class="guide-figure">
  <a href="/illustrations/openclash-routing-zh.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="OpenClash 自定义规则的优先匹配输入框和应用配置按钮">
    <img src="/illustrations/openclash-routing-zh.svg?v=20261127-4" alt="OpenClash 自定义规则的优先匹配输入框和应用配置按钮" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>操作示意 · 虚构数据</figcaption>
</figure>

在 LuCI 的「服务 → OpenClash → 覆写设置 → 规则设置」勾选「自定义规则」。在「优先匹配」框已有的 `rules:` 下加一行，例如让测试域名直连

```yaml
rules:
  - DOMAIN-SUFFIX,example.com,DIRECT
```

保留框里已有内容和唯一的 `rules:`。要走代理，把 `DIRECT` 换成当前配置中的组名。点页底「应用配置」，等内核恢复运行，再从局域网设备建立新连接。这项覆写保存在路由器上，切换配置时也要确认组名存在

## 用两个节点建立代理链 {#create-chain}

<figure class="guide-figure">
  <a href="/illustrations/openclash-chain-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="在 OpenClash 出口节点的 Dialer-proxy 字段填写入口名称">
    <img src="/illustrations/openclash-chain-zh.svg?v=20261127-5" alt="在 OpenClash 出口节点的 Dialer-proxy 字段填写入口名称" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>操作示意 · 虚构数据</figcaption>
</figure>

1. 准备一份自己维护、含入口和出口两个节点的 YAML 配置。需要参考现有配置时，先在「配置管理」中用该文件的「⋯ → 复制配置」，之后编辑副本；订阅更新会重新生成托管文件
2. 在这份配置的「⋯ → 节点管理」点「读取配置」。在「服务器节点配置」中编辑**出口节点**，把 `Dialer-proxy` 填为已有的**入口节点**名称，点「保存配置」
3. 回到「节点管理」点「应用配置」写回。到「配置管理」切换到这份文件，等运行恢复后，在控制面板的手选组选择**出口节点**。新连接会先经过入口，再从出口访问目标
