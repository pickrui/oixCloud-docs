---
description: "Plans, renewals and switching \u2014 setup, practical steps and troubleshooting"
---

# Plans, renewals and switching

::: tip Check Plan Management when data runs out or a plan expires
Open [Plan Management](https://oixcloud.com/user/bought) and check the records. In either case, the next eligible prepaid plan takes priority. If none is queued and an ordinary plan runs out of high-speed data before expiry, its [automatic traffic reset](/en/account/renewal#traffic-reset) settings apply. Without a reset it enters [low-speed mode](/en/account/low-speed). At expiry, the [renewal queue](/en/account/renewal#auto-renew) applies.
:::

## Choose the operation for your goal

| Goal | Operation | Verify afterwards |
| --- | --- | --- |
| Start service | [Choose a plan](#purchase) and pay the shortfall if prompted | An active record plus tier, expiry and allowance in the user center |
| Prepare the next period | [Add a plan from the store](#purchase) | A queued plan; current traffic does not immediately increase |
| Use the next plan now | [Manually activate a queued plan](/en/account/plan-changes#manual-activation) | Read the old plan's deduction/retention preview, then check the newly active record |
| Automatically restore speed when traffic runs out | [Turn on automatic traffic reset](/en/account/renewal#traffic-reset) | Enable in the purchase record and ensure balance covers the reset price |
| Raise an active quarterly, semiannual or annual tier | [Upgrade](/en/account/plan-changes#upgrade) when eligible, keeping the billing period | Price difference, fee, remaining validity and resulting allowance |
| Prefer a different record at renewal | Add the eligible purchase [to the renewal queue](/en/account/renewal#auto-renew) and reorder it | Check the Preferred record and its price |
| Stop all automatic renewal charges | [Remove all renewal records](/en/account/renewal#auto-renew) | The renewal queue is empty. Purchased pending plans still run in order |
| Add funds | [Make a top-up or redeem a code](/en/account/top-up) | Check the top-up record and balance |
| Pay with cryptocurrency | [Check the network and amount](/en/account/crypto-payments) | Report a missing payment from the original order |
| Apply a discount | [Verify or apply a coupon](/en/account/coupons) | Check the amount due and the renewal quote |
| Settle benefit credits | [Check eligibility and the effect of ending the plan early](/en/account/benefit-credits) | Check the credits and which plan takes effect next |
| Return an unused plan | [Request a refund to balance](/en/account/refund) | Check the refunded status and account balance |

## Add funds, buy, and activate

### Choose and confirm a plan {#purchase}

::: warning Purchase-gift orders
New orders that actually receive purchase-gift credits do not support self-service plan changes, upgrades, balance refunds or applying a coupon after purchase. Check the checkout notice and [gift rules](/en/account/rewards#refunds); historical orders keep their original rules.
:::

<figure class="guide-figure">
  <a href="/illustrations/account-purchase-en.svg?v=20261105-3" target="_blank" rel="noopener" aria-label="Check the billing period and purchase total">
    <img src="/illustrations/account-purchase-en.svg?v=20261105-3" alt="Check the billing period and purchase total" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional data</figcaption>
</figure>

1. Open the [plan store](https://oixcloud.com/user/shop), choose a billing period above the list. Yearly is shown first (if a plan does not offer the selected period, its card shows the one it actually uses), and check its total data allowance, validity, intended use, stock and total price. The monthly equivalent is a price comparison, not monthly billing or a monthly traffic reset.
2. Select **Buy** or **Add Plan**. In **Confirm Purchase**, check the plan, billing period and price. If using a coupon, follow the [code steps](/en/account/coupons#coupon-use), select **Verify** and check the resulting Total Due. USD is a reference only; confirmation and actual charges use CNY.
3. Read the terms and any plan-specific notices, complete the requested checkbox or typed acknowledgement, then confirm. Follow checkout for any shortfall instead of submitting several orders.
4. Return to **Plan Management** and check **Active** or **Pending**, Time Left and Data Left. Adding a plan does not immediately replace an existing one.

### Check purchased records

<figure class="guide-figure">
  <a href="/illustrations/account-plans-en.svg?v=20261127-2" target="_blank" rel="noopener" aria-label="Check plan status after purchase">
    <img src="/illustrations/account-plans-en.svg?v=20261127-2" alt="Check plan status after purchase" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

Adding funds increases your account balance; buying creates a plan order. A new plan can take effect immediately when you have no current plan. If you already have one, the new plan enters the activation queue. After following the purchase steps above, confirm the active plan here.

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

## Confirm a purchase

After following the [purchase steps](#purchase), check the record's status, time and data in Plan Management. Once active, refresh account information and the managed client profile to update node permissions. Do not buy again merely because a pending plan has not increased the current allowance.

If the payment provider charged you but the page did not confirm success, check both top-up history and plan records first. Keep the order ID and time for support: credited funds and a completed plan purchase are separate states, even when the purchase flow handles them automatically.
