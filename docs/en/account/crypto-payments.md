# Crypto top-ups and missing payments {#crypto-top-up}

Cryptocurrency payments require a transfer to the order's address on its specified network. Matching the asset name alone is insufficient. The illustration uses a fictional USDT order; use the assets and networks actually offered in checkout. USDT orders do not all require the same network.

<figure class="guide-figure">
  <a href="/illustrations/account-crypto-top-up-en.svg?v=20261105-3" target="_blank" rel="noopener" aria-label="Check the crypto order before transferring">
    <img src="/illustrations/account-crypto-top-up-en.svg?v=20261105-3" alt="Check the crypto order before transferring" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation · Fictional data</figcaption>
</figure>

1. Choose an available cryptocurrency method. If the entry specifies a network, use that network. For a multi-asset entry, select the asset and check its displayed network, exchange rate and platform fee.
2. Enter the account top-up amount, check CNY / USD, then select **Create Order**. The account credit and on-chain **Amount to receive** use different units. The pre-order coin estimate is only a preview; transfer the amount on the created order.
3. Check the asset, **network, recipient address, amount to receive and remaining payment time**. Select the same asset and network in your wallet or exchange and copy the current order's address. The address QR code contains only the address; scanning it does not set or verify the network and amount.
4. Follow that order's amount rule. For an exact-amount order, keep every decimal place and do not round. For a minimum-amount order, the received amount must not be less; excess funds are not refunded. Do not assume all channels use the same rule.
5. Check the exchange's withdrawal fee and final received amount. A platform fee differs from exchange/network transfer fees; no platform fee does not mean a free transfer. If the exchange deducts its fee from the withdrawal quantity, use **Withdrawal fee calculator** to add **amount to receive + fee**, then check the exchange's final received amount again.
6. Transfer once within the payment window and retain the transaction hash. Crypto orders currently allow 60 minutes; follow the displayed countdown. If an unpaid order expires, create a new one and do not reuse the old amount or address.
7. Return to checkout for payment monitoring and chain confirmation, then verify the actual credit in [Top-up History](https://oixcloud.com/user/code). Wallet submission, blockchain confirmation and website crediting are separate stages.

**Paid but not automatically credited?** Select **Report missing payment** in **Crypto Order Records** below the payment area on the full Cashier page; see the [entry illustration and steps](#crypto-payment-feedback).

| Status or problem | Action |
| --- | --- |
| Reconnecting | The status query was interrupted, which does not prove payment failure. If already paid, check the original order and top-up history |
| Transaction detected, payment not yet credited | Wait for on-chain confirmation. Do not transfer again or create another order even if the payment window ended. Check history and use [missing-payment feedback](#crypto-payment-feedback) if needed |
| Underpayment, wrong network or late transfer | Keep the original order, hash and receipt for [missing-payment feedback](#crypto-payment-feedback). Do not send an extra transfer or create another order as a workaround |
| Top-up successful | Verify balance and plan records; do not pay again |

After a standalone top-up, complete your purchase in the [plan store](https://oixcloud.com/user/shop). Existing automatic renewal or traffic reset may spend the funds under their rules, so also check [Plan Management](https://oixcloud.com/user/bought).

## Crypto top-up not credited {#crypto-payment-feedback}

Open the **full [Cashier page](https://oixcloud.com/user/v2/counter)** and scroll below the payment area to **Crypto Order Records**. Find the original order and use **Report missing payment** in its action column. The embedded payment dialog does not show this records section; open the full page if you cannot find it.

<figure class="guide-figure">
  <a href="/illustrations/account-crypto-feedback-en.svg?v=20261127-2" target="_blank" rel="noopener" aria-label="Report a cryptocurrency payment that was not credited">
    <img src="/illustrations/account-crypto-feedback-en.svg?v=20261127-2" alt="Report a cryptocurrency payment that was not credited" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Interface simulation · Fictional order and hash placeholder</figcaption>
</figure>

1. Check the original order ID, creation time and amount. Do not pay again or delete an order you have already paid. The list shows uncredited orders from the last 48 hours, plus older feedback still being checked, awaiting your confirmation or under manual review; credited orders are checked in [Top-up History](https://oixcloud.com/user/code).
2. Select **Report missing payment** on the original order to open **Payment verification and support**. You can open it immediately. The submit button counts down until the order is three minutes old. A first request must be submitted within 48 hours of order creation.
3. Copy the complete **Transaction hash (TxID)** from your wallet or exchange. You can add the payment time and network. Select **Verify payment** when the countdown ends. If the hash is filled in and locked, continue with the original transaction.
4. Use **View progress** to check the result. Wait during automatic checks or manual review. If you see **Confirm credit amount**, verify the order and expected credit before accepting. If the feedback was returned, check the hash and use **Edit and resubmit**.
5. Confirm the actual credit in top-up history, then check purchase/activation in **Plan Management**. Submission success, review status or an order disappearing from this list alone does not prove crediting or plan activation.

If the entry is unavailable, the initial feedback window has passed or the result remains unclear, provide the original order details and displayed message in a [payment support ticket](/en/help/support#payment). Never provide wallet private keys, seed phrases or verification codes.
