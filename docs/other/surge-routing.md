# Surge Mac 流量接管、DNS 与分流 {#surge-routing}

## 在 Surge Mac 切换模式和接管流量 {#capture-mode}

<figure class="guide-figure">
  <a href="/illustrations/helper-surge-mode-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="在 Surge 菜单栏选择出站模式、系统代理或增强模式">
    <img src="/illustrations/helper-surge-mode-zh.svg?v=20261127-5" alt="在 Surge 菜单栏选择出站模式、系统代理或增强模式" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>中文模拟界面 · 虚构数据</figcaption>
</figure>

1. 保持 Helper 和 Surge 运行，点 **Surge 自己的菜单栏图标**。在「出站模式」选「规则判定」「全局代理」或「直接连接」。日常使用「规则判定」，各网站按配置中的规则选择出口
2. 浏览器等遵循 macOS 代理设置的软件可用「设置为系统代理」。在终端运行 `scutil --proxy` 核对本机 HTTP / HTTPS 代理，打开网站后到 Surge Dashboard 的请求列表查看新记录和策略
3. 应用忽略系统代理或需要接管 UDP 时，在 Surge 菜单启用「增强模式」，按提示允许系统组件。用该应用发起新连接，在请求列表找到目标并核对策略。[增强模式说明](https://manual.nssurge.com/features/enhanced-mode.html)

## 设置和测试 Surge DNS {#configure-dns}

打开 Surge 当前可编辑的配置，选「在文本编辑器中编辑」，在已有的 `[General]` 中修改对应项。普通 DNS 使用 `dns-server`，加密 DNS 使用 `encrypted-dns-server`，例如 `encrypted-dns-server = https://1.1.1.1/dns-query`。保存，回到 Surge 重新载入配置。使用只读托管配置时，可在 Surge 创建关联配置，引用原代理和策略组，自己维护 `[General]`。[DNS 设置](https://manual.nssurge.com/dns/dns-server.html) · [托管与关联配置](https://kb.nssurge.com/surge-knowledge-base/faq/common-faqs)

在支持 DNS 查询命令的 Surge Mac 上，运行 `surge-cli dns lookup example.com`，换用未缓存的域名，查看应答服务器和路由。旧版可使用能查看查询记录的解析器，对直连测试域名发起新的解析并在上游核对。经代理的请求也可能由远端解析。[Surge CLI 手册](https://manual.nssurge.com/tools/cli.html)

## 选择节点与策略组 {#routing}

<figure class="guide-figure">
  <a href="/illustrations/helper-nodes-zh.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="在单端口模式的 Helper 节点菜单中选择自动或具体节点">
    <img src="/illustrations/helper-nodes-zh.svg?v=20261127-4" alt="在单端口模式的 Helper 节点菜单中选择自动或具体节点" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>操作示意 · 虚构数据</figcaption>
</figure>

- **本地多端口映射**：点 macOS 菜单栏的 **Surge** 图标，打开目标网站命中的手动策略组，选择映射节点。若成员又是一个组，打开那个组再选节点
- **单端口**：点菜单栏的 **oixCloud → 节点**，选择具体节点会关闭自动选择。要恢复自动选择，再点「自动选择」。使用这个端口的应用共用该出口

## 给网站指定出口或使用代理链 {#routing-rules}

1. 要让规则在重新接入 Surge 后保留，使用文本编辑器打开或新建 `~/.config/oixcloud-external-proxy-program/custom.conf`。在已有的 `[Rule]` 下加入规则；空文件可直接填入以下两行

   ```ini
   [Rule]
   DOMAIN-SUFFIX,example.com,DIRECT
   ```

2. 要指定策略组，把 `DIRECT` 换成 Surge 当前配置里显示的组名。保存，在 Helper 打开「客户端接入」，再点「接入 Surge」或「重新接入 Surge」。在 Surge 使用规则模式，重新访问网站并核对请求的规则和策略
3. 需要把两个**由 Surge 直接连接的远程代理**串成一条链时，在自己维护的 `[Proxy]` 中给出口代理追加 `underlying-proxy=入口策略名`，再让规则或手动组选择出口策略。Helper 的本地映射端口各自连接自己的节点；托管节点多跳可按账户权限设置[内部中继](/account/relay#内部中继)，在 Surge 选它的入口。见 [Surge 代理链参数](https://manual.nssurge.com/policies/parameters.html#underlying-proxy)
