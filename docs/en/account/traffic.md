---
description: "Traffic and billing \u2014 setup, practical steps and troubleshooting"
---

# Traffic and billing

## How is traffic counted?

Uploads and downloads both count toward usage, adjusted by the billing multiplier of the nodes your traffic passes through. Raw traffic shown in a client may therefore differ from the allowance deducted from your account. Refer to the node page and account traffic records.

## When does the allowance renew?

Your allowance covers the selected plan period; it does not reset automatically each calendar month. Plan validity and remaining traffic are separate conditions. When an ordinary plan runs out of traffic, the service first tries queued plans or automatic renewal according to your settings. If neither provides a replacement, the plan enters a low-speed state and remains subject to its expiry date.

## Pay-as-you-go and low-speed mode

Pay-as-you-go is a separate plan type. You must buy the corresponding plan and meet the balance requirement shown on its page; traffic charges come from your account balance first, then from commission for any shortfall. Check the store and account dashboard for plan fees, traffic prices, and speed-limit conditions. An ordinary plan entering low-speed mode does not automatically enable pay-as-you-go. Check your renewal or plan-switching options to restore high-speed access.

[Open your account](https://oixcloud.com/user)

## A multiplier example

Suppose a node has a `2×` multiplier and a connection uploads `100 MiB` and downloads `400 MiB`. The charged amount is `1000 MiB`, not just the `400 MiB` download. Instantaneous client speed is not remaining allowance.

These numbers illustrate the calculation only. Check the node page for its actual multiplier and account records for actual charges.

## Investigate unexpected usage

1. Check the active plan, allowance, validity and low-speed status in the user center.
2. Open traffic statistics, locate the growth period and compare the multiplier of the node used then.
3. Inspect client connections for background sync, cloud storage, large downloads or repeated speed tests. Traffic can continue without a browser page open.
4. Pause the identified task and observe new records; one download-speed reading cannot explain billing over an entire period.

Read [plan-switching rules](/en/account/plans) before activating a queued plan merely to see a new allowance. Pay-as-you-go users should also check balance, commission and the product's traffic price.
