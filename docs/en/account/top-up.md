# Add funds and redeem top-up codes {#top-up}

A top-up adds account balance; buying a plan is a separate step. If checkout was opened from a plan purchase, [check what happens to the plan purchase](/en/account/plans#checkout-opened-from-a-plan-purchase).

<figure class="guide-figure">
  <a href="/illustrations/account-top-up-en.svg?v=20261105-1" target="_blank" rel="noopener" aria-label="Choose a method and check the top-up amount">
    <img src="/illustrations/account-top-up-en.svg?v=20261105-1" alt="Choose a method and check the top-up amount" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation · Fictional channel and amount</figcaption>
</figure>

For an on-chain transfer, see [Crypto top-ups and missing payments](/en/account/crypto-payments).

## Fiat top-ups {#fiat-top-up}

Use the fiat methods currently shown in checkout, such as Alipay or WeChat Pay. Available methods and amount limits follow the page.

1. Sign in, open [Cashier](https://oixcloud.com/user/v2/counter), choose a payment method and enter the amount.
2. Check **CNY / USD** beside the field. CNY is the RMB order amount. USD is a reference conversion: review and confirm the CNY amount before placing the order. Use CNY if the exchange rate is unavailable.
3. On a phone, use the button to open Alipay or WeChat Pay when offered. You can also use the QR code or payment link for that order. Check the actual amount and fees on the payment order.
4. Return to [Top-up History](https://oixcloud.com/user/code), verify the credit and refresh your balance. For checkout associated with a plan, also verify the resulting purchase in Plan Management.

::: tip Refresh the page if you encounter any fiat payment issue
For any problem with a fiat top-up, **refresh the checkout page so the system automatically reselects the payment gateway, then try again**. You do not need to choose a gateway manually. The payment-method name can stay the same while the gateway handling it changes.

If you have already been charged, check the original order and top-up history after refreshing instead of paying again. If still uncredited, keep the order number, time, amount and receipt for a [payment support ticket](/en/help/support#payment).
:::

## Top-up codes and credit verification {#top-up-records}

<figure class="guide-figure">
  <a href="/illustrations/account-top-up-records-en.svg?v=20261105-1" target="_blank" rel="noopener" aria-label="Redeem a code and verify credited funds">
    <img src="/illustrations/account-top-up-records-en.svg?v=20261105-1" alt="Redeem a code and verify credited funds" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional channel, amounts and records; example code cannot be redeemed</figcaption>
</figure>

If you have a top-up code, open [Top-up Code and Records](https://oixcloud.com/user/code), enter the complete code and select **Redeem Code**. Check the record and balance after success. A top-up code is not an Access Token, subscription URL or payment order number.

| Situation | What to do |
| --- | --- |
| Payment debited but not credited | Check the original order and top-up records first. Keep the order number, amount, payment time and receipt; do not pay again. Use [missing-payment feedback](/en/account/crypto-payments#crypto-payment-feedback) for cryptocurrency or a [support ticket](/en/help/support) for other methods. |
| Order expired | If unpaid, create a new order and do not transfer to the old one. If already paid, check the original order and records before taking further action. |
| Too many pending orders | Follow the prompt to handle old orders. Verify any payment with an uncertain result before deleting its order just to place another one. |
| Balance or traffic differs after crediting | Check debt deductions, plan purchases, automatic renewal and automatic traffic reset. Adding funds alone does not increase an ordinary plan's traffic allowance. |
