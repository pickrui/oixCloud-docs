---
description: "Plans, renewals and switching \u2014 setup, practical steps and troubleshooting"
---

# Plans, renewals and switching

::: warning Plans are limited by both time and traffic
Each plan has a validity period and a traffic allowance. **The plan is exhausted when either its validity ends or its traffic runs out, whichever happens first.** If you use all the traffic before the expiry date, you need to place a new plan order; remaining time alone does not let you keep using the original plan's high-speed allowance. You can also turn on automatic traffic reset below.

If you have a queued plan, or have enabled automatic renewal (runs only at expiry) or automatic traffic reset, the continuation rules below apply. Check [Plan Management](https://oixcloud.com/user/bought) first, then place an order in the [plan store](https://oixcloud.com/user/shop) if no replacement has taken effect, to avoid duplicate purchases.
:::

## Add funds, buy, and activate


<figure class="guide-figure">
  <a href="/illustrations/account-plans-en.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="Check plan status after purchase">
    <img src="/illustrations/account-plans-en.svg?v=20261102-3" alt="Check plan status after purchase" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

Adding funds increases your account balance; buying creates a plan order. A new plan can take effect immediately when you have no current plan. If you already have one, the new plan enters the activation queue. Before buying, check the billing period, tier, total traffic, and final price. After payment, open Plan Management to confirm which plan is active.

### Checkout opened from a plan purchase

When funds are insufficient, the purchase flow can carry the selected plan into checkout. After payment is credited, the system attempts to complete that purchase using account funds. A successful top-up message still requires checking the actual plan record; do not immediately buy again.

Temporary automatic-purchase failures may be retried. If a notice says the automatic purchase failed and retries have stopped, check the balance before buying manually or contacting support. Funds remain in the account after any existing debt is deducted under the top-up rules. A standalone top-up is different from checkout associated with a plan.

### Purchased plans and later store changes

When a purchased record is activated, its saved plan type is applied; regular plans also use the allowance saved on that record. Pay-as-you-go availability is still calculated from balance, commission and the current unit price. Changing the same store product to pay-as-you-go or another type does not turn an existing regular plan into pay-as-you-go. For a new purchase, renewal or upgrade, check the plan and price on that operation's confirmation page.

## Sold out and automatic restocking {#stock}

Some plans have limited inventory. “Sold out” means no stock is currently available for a new purchase. **We normally do not replenish these plans manually.** Availability mainly returns when existing plans expire, are refunded or move to another plan; there is no fixed restocking time or quantity.

Stopping renewal does not release stock immediately. Disabling automatic renewal leaves the existing plan usable until expiry. Stock is returned when the plan expires without renewal or an eligible queued replacement, and the system completes termination. If a user buys again in that expired state with no eligible queued plan, the purchase process also retires the old expired active records and returns their stock.

**Each queued or active purchase record, and each replaced one queued after your other plans, holds one unit of stock**, which returns when the record ends or moves to another plan. An original plan that keeps its remaining benefits and goes back to the activation queue, or that has automatic renewal on and becomes awaiting auto-renewal, still holds its unit.

| Operation or state | Inventory effect |
| --- | --- |
| New purchase or early renewal | Deducts one unit of the corresponding plan, including purchases placed in the activation queue |
| Normal automatic renewal | The new period takes over the original record's unit; nothing is deducted or returned. Funding and renewal eligibility still apply |
| Disable automatic renewal | No immediate return; eligible expiry termination or cleanup must follow |
| Queued plan taking over automatically at expiry or when traffic runs out | No second deduction for the queued plan, which was deducted at purchase; the replaced plan ends and returns one unit, or awaits auto-renewal and keeps it if automatic renewal is on |
| Manually activate a queued plan | An original plan that keeps its remaining time and traffic and goes back to the queue still holds its unit; if too little is left, it awaits auto-renewal and keeps its unit when automatic renewal is on, otherwise it ends and returns one unit |
| A plan awaiting auto-renewal renews | The new period takes over its unit; nothing is deducted |
| Upgrade or exchange | Deducts one unit from the destination plan and returns one to the original plan |
| Eligible refund to account balance | Returns one unit |
| Expiry without renewal or an eligible queued replacement, followed by completed termination/cleanup | Returns the corresponding limited stock, including replaced plans queued after the others that did not renew |

A sold-out new-purchase page therefore does not by itself prevent normal automatic renewal for an existing customer. **Early renewal still checks inventory** and differs from normal automatic renewal. Returning stock does not relist a product that has been taken off sale.

Refresh the store later or choose another available plan. Adding funds, opening checkout or submitting an unpaid order does not reserve plan inventory; stock may change before the purchase completes. Do not repeatedly top up or disable an existing renewal just to wait for stock.

## Plan thresholds and permitted use {#threshold}

Before buying, check the Threshold and personal/team use alongside traffic, validity and speed. The threshold multiplies fair-use scoring bands; it is neither a signed-in-device limit nor permission to share an account. Activity across devices and nodes is combined for the account.

See [Fair use](/en/account/fair-use) for request bands, Working nodes bands, off-peak hours and recovery. A newly purchased plan in the activation queue does not make its limits apply to the current account before activation.

## Renewal and automatic switching

When a plan expires or runs out of traffic, the system checks the steps below from top to bottom and continues with the first one that applies.

<div class="plan-flow" role="group" aria-label="What happens when a plan expires or runs out of traffic">
<div class="plan-flow-lane">
<p class="plan-flow-event"><span>Plan expires</span></p>
<div class="plan-flow-step">
<p class="plan-flow-check">Is a plan waiting in the activation queue?</p>
<p class="plan-flow-yes"><span class="plan-flow-label">Yes</span>The first queued plan activates; if the old plan has automatic renewal on, it awaits auto-renewal</p>
</div>
<p class="plan-flow-no"><span class="plan-flow-label">No</span></p>
<div class="plan-flow-step">
<p class="plan-flow-check">Does a plan have automatic renewal on (the current one or one awaiting auto-renewal), with balance (including commission) covering its renewal price?</p>
<p class="plan-flow-yes"><span class="plan-flow-label">Yes</span>That plan's renewal price is charged and its next period starts</p>
</div>
<p class="plan-flow-no"><span class="plan-flow-label">No</span></p>
<p class="plan-flow-end">The plan ends; buy a new one from the store</p>
</div>
<div class="plan-flow-lane">
<p class="plan-flow-event"><span>Traffic runs out before expiry</span></p>
<div class="plan-flow-step">
<p class="plan-flow-check">Is a plan waiting in the activation queue?</p>
<p class="plan-flow-yes"><span class="plan-flow-label">Yes</span>The first queued plan activates and the old plan's remaining time is not kept; if it has automatic renewal on, it awaits auto-renewal</p>
</div>
<p class="plan-flow-no"><span class="plan-flow-label">No</span></p>
<div class="plan-flow-step">
<p class="plan-flow-check">Is automatic traffic reset on for this record, with balance (including commission) covering the reset price?</p>
<p class="plan-flow-yes"><span class="plan-flow-label">Yes</span>The reset price is charged; used traffic is cleared and the expiry stays the same</p>
</div>
<p class="plan-flow-no"><span class="plan-flow-label">No</span></p>
<p class="plan-flow-end">Low speed until expiry, then the plan expires as above. If automatic traffic reset is on, topping up enough for the reset price resets traffic within about a minute</p>
</div>
</div>

| Operation or stage | Behavior and conditions |
| --- | --- |
| Activation queue | You can reorder plans; when the active plan expires or runs out of traffic, queued plans are tried in that order |
| Automatic renewal | Happens only at expiry when no queued plan is available, and renews the plan that has automatic renewal on; see [Automatic renewal](#auto-renew). Running out of traffic does not trigger an early renewal |
| Automatic traffic reset | Clears used traffic at the reset price when it runs out, without changing the expiry; see [Automatic traffic reset](#traffic-reset) |
| Early renewal | Pays for the next period at the current renewal price (the same amount automatic renewal would charge) and adds a queued plan without increasing current traffic; automatic renewal then moves to the new period.<br>Requires automatic renewal to be enabled and the displayed product, stock and billing-period conditions to be met. A discount code applies only if it is cheaper than the current renewal price; developer plans renew automatically at expiry and do not offer early renewal |

### Automatic renewal {#auto-renew}

Only one plan has automatic renewal on at a time, and it is the plan renewed once all your plans are used up. New purchases start with automatic renewal off; turn it on in your purchase records when you want it. Turning it on for another purchase record or renewing early turns it off for the plan that had it.

You can turn automatic renewal on or off at any time. Turning it off does not forfeit the renewal price, and you can turn it back on any time before the plan ends. Turning it on requires the product to support automatic renewal and your account to still meet the plan's purchase requirements.

When a plan with automatic renewal on is replaced by a queued plan, it becomes **Awaiting auto-renewal**: it is no longer in use, it is queued after your other plans, and it keeps its stock unit. When your other plans are used up and expire, it renews automatically for its original renewal price; if the balance including commission is short at that point, it ends. If you turn its automatic renewal off, it no longer shows this status and ends once your other plans are used up; turn it back on before then to renew it.

### Automatic traffic reset {#traffic-reset}

Each purchase record has its own "Automatic traffic reset" switch. It is off by default, and records created by renewal keep the original setting. When it is on and traffic runs out with no queued plan available, used traffic is cleared at the reset price and the expiry stays the same. The reset price is shown under the switch in the purchase record, and coupon discounts do not apply to it.

If your traffic has already run out when you turn it on, you are charged and the traffic is reset within about a minute. If your balance including commission is short, the plan stays at low speed until you top up enough for the reset price. It resets whenever traffic runs out before expiry; if that happens close to expiry, the plan still renews at expiry according to your automatic renewal setting. Developer and pay-as-you-go plans do not offer it.

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

Quarterly, semiannual and annual plans can be upgraded or exchanged when eligible; monthly plans cannot. The target must offer the original billing period, which stays the same after the operation. For example, a quarterly plan remains quarterly after an upgrade.

| Current plan state | Upgrade or exchange conditions |
| --- | --- |
| Active | Only a higher tier is allowed, with at least 60 remaining days as calculated by the system |
| Queued and never used | May be exchanged under the conditions shown on the page |
| Previously used, now queued | Cannot be exchanged or upgraded directly; activate it first, then check upgrade eligibility |

Check the Plan Management preview for the price difference, fees, remaining benefits and eligibility. The target must also meet current purchase, stock and funding requirements.

## Manual activation and refunds to balance

Manually switching plans deducts 2 hours from the original plan's validity, then preserves its remaining time and traffic according to the rules. A plan with too little left to preserve ends (or awaits auto-renewal if automatic renewal is on), and saved traffic is rounded down to whole GiB. A queued plan with less than 6 hours remaining has no activation option; it takes over automatically in queue order when the current plan expires or runs out of traffic. Only eligible unused plans that show a refund option can be refunded to account balance. This is not a refund to the original payment method or a withdrawal. Read the confirmation dialog before proceeding.

[Open Plan Management](https://oixcloud.com/user/bought)

## Choose the operation for your goal

| Goal | Operation | Verify afterwards |
| --- | --- | --- |
| Start service | Choose a plan and pay the shortfall if prompted | An active record plus tier, expiry and allowance in the user center |
| Prepare the next period | Buy another plan or use eligible early renewal | A queued plan; current traffic does not immediately increase |
| Use the next plan now | Manually activate a queued plan | Read the old plan's deduction/retention preview, then check the newly active record |
| Automatically restore speed when traffic runs out | Turn on automatic traffic reset | Enable in the purchase record and ensure balance covers the reset price |
| Raise an active quarterly, semiannual or annual tier | Upgrade when eligible, keeping the billing period | Price difference, fee, remaining validity and resulting allowance |
| Renew a different plan once everything is used up | Turn on automatic renewal for that purchase record | The plan that had it is switched off; the confirmation names it |
| Stop automatic renewal charges | Turn off automatic renewal | The purchase record shows it off; you can turn it back on later at the same renewal price |

## Confirm a purchase

1. Check period, total allowance, tier and price in the [plan store](https://oixcloud.com/user/shop).
2. Verify the charge in the confirmation dialog, then read back the actual order in [Plan Management](https://oixcloud.com/user/bought).
3. If a plan is already active, check whether the new one is queued. Do not buy again merely because the current allowance is unchanged.
4. Once it becomes active, refresh account information and the managed client profile to update node permissions.

If the payment provider charged you but the page did not confirm success, check both funding and plan records first. Keep the order ID and time for support: credited funds and a completed plan purchase are separate states, even when the purchase flow handles them automatically.

## Crypto top-up not credited {#crypto-payment-feedback}

These steps apply to cryptocurrency top-up orders shown in checkout. Follow the order page for other payment methods.

1. Open [Checkout](https://oixcloud.com/user/v2/counter), find the original crypto order, and check its ID, creation time and credit status before paying again.
2. Eligible records offer **Missing Credit Feedback** five minutes after order creation. The entry remains available until 48 hours after creation; use the button shown for that record.
3. Enter the complete transaction hash and describe the actual payment time, network and problem. TRC20 hashes have 64 hexadecimal characters; Polygon/BSC hashes have 66, including the `0x` prefix. A transaction hash is not an order ID, wallet address or private key.
4. Read the lookup result. If asked to confirm the credited amount, a shortfall or a network issue, check the explanation before deciding. Keep the message and contact support if unsure.
5. Confirm credit in the funding records, then check purchase/activation in **Plan Management**. Submission success or a review status does not mean funds were credited or a plan became active.

A missing transaction or mismatched network/recipient may require you to correct the details rather than enter manual review. Do not repeatedly submit the same payment while under review. If the entry is unavailable, its time window has passed or the result remains unclear, provide the original order details in a [payment support ticket](/en/help/support#payment). Do not create duplicate orders to recover an earlier payment, and never provide wallet private keys, seed phrases or verification codes.

## If automatic continuation did not happen

Check the cause of exhaustion to verify the corresponding continuation conditions:

- **At plan expiry**: Check whether an activatable plan exists in the queue first. If there are no queued plans, the plan with automatic renewal on is renewed, which may be the current plan or one awaiting auto-renewal; check that its automatic renewal is on, that account balance covers its renewal price, and that the product currently allows renewal.
- **When traffic runs out**: Check whether an activatable plan exists in the queue first. If there are no queued plans, check whether automatic traffic reset is enabled on that purchase record, and whether balance (including commissions) covers the reset price. Automatic renewal runs only at expiry and is never triggered prematurely by running out of traffic.

Manual activation, upgrade and refund options appear based on order eligibility; when an option is not offered, do not attempt to simulate it by creating duplicate orders.
