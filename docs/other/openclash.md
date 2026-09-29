---
description: "OpenClash 路由器的操作步骤、适用范围与常见问题"
---

# OpenClash 路由器

## 连接步骤

1. 从软件中心进入 OpenClash 安装页，在 OpenWrt 路由器的「系统 → 软件包」安装适合系统的 .ipk 或 .apk 软件包
2. 进入「服务 → OpenClash → 插件设置 → oixCloud」，使用邮箱与密码或 Access Token 登录
3. 登录后会自动创建或更新 oixCloud - smart 配置，并下载所需内核；在配置管理中选中该配置并启动，等待节点加载、内核运行正常，再在控制面板选择策略组并测试联网

没有 oixCloud 标签时先更新插件；内核下载失败请查看运行日志。该接入方式需要 Oix 专用内核，普通 Clash 配置不能直接替代。路由器显示运行中后，还要用一台局域网设备验证网关、DNS 和访问控制是否让流量经过它

[打开软件中心](https://oixcloud.com/client/router) · [排查连接问题](/help/troubleshooting)
