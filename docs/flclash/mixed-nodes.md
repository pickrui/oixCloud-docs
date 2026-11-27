# 将第三方节点与托管节点一起使用 {#managed-mix}

希望继续使用托管分流，同时让部分流量走第三方节点时，保持 **oixCloud 托管配置为当前配置**，按下面的方法追加来源。混用节点不等于逐跳转发；只有明确需要入口、出口多跳连接时才配置 [代理链](/flclash/proxy-chains)

## 加入一个或少量节点 {#managed-single-node}

按 [添加单个第三方节点](/flclash/import-nodes#single-node) 在托管配置中保存并启用节点，然后在托管配置原有的手动选择组中选中它。若只希望某个网站使用该节点，在托管配置的「覆写 → 叠加 → 规则」中添加域名后缀规则并将目标设为该节点，其余流量继续使用托管规则

## 加入整份第三方订阅 {#managed-subscription}

<figure class="guide-figure">
  <a href="/illustrations/flclash-provider-members-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 把第三方提供者加入自己的组">
    <img src="/illustrations/flclash-provider-members-zh.svg?v=20261127-5" alt="FlClash for oixCloud · 把第三方提供者加入自己的组" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据</figcaption>
</figure>

通过应用资源库将订阅作为「代理提供者」引用，可以更新第三方节点，同时保留托管配置的规则

1. 打开「工具 → 自定义配置资源 → 应用资源库」，切到「代理提供者」
2. 点添加按钮，选择「通过URL导入」，填写独立名称（例如 `ThirdParty`）和第三方订阅的完整 URL，检查来源为「远程地址」后保存。优先使用包含 `proxies:` 节点列表的 Clash / mihomo YAML；本地文件则用「通过文件导入」，不会从远程自动更新
3. 回到「配置」，打开 **oixCloud 托管配置** 的「覆写」，选择「叠加」，保留原有托管策略组与规则
4. 进入「代理组」新增一个独立名称的手动选择组（`select`），例如「第三方出口」。在成员选择器的「代理提供者」中勾选 `ThirdParty` 并保存；如需在同一组中切换托管出口，也可从可用成员中加入一个托管节点或原有托管策略组
5. 在同一覆写的「规则」中添加域名后缀 `example.com`，目标选「第三方出口」。保存后点「检查配置」或「立即应用」；保持规则模式，在「代理 → 第三方出口」中选择实际节点
6. 重新访问你设置规则的目标网站，在连接记录中确认命中个人规则、出口为所选第三方节点，再检查一个未设置个人规则的目标仍按托管规则处理

上面的域名与名称仅作示例，须改为实际目标。只创建策略组或保存资源不会让网站自动走该组，还需规则引用；新组也不会自动出现在原有手动选择组中。个人规则先于订阅规则，已有附加规则仍可能优先，详见 [覆写](/flclash/rules)

这种引用只使用第三方订阅中的节点，**不会同时套用另一家订阅的策略组、规则、DNS 或 TUN 设置**。代理提供者保留远程 URL；应用配置后，可从「代理」页的操作菜单进入「提供者」，使用更新按钮刷新相应代理提供者。账户页「刷新节点」负责托管配置，另一份独立 URL 配置的「同步」也不等于更新此处的代理提供者

oixCloud 托管配置不能作为另一份「自定义配置」的代理提供者，也不能通过「导入配置」导入 oixCloud 托管地址。要混用，保留托管配置，再按上述步骤引用第三方来源

代理提供者的格式与字段说明见 [mihomo 官方代理集合文档](https://wiki.metacubex.one/config/proxy-providers/)

还没有添加来源时，先[导入第三方节点或订阅](/flclash/import-nodes)。遇到问题可按[现象排查](/flclash/profiles#import-troubleshooting)
