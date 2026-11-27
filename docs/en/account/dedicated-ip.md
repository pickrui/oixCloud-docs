# Use, buy and renew a dedicated IP {#dedicated-ip}

A dedicated IP assigns an exit address exclusively to your account. Normal renewal keeps that address. Dedicated does not mean residential or free of previous history.

Dedicated IP traffic is metered separately and does not count toward your account plan’s data allowance.

::: warning Routing and service guarantees
All dedicated IPs are Edge nodes intended for international networks. We recommend using them as exit nodes. Routes can vary between dedicated IPs. The US BGP route has worked well on China Telecom and China Unicom networks. One speed test reached 540 Mbps. That result is for reference only. Actual speed and connection stability depend on your location, carrier and routing at the time.

- **The service level agreement (SLA)** covers only node uptime. Connectivity to networks in mainland China is outside its scope.
- **Access to AI services** is guaranteed only at delivery. Continued access after delivery is not guaranteed.
:::

## Ways to connect to a dedicated IP {#ip-connection-methods}

Choose whichever option works best for your local network and how you prefer to connect.

- **Direct connection**. Select the dedicated IP node in your client’s node list. Route quality from your network to that node is not guaranteed.
- **Internal relay**. In the user center, open **Traffic Routes → Relay → [Internal relay](/en/account/relay#internal-relay)** and add a path. Choose an entry node and set the dedicated IP as the exit. Save the path, then select the entry node in your client. If traffic must leave through that dedicated IP, keep [direct egress from the entry](/en/account/relay#relay-fallback) off.
- **Proxy chain**. In your client, create a chain with the entry node as the first hop and the dedicated IP as the last hop. Save and select the chain. See the instructions for [oixFlow](/en/oixflow/proxy-chains) or [FlClash for oixCloud](/en/flclash/proxy-chains).

## Practical benefits {#ip-benefits}

| Benefit | Use case |
| --- | --- |
| Consistent exit | Use the same address for daily sign-ins, remote work and business access, with easier checks of access records |
| Less shared-IP interference | Reduce abnormal requests, rate limits and reputation effects caused by other accounts sharing the same IP |
| Easier IP authorization | Register a fixed address with servers or workplace systems that support source-IP allowlists, reducing authorization changes |

## Understanding IP reputation {#ip-reputation}

> The ideal IP does not make a service recognize you as a special user. It gives the service no reason to consider you one.

This is the aim of consistent, normal use, not a promise of equal treatment across platforms. Platforms independently assess the ASN (the network owning the address), location, IP history and usage. A dedicated IP does not guarantee freedom from verification, bans or streaming restrictions, or isolate you from the network's reputation.

## Google locates a dedicated IP in mainland China {#google-ip-location}

This IP is exclusively yours while you hold it. Please use it with care, try to avoid sharing it with others, and turn off location access for Google. If Google shows the wrong region, follow the [Google IP location guide](/en/account/google-ip-location) to turn off device location, check the source shown in Search and submit a correction.

<span id="购买与续费独享-ip"></span>

## Buying and renewing dedicated IPs

On the website, sign in and open [Node list → Exclusive IP](https://oixcloud.com/user/node?node_level=Exclusive).

| Check | Requirement |
| --- | --- |
| Plan eligibility | Buying, renewing and using the IP require an active plan; activate a queued plan first if none is active |
| Independent term | Billed and timed separately; the IP may outlast the plan |
| Start time | A purchase starts when bought; renewal extends from the existing expiry, or from renewal time if expired but not yet reclaimed |
| Purchase and manual-renewal term | At most 12 months per operation; a new purchase must meet the product minimum, while manual renewal starts at one month |
| Billing month | Exactly 30 days; the dialog shows the resulting expiry in UTC+8 |

::: warning Plan expiry does not pause the IP term
When the plan expires, dedicated-IP use pauses and the address stays assigned until its own expiry. Its term keeps running, with no pause or extension. Restore an active plan to resume using an unexpired IP. Once reclaimed, the same address is not guaranteed to be available to buy again.
:::

### Auto-renewal {#ip-auto-renewal}

| Item | Rule |
| --- | --- |
| Attempt window | Within 24 hours before IP expiry |
| Extension | 30 days; the system does not automatically increase billed months |
| Charge conditions | An active plan, enough available funds for rent and any [deposit](#ip-deposit) top-up, and a node providing normal service; rent uses the current product price |
| Conditions not met | Charges pause, the setting stays on, and retries continue until expiry |

::: warning Check the renewal result before expiry
Expand the node card's IP list and enable **Auto Renewal** beside the address. Enabling it does not charge immediately; disabling it leaves the current expiry unchanged. The IP and plan renew separately, with no funds reserved for plan renewal. Check funds and renewal results for both.

After expiry, renewal is attempted once more before reclaim. During node maintenance, renewal charges pause and the address stays visible with a maintenance label. An IP expiring during maintenance is held for up to 14 days, with a notification. Renewal is attempted when the node recovers; the IP is reclaimed if renewal fails or maintenance lasts beyond that grace period.
:::

### Deposit and abuse fees {#ip-deposit}

Some dedicated IP products require a deposit, one per IP, to guarantee that the IP is not abused. The amount appears in the product list and the purchase dialog; click or tap the deposit chip in the product list for details.

| Item | Rule |
| --- | --- |
| Collection | Charged with the rent on a new purchase (except an order of 6 months or more); the dialog's total includes it. If your balance is short, the dialog shows how much to top up |
| Waiver | • **6+ months at once**: Buying or renewing 6 months or more at once needs no deposit for that order, and any deposit already paid stays held.<br>• **12 months cumulative**: Once the same IP has 12 months paid in total (new purchases and manual and automatic renewals all count), no deposit is needed at all—any deposit already paid goes toward the renewal that reaches 12 months, and any amount above the rent returns to your account balance.<br>The renewal dialog shows the months paid so far, the amount applied and what you actually pay |
| Top-up | If verified abuse forfeits the deposit or a product change leaves it below the requirement, the next manual or automatic renewal that does not qualify for a waiver tops it up; the renewal dialog shows the amount |
| Where to see it | Each dedicated IP card in the node list shows its current deposit; reclaimed IPs show the amount awaiting return and the expected date at the top of the node list's Exclusive IP page |
| Return | 14 days after the IP stops being renewed and is reclaimed, any remaining deposit is automatically returned to your account balance, with a notification |
| Minor violation | A verified case of Google identifying a dedicated IP as being in mainland China is a minor violation. If the region is still incorrect 14 days after the IP is reclaimed, part of the deposit may be deducted at our discretion. [Check the location and request a correction](#google-ip-location). |
| Account deletion | The account cannot be deleted until the deposit is returned |

::: tip Returned deposits can only be spent
The deposit returns to your account balance. It cannot be withdrawn or refunded to the original payment method, and can only be spent in the dashboard, such as on plans and renewals.
:::

A dedicated IP may only be used by your own account. Complaints about spam, port scanning, attacks or copyright require verification of abuse during your holding period and responsibility for it; receiving a complaint alone does not justify a charge. For these verified abuse complaints, the whole deposit is forfeited, and later renewals top it up under the rules above. The same incident is not charged twice: if the deposit is forfeited for it, no additional upstream handling fee is charged for that incident. Without a deposit deduction, only a documented upstream handling fee actually incurred is collected, once, from your balance and commission. If this leaves your balance negative, the account may be suspended for arrears until you top up. Notification of the basis and amount is arranged at or promptly after the charge. Submit a [support ticket](/en/help/support) for review and correction of an erroneous deduction. Clause 1.10 of the [Terms of Service](https://oixcloud.com/tos#section-tos-dedicated-ip) is authoritative.

::: warning Avoid complaints
Do not send bulk email, scan ports, run P2P/BitTorrent downloads or access unauthorized systems through a dedicated IP. Complaints are traced by time to the account holding the IP at that moment, and complaints received after the deposit is returned may still lead to additional charges.
:::

[Open your account](https://oixcloud.com/user)

<span id="独享-ip-购买后的检查"></span>

## Verify a dedicated-IP purchase

1. Click **Buy**, choose the months and check the expiry and total. Read the term and [deposit rules](#ip-deposit) before confirming; submission charges immediately and assigns one address.
2. Check the assigned address and expiry, confirm the address is retained in the [subscription filter](/en/account/subscriptions) preview, then refresh the client configuration.
3. Select the IP, establish a new connection and verify the exit in your actual application.

To renew manually: expand the IP list → check the full address → **Renew** → choose the months and confirm the total. A product going off sale does not prevent existing IPs from being used or renewed.

Included services appear as cards on the same page while you hold an unexpired IP for the product. The cards provide addresses, credentials and documentation; do not share credentials publicly.

### Common problems {#ip-troubleshooting}

| Symptom | Check first |
| --- | --- |
| The IP is unexpired but unusable | Check plan eligibility and the expiry note above; restore an active plan and refresh the client configuration |
| Payment outcome is unclear | Refresh the node list and check assigned addresses and expiry dates before making another purchase |
| Google places the dedicated IP in mainland China | Check the location source at the bottom of the search results, then [report the incorrect IP location to Google](#google-ip-location). |
| A service sees another exit despite selecting the dedicated IP | Check the matched policy in connection records, then inspect [relays](/en/account/relay), [WARP and streaming unlock](/en/account/unlock) for changes to the final exit; verify with a new connection |
| CAPTCHAs or access restrictions remain | Record the destination, error, time and actual exit; follow the platform's guidance and avoid high-frequency retries |
