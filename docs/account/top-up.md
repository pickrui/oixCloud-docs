# 账户充值与充值码 {#top-up}

充值用于增加账户余额，与购买套餐是两个步骤。若从套餐购买流程进入收银台，[请核对自动购买的处理结果](/account/plans#从套餐购买进入收银台)

<figure class="guide-figure">
  <a href="/illustrations/account-top-up-zh.svg?v=20261105-1" target="_blank" rel="noopener" aria-label="选择支付方式并核对充值金额">
    <img src="/illustrations/account-top-up-zh.svg?v=20261105-1" alt="选择支付方式并核对充值金额" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>界面示意 · 虚构渠道与金额</figcaption>
</figure>

使用链上转账时，见[虚拟货币充值与未到账反馈](/account/crypto-payments)

## 法币充值 {#fiat-top-up}

法币充值使用收银台当前显示的支付宝、微信等支付方式，具体可用方式和金额上下限以页面为准

1. 登录并打开 [收银台](https://oixcloud.com/user/v2/counter)，选择支付方式，输入充值金额
2. 核对输入框旁的 **CNY／USD**。CNY 是人民币订单金额；USD 仅用于参考换算，点击「核对金额」后确认人民币金额再下单。汇率不可用时使用 CNY
3. 提交订单，在手机上可点「打开支付宝付款」或「打开微信付款」，也可使用当次订单的二维码或支付链接，实际付款金额及费用以支付订单为准
4. 返回网站，在 [充值记录](https://oixcloud.com/user/code) 核对入账金额并刷新余额；若是套餐购买带来的补款，再检查套餐管理的实际购买结果

::: tip 法币充值遇到问题时刷新网页
使用法币充值遇到任何问题，可以**刷新收银台网页，让系统自动重新选择支付网关套件后再试**，无需手动挑选网关。支付方式名称可能相同，但处理付款的网关套件可能已更换

如果已经扣款，刷新后先核对原订单和充值记录，不要直接再付一次；仍未到账时保留订单号、付款时间、金额和凭证，提交 [付款问题服务单](/help/support#payment)
:::

## 充值码与到账核对 {#top-up-records}

<figure class="guide-figure">
  <a href="/illustrations/account-top-up-records-zh.svg?v=20261105-1" target="_blank" rel="noopener" aria-label="使用充值码并核对到账记录">
    <img src="/illustrations/account-top-up-records-zh.svg?v=20261105-1" alt="使用充值码并核对到账记录" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>界面示意 · 虚构渠道、金额与记录，示例充值码不可使用</figcaption>
</figure>

已有充值码时，打开 [充值码与充值记录](https://oixcloud.com/user/code)，在「充值码」中输入完整代码，点击「使用充值码」，成功后核对记录和余额。充值码不是 Access Token、订阅地址或支付订单号

| 遇到的情况 | 处理方式 |
| --- | --- |
| 已扣款但未到账 | 先核对原订单和充值记录，保留订单号、金额、付款时间及支付凭证，勿重复付款；虚拟货币使用 [未到账反馈](/account/crypto-payments#crypto-payment-feedback)，其他方式提交 [服务单](/help/support) |
| 订单已过期 | 未付款的重新下单，勿再向旧订单转账；已经付款的先查原订单和记录，不要直接再付一笔 |
| 待支付订单过多 | 按页面提示处理旧订单；已付款但结果不明的先核对，不要为了继续下单删除原订单 |
| 到账后余额或流量不符合预期 | 核对欠款抵扣、套餐购买、自动续费或自动重置结果；单纯充值不会直接给普通套餐增加流量 |
