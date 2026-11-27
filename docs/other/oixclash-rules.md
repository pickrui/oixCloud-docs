# oixClash 账号自定义规则 {#_7-编辑账号自定义规则}

<span id="_7-edit-account-custom-rules"></span>

<span id="routing-rules"></span>

oixClash 0.0.2 起可在插件的「自定义规则」中编辑网站上的同一份 [账号规则](https://oixcloud.com/user/rule)，账号规则排在默认规则之前。保存会影响使用这份规则的其他客户端；清空后保存会删除整份账号规则，操作前先保留需要的内容

<figure class="guide-figure">
  <a href="/illustrations/oixclash-rules-zh.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="oixClash · 账号自定义规则">
    <img src="/illustrations/oixclash-rules-zh.svg?v=20261127-4" alt="oixClash · 账号自定义规则" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

1. 登录后点击「读取面板规则」，确认显示「已读取面板规则，可编辑后保存」
2. 每行写一条标准 Surge 格式的规则，无需 `rules:` 或行首短横线；`#` 或 `//` 开头的行是注释。策略填写 `DIRECT`、`REJECT` 或配置中已有的策略组名称
3. 点击「保存到面板并更新」，查看日志：插件运行中会更新并检查配置；插件未运行时，在下次开启时获取并检查
4. 用局域网设备建立新连接，在控制面板核对命中规则和出口

```text
DOMAIN,ads.example.com,REJECT
DOMAIN-SUFFIX,example.com,DIRECT
```

把更具体的域名放在前面。上例先拒绝 `ads.example.com`，其余 `example.com` 子域名直连

路由器编辑器最多处理 8192 个 UTF-8 字节，中文等字符会占多个字节。更长的规则请在网站编辑，再点插件「更新节点」，不要截短原规则来适配编辑器

| 提示或情况 | 处理方式 |
| --- | --- |
| 规则已被其他页面修改 | 先另存当前草稿，重新读取最新规则，再合并需要的修改；不要直接覆盖别处的新内容 |
| 面板保存成功，但路由器尚未应用 | 网站上的规则已经改变，先修正规则或网络问题，再点「更新节点」并验证连接 |
| 无法读取，或当前版本没有规则入口 | 在网站编辑账号规则，保存后点「更新节点」获取；插件内读取和保存还需要站点支持 |

重新读取会替换未保存的草稿，先确认提示。账号规则与节点筛选的共享范围不同，见 [订阅与筛选](/account/subscriptions#account-rules)
