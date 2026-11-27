# Upgrade, change or manually activate a plan {#upgrade-or-use-your-next-plan-early}

<span id="升级与提前使用下一份套餐"></span>

Quarterly, semiannual and annual plans can be upgraded or changed when eligible; monthly plans cannot. The target must offer the original billing period, which stays the same after the operation. For example, a quarterly plan remains quarterly after an upgrade.

| Current plan state | Upgrade or change conditions |
| --- | --- |
| Active | Only a higher tier is allowed, with at least 60 remaining days as calculated by the system |
| Pending and never used | May be changed when eligible; it remains Pending and does not immediately replace the active plan |
| Previously used, now Pending | Cannot be changed or upgraded directly; activate it first, then check eligibility, after reading the switching loss below |

The target must also meet purchase, stock and funding requirements. Special converted records may not offer this action. Use Plan Management on the full website and follow the buttons and target plans available for that record.

## Upgrade or change a plan {#upgrade}

New-rule orders with awarded purchase-gift credits cannot use this self-service action; contact support. Historical orders retain their original eligibility.

<figure class="guide-figure">
  <a href="/illustrations/account-upgrade-en.svg?v=20261127-1" target="_blank" rel="noopener" aria-label="Check upgrade cost and remaining data">
    <img src="/illustrations/account-upgrade-en.svg?v=20261127-1" alt="Check upgrade cost and remaining data" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation · Fictional plan and amounts</figcaption>
</figure>

1. Open [Plan Management](https://oixcloud.com/user/bought), check the original record and select **Upgrade** for an active plan or **Change** for a never-used pending plan.
2. In **Change / Upgrade**, select the target and check the billing period. Optionally enter a coupon and select **Verify**. Leaving it blank attempts to inherit the original recurring coupon, which must still apply to the target and period; retention is not unconditional. Before entering a new code, check its [effect on the existing recurring benefit](/en/account/coupons#recurring-coupon).
3. Wait for the preview and check **Actual payment amount**, the discount and renewal price. For an ordinary-plan upgrade, also check **High-speed data after upgrade** and **Net data change**. Add sufficient funds if needed and review again if the target or amount changes.
4. Accept the charges and data changes below before selecting **Confirm Change / Upgrade**. Afterwards, check the target plan, status, remaining data, expiry and renewal settings on the purchase record. Refresh client account information and the managed profile after changing an active plan.

**An active-plan upgrade does not buy a new full period**: the price difference is prorated by remaining days, plus a handling fee of 5% of that difference (rounded up to whole yuan, at least ¥10; a flat ¥400 when upgrading to pay-as-you-go). The charge cannot be negative; a lower discounted target price does not produce a refund. For an ordinary-to-ordinary upgrade, expiry and used data stay unchanged. Remaining data becomes the target period's allowance minus data already used, with a minimum of zero, rather than the full new allowance. Continued usage can change the final result from the preview. Changes involving pay-as-you-go follow the target's billing rules rather than this ordinary-plan data formula.

**Changing a never-used pending plan** uses the full-period price difference without that active-upgrade fee. A positive difference is charged and a negative difference returns to account balance; the record remains Pending.

An upgrade or plan change removes this record from the renewal queue and recalculates its renewal price. To keep renewing it, check the new price and [add the record back](/en/account/renewal#auto-renew). Also check its automatic traffic reset setting and price.

<span id="手动激活与退款至余额"></span>

## Manual activation and refunds to balance

Both actions start from a purchase record. Activation immediately switches the active plan; [a refund to balance](/en/account/refund) ends the refunded record. Check the record and confirmation first, rather than treating either action as a renewal or top-up.

### What happens to my current plan if I activate a pending plan? {#manual-activation}

<figure class="guide-figure">
  <a href="/illustrations/account-activation-en.svg?v=20261105-5" target="_blank" rel="noopener" aria-label="Check the old plan before activating another">
    <img src="/illustrations/account-activation-en.svg?v=20261105-5" alt="Check the old plan before activating another" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional plan and amounts</figcaption>
</figure>

**Each manual switch deducts 2 hours from the current active plan**, with saved time rounded down to whole minutes and ordinary-plan data to whole GiB. If enough remains, the old plan becomes Pending. If not, it becomes Awaiting auto-renewal when auto-renewal is on, or ends otherwise. Repeated switches incur the loss again; an ended record cannot be recovered by switching back. If too little remains to keep the old plan, that period is also assessed for [benefit credits](/en/account/benefit-credits).

1. Open [Plan Management](https://oixcloud.com/user/bought) and select **Activate** on the pending record you want to use now. Manual activation requires at least 6 hours remaining and usable data; pay-as-you-go plans do not require a stored data allowance.
2. Read **Notice** and check whether the old plan will become Pending, await auto-renewal or end. The illustration shows only the retention case. With no active plan, there is no old plan to replace and no switching loss to deduct.
3. Select **Confirm Switch** to use it now, or **Think Again** to cancel. Activation does not merge the two plans' data or validity; the newly active plan starts counting down its recorded remaining duration at activation.
4. Verify the new **Active** record, the old record's outcome and remaining time/data, then refresh client account information and the managed profile. Activating another plan does not by itself select a different auto-renewal target; change that separately if needed.

A pending plan with less than 6 hours remaining has no manual activation button. If it still has valid time and usable data, it can take over automatically in queue order when the current plan expires or runs out of traffic. Follow any specific refusal message instead of repeatedly buying plans to substitute for activation.
