# 创建、更新与停用 Access Token {#access-tokens}

## 新增 Access Token {#manual-token}

Access Token 可以粘贴到客户端登录，也可以给第三方客户端或脚本调用接口。完整内容只显示一次，先准备好保存的位置

1. 在 [Access Token 管理](https://oixcloud.com/user/token) 点「新增 Token」，选择「Token 有效期」，填写便于识别的备注，并核对「订阅配置」。有效期默认 30 天；用于登录客户端时建议选「长期有效」，Token 到期后用它登录的设备会掉线
2. 点「确认创建」，在弹窗里用 Passkey 或当前登录密码确认
3. 弹窗会显示完整 Token：点「复制」，保存到安全的地方，再点「我已保存，关闭」。这是唯一一次能看到完整内容，关闭后列表只显示末 4 位
4. 粘贴到客户端的 Access Token 登录框即可登录，之后这个 Token 下面会列出用它登录的设备

创建后，你会通过邮件和已绑定的 Telegram 收到提醒；不是本人操作时，立即删除这个 Token 并 [修改密码](/account/security#change-password)。结果不明确时，刷新列表确认是否已创建，避免重复提交；已创建但没有看到完整内容时，[重新生成](#refresh-client-token)它

同一账户最多保留 10 个有效的 Access Token，长期有效的也计入；客户端用邮箱/密码或 Google 登录不占这份额度。设定了到期时间的 Token 到期后不能继续认证，不会因使用而自动延期；到期前可点击它的有效期改为长期有效，Token 内容不变。删除 Token 时，确认框会列出用它登录、需要重新登录的设备。不要把订阅网址填进 Token 登录框，也不要公开 Token 截图

## 重新生成 Access Token {#refresh-client-token}

<figure class="guide-figure">
  <a href="/illustrations/account-tokens-zh.svg?v=20261127-1" target="_blank" rel="noopener" aria-label="oixCloud · 重新生成 Token 或让一次登录下线">
    <img src="/illustrations/account-tokens-zh.svg?v=20261127-1" alt="oixCloud · 重新生成 Token 或让一次登录下线" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据</figcaption>
</figure>

Token 丢失或怀疑泄露时可以重新生成：备注、有效期和订阅配置不变，换成一个新值并再显示一次。旧值立即失效，用它登录的设备和调用接口的脚本都要换用新值

1. 打开 [Access Token 管理](https://oixcloud.com/user/token)，在「Access Token」中按备注和末 4 位找到目标 Token
2. 点「重新生成」，核对影响范围，在弹窗里用 Passkey 或当前登录密码确认
3. 在弹窗中点「复制」保存新值，再点「我已保存，关闭」，然后更新用到它的设备和脚本

重新生成同样会通过邮件和已绑定的 Telegram 发送提醒。已到期的 Token 不能重新生成，请新增一个。请求失败或结果不明确时，先重新加载页面核对末 4 位：已经变化但没有拿到完整内容时，再重新生成一次。要撤销邮箱/密码或 Google 登录，见[已登录的客户端](/account/client-sign-in#signed-in-clients)

## 禁止客户端邮箱/密码登录 {#token-only}

1. 先确认需要使用的客户端能用 Google 登录，或已经准备好 [Access Token](#manual-token)
2. 在 [Access Token 管理](https://oixcloud.com/user/token) 展开「客户端登录方式与安全提示」，开启「禁止客户端使用邮箱/密码登录」，等待保存成功
3. 此后客户端和 API 的邮箱/密码登录被拒绝；已登录的设备、现有 Access Token、网站登录和受支持的 Google 登录继续有效

开启后，新设备改用 Google 登录或 Access Token 登录，不需要为新设备临时关闭这个选项。旧页面可能把这个选项标为「仅允许 Access Token」，它实际限制的是邮箱/密码方式

<span id="stop-a-device-or-token"></span>

## 停用设备或 Token

打开 [Access Token 管理](https://oixcloud.com/user/token)，找到要停用的登录记录或 Token

- 若要撤销邮箱/密码或 Google 登录，按[下线步骤](/account/client-sign-in#signed-in-clients)操作。共用该凭据的设备都需要重新登录
- 若要停用 Access Token，在「Access Token」中找到它，核对确认框里的设备后删除。若仍有设备或脚本需要使用它，可以[重新生成](#refresh-client-token)，再填入新值
