# 客户端登录与设备下线 {#client-sign-in}

<span id="sign-in-sign-out-and-access-tokens"></span>

## 登录、退出与访问令牌

官方客户端可以用邮箱/密码、Google 或 Access Token 登录，两类登录都显示在 [Access Token 管理](https://oixcloud.com/user/token) 页面：

| 区块 | 列出的内容 | 有效期 |
| --- | --- | --- |
| Access Token | 你自己新增的 Token，可粘贴到客户端登录，也可给第三方客户端或脚本调用接口；用它登录的设备列在这个 Token 下面 | 按新增时选择的有效期到期 |
| 已登录的客户端 | 用邮箱/密码或 Google 登录的记录。每行对应一份登录凭据，共用它的设备会一起下线 | 无固定到期日，连续 180 天未使用的登录会自动清理 |

在客户端退出会清除本机的登录状态，服务器上的凭据仍然有效。开启 iCloud 账户或 Apple TV 同步时，其他设备的登录状态也可能随同步改变。要撤销凭据，请在网站上找到对应的登录记录或 Access Token

## 登录定制客户端 {#first-client-login}

每台设备都在客户端里直接登录，可任选一种方式：

- 邮箱和密码
- 客户端提供的「使用 Google 登录」，步骤见 [使用 Google 登录客户端](#google-client-login)
- Access Token：先在网站 [新增 Access Token](/account/access-tokens#manual-token)，再粘贴到客户端的 Access Token 登录框。填写 Token 本身，不是订阅网址

三种方式登录后的功能完全一样，登录成功后这台设备立即可以获取节点。同类客户端换到新设备时，同样在新设备上用邮箱/密码或 Google 登录，或粘贴已保存或新增的 Access Token；网站上不显示客户端的登录凭据，也不能从网页复制登录 Token

提供 Google 登录的维护版本包括 oixFlow（iPhone / iPad）、FlClash for oixCloud、macOS Helper、带账户集成的 OpenClash 和 Merlin 的 oixClash。Apple TV 从 [iPhone 或 iPad 同步账户](/oixflow/apple-tv#approval)。Linux Helper 在[配置文件](/other/helper-linux)中填写凭据

## 收到「新设备登录」提醒时怎么办？ {#device-approval}

客户端用邮箱/密码、Google 或 Access Token 登录成功后，这台设备立即可以获取节点，无需在网页上批准。启用两步验证后，网站密码登录和部分账户操作会要求输入验证器动态码

「新设备登录」提醒会通过邮件和已绑定的 Telegram 发送，里面写明客户端、设备指纹和时间。若不认识这台设备，点提醒中的链接打开对应记录

- 邮箱/密码或 Google 登录：在「已登录的客户端」点「下线」，核对共用这次登录的设备后确认
- Access Token 登录：在「Access Token」中删除对应 Token，或[重新生成](/account/access-tokens#refresh-client-token)后给仍在使用的设备和脚本换上新值

若怀疑账户密码泄露，请[修改登录密码](/account/security#change-password)。改密码会让所有客户端下线，并删除全部 Access Token

原来的「设备登记」页面和 Telegram 机器人的 `/device` 指令已经取消，旧链接会跳到「已登录的客户端」。Apple TV 继续通过 iPhone 的「同步到 Apple TV」登录，不需要再由 iPhone 批准，见 [Apple TV 的登录](/oixflow/apple-tv#approval)

## 已登录的客户端 {#signed-in-clients}

打开 [Access Token 管理 → 已登录的客户端](https://oixcloud.com/user/token#devices)。登录记录按客户端分组，每行显示设备名称和登录日期，有使用记录时也会显示最近使用时间。独立登录的记录可以分别下线

- 例如，oixFlow 把 iPhone 的登录同步给 Apple TV 后，这两台设备共用登录凭据。Apple TV 使用后，iPhone 的记录下方会注明「Apple TV 也在使用这个登录」
- 同一客户端在改版前共用的凭据显示为「改版前的登录」。这些设备在新版客户端各自重新登录后，会分开列出。OpenClash 0.48.014 及更早版本的设备需要先更新插件
- 用 Access Token 登录的设备列在「Access Token」中对应的 Token 下面

**让一次登录下线**

1. 在对应客户端下，按设备名称和最近使用时间找到要撤销的登录记录
2. 点该行的「下线」，核对确认框里列出的设备。确认后，这份凭据立即失效，所有共用它的设备都会下线
3. 在仍需使用的设备上重新登录。Apple TV 可从已重新登录的 iPhone 或 iPad [同步账户](/oixflow/apple-tv#approval)。用邮箱/密码或 Google 重新登录同款客户端会沿用原来的「订阅配置」，用手动 Access Token 则以[该令牌绑定的地址](/account/subscriptions)为准

要让所有设备一起退出，[修改登录密码](/account/security#change-password)

## 使用 Google 登录客户端 {#google-client-login}

1. 在客户端登录页点击「使用 Google 登录」，在系统认证窗口或浏览器中继续
2. 选择与已有 oixCloud 账户邮箱一致的 Google 账户。此入口只登录已有账户，不会自动注册新账户
3. 验证完成后回到发起登录的客户端。手机浏览器若显示「返回 App」，点它返回。路由器请用局域网地址打开插件，允许弹窗并保留原标签页；macOS Helper 请在同一台 Mac 的浏览器完成验证
4. 等待账户信息和托管节点加载，再建立连接。超时或返回验证失败时，从客户端重新发起，不重复打开旧完成页

Google 登录需要客户端和网站同时支持。若当前版本没有入口，继续使用邮箱/密码或 Access Token；不要把 Google 密码填进 oixCloud 的密码框。用 Google 注册时，结果页会显示一次初始密码，网站也会尝试发到邮箱。需要账户密码时，可在 Gmail（包括垃圾邮件）查找这封邮件；找不到时重置密码：已登录时打开 [账户设置 → 登录密码](https://oixcloud.com/user/edit#settings-password)，在展开的表单里「当前密码」下方点「忘记当前密码」，未登录时在 [网站登录页](https://oixcloud.com/auth/login) 点「忘记密码」。重置后所有客户端需要重新登录，主订阅地址会更换，两步验证会关闭，Passkey 会清除

### Google 登录排查 {#google-troubleshooting}

| 现象 | 下一步 |
| --- | --- |
| 客户端没有按钮 | 核对安装版本和发行渠道；需要客户端与网站同时支持，维护源码中的功能不代表已进入所用稳定版 |
| 浏览器没有返回客户端 | 手机可点完成页的「返回 App」。路由器请检查弹窗权限并回到原插件页，Helper 请回到发起登录的 Mac。若流程已超时，从客户端重新发起 |
| 提示邮箱未注册 | 选择与现有 oixCloud 账户邮箱一致的 Google 账户，或先在网站完成注册 |
| 已登录但没有节点 | 等待托管配置载入，核对套餐、节点筛选和同步结果 |

排查浏览器跳转时，不要让其他设备下线或重新生成 Access Token；这些操作对 Google 登录没有帮助，只会让相关设备需要重新登录
