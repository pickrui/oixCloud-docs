# 账户注销与长期未登录清理 {#account-deletion}

要主动关闭账户，请先查看[注销前的核对事项](#delete-account)。长期未登录账户按下方条件单独处理

<span id="when-are-inactive-accounts-deleted"></span>

## 长期未登录的账户会被清理吗？

无有效套餐且符合清理条件的账户，余额和佣金均不大于 0 时，清理期限为 30 天；任一大于 0 时为 365 天。期限从最近登录活动与套餐到期时间中较晚的一项起算，不会仅因很久未登录，就在套餐到期当天立即删除

删除前 7 天、3 天和 1 天会发送提醒，有余额或佣金的账户会写明金额。账户删除后，余额和佣金一并清除，无法恢复

登录网站或客户端，或保持登录后的有效访问，可更新登录活动。仍有生效或有效待激活套餐、待处理提现或付款等未结事项时，会暂缓自动清理；封禁账户不按这套空闲规则自动删除。请以账户通知和当前状态为准

## 注销账户 {#delete-account}

**注销无法撤销**。所有设备会退出登录，订阅地址和令牌失效，购买及充值记录无法再查询。账户内的套餐、余额和佣金作废，不予退款。若只想撤销一次登录，请使用[已登录客户端](/account/client-sign-in#signed-in-clients)

1. 打开[账户设置](https://oixcloud.com/user/edit#settings-delete)，点「前往注销」，核对要删除的账户邮箱。如果页面提示有待处理的付款、套餐、提现、奖励或独享 IP 保证金，先处理提示的事项。受限且有生效套餐时，可通过服务单联系支持
2. 用 Passkey 验证，或输入当前密码及已启用的两步验证码。两种方式都要点「发送验证码」，填写账户邮箱收到的验证码（10 分钟内有效）
3. 确认愿意永久注销后，勾选已了解后果，点「确认删除」。成功后会返回登录页

<figure class="guide-figure">
  <a href="/illustrations/account-delete-account-zh.svg?v=20261127-1" target="_blank" rel="noopener" aria-label="注销前核对账户、邮箱验证码和确认选项">
    <img src="/illustrations/account-delete-account-zh.svg?v=20261127-1" alt="注销前核对账户、邮箱验证码和确认选项" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>示例使用 Passkey 验证身份</figcaption>
</figure>
