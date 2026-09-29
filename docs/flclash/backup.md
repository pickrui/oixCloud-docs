---
description: "备份、恢复与 WebDAV的操作步骤、适用范围与常见问题"
---

# 备份、恢复与 WebDAV

入口：「工具 → 备份与恢复」

## 先备份当前数据

<figure class="guide-figure">
  <a href="/illustrations/flclash-backup-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 备份与恢复入口">
    <img src="/illustrations/flclash-backup-zh.svg?v=20260929-2" alt="FlClash for oixCloud · 备份与恢复入口" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

在重大调整或恢复另一份备份之前，先创建本地备份并保存到自己控制的位置，确认提示备份成功。备份包含普通订阅与个人设置，应按敏感文件保管，不上传到公开 Issue

## 选择恢复策略与范围

<figure class="guide-figure">
  <a href="/illustrations/flclash-restore-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 选择恢复范围">
    <img src="/illustrations/flclash-restore-zh.svg?v=20260929-2" alt="FlClash for oixCloud · 选择恢复范围" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

恢复有两个独立选择，先确认页面上的「恢复策略」，再点本地或 WebDAV 恢复

| 恢复策略 | 对现有配置的影响 |
| --- | --- |
| 兼容 | 合并备份中的配置、脚本与规则；相同记录会被备份内容更新，并非全部跳过 |
| 覆盖 | 用备份替换配置、脚本与规则，当前有而备份没有的内容会被移除 |

随后选择恢复范围：

| 恢复范围 | 行为 |
| --- | --- |
| 仅恢复配置文件 | 恢复配置及关联脚本、规则等，保留当前应用设置 |
| 恢复所有数据 | 同时应用备份里的应用与网络设置；之前选择的兼容或覆盖策略仍决定配置数据的处理 |

不要把「兼容」理解为不会替换任何设置。选择「恢复所有数据」仍会应用备份中的应用设置。恢复后先核对当前配置、覆写、端口、接管方式和节点选择，再验证连接

## 使用 WebDAV

<figure class="guide-figure">
  <a href="/illustrations/flclash-webdav-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 绑定 WebDAV 备份位置">
    <img src="/illustrations/flclash-webdav-zh.svg?v=20260929-2" alt="FlClash for oixCloud · 绑定 WebDAV 备份位置" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

1. 填写可访问的 WebDAV 地址与账号，优先使用服务提供方的 HTTPS 地址
2. 执行一次手动备份，确认远程列表出现新的备份
3. 恢复前核对恢复策略，再按设备和时间选择记录，以及需要的恢复范围
4. 设置保留数量时，确认旧备份清理符合你的需求

保留数作用于本设备较早的 WebDAV 备份。备份与恢复不是实时双向同步，另一台设备不会因为这里保存成功就立即变化

## 跨设备迁移后

重新完成 VPN 或管理员授权，核对端口、应用访问控制和当前配置。托管节点文件不随便携备份迁移，需要在新设备登录 oixCloud 并同步；Tailscale 设备身份与认证密钥也不在备份中，需要重新授权

WebDAV 密码不写入导出备份，新设备需要重新填写。同机恢复可保留匹配服务器已有的密码。恢复失败时保留原备份，记录版本与报错，不反复覆盖现有可用配置
