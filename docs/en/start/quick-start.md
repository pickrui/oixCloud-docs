---
description: "Your first connection \u2014 setup, practical steps and troubleshooting"
---

# Your first connection

Get one normal connection working before enabling advanced features.

## Before connecting

1. Sign in to the [User Center](https://oixcloud.com/user). When registering by email, you can leave the nickname blank. Enter an invitation or email verification code if prompted.
2. Open [Plan Management](https://oixcloud.com/user/bought). If a plan is **Active**, continue to your client. If you see only **Pending**, follow the [activation steps](/en/account/plans#manual-activation).
3. For a first purchase or after a standalone top-up, choose a plan and billing period in the [Plan Store](https://oixcloud.com/user/shop) and confirm. If you already paid through a plan’s checkout, the system will try to complete that purchase. [Check the top-up and plan records](/en/help/support#payment) before ordering again.

## First sign-in to a custom client

Check the [system requirements](/en/clients/#requirements), then download the version for your device from the [Software Center](https://oixcloud.com/client) and follow its guide below. Sign in with your email and account password, an Access Token, or **Sign in with Google** if offered, then choose a node. Google sign-in requires an existing account. On Apple TV, [sync the account](/en/oixflow/apple-tv#approval) from a signed-in iPhone or iPad.

To use an Access Token, select **New Token** in [Access Token Management](https://oixcloud.com/user/token). Copy and save the full value when it appears. It is shown once. If password sign-in is disabled for clients, use an Access Token or a supported Google sign-in. Nodes can load as soon as you sign in. See [client sign-in](/en/account/security#first-client-login).

## Choose your device

| Device | Guide |
| --- | --- |
| <span class="platform gi-apple">iPhone / iPad</span> | [<span class="gi gi-oixflow" aria-hidden="true"></span>oixFlow setup](/en/oixflow/connect) |
| <span class="platform gi-apple">Apple TV</span> | [<span class="gi gi-oixflow" aria-hidden="true"></span>Apple TV and sync](/en/oixflow/apple-tv) |
| <span class="platform gi-windows">Windows</span> <span class="platform gi-apple">macOS</span> <span class="platform gi-android">Android</span> <span class="platform gi-linux">Linux</span> | [<span class="gi gi-flclash" aria-hidden="true"></span>FlClash for oixCloud setup](/en/flclash/connect) |
| <span class="platform gi-openwrt">OpenWrt router</span> | [<span class="gi gi-openclash" aria-hidden="true"></span>OpenClash](/en/other/openclash) |
| <span class="platform gi-router">Merlin router</span> | [<span class="gi gi-oixclash" aria-hidden="true"></span>oixClash](/en/other/oixclash) |
| <span class="platform gi-apple">A Mac using Surge</span> | [<span class="gi gi-helper" aria-hidden="true"></span>Surge helper](/en/other/surge) |

## Import a subscription in another client {#import-subscription}

1. With an active plan, open **Subscription addresses** in the [User Center](https://oixcloud.com/user#subscription-details). Find your client, for example **Clash/Stash**.
2. Select **Copy** on that row and paste the full URL into a new remote subscription in your client. If the row offers **Import**, you can open the client directly. Use the separate **Provider** list only when an existing configuration needs a node source.
3. Update and select the imported profile. An ordinary subscription can include Edge, Home ISP and your assigned dedicated IPs, subject to your plan and format. For CIA, IXP, Fusion or GIA included in your plan, sign in to a supported dedicated client.

<figure class="guide-figure">
  <a href="/illustrations/account-dashboard-subscription-en.svg?v=20261127-2" target="_blank" rel="noopener" aria-label="Copy the Clash/Stash subscription URL in the User Center, above the separate Provider list">
    <img src="/illustrations/account-dashboard-subscription-en.svg?v=20261127-2" alt="Copy the Clash/Stash subscription URL in the User Center, above the separate Provider list" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Clash/Stash example with the subscription URL hidden</figcaption>
</figure>

## Verify


<figure class="guide-figure">
  <a href="/illustrations/flclash-connect-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Start from the dashboard">
    <img src="/illustrations/flclash-connect-en.svg?v=20261127-5" alt="Start from the dashboard" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>FlClash for oixCloud desktop example · Follow the relevant guide for other clients</figcaption>
</figure>

Pause other VPNs, keep the default settings, choose an available node and connect. Open the service you intend to use, then check traffic or connection records. A VPN icon or an enabled switch alone does not prove that the destination works.

If it fails, follow [troubleshooting](/en/help/troubleshooting). Avoid changing your node, DNS, routing mode and subscription options all at once.
