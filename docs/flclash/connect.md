---
description: "登录与首次连接的操作步骤、适用范围与常见问题"
---

# 登录与首次连接

适用于 FlClash for oixCloud；上游通用版的账户入口与本教程不同，请从 [软件中心](https://oixcloud.com/client) 下载

## 操作示意

<figure class="guide-figure">
  <a href="/illustrations/flclash-connect-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 仪表盘启动与接管">
    <img src="/illustrations/flclash-connect-zh.svg?v=20260929-2" alt="FlClash for oixCloud · 仪表盘启动与接管" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

## 导入账户配置

<figure class="guide-figure">
  <a href="/illustrations/flclash-login-zh.svg?v=20261016" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 登录账户">
    <img src="/illustrations/flclash-login-zh.svg?v=20261016" alt="FlClash for oixCloud · 登录账户" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

1. 从软件中心下载 FlClash for oixCloud，选择适合设备系统与架构的安装包，打开应用中的「oixCloud」页面登录
2. 选择邮箱/密码、已有 Access Token，或当前版本提供的「使用 Google 登录」。Google 只登录已有账户，并需客户端和网站同时支持，步骤见 [Google 登录说明](/account/security#google-client-login)。确认套餐生效，等待托管配置与节点加载完成再连接
3. 在「代理」页面选择节点或策略组，日常使用保留「规则」模式；oixCloud 页的「刷新」更新账户信息，「同步」重新获取托管配置，需要更新节点时使用「同步」

## 让应用使用代理

- 桌面系统：先启用「系统代理」供支持系统代理的应用使用；需要接管更多应用时，再配置「虚拟网卡」并完成系统授权
- Android：启动时允许系统的 VPN 连接请求；检查是否把目标应用排除在 VPN 之外

这两个设置决定流量是否进入客户端；「规则 / 全局」决定进入以后如何选择出口。详见 [系统代理与虚拟网卡](/flclash/capture)

## 验证连接

在「代理」选中一个有权限且可用的节点，打开目标网站，并在连接页面核对流量。套餐或节点变化后更新托管配置，不要反复退出登录来更新节点

登录失败时保留原始报错与客户端版本，先排查网络、系统时间及账户状态

Windows 启动提示找不到 DLL 时，先按 [缺少 DLL 修复](/flclash/windows-dll) 核对具体文件和运行库

## Google 登录排查

没有按钮时先核对安装版本；维护源码中的新功能不一定已经进入当前稳定版。浏览器未返回时使用「返回 App」，超时后从客户端重新开始。提示邮箱未注册时，选择已有账户对应的 Google 邮箱，或先在网站完成注册；不要为排查浏览器跳转而反复刷新 Token

## 无图形界面与后台运行 {#headless}

FlClash for oixCloud 是图形客户端，常规桌面安装包没有独立的纯命令行运行模式。根据设备环境选择下面的方式

### 已有桌面环境，希望后台运行

1. 先在界面登录账户、同步托管配置并验证连接
2. 打开「常规 → 启动与后台」，开启「自启动」「静默启动」「自动运行」
3. 下次随系统自启动时，应用在后台启动并自动运行代理；需要操作时从托盘或菜单栏打开窗口

`--silent-launch` 只用于静默启动，并且需要同时开启「静默启动」设置，仍然依赖图形环境，不能用于只有 SSH 的服务器

### Linux 服务器或 NAS，希望通过浏览器操作

可使用 FlClash for oixCloud 的 Docker 镜像，在另一台设备的浏览器中登录和管理。宿主机无需本地桌面，容器内部仍运行图形客户端；部署步骤见 [FlClash Docker 教程](https://github.com/pickrui/FlClash/blob/main/docker/README_zh_CN.md)

::: warning 浏览器管理界面的访问范围
浏览器管理界面默认没有鉴权，不要直接暴露到公网。容器中的系统代理或虚拟网卡不会自动接管宿主机或其他局域网设备的流量，需按 Docker 教程单独配置代理端口与访问范围
:::

### 只有 SSH，希望使用纯命令行

可使用独立的 oixCloud Helper Linux 程序或其 Docker 镜像，通过配置文件提供代理端口。按 [Helper Linux 与运行诊断](/other/helper-linux) 完成配置检查、启动和连接验证；Helper 的端口映射不等同于 FlClash for oixCloud 的规则分流与虚拟网卡接管
