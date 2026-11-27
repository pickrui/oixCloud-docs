---
description: "Contact support with useful details \u2014 setup, practical steps and troubleshooting"
---

# Contact support with useful details

Open [Support Tickets](https://oixcloud.com/user/ticket). If you have an open ticket about the same issue, reply there so support can see what you have already tried.

## What to include

For a connection issue, note the device, OS and client version, then reproduce the problem once. Record the time, node, site or app, and the exact error. For missing nodes, include whether you signed in or imported a subscription, the format and whether the same node appears on the website and in the filter preview. For payments, keep the order reference and time. Redact credentials and personal details in screenshots.

## Before opening a ticket: checks and annual allowance {#ticket-eligibility}

<figure class="guide-figure">
  <a href="/illustrations/account-ticket-en.svg?v=20261127-2" target="_blank" rel="noopener" aria-label="Order reference, top-up and plan status in a payment ticket">
    <img src="/illustrations/account-ticket-en.svg?v=20261127-2" alt="Order reference, top-up and plan status in a payment ticket" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Example payment ticket for a credited top-up with no completed plan purchase</figcaption>
</figure>

1. Choose the issue type. For a payment issue, use the [payment checklist](#payment). For a connection issue, enter your physical location (including province in mainland China), provider, OS, client name and version, and the node you tested.
2. If the node list will not load, choose **Node not listed / unable to load the node list**. For FlClash for oixCloud, include the build number shown in the app if available. If a third-party client fails, try the same account in the [Software Center client](https://oixcloud.com/client) and report the result.
3. In the description, include the time and time zone, what you opened, the exact error and what happened after the checks. If **Related guides** appears as you type, you can open a guide in a new tab and return to your draft. If installation or sign-in failed, give the step where you stopped. Confirm you followed the relevant guide and complete verification when prompted.

After checking the troubleshooting confirmation, wait 30 seconds before submitting. You can open the guide or announcements during the wait. The ticket list opens on active tickets. Use the closed tab to find an earlier case.

| Current plan | Self-created tickets per calendar year |
| --- | --- |
| Pass Silver, Pass Gold | 3 |
| Pass Platinum, Pass Diamond, Pass Titanium, Developer Licenses, Team License, Enterprise Licenses | 5 |
| Other plans or no plan | 2 |

The calendar year follows the site's time zone. Check the remaining count shown for your account. Replies and support-created tickets do not consume this allowance. Continue an unresolved ticket before opening another; replies remain available after the new-ticket allowance is exhausted. Titles allow up to 12 characters and bodies up to 10,000 characters.

## Reply to the AI or ask for a person {#human-support}

Open the ticket and expand the reply box below the latest message. You can add one follow-up after opening a ticket and one more after each public reply from a human agent. AI replies and transfers do not reset this allowance. You can still request human support after using your follow-up.

If the ticket shows **More information needed**, reply in the same ticket with the missing information. For an error screenshot, also type the error message so the AI can use it. If a suggested step fails, say which step you tried and what you saw afterward.

To have a person check a payment, review an account restriction or investigate an unresolved issue, ask for human support in the ticket. After an AI reply, you can also select **Unresolved — I need human support** when the button appears. **Waiting for human support** means the ticket is in the human queue. The AI stops replying to that ticket and the transfer uses no additional ticket allowance.

## Speed limits, points or account restrictions {#restrictions}

First check [Fair use](/en/account/fair-use) and the [limit comparison](/en/account/low-speed#limits). Include:

- The exact restriction message or notice, time and time zone
- Current plan, expiry, remaining traffic and changes in points; also funding status for pay-as-you-go
- Activity requests, Working nodes and node names for that period, plus the applications or tasks running then
- Which abnormal activities you stopped and how points and restrictions changed afterwards

Provide redacted records, not passwords, full subscriptions or access tokens. Automated abnormal-use detection and account protection are active. Specific criteria and detection details are not published, and automatic reinstatement is not promised. If you believe an action is incorrect, explain the actual use and circumstances and request human review.

## Sold-out plans {#stock}

Read [Sold out and automatic restocking](/en/account/plans#stock). Limited plans are normally not replenished manually and have no fixed restocking time. Disabling renewal on an active plan does not release its slot immediately. Normal renewal uses the slot already held. An advance purchase needs new stock. Repeated tickets requesting restocking are unnecessary.

If you have paid but the plan is not active, separately provide the order ID, payment time, funding record and Plan Management state. Credited funds do not mean plan stock was reserved. Do not pay again for the same issue.

## Charged but the top-up is missing or the plan is not active {#payment}

| What you see | What to do |
| --- | --- |
| The checkout failed before you paid | For a fiat payment, [refresh checkout to select a gateway again](/en/account/top-up#fiat-top-up). Before a crypto transfer, check the [asset, network and amount](/en/account/crypto-payments). |
| Your card or other fiat payment was charged, but the top-up is missing | Keep the order and receipt. Reply in the same ticket with the order ID, amount, payment time and time zone so support can check before you pay again. |
| You sent crypto, but the top-up is missing | Use **Report missing payment** under **Crypto Order Records** on the full Cashier page. Enter the original transaction hash. The first request can be submitted from three minutes after order creation until the 48-hour window closes. [Payment feedback steps](/en/account/crypto-payments#crypto-payment-feedback). |
| The top-up is recorded, but the plan is missing | Compare [top-up history](https://oixcloud.com/user/code) with [Plan Management](https://oixcloud.com/user/bought). A standalone top-up adds funds and settles any outstanding debt first. Checkout opened from a plan purchase attempts to complete that order. Wait while it is pending. If you receive **Automatic purchase was not completed** and retries have stopped, check your balance before purchasing or contacting support. |
| The plan is marked **Pending** | If another plan is **Active**, the new purchase is queued and its allowance is available when it starts. You can wait for it to start in order. To switch early, first [check the effect on your active plan](/en/account/plan-changes#manual-activation). |
| The plan is active, but the client still shows the old plan or is missing nodes | Refresh account details and managed nodes in the client. For an imported subscription, update the active profile. If the results still differ, [check the missing node](/en/help/troubleshooting#missing-subscription). |

<figure class="guide-figure">
  <a href="/illustrations/account-plans-en.svg?v=20261127-2" target="_blank" rel="noopener" aria-label="Active and pending plan records and remaining data in Plan Management">
    <img src="/illustrations/account-plans-en.svg?v=20261127-2" alt="Active and pending plan records and remaining data in Plan Management" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Plan A provides the current allowance. Plan B has already been purchased and is queued.</figcaption>
</figure>

Provide the original order ID, payment time and time zone, method, actual amount, top-up and plan states and the exact feedback result. For crypto, include the network and transaction hash. Share necessary details only in a private ticket; never send wallet private keys, seed phrases, login passwords or verification codes.

If your description does not already identify the payment or plan order you want checked, add that detail in the same ticket. Keep the original record while a lookup or manual review is pending. If the feedback entry expired or is missing, say so instead of paying again.

## UHD redemption or extension is still being confirmed {#uhd-redemption-is-still-being-confirmed}

For the steps to redeem, link or extend an account, see [UHD benefits](/en/account/uhd).

Open the Emby card in the [Benefits Center](https://oixcloud.com/user/benefits#emby) and refresh. Keep the original request while it is pending. First-time redemption and extension have different checks.

- If you see **Confirm my UHD account**, enter the UHD password you chose during redemption. If the account was never created, refresh after at least 10 minutes. The panel returns the credits on hold once it verifies the result.
- A failed lookup keeps the request pending. If creation was confirmed but account details are still syncing, waiting more than 10 minutes alone does not make it refundable.
- Redeem again only after the page confirms that the credits were returned. If confirmation keeps failing, provide the redemption time, displayed message and credit changes, with the UHD password and other credentials hidden.

For a pending **extension**, refresh and check the expiry date. If it reached the expected date, the extension succeeded. After at least 10 minutes, a successful check confirming that the extension did not take effect releases the reserved credits. A failed lookup leaves the request pending. Check that the credits were returned before trying again.

Returned benefit credits appear in the Benefits Center.

For an active UHD account, the Emby card in the Benefits Center shows the traffic reset day, simultaneous playback limit and download permission. Refresh the card if any details are missing. Resetting the UHD password signs all players out. Sign in again with the new password.

## Check an account request with an unclear outcome {#account-requests}

| What happened | What to check before contacting support |
| --- | --- |
| You confirmed a reward link but the plan looks unchanged | Check pending plans in Plan Management and the original link’s status before using another gift slot. [Check a claim](/en/account/rewards#claim-self). |
| A commission withdrawal has not arrived | Under **Withdraw Commission → Withdrawal History**, check the status, network and transaction hash before retrying. [Withdrawal steps](/en/account/commission#withdraw). |
| You cannot delete the account | Resolve any unsettled items listed on the deletion page. You also need a code sent to the account email when using a passkey. [Deletion steps and consequences](/en/account/delete-account#delete-account). |

## Copy this template

```text
Device and operating system:
Client name and version:
Time and time zone:
Network (Wi-Fi / mobile / Ethernet):
Node name:
Steps and affected service:
Exact error:
Checks already performed and their results:
```

::: warning Redact before public sharing
Use a [support ticket](https://oixcloud.com/user/ticket) for account issues. Never post passwords, full subscription URLs, access tokens, node credentials or certificate private keys in public GitHub issues.
:::

For a module issue, include its name, source and the result with it enabled versus disabled. Do not publish personal request bodies.
