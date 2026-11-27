# Automatic renewal, plan queues and traffic resets {#renewal-and-automatic-switching}

<span id="续费与自动切换"></span>

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
<p class="plan-flow-check">Is there an eligible plan in the renewal queue, with enough funds to renew the first eligible record?</p>
<p class="plan-flow-yes"><span class="plan-flow-label">Yes</span>That record renews at its quoted price and keeps its place in the renewal queue</p>
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
| Automatic renewal | At expiry, once no pending plan can take over, the first eligible record in the [renewal queue](#auto-renew) is tried |
| Automatic traffic reset | Clears used traffic at the reset price when it runs out, without changing the expiry; see [Automatic traffic reset](#traffic-reset) |
| Prepare the next period | Add a plan from the store at the current purchase price, subject to stock. It enters the queue without increasing current traffic. Auto-renewal starts off on the new record; adding it does not change the existing renewal target |

## Automatic renewal {#auto-renew}

<figure class="guide-figure">
  <a href="/illustrations/account-renewal-en.svg?v=20261127-1" target="_blank" rel="noopener" aria-label="Preferred and backup purchases in the renewal queue">
    <img src="/illustrations/account-renewal-en.svg?v=20261127-1" alt="Preferred and backup purchases in the renewal queue" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Two purchases of the same plan with example prices</figcaption>
</figure>

1. Open [Plan Management](https://oixcloud.com/user/bought) and turn on **Renewal queue** for the purchase you want to renew. New purchases start with it off. Purchases with the same plan type, tier, node permissions and billing period can share a queue. New entries go last.
2. In **Renewal queue**, check the **Preferred** record and its price. Drag records, use the up or down arrow key, or select **Sort cheapest first** to sort once at current prices. Select **Remove** to stop renewing one record. Empty the queue to stop all automatic renewals.
3. Keep enough balance, including commission, to cover the price. Joining normally saves immediately. If service has expired, no pending plan can take over and this record becomes the first eligible purchase, the panel asks you to confirm any nonzero charge. It can be collected at the next scheduled check.

**Purchased plans run first.** At expiry, the system skips ineligible records and tries the first eligible renewal. If funds fall short, it does not charge a cheaper backup. A successful renewal keeps its priority and other records wait. Check the new active record for its expiry and data allowance.

A queued renewal displaced by a pending plan shows **Awaiting auto-renewal**. Removing it leaves active service and purchased plans intact. An eligible record can rejoin until it ends. To buy the next period in advance, add a plan from the store at the current purchase price.

## Automatic traffic reset {#traffic-reset}

<figure class="guide-figure">
  <a href="/illustrations/account-traffic-reset-en.svg?v=20261127-1" target="_blank" rel="noopener" aria-label="Check the cost of each automatic reset">
    <img src="/illustrations/account-traffic-reset-en.svg?v=20261127-1" alt="Check the cost of each automatic reset" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional data</figcaption>
</figure>

1. Open [Plan Management](https://oixcloud.com/user/bought) and find **Automatic traffic reset** on the target record. Check the per-reset price beneath it. A pending record's setting applies only after activation.
2. Select the switch and read the confirmation. If traffic has already run out and immediate-processing conditions are met, **Turn on and pay** warns that a charge may follow within about a minute.
3. Afterwards, refresh the user center to verify used traffic is cleared, funds were deducted and the expiry is unchanged. If connections remain slow, wait for node synchronization and reconnect.
4. Turn the switch off to stop future automatic reset charges. This does not turn off auto-renewal or reverse a completed reset charge.

Each purchase record has its own "Automatic traffic reset" switch. It is off by default, and records created by renewal keep the original setting. When it is on, traffic has run out before expiry, no eligible queued plan is available, the period supports reset, the account is allowed to purchase and funds are sufficient, used traffic is cleared at the reset price and the expiry stays the same. The reset price is shown under the switch in the purchase record, and coupon discounts do not apply to it.

If your traffic has already run out when you turn it on, the charge and reset happen within about a minute if the conditions above are met. If insufficient balance including commission is the only obstacle, the plan stays at low speed and resets after you add enough funds. Reset is available at any time before expiry when the conditions are met. A reset close to expiry does not extend validity: at expiry, queued plans still take priority, and automatic renewal is considered only when no eligible queued plan remains. Developer and pay-as-you-go plans do not offer it.

The reset price follows the product's current price for resetting that billing period. If no separate reset price is set, the current store price for that period applies, rather than the record's renewal price. Automatic reset is not a one-time purchase: while enabled, traffic running out again in the same period can cause another charge if the conditions are met. A period with a paid reset earns no expiry benefit credits; see [Benefit credits](/en/account/benefit-credits).

<span id="自动接续没有发生"></span>

## If automatic continuation did not happen

Check the cause of exhaustion to verify the corresponding continuation conditions:

- **At expiry**, check pending plans first. If none can take over, check the preferred renewal record, eligibility, billing period and funds including commission. Insufficient funds for the preferred record do not trigger a backup charge.
- **When traffic runs out**: Check whether an activatable plan exists in the queue first. If there are no queued plans, check whether automatic traffic reset is enabled on the active purchase record, the period supports reset, the account is allowed to purchase, and balance (including commission) covers the reset price. Automatic renewal runs only at expiry and is never triggered prematurely by running out of traffic.

Manual activation, upgrade and refund options appear based on order eligibility; when an option is not offered, do not attempt to simulate it by creating duplicate orders.
