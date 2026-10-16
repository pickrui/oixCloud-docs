---
description: "Fair-use scoring, plan thresholds, daytime and off-peak bands, speed limits and recovery"
---

# Fair use

Personal plans are for your own devices and must not be lent, jointly purchased, shared or resold. Team use and participant limits follow the product's stated terms. Activity from all devices on an account is combined; points and restrictions apply to the account.

Fair-use points measure request and node resource use separately from traffic allowance, account balance and benefit credits. Having traffic left does not prevent a resource-use restriction.

## Find your threshold and points {#check}

1. Find the **Threshold** (临界值) of your current purchased plan in the [plan store](https://oixcloud.com/user/shop). This guide calls it `K`.
2. Check your points in the [user center](https://oixcloud.com/user). The initial score is **50**, with a range of **0–50**.
3. Open recent activity in [Account Profile](https://oixcloud.com/user/profile). Compare the time, activity requests and Working nodes; expand the node count to see the nodes reported for that minute.

`K` multiplies the quantity thresholds. It is not a device count, participant count or a direct connection allowance. For `K = 2`, multiply every quantity threshold below by 2; point changes stay the same. Team participant limits are stated separately on the product.

Pay-as-you-go plans and accounts whose threshold is shown as `∞` do not take part in the minute-based point additions and deductions below. Plan conditions, service terms and other resource or account restrictions still apply.

## What is counted and how points change {#calculation}

The system groups node reports by account and minute, normally processing them once a minute. Two quantities are scored separately:

- **Activity requests `C`**: the sum of newly opened connection/request counts in that minute's reports, across the account's devices and nodes. This differs from the current open-connection count in the “Long connections” column, browser tabs or downloaded files.
- **Working nodes `W`**: the number of reports containing a node identifier in that minute, usually reflecting active nodes. Multiple reports from the same node each count, so the value is not necessarily the number of distinct node names or nodes in your client list.

One application can repeatedly open many connections. Automatic speed tests, parallel node use, downloaders and background sync can increase these counts. Use local connection records to find the source; scoring uses the reports received by the platform.

For each minute record included in settlement:

```text
Point change = request point change + Working nodes point change
New points = min(50, max(0, previous points + point change))
```

Add the two changes first, then clamp the result to 0–50. Each quantity selects one band; deductions from earlier bands are not added together. If there is no activity record for the account, that processing round neither adds nor deducts points. Disconnecting completely and waiting therefore does not guarantee recovery.

Reporting, processing and page refreshes can be delayed. The activity page's query window can also differ from a settlement window. One elapsed wall-clock minute does not guarantee a completed settlement, and disconnecting, reconnecting or changing devices does not reset points.

## Request scoring table {#requests}

All times use **Beijing time (UTC+8)**, regardless of your device's time zone.

- Regular hours: **00:00–02:00 and 08:00–24:00**
- Off-peak hours: **02:00–08:00**, including 02:00 but excluding 08:00

| Point change | Regular-hour requests `C` | Off-peak requests `C` |
| --- | --- | --- |
| +1 | `C < 100K` | `C < 300K` |
| −1 | `100K ≤ C < 150K` | `300K ≤ C < 450K` |
| −2 | `150K ≤ C < 200K` | `450K ≤ C < 600K` |
| −3 | `200K ≤ C < 300K` | `600K ≤ C < 900K` |
| −4 | `300K ≤ C < 1000K` | `900K ≤ C < 3000K` |
| −20 | `C ≥ 1000K` | `C ≥ 3000K` |

`100K` means `100 × K`, and similarly for the other thresholds. **Reaching a boundary enters the next band**: during regular hours, `K = 1, C = 100` gives −1 for requests, not +1.

## Working nodes scoring table {#nodes}

| Point change | Regular-hour Working nodes `W` | Off-peak Working nodes `W` |
| --- | --- | --- |
| +1 | `W < 3K` | `W < 6K` |
| −1 | `3K ≤ W < 4K` | `6K ≤ W < 9K` |
| −2 | `4K ≤ W < 5K` | `9K ≤ W < 12K` |
| −5 | `W ≥ 5K` | `W ≥ 12K` |

Do not multiply all regular-hour node thresholds by 3 for off-peak use. Use `6K, 9K, 12K` directly.

## Worked examples {#examples}

Each example uses `K = 1` and the quantities in one settled minute record:

| Situation | Requests | Nodes | Total change |
| --- | --- | --- | --- |
| Regular hours, `C = 80, W = 2` | +1 | +1 | +2, capped at 50 |
| Regular hours, `C = 100, W = 2` | −1 | +1 | 0, unchanged |
| Regular hours, `C = 150, W = 3` | −2 | −1 | −3 |
| Regular hours, `C = 310, W = 5` | −4 | −5 | −9, floored at 0 |
| Off-peak hours, `C = 250, W = 5` | +1 | +1 | +2 |

For example, 4 points with a −9 change becomes 0, not −5. A score of 49 with a +2 change becomes 50.

## Warnings, speed limits and recovery {#recovery}

| Condition | Result |
| --- | --- |
| Points fall from above 20 to 1–20 | A points warning is triggered; remaining in that range does not trigger another warning every minute |
| Points reach 0 | An applicable account receives a **10 Mbps** fair-use cap if its existing limit is unlimited or above 10 Mbps; a lower existing limit is not raised |
| Points rise above 10, meaning at least 11 | After the system checks the account, this 10 Mbps cap is removed and the purchased plan's speed setting is restored; exactly 10 points is insufficient |

When both quantities earn +1, each recorded and settled minute can restore at most 2 points. Starting at 0 takes **6 such settlements** to reach 12 and exceed 10. This is not a guaranteed six-minute wait, and recovery does not require a full score of 50.

Reduce the abnormal requests and unnecessary node use, then observe points during normal light use. A remaining deduction can slow, cancel or reverse recovery. Warnings and limit notifications use the account's configured notification channels; delivery time is not the time the restriction takes effect.

10 Mbps is a rate cap, theoretically about 1.25 MB/s; actual throughput also depends on the route, protocol and other restrictions. Points recovery removes only this cap. It does not automatically resolve exhausted traffic, expiry, insufficient funds or an account ban.

## Evening peak and other limits {#other-limits}

Evening speed adjustments are separate from points and from the early-morning scoring bands. For plans covered by an enabled evening policy, **19:00–24:00 Beijing time** uses these rules:

- For a plan with a speed cap, multiply the plan rate by the configured factor, round down to whole Mbps and use at least 1 Mbps. The default factor is 0.5; enablement, covered plans and the actual factor depend on current service settings.
- For a plan with unlimited speed, the evening target cap is 600 Mbps.
- If the calculated evening target is exactly 10 Mbps, use 11 Mbps.
- Keep a lower existing cap. At midnight, restore rates lowered by this adjustment; intervening plan changes or other restrictions follow their own rules.

The evening adjustment itself does not deduct points. See [Traffic and billing](/en/account/traffic#limits) for exhausted high-speed allowance, pay-as-you-go funding and expiry. Unlimited low-speed traffic does not mean unlimited requests, nodes, validity or permitted uses.

## Violations and account bans {#restrictions}

Sharing, jointly purchasing or reselling a personal account, unauthorized P2P/BitTorrent, sustained abnormal resource use, scanning, attacks and other service-term violations may result in restricted service, suspension or an account ban. **A normal score or a score above the speed-limit threshold does not authorize prohibited activity or guarantee protection from a ban.**

Bans are handled separately from temporary points-based throttling, with no promise of automatic reinstatement. To prevent circumvention, specific ban criteria, detection methods and enforcement details are not public. Contact support if you believe an account decision needs review.

## What to do when restricted {#help}

1. Save the message, time and node. Check points, plan expiry, traffic and funds in the user center to identify the type of restriction.
2. Inspect activity sources in the client. Pause excessive parallel downloads, repeated speed tests, abnormal retries or unnecessary multi-node tasks.
3. Check for an exposed local proxy or leaked subscriptions/tokens. Use [account security](/en/account/security) to address the actual compromised credential.
4. Observe subsequent settled points and account status. If the restriction persists, provide the details in [the support guide](/en/help/support#restrictions).

Do not rotate accounts, share credentials or repeatedly reset parameters to bypass restrictions. Read the [service terms](https://oixcloud.com/tos) and product limits. Multiple people must use a plan that explicitly permits team use.
