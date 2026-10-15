---
description: "第一次使用的操作步骤、适用范围与常见问题"
---

# 第一次使用

先完成一次正常连接，再按需求启用高级功能

## 连接前确认

1. 打开 [用户中心](https://oixcloud.com/user)，确认账户正常、套餐已激活且仍在有效期内
2. 在 [软件中心](https://oixcloud.com/client) 下载对应系统和架构的官方客户端
3. 先暂停其他 VPN，保持默认配置，选择一个可用节点

充值到账不等于套餐已生效。从套餐购买流程进入收银台付款后，系统会尝试自动完成那笔购买；先核对充值记录和套餐记录，避免重复下单。单独充值后需按自己的目标购买套餐或激活已有套餐，详见 [购买、续费与切换](/account/plans)

## 首次登录定制客户端

首次使用每种定制客户端，请先用邮箱和密码登录一次，生成该客户端的专属 Token。Google 登录用户请在 Gmail 查找包含初始密码的邮件；未找到时，在网站登录界面点击「忘记密码」重置

生成后可到 [Access Token 管理](https://oixcloud.com/user/token) 复制对应客户端的 Token，并开启「禁止客户端使用邮箱/密码登录（仅允许 Access Token）」。网站登录仍可使用；Apple TV 按下面的同步教程操作。详见 [首次登录与仅允许 Token](/account/security#first-client-login)

## 选择你的设备

| 设备 | 教程 |
| --- | --- |
| iPhone / iPad | [oixCloud 首次连接](/oixcloud/connect) |
| Apple TV | [Apple TV 连接与同步](/oixcloud/apple-tv) |
| Windows / macOS / Android / Linux | [FlClash for oixCloud 首次连接](/flclash/connect) |
| OpenWrt 路由器 | [OpenClash](/other/openclash) |
| Merlin 路由器 | [oixClash](/other/oixclash) |
| 使用 Surge 的 Mac | [Surge 助手](/other/surge) |

## 怎么确认已经可用

打开平时需要代理的网站，再检查客户端是否出现流量或连接记录。仅看到 VPN 图标或连接开关开启，还不能证明目标网站可用

失败时先看 [连接排查](/help/troubleshooting)，不要一次修改节点、DNS、模式和订阅全部选项
