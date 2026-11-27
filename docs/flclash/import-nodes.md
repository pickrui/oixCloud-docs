# 导入第三方节点、订阅与配置 {#import-nodes}

在 FlClash for oixCloud 上可以直接导入第三方节点或订阅，无需先登录托管账户。要同时保留托管节点，请查看[混用两种节点来源](/flclash/mixed-nodes)

## 添加单个第三方节点 {#single-node}

<figure class="guide-figure">
  <a href="/illustrations/flclash-custom-node-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 在当前配置添加自定义节点">
    <img src="/illustrations/flclash-custom-node-zh.svg?v=20261127-5" alt="FlClash for oixCloud · 在当前配置添加自定义节点" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据</figcaption>
</figure>

适合已有可用配置，希望加入一个自建或第三方节点的情况，也可直接加在 oixCloud 托管配置中

新增前准备一个独立名称：**与原配置中的节点同名会覆盖该节点的定义**，而不是增加第二个同名节点；不要使用已有策略组或 `DIRECT`、`REJECT` 等内置策略的名称

1. 打开「配置」。托管或普通订阅从菜单进「链式代理」，再找「自定义节点」。自定义配置从菜单进「编辑 → 自定义节点」
2. 在「自定义节点」区域点「新增」，按手头的信息选择输入方式
3. 核对名称、服务器、端口和认证信息后保存，确认该节点的开关已开启
4. 选中这份配置并应用，回到「代理」中的手动选择组，选择刚加入的节点；重新访问目标网站，在 [连接记录](/flclash/diagnostics) 中核对出口

| 输入方式 | 填写内容 |
| --- | --- |
| URI | 一条完整的节点分享链接，例如 `ss://`、`vmess://`、`vless://`、`trojan://` 或 `hy2://`，其余格式以输入框提示和校验结果为准 |
| 快速编辑 | 选择代理类型，填写名称、服务器、端口及该协议要求的密码、UUID、TLS、传输等参数 |
| YAML | 一个完整节点定义，或仅含一个节点的 `proxies:` 列表；不能粘贴整份多节点订阅 |

例如，下列内容只演示单节点 YAML 结构，服务器与密码均须替换为提供方的真实参数，不能直接连接：

```yaml
name: My-Third-Party
type: trojan
server: proxy.example.com
port: 443
password: replace-with-your-password
sni: proxy.example.com
udp: true
```

加入的自定义节点可以独立使用。普通配置和托管配置会将启用的自定义节点追加到原有的手动选择组。自动测速、故障转移及叠加覆写中的个人策略组是否包含新节点，取决于组的成员选择和「包含所有代理」等设置，应在相应组中核对

自定义节点只属于所编辑的配置，并在订阅更新后重新加入

### 将分享链接单独导入 {#standalone-node}

不依附现有配置时，也可在「配置 → 添加配置 → 链接」粘贴 `ss://`、`vless://` 等受支持的分享链接，客户端会保存为本地配置。它不会自动并入托管配置，也没有远程订阅可供同步

单节点链接只提供节点参数，不附带提供方的完整分流规则。若希望这份配置将剩余流量交给该节点：

1. 选中导入的配置，打开其「覆写」，选择「叠加」
2. 在「规则」中新增 `MATCH` 规则，目标选择刚导入的节点；`MATCH` 不填写域名，会匹配前面的规则尚未处理的全部流量，应放在个人规则末尾
3. 保存，选中这份配置后点「检查配置」或「立即应用」，确认应用成功并保持规则模式，发起新连接核对出口

需要保留国内直连等完整分流时，优先导入提供方的完整 Clash / mihomo 配置，或按 [覆写与附加规则](/flclash/rules) 先安排更具体的规则

HTTP / HTTPS 代理的 `http://`、`https://` 链接请使用前面的「自定义节点 → URI」入口；「添加配置 → 链接」会把 HTTP / HTTPS 地址当作远程订阅下载

## 导入其他订阅或配置文件 {#other-subscription}

<figure class="guide-figure">
  <a href="/illustrations/flclash-import-link-zh.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="FlClash for oixCloud 的「从链接导入」表单和保存按钮">
    <img src="/illustrations/flclash-import-link-zh.svg?v=20261127-5" alt="FlClash for oixCloud 的「从链接导入」表单和保存按钮" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据</figcaption>
</figure>

1. 复制提供方给出的完整 Clash / mihomo 订阅网址。使用 oixCloud 普通订阅时，到[用户中心 → 订阅地址](https://oixcloud.com/user#subscription-details)复制 Clash/Stash 主订阅那一行。Provider 地址用于给已有配置添加节点
2. 打开「配置 → 添加配置 → 链接」，粘贴网址并确认。使用二维码时，桌面端选择二维码图片，Android 手机可直接扫码。已有 YAML 文件可选「文件」
3. 等待下载与校验成功，在配置列表中选中新配置，启动或应用客户端
4. 打开「代理」，在这份配置对应的策略组中选择节点，使用新连接核对规则与出口。需要用回托管节点时，在「配置」中重新选中 oixCloud 托管配置

Android TV 上可选「配置 → 添加配置 → 从手机发送」。手机与电视连接同一局域网，用手机相机扫描电视显示的二维码，在打开的页面粘贴完整链接并发送，最后在电视上确认「导入」

URL 订阅可在该配置菜单点「同步」，也可在「编辑」中设置自动更新。文件是导入时的副本，更新时重新导入即可

::: warning 区分「链接」与「导入配置」
「添加配置 → 导入配置」是另一种入口：从 URL、文件或文本提取节点、策略组、规则和支持的设置，组建可编辑的「自定义配置」，不会把原 URL 保留为整份订阅的同步来源。需要持续跟随原订阅时，请使用上面的「链接」入口。**将整份配置导入已有自定义配置会替换现有节点、策略组、规则和设置**，操作前应先 [备份](/flclash/backup)，并查看「未导入」提示
:::

[添加或导入失败时的检查步骤](/flclash/profiles#import-troubleshooting)
