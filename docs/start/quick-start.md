---
description: "第一次使用的操作步骤、适用范围与常见问题"
---

# 第一次使用

先完成一次正常连接，再按需求启用高级功能

## 连接前确认

1. 登录[用户中心](https://oixcloud.com/user)。首次用邮箱注册时，昵称可留空，邀请码和邮箱验证码按注册页提示填写
2. 打开[套餐管理](https://oixcloud.com/user/bought)。有「使用中」的套餐就可以继续。只有「待激活」时，按[激活说明](/account/plans#manual-activation)核对能否启用
3. 首次开通或只做过单独充值时，到[套餐商店](https://oixcloud.com/user/shop)选择套餐和周期，确认购买。如果已在套餐购买流程中付款，系统会尝试完成原购买，先[查充值记录和套餐结果](/help/support#payment)，避免重复下单

## 首次登录定制客户端

先核对[系统要求](/clients/#requirements)，从[软件中心](https://oixcloud.com/client)下载适合设备的版本，按下表打开设备教程。用邮箱和账户密码、Access Token，或客户端提供的「使用 Google 登录」登录，随后选择节点。Google 登录需要已有账户。Apple TV 从已登录的 iPhone 或 iPad [同步账户](/oixflow/apple-tv#approval)

选择 Access Token 时，到 [Access Token 管理](https://oixcloud.com/user/token)点「新增 Token」，复制并保存只显示一次的完整值。若已禁止客户端邮箱/密码登录，可用 Access Token 或受支持的 Google 登录。登录成功即可获取节点，详见[客户端登录说明](/account/security#first-client-login)

## 选择你的设备

| 设备 | 教程 |
| --- | --- |
| <span class="platform gi-apple">iPhone / iPad</span> | [<span class="gi gi-oixflow" aria-hidden="true"></span>oixFlow 首次连接](/oixflow/connect) |
| <span class="platform gi-apple">Apple TV</span> | [<span class="gi gi-oixflow" aria-hidden="true"></span>Apple TV 连接与同步](/oixflow/apple-tv) |
| <span class="platform gi-windows">Windows</span> <span class="platform gi-apple">macOS</span> <span class="platform gi-android">Android</span> <span class="platform gi-linux">Linux</span> | [<span class="gi gi-flclash" aria-hidden="true"></span>FlClash for oixCloud 首次连接](/flclash/connect) |
| <span class="platform gi-openwrt">OpenWrt 路由器</span> | [<span class="gi gi-openclash" aria-hidden="true"></span>OpenClash](/other/openclash) |
| <span class="platform gi-router">Merlin 路由器</span> | [<span class="gi gi-oixclash" aria-hidden="true"></span>oixClash](/other/oixclash) |
| <span class="platform gi-apple">使用 Surge 的 Mac</span> | [<span class="gi gi-helper" aria-hidden="true"></span>Surge 助手](/other/surge) |

## 其他客户端导入订阅 {#import-subscription}

1. 有生效套餐后，在[用户中心](https://oixcloud.com/user#subscription-details)展开「订阅地址」，找到你的客户端，例如 Clash/Stash
2. 点该行的「复制」，在客户端添加远程订阅并粘贴完整地址。有「导入」按钮时也可以直接打开客户端。下方的 **Provider** 只供已有配置引用节点列表
3. 更新并选中导入的配置。普通订阅可获取有权限且格式支持的 Edge、Home ISP 和已分配的独享 IP。要使用套餐内的 CIA、IXP、Fusion 或 GIA，请在支持的专用客户端登录

<figure class="guide-figure">
  <a href="/illustrations/account-dashboard-subscription-zh.svg?v=20261127-2" target="_blank" rel="noopener" aria-label="在用户中心复制 Clash/Stash 订阅地址，Provider 单独列在下方">
    <img src="/illustrations/account-dashboard-subscription-zh.svg?v=20261127-2" alt="在用户中心复制 Clash/Stash 订阅地址，Provider 单独列在下方" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>以 Clash/Stash 为例，图中已隐藏订阅地址</figcaption>
</figure>

## 怎么确认已经可用


<figure class="guide-figure">
  <a href="/illustrations/flclash-connect-zh.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 仪表盘启动与接管">
    <img src="/illustrations/flclash-connect-zh.svg?v=20261102-3" alt="FlClash for oixCloud · 仪表盘启动与接管" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>FlClash for oixCloud 桌面界面示例 · 其他客户端按对应教程操作</figcaption>
</figure>

先暂停其他 VPN，保持默认配置，选一个可用节点并连接。打开平时需要代理的网站，再检查客户端是否出现流量或连接记录。仅看到 VPN 图标或连接开关开启，还不能证明目标网站可用

失败时先看 [连接排查](/help/troubleshooting)，不要一次修改节点、DNS、模式和订阅全部选项
