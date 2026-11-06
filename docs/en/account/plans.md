---
description: "Plans, renewals and switching \u2014 setup, practical steps and troubleshooting"
---

# Plans, renewals and switching

::: warning Plans are limited by both time and traffic
Each plan has a validity period and a traffic allowance. **The plan is exhausted when either its validity ends or its traffic runs out, whichever happens first.** If you use all the traffic before the expiry date, you need to place a new plan order; remaining time alone does not let you keep using the original plan's high-speed allowance. You can also turn on automatic traffic reset below.

If you have a queued plan, or have enabled automatic renewal (runs only at expiry) or automatic traffic reset, the continuation rules below apply. Check [Plan Management](https://oixcloud.com/user/bought) first, then place an order in the [plan store](https://oixcloud.com/user/shop) if no replacement has taken effect, to avoid duplicate purchases.
:::

## How to add funds {#top-up}

A top-up adds account balance; buying a plan is a separate step. If checkout was opened from a plan purchase, also read the automatic-purchase explanation below.

<figure class="guide-figure">
  <a href="/illustrations/account-top-up-en.svg?v=20261105-1" target="_blank" rel="noopener" aria-label="Choose a method and check the top-up amount">
    <img src="/illustrations/account-top-up-en.svg?v=20261105-1" alt="Choose a method and check the top-up amount" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional channel and amount · Click to enlarge</figcaption>
</figure>

### Fiat top-ups {#fiat-top-up}

Use the fiat methods currently shown in checkout, such as Alipay or WeChat Pay. Available methods and amount limits follow the page.

1. Sign in, open [Cashier](https://oixcloud.com/user/v2/counter), choose a payment method and enter the amount.
2. Check **CNY / USD** beside the field. CNY is the RMB order amount. USD is a reference conversion: review and confirm the CNY amount before placing the order. Use CNY if the exchange rate is unavailable.
3. Pay using that order's QR code or link. Check the actual amount and fees on the payment order.
4. Return to [Top-up History](https://oixcloud.com/user/code), verify the credit and refresh your balance. For checkout associated with a plan, also verify the resulting purchase in Plan Management.

::: tip Refresh the page if you encounter any fiat payment issue
For any problem with a fiat top-up, **refresh the checkout page so the system automatically reselects the payment gateway, then try again**. You do not need to choose a gateway manually. The payment-method name can stay the same while the gateway handling it changes.

If you have already been charged, check the original order and top-up history after refreshing instead of paying again. If still uncredited, keep the order number, time, amount and receipt for a [payment support ticket](/en/help/support#payment).
:::

### Cryptocurrency top-ups {#crypto-top-up}

Cryptocurrency payments require a transfer to the order's address on its specified network. Matching the asset name alone is insufficient. The illustration uses a fictional USDT order; use the assets and networks actually offered in checkout. USDT orders do not all require the same network.

<figure class="guide-figure">
  <a href="/illustrations/account-crypto-top-up-en.svg?v=20261105-3" target="_blank" rel="noopener" aria-label="Check the crypto order before transferring">
    <img src="/illustrations/account-crypto-top-up-en.svg?v=20261105-3" alt="Check the crypto order before transferring" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

1. Choose an available cryptocurrency method. If the entry specifies a network, use that network. For a multi-asset entry, select the asset and check its displayed network, exchange rate and platform fee.
2. Enter the account top-up amount, check CNY / USD, then select **Create Order**. The account credit and on-chain **Amount to receive** use different units. The pre-order coin estimate is only a preview; transfer the amount on the created order.
3. Check the asset, **network, recipient address, amount to receive and remaining payment time**. Select the same asset and network in your wallet or exchange and copy the current order's address. The address QR code contains only the address; scanning it does not set or verify the network and amount.
4. Follow that order's amount rule. For an exact-amount order, keep every decimal place and do not round. For a minimum-amount order, the received amount must not be less; excess funds are not refunded. Do not assume all channels use the same rule.
5. Check the exchange's withdrawal fee and final received amount. A platform fee differs from exchange/network transfer fees; no platform fee does not mean a free transfer. If the exchange deducts its fee from the withdrawal quantity, use **Withdrawal fee calculator** to add **amount to receive + fee**, then check the exchange's final received amount again.
6. Transfer once within the payment window and retain the transaction hash. Crypto orders currently allow 60 minutes; follow the displayed countdown. If an unpaid order expires, create a new one and do not reuse the old amount or address.
7. Return to checkout for payment monitoring and chain confirmation, then verify the actual credit in [Top-up History](https://oixcloud.com/user/code). Wallet submission, blockchain confirmation and website crediting are separate stages.

**Paid but not automatically credited?** Select **Report missing payment** in **Crypto Order Records** below the payment area on the full Cashier page; see the [entry illustration and steps](#crypto-payment-feedback).

| Status or problem | Action |
| --- | --- |
| Reconnecting | The status query was interrupted, which does not prove payment failure. If already paid, check the original order and top-up history |
| Transaction detected, payment not yet credited | Wait for on-chain confirmation. Do not transfer again or create another order even if the payment window ended. Check history and use [missing-payment feedback](#crypto-payment-feedback) if needed |
| Underpayment, wrong network or late transfer | Keep the original order, hash and receipt for [missing-payment feedback](#crypto-payment-feedback). Do not send an extra transfer or create another order as a workaround |
| Top-up successful | Verify balance and plan records; do not pay again |

After a standalone top-up, complete your purchase in the [plan store](https://oixcloud.com/user/shop). Existing automatic renewal or traffic reset may spend the funds under their rules, so also check [Plan Management](https://oixcloud.com/user/bought).

### Top-up codes and credit verification {#top-up-records}

<figure class="guide-figure">
  <a href="/illustrations/account-top-up-records-en.svg?v=20261105-1" target="_blank" rel="noopener" aria-label="Redeem a code and verify credited funds">
    <img src="/illustrations/account-top-up-records-en.svg?v=20261105-1" alt="Redeem a code and verify credited funds" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional channel, amounts and records; example code cannot be redeemed · Click to enlarge</figcaption>
</figure>

If you have a top-up code, open [Top-up Code and Records](https://oixcloud.com/user/code), enter the complete code and select **Redeem Code**. Check the record and balance after success. A top-up code is not an Access Token, subscription URL or payment order number.

| Situation | What to do |
| --- | --- |
| Payment debited but not credited | Check the original order and top-up records first. Keep the order number, amount, payment time and receipt; do not pay again. Use [missing-payment feedback](#crypto-payment-feedback) for cryptocurrency or a [support ticket](/en/help/support) for other methods. |
| Order expired | If unpaid, create a new order and do not transfer to the old one. If already paid, check the original order and records before taking further action. |
| Too many pending orders | Follow the prompt to handle old orders. Verify any payment with an uncertain result before deleting its order just to place another one. |
| Balance or traffic differs after crediting | Check debt deductions, plan purchases, automatic renewal and automatic traffic reset. Adding funds alone does not increase an ordinary plan's traffic allowance. |

## Add funds, buy, and activate

### Choose and confirm a plan {#purchase}

<figure class="guide-figure">
  <a href="/illustrations/account-purchase-en.svg?v=20261105-3" target="_blank" rel="noopener" aria-label="Check the billing period and purchase total">
    <img src="/illustrations/account-purchase-en.svg?v=20261105-3" alt="Check the billing period and purchase total" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

1. Open the [plan store](https://oixcloud.com/user/shop), choose a billing period above the list. Yearly is shown first (if a plan does not offer the selected period, its card shows the one it actually uses), and check its total data allowance, validity, intended use, stock and total price. The monthly equivalent is a price comparison, not monthly billing or a monthly traffic reset.
2. Select **Buy** or **Add Plan**. In **Confirm Purchase**, check the plan, billing period and price. If using a coupon, follow the [code steps](#coupon-use), select **Verify** and check the resulting Total Due. USD is a reference only; confirmation and actual charges use CNY.
3. Read the terms and any plan-specific notices, complete the requested checkbox or typed acknowledgement, then confirm. Follow checkout for any shortfall instead of submitting several orders.
4. Return to **Plan Management** and check **Active** or **Pending**, Time Left and Data Left. Adding a plan does not immediately replace an existing one.

### Check purchased records

<figure class="guide-figure">
  <a href="/illustrations/account-plans-en.svg?v=20261105-3" target="_blank" rel="noopener" aria-label="Check plan status after purchase">
    <img src="/illustrations/account-plans-en.svg?v=20261105-3" alt="Check plan status after purchase" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

Adding funds increases your account balance; buying creates a plan order. A new plan can take effect immediately when you have no current plan. If you already have one, the new plan enters the activation queue. After following the purchase steps above, confirm the active plan here.

### Checkout opened from a plan purchase

When funds are insufficient, the purchase flow can carry the selected plan into checkout. After payment is credited, the system attempts to complete that purchase using account funds. A successful top-up message still requires checking the actual plan record; do not immediately buy again.

Temporary automatic-purchase failures may be retried. If a notice says the automatic purchase failed and retries have stopped, check the balance before buying manually or contacting support. Funds remain in the account after any existing debt is deducted under the top-up rules. A standalone top-up is different from checkout associated with a plan.

### Purchased plans and later store changes

When a purchased record is activated, its saved plan type is applied; regular plans also use the allowance saved on that record. Pay-as-you-go availability is still calculated from balance, commission and the current unit price. Changing the same store product to pay-as-you-go or another type does not turn an existing regular plan into pay-as-you-go. For a new purchase, renewal or upgrade, check the plan and price on that operation's confirmation page.

## Coupon codes {#coupons}

Coupon codes apply to plan purchases, eligible changes/upgrades or application after purchase. They do not top up your balance and are not top-up codes, signup invitation codes or Access Tokens. Enter one code per operation without stacking; preserve its case and verify it for the selected plan, billing period and action.

System codes may restrict dates, plans, billing periods, account eligibility, usage scenes, total uses and per-user uses. A code accepted for a new purchase may not support upgrades or application after purchase. Copy codes you generated from **My Discount Codes** in the [Benefits Center](https://oixcloud.com/user/benefits). Currently these are one-time codes for your own use or a new user with no purchase records. Generating one consumes the displayed benefit credits and cannot be undone; a used code cannot be reused.

### Use a code when buying {#coupon-use}

<figure class="guide-figure">
  <a href="/illustrations/account-coupon-use-en.svg?v=20261105-6" target="_blank" rel="noopener" aria-label="Verify a coupon and check the renewal quote">
    <img src="/illustrations/account-coupon-use-en.svg?v=20261105-6" alt="Verify a coupon and check the renewal quote" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional prices and unusable example code · Click to enlarge</figcaption>
</figure>

1. Select the plan and billing period in the [plan store](https://oixcloud.com/user/shop), open **Confirm Purchase**, enter the **Coupon Code** and select **Verify**.
2. Check verification success, the discount percentage, **One-time coupon** or **Recurring coupon**, Total Due, and the displayed renewal quote or renewal-unavailable message. **20% off means paying 80% of the original price**, not 20%.
3. Verify again after changing the code, plan or period. Verification only quotes the operation: it does not buy a plan, reserve a coupon use or complete payment. Availability is checked again when you submit.
4. Follow the [purchase steps](#purchase) to accept the terms and pay, then check the plan record and balance. A one-time purchase discount does not extend to renewals. A recurring coupon does not turn auto-renewal on by itself.

Final purchase prices follow the displayed rounding rules. Upgrades, application after purchase and recurring renewals use different pricing rules; do not assume the same percentage produces the same result for every action.

### Apply a coupon after purchase {#bind-coupon}

<figure class="guide-figure">
  <a href="/illustrations/account-coupon-bind-en.svg?v=20261105-6" target="_blank" rel="noopener" aria-label="Check the settlement before applying a coupon">
    <img src="/illustrations/account-coupon-bind-en.svg?v=20261105-6" alt="Check the settlement before applying a coupon" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional prices and unusable example code · Click to enlarge</figcaption>
</figure>

**Applying a coupon settles the current period immediately: one-time codes require a balance refund; recurring codes may also charge balance.** **Apply Coupon** normally requires a paid record that is still Active or Pending and is within 7 days of its original purchase. Upgrading does not restart that window. Special converted records are excluded. If a one-use late-application allowance has been granted separately, follow the available button; successful application consumes that allowance.

1. Open [Plan Management](https://oixcloud.com/user/bought), check the original purchase record and select **Apply Coupon** to open **Apply Coupon Code**.
2. Enter a system code eligible for this action, or an unused code you generated yourself, then select **Verify**. Another person's new-user code cannot be applied to an existing purchase.
3. Check **Discounted Price** and **Refund Difference** or **Amount Due**, along with coupon type and renewal quote. Settlement compares the current period's discounted price with the record's prior price, prorated by remaining duration; an active plan does not receive a full-period difference. The discounted price for this action has a 70% floor based on the period's current store price and follows rounding rules, so applying later may differ from using the code at purchase.
4. Accept the settlement and renewal effect before selecting **Apply Coupon** in the dialog. Ensure enough funds for a charge. Verify again if the code or quote changes. A one-time code with no refundable difference is rejected. Reapplying the same recurring code is also rejected when settlement is zero and both prices and saved discount rules are unchanged. Rejection consumes neither a code use nor a one-use late-application allowance.
5. Check the balance, renewal information and code-use status after success. This action does not extend validity, add/reset data or turn on auto-renewal. After a one-time application, the Coupon Code column can remain blank or keep the old recurring code; check the settlement result.

An existing recurring benefit does not need repeated application. A recurring code can still update a changed renewal price or applicable rules with zero settlement. **Cancel if the page still asks for payment to apply a one-time code**: it does not improve renewal benefits.

Unlike a [refund to balance](#refund), applying a coupon settles only the price difference and keeps the plan. Successful application consumes a code use; refunding the plan does not restore a used code.

### Recurring coupons and renewals {#recurring-coupon}

<figure class="guide-figure">
  <a href="/illustrations/account-coupon-recurring-en.svg?v=20261105-6" target="_blank" rel="noopener" aria-label="Check the recurring code and auto-renewal">
    <img src="/illustrations/account-coupon-recurring-en.svg?v=20261105-6" alt="Check the recurring code and auto-renewal" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional prices and unusable example code · Click to enlarge</figcaption>
</figure>

Recurring means the corresponding purchase record can carry the successfully applied benefit forward. **It does not mean unlimited new redemptions, a permanently fixed price or automatic enrollment in auto-renewal.** Follow the [auto-renewal steps](#auto-renew) to select the record and check its switch. Queued plans, expiry, funding and renewal eligibility still follow the usual rules.

| Action | Effect on renewal discounts |
| --- | --- |
| Buy with a one-time code | Discounts this purchase only; renewal uses the regular renewal quote shown at purchase |
| Buy with a recurring code | Saves the applicable benefit and renewal price; a new purchase still starts with auto-renewal off |
| Apply a one-time code after purchase | Requires a refundable difference and preserves the existing renewal price and recurring benefit |
| Apply a recurring code after purchase | Settles the current-period difference and replaces this record's recurring benefit and renewal price; discounts do not stack and the renewal switch keeps its setting |
| Leave the code blank during a change/upgrade | Attempts to inherit the existing recurring benefit, subject to target-plan and period eligibility; follow any refusal message |
| Enter a new code during a change/upgrade | Quotes and sets renewal benefits using that code; a new one-time code does not preserve the old recurring benefit, so check the renewal price before confirming |

Recurring renewal quotes have a floor of 70% of the corresponding period's price, so the discounted first purchase may cost less than a renewal. The current renewal charges the old record's renewal price; after it completes, the new record's next renewal price may be adjusted to the 70% floor based on the plan price at that time. Check that record rather than treating the first quote as a permanent price lock.

Expiry, disabling or exhausted uses affect new redemptions; renewals carrying an already-recorded recurring benefit do not require re-entering the code each period. Renewing the original plan differs from carrying its benefit to another plan. A failed upgrade preview does not itself change the old renewal price. Automatic traffic resets do not receive coupon discounts.

### Verification failures or unexpected amounts

| Message or symptom | Check first |
| --- | --- |
| Not found, not started, expired, disabled or out of uses | Code case, validity and available uses; avoid repeated rapid checks |
| Unsupported plan, period or action | The selected plan and period, and whether this is a purchase, upgrade or application after purchase |
| New-user or account restriction | Purchase history and eligibility; self-generated and shared codes have different conditions |
| No Apply Coupon button | Original purchase time, record state, paid amount and converted-record restrictions; upgrading cannot restart the window |
| No need to apply the code | A one-time code has no refundable difference, or the same recurring code has unchanged prices and rules; do not repeatedly submit |
| Recurring application requires payment or the quote changed | Review the new charge/refund direction, amount and renewal effect; recurring application does not guarantee a refund |
| One-time code applied but renewal price unchanged | Expected: this settles only the current-period difference; a recurring code updates the renewal benefit |

If the result is unclear, check balance, plan records and the message before providing record details and the exact error in a [support ticket](/en/help/support#payment). Do not repeatedly buy or apply codes.

## Sold out and automatic restocking {#stock}

Some plans have limited inventory. “Sold out” means no stock is currently available for a new purchase. **We normally do not replenish these plans manually.** Availability mainly returns when existing plans expire, are refunded or move to another plan; there is no fixed restocking time or quantity.

Stopping renewal does not release stock immediately. Disabling automatic renewal leaves the existing plan usable until expiry. Stock is returned when the plan expires without renewal or an eligible queued replacement, and the system completes termination. If a user buys again in that expired state with no eligible queued plan, the purchase process also retires the old expired active records and returns their stock.

**Each queued or active purchase record, and each replaced one queued after your other plans, holds one unit of stock**, which returns when the record ends or moves to another plan. An original plan that keeps its remaining benefits and goes back to the activation queue, or that has automatic renewal on and becomes awaiting auto-renewal, still holds its unit.

| Operation or state | Inventory effect |
| --- | --- |
| New purchase (including buying ahead) | Deducts one unit of the corresponding plan, including purchases placed in the activation queue |
| Normal automatic renewal | The new period takes over the original record's unit; nothing is deducted or returned. Funding and renewal eligibility still apply |
| Disable automatic renewal | No immediate return; eligible expiry termination or cleanup must follow |
| Queued plan taking over automatically at expiry or when traffic runs out | No second deduction for the queued plan, which was deducted at purchase; the replaced plan ends and returns one unit, or awaits auto-renewal and keeps it if automatic renewal is on |
| Manually activate a queued plan | An original plan that keeps its remaining time and traffic and goes back to the queue still holds its unit; if too little is left, it awaits auto-renewal and keeps its unit when automatic renewal is on, otherwise it ends and returns one unit |
| A plan awaiting auto-renewal renews | The new period takes over its unit; nothing is deducted |
| Upgrade or exchange | Deducts one unit from the destination plan and returns one to the original plan |
| Eligible refund to account balance | Returns one unit |
| Expiry without renewal or an eligible queued replacement, followed by completed termination/cleanup | Returns the corresponding limited stock, including replaced plans queued after the others that did not renew |

A sold-out new-purchase page therefore does not by itself prevent normal automatic renewal for an existing customer. **Buying ahead uses the current new-purchase price and stock checks** and differs from normal automatic renewal. Returning stock does not relist a product that has been taken off sale.

Refresh the store later or choose another available plan. Adding funds, opening checkout or submitting an unpaid order does not reserve plan inventory; stock may change before the purchase completes. Do not repeatedly top up or disable an existing renewal just to wait for stock.

## Plan thresholds and permitted use {#threshold}

Before buying, check the Threshold and personal/team use alongside traffic, validity and speed. The threshold multiplies fair-use scoring bands; it is neither a signed-in-device limit nor permission to share an account. Activity across devices and nodes is combined for the account.

See [Fair use](/en/account/fair-use) for request bands, Working nodes bands, off-peak hours and recovery. A newly purchased plan in the activation queue does not make its limits apply to the current account before activation.

## Renewal and automatic switching

Expiry and running out of traffic before expiry follow different paths. Both give priority to eligible plans in the activation queue. With no eligible queued plan, **automatic renewal is attempted only at expiry; running out of traffic before then can trigger automatic traffic reset, but never an early automatic renewal**.

The flow below applies to accounts eligible for continuation. Blocked accounts and accounts suspended for debt do not continue automatically; their active plan ends at expiry and purchased queued plans are kept.

<div class="plan-flow" role="group" aria-label="What happens when a plan expires or runs out of traffic">
<div class="plan-flow-lane">
<p class="plan-flow-event"><span>Plan expires</span></p>
<div class="plan-flow-step">
<p class="plan-flow-check">Is an eligible plan waiting in the activation queue?</p>
<p class="plan-flow-yes"><span class="plan-flow-label">Yes</span>The first queued plan activates; if the old plan has automatic renewal on, it awaits auto-renewal</p>
</div>
<p class="plan-flow-no"><span class="plan-flow-label">No</span></p>
<div class="plan-flow-step">
<p class="plan-flow-check">Does a plan have automatic renewal on (the current one or one awaiting auto-renewal), and meet renewal eligibility, billing-period and funding requirements?</p>
<p class="plan-flow-yes"><span class="plan-flow-label">Yes</span>That plan's renewal price is charged and its next period starts</p>
</div>
<p class="plan-flow-no"><span class="plan-flow-label">No</span></p>
<p class="plan-flow-end">The plan ends; buy a new one from the store</p>
</div>
<div class="plan-flow-lane">
<p class="plan-flow-event"><span>Traffic runs out before expiry</span></p>
<div class="plan-flow-step">
<p class="plan-flow-check">Is an eligible plan waiting in the activation queue?</p>
<p class="plan-flow-yes"><span class="plan-flow-label">Yes</span>The first queued plan activates and the old plan's remaining time is not kept; if it has automatic renewal on, it awaits auto-renewal</p>
</div>
<p class="plan-flow-no"><span class="plan-flow-label">No</span></p>
<div class="plan-flow-step">
<p class="plan-flow-check">Is automatic traffic reset on for the active record, is this period eligible for reset, is the account allowed to purchase, and does balance (including commission) cover the reset price?</p>
<p class="plan-flow-yes"><span class="plan-flow-label">Yes</span>The reset price is charged; used traffic is cleared and the expiry stays the same</p>
</div>
<p class="plan-flow-no"><span class="plan-flow-label">No</span></p>
<p class="plan-flow-end">Stay at low speed for now, without early automatic renewal; at expiry, follow the expiry flow above</p>
</div>
</div>

Renewing an ordinary plan or resetting traffic requires balance (including commission) to cover the charge. Developer accounts renew developer plans for free.

While at low speed, adding an eligible queued plan causes automatic switching first. With no queued plan, enabling automatic reset or adding sufficient funds resets traffic within about a minute if the period is eligible; you do not have to wait until expiry.

| Operation or stage | Behavior and conditions |
| --- | --- |
| Activation queue | You can reorder plans; when the active plan expires or runs out of traffic, queued plans are tried in that order |
| Automatic renewal | Happens only at expiry when no queued plan is available, and renews the plan that has automatic renewal on; see [Automatic renewal](#auto-renew). Running out of traffic does not trigger an early renewal |
| Automatic traffic reset | Clears used traffic at the reset price when it runs out, without changing the expiry; see [Automatic traffic reset](#traffic-reset) |
| Prepare the next period | Add a plan from the store at the current purchase price, subject to stock. It enters the queue without increasing current traffic. Auto-renewal starts off on the new record; adding it does not change the existing renewal target |

### Automatic renewal {#auto-renew}

<figure class="guide-figure">
  <a href="/illustrations/account-renewal-en.svg?v=20261105-3" target="_blank" rel="noopener" aria-label="Check the renewal target and price">
    <img src="/illustrations/account-renewal-en.svg?v=20261105-3" alt="Check the renewal target and price" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

1. Open [Plan Management](https://oixcloud.com/user/bought), find the record you want to renew after expiry, and select its **Auto-renewal** switch.
2. Check the quoted renewal price and whether another record will have auto-renewal turned off before confirming.
3. Check the saved switch and **Renewal Price**, and ensure balance plus commission covers it before expiry. Turning the switch on does not buy the next period immediately.
4. After expiry is processed, verify the new active record, validity and traffic. An enabled switch alone does not prove renewal succeeded.

There is currently no separate early-renewal action. To prepare another period in advance, add a plan from the store and compare its current purchase price with your existing renewal price; they may differ.

Only one plan has automatic renewal on at a time. The system attempts to renew it only when the active plan expires and no eligible queued plan remains; running out of traffic before expiry does not trigger automatic renewal. New purchases start with automatic renewal off; turn it on in your purchase records when you want it. Turning it on for another purchase record turns it off for the plan that had it.

You can turn automatic renewal on or off at any time. Turning it off does not forfeit the renewal price, and you can turn it back on any time before the plan ends. Turning it on requires the product to support automatic renewal and your account to still meet the plan's purchase requirements.

When a plan with automatic renewal on is replaced by a queued plan, it becomes **Awaiting auto-renewal**: it is no longer in use, it is queued after your other plans, and it keeps its stock unit. When the active plan expires and no eligible queued plan remains, the waiting record renews at its recorded renewal price if renewal eligibility, billing-period and funding requirements are met. Insufficient funds or lost renewal eligibility ends it. If you turn its automatic renewal off, it no longer shows this status and ends when the active plan expires with no eligible queued replacement; turning it back on before then allows renewal if the requirements are met.

For example, A is awaiting auto-renewal, B is active, and no other plan is queued. If B runs out of traffic early, the system first attempts a reset according to B's setting; otherwise B stays at low speed. Renewal of A is attempted only when B expires.

### Automatic traffic reset {#traffic-reset}

<figure class="guide-figure">
  <a href="/illustrations/account-traffic-reset-en.svg?v=20261105-3" target="_blank" rel="noopener" aria-label="Check the cost of each automatic reset">
    <img src="/illustrations/account-traffic-reset-en.svg?v=20261105-3" alt="Check the cost of each automatic reset" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

1. Open [Plan Management](https://oixcloud.com/user/bought) and find **Automatic traffic reset** on the target record. Check the per-reset price beneath it. A pending record's setting applies only after activation.
2. Select the switch and read the confirmation. If traffic has already run out and immediate-processing conditions are met, **Turn on and pay** warns that a charge may follow within about a minute.
3. Afterwards, refresh the user center to verify used traffic is cleared, funds were deducted and the expiry is unchanged. If connections remain slow, wait for node synchronization and reconnect.
4. Turn the switch off to stop future automatic reset charges. This does not turn off auto-renewal or reverse a completed reset charge.

Each purchase record has its own "Automatic traffic reset" switch. It is off by default, and records created by renewal keep the original setting. When it is on, traffic has run out before expiry, no eligible queued plan is available, the period supports reset, the account is allowed to purchase and funds are sufficient, used traffic is cleared at the reset price and the expiry stays the same. The reset price is shown under the switch in the purchase record, and coupon discounts do not apply to it.

If your traffic has already run out when you turn it on, the charge and reset happen within about a minute if the conditions above are met. If insufficient balance including commission is the only obstacle, the plan stays at low speed and resets after you add enough funds. Reset is available at any time before expiry when the conditions are met. A reset close to expiry does not extend validity: at expiry, queued plans still take priority, and automatic renewal is considered only when no eligible queued plan remains. Developer and pay-as-you-go plans do not offer it.

The reset price follows the product's current price for resetting that billing period. If no separate reset price is set, the current store price for that period applies, rather than the record's renewal price. Automatic reset is not a one-time purchase: while enabled, traffic running out again in the same period can cause another charge if the conditions are met. A period with a paid reset earns no expiry benefit credits; see [Benefit credits](#benefit-credits).

## Benefit credits {#benefit-credits}

Annual Pass Gold plans or above, including annual pay-as-you-go plans, earn benefit credits at expiry. Developer accounts are excluded:

| Plan state at expiry | Credits awarded |
| --- | --- |
| Ordinary plan with more than 0 but less than 50% of traffic remaining | 5 |
| Ordinary plan with at least 50% of traffic remaining | 10 |
| Ordinary plan with exhausted traffic | None |
| Pay-as-you-go plan meeting the eligibility requirements above | Fixed 5 |

**Ordinary plans earn no benefit credits once their traffic runs out, even if low-speed access continues until expiry, and plans whose traffic was reset for a fee during the period earn none either.** After renewal or switching, the new plan is assessed separately under the conditions above. Plans ended early, refunded or not yet activated earn no credits.

Check your balance and redemption options in the [Benefits Center](https://oixcloud.com/user/benefits).

## Upgrade or use your next plan early

Quarterly, semiannual and annual plans can be upgraded or changed when eligible; monthly plans cannot. The target must offer the original billing period, which stays the same after the operation. For example, a quarterly plan remains quarterly after an upgrade.

| Current plan state | Upgrade or change conditions |
| --- | --- |
| Active | Only a higher tier is allowed, with at least 60 remaining days as calculated by the system |
| Pending and never used | May be changed when eligible; it remains Pending and does not immediately replace the active plan |
| Previously used, now Pending | Cannot be changed or upgraded directly; activate it first, then check eligibility, after reading the switching loss below |

The target must also meet purchase, stock and funding requirements. Special converted records may not offer this action. Use Plan Management on the full website and follow the buttons and target plans available for that record.

### Upgrade or change a plan {#upgrade}

<figure class="guide-figure">
  <a href="/illustrations/account-upgrade-en.svg?v=20261105-5" target="_blank" rel="noopener" aria-label="Check upgrade cost and remaining data">
    <img src="/illustrations/account-upgrade-en.svg?v=20261105-5" alt="Check upgrade cost and remaining data" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional plan and amounts · Click to enlarge</figcaption>
</figure>

1. Open [Plan Management](https://oixcloud.com/user/bought), check the original record and select **Upgrade** for an active plan or **Change** for a never-used pending plan.
2. In **Change / Upgrade**, select the target and check the billing period. Optionally enter a coupon and select **Verify**. Leaving it blank attempts to inherit the original recurring coupon, which must still apply to the target and period; retention is not unconditional. Before entering a new code, check its [effect on the existing recurring benefit](#recurring-coupon).
3. Wait for the preview and check **Actual payment amount**, the discount and renewal price. For an ordinary-plan upgrade, also check **High-speed data after upgrade** and **Net data change**. Add sufficient funds if needed and review again if the target or amount changes.
4. Accept the charges and data changes below before selecting **Confirm Change / Upgrade**. Afterwards, check the target plan, status, remaining data, expiry and renewal settings on the purchase record. Refresh client account information and the managed profile after changing an active plan.

**An active-plan upgrade does not buy a new full period**: the price difference is prorated by remaining days and includes a fee. The charge cannot be negative; a lower discounted target price does not produce a refund. For an ordinary-to-ordinary upgrade, expiry and used data stay unchanged. Remaining data becomes the target period's allowance minus data already used, with a minimum of zero, rather than the full new allowance. Continued usage can change the final result from the preview. Changes involving pay-as-you-go follow the target's billing rules rather than this ordinary-plan data formula.

**Changing a never-used pending plan** uses the full-period price difference without that active-upgrade fee. A positive difference is charged and a negative difference returns to account balance; the record remains Pending.

The renewal price is recalculated for the target and applicable discount. Auto-renewal stays on only if it was already on and the target supports it; otherwise it is turned off or stays off. Also check whether automatic traffic reset remains available and its per-reset price.

## Manual activation and refunds to balance

Both actions start from a purchase record. Activation immediately switches the active plan; a refund ends the refunded record. Check the record and confirmation first, rather than treating either action as a renewal or top-up.

### Manual activation {#manual-activation}

<figure class="guide-figure">
  <a href="/illustrations/account-activation-en.svg?v=20261105-5" target="_blank" rel="noopener" aria-label="Check the old plan before activating another">
    <img src="/illustrations/account-activation-en.svg?v=20261105-5" alt="Check the old plan before activating another" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional plan and amounts · Click to enlarge</figcaption>
</figure>

**Each manual switch deducts 2 hours from the current active plan**, with saved time rounded down to whole minutes and ordinary-plan data to whole GiB. If enough remains, the old plan becomes Pending. If not, it becomes Awaiting auto-renewal when auto-renewal is on, or ends otherwise. Repeated switches incur the loss again; an ended record cannot be recovered by switching back.

1. Open [Plan Management](https://oixcloud.com/user/bought) and select **Activate** on the pending record you want to use now. Manual activation requires at least 6 hours remaining and usable data; pay-as-you-go plans do not require a stored data allowance.
2. Read **Notice** and check whether the old plan will become Pending, await auto-renewal or end. The illustration shows only the retention case. With no active plan, there is no old plan to replace and no switching loss to deduct.
3. Select **Confirm Switch** to use it now, or **Think Again** to cancel. Activation does not merge the two plans' data or validity; the newly active plan starts counting down its recorded remaining duration at activation.
4. Verify the new **Active** record, the old record's outcome and remaining time/data, then refresh client account information and the managed profile. Activating another plan does not by itself select a different auto-renewal target; change that separately if needed.

A pending plan with less than 6 hours remaining has no manual activation button. If it still has valid time and usable data, it can take over automatically in queue order when the current plan expires or runs out of traffic. Follow any specific refusal message instead of repeatedly buying plans to substitute for activation.

### Refund to balance {#refund}

<figure class="guide-figure">
  <a href="/illustrations/account-refund-en.svg?v=20261105-5" target="_blank" rel="noopener" aria-label="Check the amount before refunding to balance">
    <img src="/illustrations/account-refund-en.svg?v=20261105-5" alt="Check the amount before refunding to balance" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional plan and amounts · Click to enlarge</figcaption>
</figure>

**A refund ends that plan and returns funds only to account balance, not the original payment provider or a withdrawal; used coupon codes are not returned.** Self-service refunds require an eligible unused pending record with a positive refundable paid amount: annual plans and specific quarterly plans that show the button. Not every quarterly plan qualifies; monthly and semiannual plans do not offer this self-service refund. A previously used plan switched back to Pending is not eligible.

1. Find the original record in [Plan Management](https://oixcloud.com/user/bought), check its name, period and **Pending** status, then select **Refund to balance**.
2. In **Please confirm**, check the refund amount and the consequence of ending the plan. The amount follows the record's actual paid value, including previous additional charges or difference refunds, rather than its current store or renewal price.
3. Select **Confirm** to proceed or **Cancel** to keep the plan. If the amount or state changed, refresh the record and check again.
4. Verify account balance and the **Refunded** status. That record can no longer be activated or renewed; refunding it does not end a different plan currently in use.

If the button is missing, check the period, usage history and record state. Do not activate a plan to try to qualify for a refund. If the result is unclear, refresh the balance and records, retain the message and provide details through [payment and plan support](/en/help/support#payment) rather than resubmitting.

## Choose the operation for your goal

| Goal | Operation | Verify afterwards |
| --- | --- | --- |
| Start service | Choose a plan and pay the shortfall if prompted | An active record plus tier, expiry and allowance in the user center |
| Prepare the next period | Add a plan from the store | A queued plan; current traffic does not immediately increase |
| Use the next plan now | Manually activate a queued plan | Read the old plan's deduction/retention preview, then check the newly active record |
| Automatically restore speed when traffic runs out | Turn on automatic traffic reset | Enable in the purchase record and ensure balance covers the reset price |
| Raise an active quarterly, semiannual or annual tier | Upgrade when eligible, keeping the billing period | Price difference, fee, remaining validity and resulting allowance |
| Renew a different plan when the active plan expires with an empty queue | Turn on automatic renewal for that purchase record | The plan that had it is switched off; the confirmation names it |
| Stop automatic renewal charges | Turn off automatic renewal | The purchase record shows it off; you can turn it back on later at the same renewal price |

## Confirm a purchase

After following the [purchase steps](#purchase), check the record's status, time and data in Plan Management. Once active, refresh account information and the managed client profile to update node permissions. Do not buy again merely because a pending plan has not increased the current allowance.

If the payment provider charged you but the page did not confirm success, check both top-up history and plan records first. Keep the order ID and time for support: credited funds and a completed plan purchase are separate states, even when the purchase flow handles them automatically.

## Crypto top-up not credited {#crypto-payment-feedback}

Open the **full [Cashier page](https://oixcloud.com/user/v2/counter)** and scroll below the payment area to **Crypto Order Records**. Find the original order and use **Report missing payment** in its action column. The embedded payment dialog does not show this records section; open the full page if you cannot find it.

<figure class="guide-figure">
  <a href="/illustrations/account-crypto-feedback-en.svg?v=20261105-4" target="_blank" rel="noopener" aria-label="Report a cryptocurrency payment that was not credited">
    <img src="/illustrations/account-crypto-feedback-en.svg?v=20261105-4" alt="Report a cryptocurrency payment that was not credited" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional order and hash placeholder · Click to enlarge</figcaption>
</figure>

1. Check the original order ID, creation time and amount. Do not pay again or delete an order you have already paid. The list shows uncredited orders from the last 48 hours, plus older feedback still being checked, awaiting your confirmation or under manual review; credited orders are checked in [Top-up History](https://oixcloud.com/user/code).
2. Before five minutes have passed, the button says **Awaiting auto credit** and reopens the original payment order. After five minutes, eligible records offer **Report missing payment**. Submit a new request within 48 hours of order creation; existing feedback in progress does not disappear simply because that window ends.
3. In **Missing Credit Feedback**, enter the complete **Transaction Hash**. Use **Issue Description** to add the actual payment time, network and problem if needed, then select **Submit**. TRC20 hashes have 64 hexadecimal characters; Polygon/BSC hashes have 66, including the `0x` prefix. A hash is not an order ID, wallet address or private key. If a hash is already filled in and locked, continue with that request.
4. Follow the resulting status: **Checking automatically** or **Under manual review** means wait without resubmitting; **Awaiting your confirmation** means reopen that action and review the proposed credit amount before confirming; **Check and resubmit** means check the hash and explanation before trying again. **Retry notification** can appear on orders already linked to a transaction. Follow the message rather than creating another order.
5. Confirm the actual credit in top-up history, then check purchase/activation in **Plan Management**. Submission success, review status or an order disappearing from this list alone does not prove crediting or plan activation.

If the entry is unavailable, the initial feedback window has passed or the result remains unclear, provide the original order details and displayed message in a [payment support ticket](/en/help/support#payment). Never provide wallet private keys, seed phrases or verification codes.

## If automatic continuation did not happen

Check the cause of exhaustion to verify the corresponding continuation conditions:

- **At plan expiry**: Check whether an activatable plan exists in the queue first. If there are no queued plans, the plan with automatic renewal on is renewed, which may be the current plan or one awaiting auto-renewal; check that its automatic renewal is on, that balance (including commission) covers its renewal price, and that renewal eligibility and billing-period requirements are met.
- **When traffic runs out**: Check whether an activatable plan exists in the queue first. If there are no queued plans, check whether automatic traffic reset is enabled on the active purchase record, the period supports reset, the account is allowed to purchase, and balance (including commission) covers the reset price. Automatic renewal runs only at expiry and is never triggered prematurely by running out of traffic.

Manual activation, upgrade and refund options appear based on order eligibility; when an option is not offered, do not attempt to simulate it by creating duplicate orders.
