---
description: "Traffic and billing \u2014 setup, practical steps and troubleshooting"
---

# Traffic and billing

## How is traffic counted?

Uploads and downloads both count toward usage, adjusted by the billing multiplier of the nodes your traffic passes through. Raw traffic shown in a client may therefore differ from the allowance deducted from your account. Refer to the node page and account traffic records.

## When does the allowance renew?

Your allowance covers the selected plan period; it does not reset automatically each calendar month. **The plan is exhausted when either its validity ends or its traffic runs out, whichever happens first.** A future expiry date does not mean traffic remains available. Once the traffic runs out, you need to place a new plan order.

When an ordinary plan runs out of traffic, the service first tries already purchased queued plans or automatic renewal according to your settings. Check the result before buying again. If neither provides a replacement, the plan enters a low-speed state and remains subject to its expiry date; low-speed access does not mean the original allowance has been restored. To restore high-speed access, follow [Plans, renewals and switching](/en/account/plans) to complete a purchase and confirm that the new plan is active. Adding funds alone does not add traffic to an ordinary plan.

Ordinary plans earn no benefit credits once their traffic runs out, even if low-speed access continues until expiry. See [Benefit credits](/en/account/plans#benefit-credits) for eligibility and amounts.

## Pay-as-you-go and low-speed mode

Pay-as-you-go is a separate plan type. You must buy the corresponding plan and meet the balance requirement shown on its page; traffic charges come from your account balance first, then from commission for any shortfall. Check the store and account dashboard for plan fees, traffic prices, and speed-limit conditions. An ordinary plan entering low-speed mode does not automatically enable pay-as-you-go. Check your renewal or plan-switching options to restore high-speed access.

Check account records for settled charges and balance changes.

[Open your account](https://oixcloud.com/user)

## Low-speed traffic {#low-speed}

When an ordinary plan exhausts its high-speed allowance without a replacement plan taking effect, these low-speed tiers apply while the plan remains valid. Check your active plan in the [user center](https://oixcloud.com/user) first.

| Active plan | Low-speed rate cap |
| --- | --- |
| Pass Iron, Pass Alu, Pass Bronze | 32&nbsp;KiB/s |
| Pass Silver, Pass Gold | 128&nbsp;KiB/s |
| Pass Platinum, Pass Diamond, Pass Titanium, Developer Licenses, Team License, Enterprise Licenses | 256&nbsp;KiB/s |

`1 KiB/s = 1024 bytes per second`. These are rate caps, not guaranteed download speeds. Uploads and downloads are both limited, and connections belonging to the same account within the same node service share the rate; each device or connection does not receive a separate allowance. Routes, protocols and any lower applicable caps also affect actual throughput.

The following conditions also apply:

- **Abnormal resource use**: severe overuse or sustained abnormal resource consumption may lead to further restrictions. Check the account status and notices.
- **Gaming nodes**: normal use is unavailable in low-speed mode. Restore high-speed traffic first.
- **Pay-as-you-go plans**: the table does not apply. If restricted, meet the current plan's funding requirements and wait for a system check.
- **Concurrent use**: low-speed mode is unsuitable for highly concurrent tasks, and connections may be restricted. Close unnecessary parallel tasks.
- **Validity and permitted use**: unlimited low-speed traffic remains subject to plan expiry and service terms. It does not mean unlimited speed, unlimited connections or permission for sustained abnormal resource use.

To restore high-speed access, confirm that a new plan is active with available traffic, then allow the system and nodes to synchronize. If an existing connection remains slow, disconnect, reconnect and check again. Adding funds alone does not restore an ordinary plan's traffic, and points recovery does not remove the exhausted-allowance restriction.

## Distinguish limits and recovery conditions {#limits}

| Situation | What to check | What restores service |
| --- | --- | --- |
| Low-speed mode after high-speed allowance runs out | Current allowance, expiry, activation queue and automatic renewal | Available traffic on a valid active plan, followed by a system check; adding funds alone does not add traffic to an ordinary plan |
| Insufficient funds on pay-as-you-go | Balance, commission and billing conditions | Sufficient funds and current plan conditions, followed by a check; points alone are not enough |
| Fair-use points cap | Points, activity requests and Working nodes | Normal use raises points above 10, then the system removes this cap |
| Plan expiry or an account restriction/ban | Expiry, account state and notices | Continue the plan or contact support according to the cause; points recovery alone does not restore service |

More than one restriction can apply. Unlimited low-speed traffic remains subject to expiry, request/node resource limits and service terms. It is not unlimited speed or permission for sustained abnormal use. See [Fair use](/en/account/fair-use) for points rules, automated detection and review requests.

## A multiplier example

Suppose a node has a `2×` multiplier and a connection uploads `100 MiB` and downloads `400 MiB`. The charged amount is `1000 MiB`, not just the `400 MiB` download. Instantaneous client speed is not remaining allowance.

These numbers illustrate the calculation only. Check the node page for its actual multiplier and account records for actual charges.

## Investigate unexpected usage

1. Check the active plan, allowance, validity and low-speed status in the user center.
2. Open traffic statistics, locate the growth period and compare the multiplier of the node used then.
3. Inspect client connections for background sync, cloud storage, large downloads or repeated speed tests. Traffic can continue without a browser page open.
4. Pause the identified task and observe new records; one download-speed reading cannot explain billing over an entire period.

Read [plan-switching rules](/en/account/plans) before activating a queued plan merely to see a new allowance. Pay-as-you-go users should also check balance, commission and the product's traffic price.
