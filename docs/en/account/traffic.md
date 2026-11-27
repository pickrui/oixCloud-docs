---
description: "Traffic and billing \u2014 setup, practical steps and troubleshooting"
---

# Traffic and billing

## How is traffic counted?

Uploads and downloads both count toward usage, adjusted by the billing multiplier of the nodes your traffic passes through. Raw traffic shown in a client may therefore differ from the allowance deducted from your account. Refer to the node page and account traffic records.

## When does the allowance renew?

Data is allocated for the billing period you selected. If an ordinary plan uses up its high-speed data before expiry, the following happens in order.

1. The next eligible pending plan starts, if you already have one.
2. With no pending plan, [automatic traffic reset](/en/account/renewal#traffic-reset) restores the current allowance if enabled and funds cover the reset price. The expiry date stays the same.
3. Otherwise, [low-speed access](/en/account/low-speed) applies for the rest of the period. A reset held up only by insufficient funds can proceed after a top-up. Check existing purchases before buying another plan. Automatic renewal runs only at expiry.

Ordinary plans earn no benefit credits once their traffic runs out, even if low-speed access continues until expiry. See [Benefit credits](/en/account/benefit-credits) for eligibility and amounts.

## Pay-as-you-go and low-speed mode

Pay-as-you-go is a separate plan type. You must buy the corresponding plan and meet the balance requirement shown on its page; traffic charges come from your account balance first, then from commission for any shortfall. Check the store and account dashboard for plan fees, traffic prices, and usage conditions. An ordinary plan entering low-speed mode does not automatically enable pay-as-you-go. Check your renewal or plan-switching options to restore high-speed access.

Check account records for settled charges and balance changes.

[Open your account](https://oixcloud.com/user)

## A multiplier example

Suppose a node has a `2×` multiplier and a connection uploads `100 MiB` and downloads `400 MiB`. The charged amount is `1000 MiB`, not just the `400 MiB` download. Instantaneous client speed is not remaining allowance.

These numbers illustrate the calculation only. Check the node page for its actual multiplier and account records for actual charges.

## Investigate unexpected usage


<figure class="guide-figure">
  <a href="/illustrations/account-activity-en.svg?v=20261102-3" target="_blank" rel="noopener" aria-label="Find request and node activity">
    <img src="/illustrations/account-activity-en.svg?v=20261102-3" alt="Find request and node activity" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

1. Check the active plan, allowance, validity and low-speed status in the user center.
2. Open traffic statistics, locate the growth period and compare the multiplier of the node used then.
3. Inspect client connections for background sync, cloud storage, large downloads or repeated speed tests. Traffic can continue without a browser page open.
4. Pause the identified task and observe new records; one download-speed reading cannot explain billing over an entire period.

Read [plan-switching rules](/en/account/plan-changes#manual-activation) before activating a queued plan merely to see a new allowance. Pay-as-you-go users should also check balance, commission and the product's traffic price.
