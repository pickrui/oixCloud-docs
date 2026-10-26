---
description: "Plans, renewals and switching \u2014 setup, practical steps and troubleshooting"
---

# Plans, renewals and switching

::: warning Plans are limited by both time and traffic
Each plan has a validity period and a traffic allowance. **The plan is exhausted when either its validity ends or its traffic runs out, whichever happens first.** If you use all the traffic before the expiry date, you need to place a new plan order; remaining time alone does not let you keep using the original plan's high-speed allowance.

If you have a queued plan or automatic renewal enabled, the continuation rules below apply. Check [Plan Management](https://oixcloud.com/user/bought) first, then place an order in the [plan store](https://oixcloud.com/user/shop) if no replacement has taken effect, to avoid duplicate purchases.
:::

## Add funds, buy, and activate

Adding funds increases your account balance; buying creates a plan order. A new plan can take effect immediately when you have no current plan. If you already have one, the new plan enters the activation queue. Before buying, check the billing period, tier, total traffic, and final price. After payment, open Plan Management to confirm which plan is active.

### Checkout opened from a plan purchase

When funds are insufficient, the purchase flow can carry the selected plan into checkout. After payment is credited, the system attempts to complete that purchase using account funds. A successful top-up message still requires checking the actual plan record; do not immediately buy again.

Temporary automatic-purchase failures may be retried. If a notice says the automatic purchase failed and retries have stopped, check the balance before buying manually or contacting support. Funds remain in the account after any existing debt is deducted under the top-up rules. A standalone top-up is different from checkout associated with a plan.

### Purchased plans and later store changes

When a purchased record is activated, its saved plan type is applied; regular plans also use the allowance saved on that record. Pay-as-you-go availability is still calculated from balance, commission and the current unit price. Changing the same store product to pay-as-you-go or another type does not turn an existing regular plan into pay-as-you-go. For a new purchase, renewal or upgrade, check the plan and price on that operation's confirmation page.

## Sold out and automatic restocking {#stock}

Some plans have limited inventory. “Sold out” means no stock is currently available for a new purchase. **We normally do not replenish these plans manually.** Availability mainly returns when existing plans expire and release stock; there is no fixed restocking time or quantity.

Stopping renewal does not release stock immediately. Disabling automatic renewal leaves the existing plan usable until expiry. Stock is returned when the plan expires without renewal or an eligible queued replacement, and the system completes termination. If a user buys again in that expired state with no eligible queued plan, the purchase process also retires the old expired active records and returns their stock.

**Switching to another plan does not itself return the original plan's stock.** Manual or automatic activation of a queued plan, an upgrade or an exchange does not immediately create a new purchase slot for the old product. Retained benefits also mean the old plan has not simply been released.

| Operation or state | Inventory effect |
| --- | --- |
| New purchase or early renewal | Deducts one unit of the corresponding plan, including purchases placed in the activation queue |
| Normal automatic renewal | Neither deducts again nor returns stock; funding and renewal eligibility still apply |
| Disable automatic renewal | No immediate return; eligible expiry termination or cleanup must follow |
| Activate or switch to an already purchased queued plan | No second deduction and no return of the original plan's stock merely from switching |
| Upgrade or exchange | Deducts stock from the destination plan; original stock is not returned |
| Eligible refund to account balance | Does not return stock |
| Expiry without renewal or an eligible queued replacement, followed by completed termination/cleanup | Returns the corresponding limited stock |

A sold-out new-purchase page therefore does not by itself prevent normal automatic renewal for an existing customer. **Early renewal still checks inventory** and differs from normal automatic renewal. Returning stock does not relist a product that has been taken off sale.

Refresh the store later or choose another available plan. Adding funds, opening checkout or submitting an unpaid order does not reserve plan inventory; stock may change before the purchase completes. Do not repeatedly top up or disable an existing renewal just to wait for stock.

## Plan thresholds and permitted use {#threshold}

Before buying, check the Threshold and personal/team use alongside traffic, validity and speed. The threshold multiplies fair-use scoring bands; it is neither a signed-in-device limit nor permission to share an account. Activity across devices and nodes is combined for the account.

See [Fair use](/en/account/fair-use) for request bands, Working nodes bands, off-peak hours and recovery. A newly purchased plan in the activation queue does not make its limits apply to the current account before activation.

## Renewal and automatic switching

You can reorder queued plans. When the current plan expires or runs out of traffic, queued plans are tried in that order before automatic renewal. Automatic renewal is attempted only when enabled and no queued plan is available. Early renewal pays for the next period and adds a queued plan; it does not immediately add traffic to the current plan. It requires automatic renewal to be enabled and must meet the product, stock, and billing-period conditions shown on the page. Turning off automatic renewal forfeits the renewal price and cannot be undone. Check the confirmation before proceeding.

## Benefit credits {#benefit-credits}

Annual Pass Gold plans or above, including annual pay-as-you-go plans, earn benefit credits at expiry. Developer accounts are excluded:

| Plan state at expiry | Credits awarded |
| --- | --- |
| Ordinary plan with more than 0 but less than 50% of traffic remaining | 5 |
| Ordinary plan with at least 50% of traffic remaining | 10 |
| Ordinary plan with exhausted traffic | None |
| Pay-as-you-go plan meeting the eligibility requirements above | Fixed 5 |

**Ordinary plans earn no benefit credits once their traffic runs out, even if low-speed access continues until expiry.** After renewal or switching, the new plan is assessed separately under the conditions above. Plans ended early, refunded or not yet activated earn no credits.

Check your balance and redemption options in the [Benefits Center](https://oixcloud.com/user/benefits).

## Upgrade or use your next plan early

Upgrades and exchanges currently apply only between annual plans. An active annual plan can only be upgraded to a higher tier and must have at least 60 days remaining. An unused queued annual plan may be exchanged under the conditions shown on the page. Check the preview in Plan Management for eligibility, the price difference, fees, and remaining benefits.

## Manual activation and refunds to balance

Manually switching plans deducts 24 hours from the original plan's validity, then preserves its remaining time and traffic according to the rules. A plan with too little left to preserve ends, and saved traffic is rounded down to whole GiB. Only eligible unused plans that show a refund option can be refunded to account balance. This is not a refund to the original payment method or a withdrawal. Read the confirmation dialog before proceeding.

[Open Plan Management](https://oixcloud.com/user/bought)

## Choose the operation for your goal

| Goal | Operation | Verify afterwards |
| --- | --- | --- |
| Start service | Choose a plan and pay the shortfall if prompted | An active record plus tier, expiry and allowance in the user center |
| Prepare the next period | Buy another plan or use eligible early renewal | A queued plan; current traffic does not immediately increase |
| Use the next plan now | Manually activate a queued plan | Read the old plan's deduction/retention preview, then check the newly active record |
| Raise an active annual tier | Upgrade when eligible | Price difference, fee, remaining validity and resulting allowance |
| Stop automatic renewal charges | Disable automatic renewal | Read the irreversible-disable and renewal-price notice first |

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

Check for an eligible queued plan, the renewal switch, sufficient funds and whether the product currently permits renewal. Activation, upgrade and refund controls depend on order state; creating a new order does not reproduce those operations.
