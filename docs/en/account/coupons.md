# Coupon codes for purchases and renewals {#coupons}

Coupon codes apply to plan purchases, eligible changes/upgrades or application after purchase. They do not top up your balance and are not top-up codes, signup invitation codes or Access Tokens. Enter one code per operation without stacking; preserve its case and verify it for the selected plan, billing period and action.

System codes may restrict dates, plans, billing periods, account eligibility, usage scenes, total uses and per-user uses. A code accepted for a new purchase may not support upgrades or application after purchase. Copy codes you generated from **My Discount Codes** in the [Benefits Center](https://oixcloud.com/user/benefits). Currently these are one-time codes for your own use or a new user with no purchase records. Generating one consumes the displayed benefit credits and cannot be undone; a used code cannot be reused.

## Use a code when buying {#coupon-use}

<figure class="guide-figure">
  <a href="/illustrations/account-coupon-use-en.svg?v=20261105-6" target="_blank" rel="noopener" aria-label="Verify a coupon and check the renewal quote">
    <img src="/illustrations/account-coupon-use-en.svg?v=20261105-6" alt="Verify a coupon and check the renewal quote" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation · Fictional prices and unusable example code</figcaption>
</figure>

1. Select the plan and billing period in the [plan store](https://oixcloud.com/user/shop), open **Confirm Purchase**, enter the **Coupon Code** and select **Verify**.
2. Check verification success, the discount percentage, **One-time coupon** or **Recurring coupon**, Total Due, and the displayed renewal quote or renewal-unavailable message. **20% off means paying 80% of the original price**, not 20%.
3. Verify again after changing the code, plan or period. Verification only quotes the operation: it does not buy a plan, reserve a coupon use or complete payment. Availability is checked again when you submit.
4. Follow the [purchase steps](/en/account/plans#purchase) to accept the terms and pay, then check the plan record and balance. A one-time purchase discount does not extend to renewals. A recurring coupon does not turn auto-renewal on by itself.

Final purchase prices follow the displayed rounding rules. Upgrades, application after purchase and recurring renewals use different pricing rules; do not assume the same percentage produces the same result for every action.

## Apply a coupon after purchase {#bind-coupon}

<figure class="guide-figure">
  <a href="/illustrations/account-coupon-bind-en.svg?v=20261112-1" target="_blank" rel="noopener" aria-label="Check the settlement before applying a coupon">
    <img src="/illustrations/account-coupon-bind-en.svg?v=20261112-1" alt="Check the settlement before applying a coupon" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional prices and unusable example code</figcaption>
</figure>

**Applying a coupon settles the current period immediately: one-time codes require a balance refund; recurring codes may also charge balance.** **Apply Coupon** normally requires a paid record that is still Active or Pending and is within 3 days of its original purchase. Upgrading does not restart that window. Special converted records are excluded. If a one-use late-application allowance has been granted separately, follow the available button; successful application consumes that allowance.

1. Open [Plan Management](https://oixcloud.com/user/bought), check the original purchase record and select **Apply Coupon** to open **Apply Coupon Code**.
2. Enter a system code eligible for this action, or an unused code you generated yourself, then select **Verify**. Another person's new-user code cannot be applied to an existing purchase.
3. Check **Discounted Price** and **Refund Difference** or **Amount Due**, along with coupon type and renewal quote. Settlement compares the current period's discounted price with the record's prior price, prorated by remaining duration; an active plan does not receive a full-period difference. The discounted price for this action has a 70% floor based on the period's current store price and follows rounding rules, so applying later may differ from using the code at purchase.
4. Accept the settlement and renewal effect before selecting **Apply Coupon** in the dialog. Ensure enough funds for a charge. Verify again if the code or quote changes. A one-time code with no refundable difference is rejected. Reapplying the same recurring code is also rejected when settlement is zero and both prices and saved discount rules are unchanged. Rejection consumes neither a code use nor a one-use late-application allowance.
5. Check the balance, renewal information and code-use status after success. This action does not extend validity, add/reset data or turn on auto-renewal. After a one-time application, the Coupon Code column can remain blank or keep the old recurring code; check the settlement result.

An existing recurring benefit does not need repeated application. A recurring code can still update a changed renewal price or applicable rules with zero settlement. **Cancel if the page still asks for payment to apply a one-time code**: it does not improve renewal benefits.

Unlike a [refund to balance](/en/account/refund), applying a coupon settles only the price difference and keeps the plan. Successful application consumes a code use; refunding the plan does not restore a used code.

New orders with awarded purchase-gift credits cannot apply a coupon after purchase; eligible codes may still be used at checkout. Historical orders retain the original settlement and gift-revocation rules; see [gifts and original-order refunds](/en/account/rewards#refunds).

## Recurring coupons and renewals {#recurring-coupon}

<figure class="guide-figure">
  <a href="/illustrations/account-coupon-recurring-en.svg?v=20261127-1" target="_blank" rel="noopener" aria-label="Check the recurring code and auto-renewal">
    <img src="/illustrations/account-coupon-recurring-en.svg?v=20261127-1" alt="Check the recurring code and auto-renewal" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional prices and unusable example code</figcaption>
</figure>

Recurring means the corresponding purchase record can carry the successfully applied benefit forward. **It does not mean unlimited new redemptions, a permanently fixed price or automatic enrollment in auto-renewal.** Follow the [auto-renewal steps](/en/account/renewal#auto-renew) to select the record and check its switch. Queued plans, expiry, funding and renewal eligibility still follow the usual rules.

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

<span id="验证失败或金额不符"></span>

## Verification failures or unexpected amounts

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
