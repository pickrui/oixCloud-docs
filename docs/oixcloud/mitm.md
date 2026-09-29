---
description: "MITM 证书与 HTTPS 重写的操作步骤、适用范围与常见问题"
---

# MITM 证书与 HTTPS 重写

适用于 iPhone / iPad。普通代理上网不需要 MITM

## 准备证书

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-mitm-generate-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="oixCloud · 首次生成 MITM 证书">
    <img src="/illustrations/oixcloud-mitm-generate-zh.svg?v=20260929-2" alt="oixCloud · 首次生成 MITM 证书" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

1. 进入「设置 → MITM → MITM 证书」，检查「此设备」是否已有证书
2. 首次使用且没有证书时，先点「生成证书」；若需要与已有设备使用同一张账户证书，可按页面的账户证书入口获取
3. 点「安装信任描述文件」，在 iOS 设置中完成描述文件安装
4. 在系统的「通用 → 关于本机 → 证书信任设置」中，对这张根证书启用完全信任
5. 返回应用，按提示开启 MITM，并核对需要处理的主机与规则

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-mitm-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="oixCloud · 生成并安装 MITM 证书">
    <img src="/illustrations/oixcloud-mitm-zh.svg?v=20260929-2" alt="oixCloud · 生成并安装 MITM 证书" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

替换本机证书后，旧的已安装描述文件不能信任新证书，需要重新安装并信任；普通连接失败时不要把重新生成证书当作通用修复

安装描述文件与信任根证书是两步，缺少信任时 HTTPS 重写不能正常工作，系统操作可参照 [Apple 的证书信任说明](https://support.apple.com/102390)

## 启用规则

导入 MITM 规则集后先检查域名和脚本，远程规则集初次导入默认关闭。只启用实际需要的集合，尽量缩小主机范围

模块包含 HTTPS 重写时，也需要 MITM 总开关、可信证书及相应模块内容同时有效

## 如何确认生效

连接 VPN，重新打开目标服务，在请求详情或 MITM 诊断中检查命中情况。只看到规则已经导入，不代表目标连接已被处理

| 现象 | 检查方向 |
| --- | --- |
| 没有命中 | 主机范围、总开关、规则集与模块开关 |
| HTTPS 报证书错误 | 证书安装、完全信任、应用是否固定证书 |
| 部分功能异常 | 暂停相关规则或模块，对同一操作复测 |

固定证书的应用可能拒绝被代理签发的证书。不要通过关闭全局证书校验来解决；把不适合拦截的主机排除，并保留原始 TLS 连接

## 停用

关闭 MITM 或停用相应规则后重建连接。不再使用该证书时，可到系统设置移除对应描述文件；不要分享证书私钥
