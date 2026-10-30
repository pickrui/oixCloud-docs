---
description: "MITM 证书与 HTTPS 重写的操作步骤、适用范围与常见问题"
---

# MITM 证书与 HTTPS 重写

适用于 iPhone / iPad。普通代理上网不需要 MITM

## 准备证书

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-mitm-generate-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="oixCloud · 首次生成 MITM 证书">
    <img src="/illustrations/oixcloud-mitm-generate-zh.svg?v=20261030-2" alt="oixCloud · 首次生成 MITM 证书" width="1120" height="982" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

1. 进入「设置 → MITM → MITM 证书」，检查「此设备」是否已有证书
2. 首次使用且没有证书时，先点「生成证书」；若需要与已有设备使用同一张账户证书，可按页面的账户证书入口获取
3. 点「安装信任描述文件」，在 iOS 设置中完成描述文件安装
4. 在系统的「通用 → 关于本机 → 证书信任设置」中，对这张根证书启用完全信任
5. 返回应用，按提示开启 MITM，并核对需要处理的主机与规则

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-mitm-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="oixCloud · 生成并安装 MITM 证书">
    <img src="/illustrations/oixcloud-mitm-zh.svg?v=20261030-2" alt="oixCloud · 生成并安装 MITM 证书" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

::: warning 更换证书需要重新信任
替换本机证书后，旧的已安装描述文件不能信任新证书，需要重新安装并信任；普通连接失败时不要把重新生成证书当作通用修复
:::

安装描述文件与信任根证书是两步，缺少信任时 HTTPS 重写不能正常工作，系统操作可参照 [Apple 的证书信任说明](https://support.apple.com/zh-cn/102390)

## 启用规则

导入 MITM 规则集后先检查域名和脚本，远程规则集初次导入默认关闭。只启用实际需要的集合，尽量缩小主机范围

模块包含 HTTPS 重写时，也需要 MITM 总开关、可信证书及相应模块内容同时有效

## 如何确认生效

建立连接，重新打开目标服务，在请求详情或 MITM 诊断中检查命中情况。只看到规则已经导入，不代表目标连接已被处理

| 现象 | 检查方向 |
| --- | --- |
| 没有命中 | 主机范围、总开关、规则集与模块开关 |
| HTTPS 报证书错误 | 证书安装、完全信任、应用是否固定证书 |
| 部分功能异常 | 暂停相关规则或模块，对同一操作复测 |

固定证书的应用可能拒绝被代理签发的证书。不要通过关闭全局证书校验来解决；把不适合拦截的主机排除，并保留原始 TLS 连接

## 停用

关闭 MITM 或停用相应规则后重建连接。不再使用该证书时，可到系统设置移除对应描述文件；不要分享证书私钥

## 对某个域名始终不解密 {#never-decrypt}

遇到证书固定或某个服务与重写不兼容时，可进入「设置 → MITM → 始终不解密」，填入准确域名并点「始终不解密此域名」；请求详情和 MITM 检查器也提供相同操作

排除只匹配本机上的这个精确域名，覆盖其所有 TLS 端口，子域名需分别添加。模块和订阅更新不会覆盖这项排除；新增后重新建立连接，已有连接保持原行为。需要恢复时在该列表选择「恢复此域名的 MITM」

被排除的域名保留原始 TLS，HTTPS 重写、脚本和基于 HTTP 的路由不再运行；普通分流和明文 HTTP 规则不变。新版本也会自动跳过没有适用 HTTPS 规则的域名，因此“没有被解密”不一定是证书故障，先看检查器中的原因

## 不同来源的排除范围 {#exclusion-scope}

| 设置位置 | 对 HTTPS 解密的影响 |
| --- | --- |
| 已启用 Surge 风格模块的主机排除 | 在 Surge 风格模块之间共享；原生模块和原生 MITM 规则集仍可能处理它 |
| 原生 `.amod` 模块内嵌 MITM 规则集的主机排除 | 只排除该内嵌规则集，其他适用来源仍可处理 |
| 原生 MITM 规则集的主机排除 | 只排除该规则集，其他适用的规则集仍可处理 |
| 本机「始终不解密」 | 对该精确域名禁止所有模块和规则集解密，且不受订阅更新覆盖 |

需要整个设备都不解密某个域名时，使用「始终不解密」，不要仅在一个模块或规则集中排除。Surge 风格模块之间的 HTTPS 排除不等于停用明文 HTTP 规则；明文 HTTP 仍按各模块自己的匹配和排除条件处理

排查时进入「活动 → MITM」，检查域名对应的判断原因及匹配来源。使用新连接比较更改前后结果；无需为排除问题反复生成证书。模块更新可能改变主机列表，更新后按 [模块验收步骤](/oixcloud/modules) 复测

多个规则集的统一更新入口见 [外部资源](/oixcloud/routing#external-resources)
