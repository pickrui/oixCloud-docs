---
description: "Accounts and access tokens \u2014 setup, practical steps and troubleshooting"
---

# Accounts and access tokens

## Sign-in, sign-out, and Access Tokens

Official clients can sign in with email/password, Google or an Access Token. Both kinds of sign-in appear on [Access Token Management](https://oixcloud.com/user/token):

| Section | What it lists | Expiry |
| --- | --- | --- |
| Access Tokens | Tokens you create. Paste one into a client to sign in, or use it with third-party clients and scripts. Devices signed in with a token are listed under it | Follows the validity you chose |
| Signed-in clients | Email/password or Google sign-ins. Each row represents one sign-in credential. Ending it signs out every device that uses it | No fixed expiry. Sign-ins unused for 180 days are removed automatically |

Signing out in a client clears its local sign-in state. The credential stays valid on the server. If iCloud account sync or Apple TV sync is enabled, the sign-in state on other devices may also change. To revoke the credential, find the corresponding sign-in or Access Token on the website.

## Sign in to a custom client {#first-client-login}

Sign in directly in the client on each device, using any of these methods:

- Email and password.
- **Sign in with Google**, if the client offers it. See [Sign in to a client with Google](#google-client-login).
- An Access Token: [create one](#manual-token) on the website, then paste it into the client's Access Token field. Enter the token itself, not a subscription URL.

All three methods provide the same features, and the device can load nodes as soon as it signs in. To use the same client on another device, sign in there with email/password or Google, or paste a saved or newly created Access Token. The website never shows client sign-in credentials, so there is no sign-in token to copy.

Google sign-in is available in supported oixFlow versions for iPhone/iPad and in supported versions of FlClash for oixCloud. Apple TV continues to [receive the account from an iPhone](/en/oixflow/apple-tv). Follow the email/password or token instructions for Helper, OpenClash and oixClash; do not assume they have a Google button.

## What to do about a “New device signed in” alert {#device-approval}

Once a client signs in with email/password, Google or an Access Token, the device can load nodes immediately without website approval. If two-step verification is enabled, the website asks for an authenticator code at password sign-in and for some account actions.

The **New device signed in** alert arrives by email and, if linked, Telegram. It names the client, device fingerprint and time. If you do not recognize the device, follow the link in the alert to open the matching entry.

- For email/password or Google, select **Sign out** under **Signed-in clients**. Check which devices share the sign-in before confirming.
- For an Access Token, delete the matching token under **Access Tokens**, or [regenerate it](#refresh-client-token) and update the devices and scripts you still use.

If you suspect your account password was exposed, [change your password](#change-password). This signs out all clients and deletes all Access Tokens.

The former device approval page and the Telegram bot's `/device` command have been removed; old links open **Signed-in clients**. Apple TV still signs in through **Sync to Apple TV** on the iPhone and no longer needs the iPhone to approve it. See [Apple TV sign-in](/en/oixflow/apple-tv#approval).

## Signed-in clients {#signed-in-clients}

Open [Access Token Management → Signed-in clients](https://oixcloud.com/user/token#devices). Sign-ins are grouped by client. Each row shows the device name, sign-in date and, when available, the last use. Devices with separate sign-ins can be signed out individually.

- For example, when oixFlow syncs an iPhone sign-in to Apple TV, the devices share a sign-in credential. Once Apple TV uses it, the iPhone entry shows **Also used by Apple TV**.
- A credential shared by older versions of the same client appears as **Signed in before this update**. Each device gets its own entry after signing in separately with a current client. Devices running OpenClash 0.48.014 or earlier need a plugin update first.
- Devices that use an Access Token are listed under that token in **Access Tokens**.

**End a sign-in**

1. Find the sign-in under its client using the device name and last use.
2. Select **Sign out** on that row and check the devices listed in the confirmation. Confirming immediately revokes the credential and signs out every device that uses it.
3. Sign in again on the devices you still use. For Apple TV, sign in on your iPhone or iPad and [sync the account](/en/oixflow/apple-tv#approval). Devices using the same client continue to share its existing **Subscription Configuration** and node filters.

To sign out every device at once, [change your password](#change-password).

## Sign in to a client with Google {#google-client-login}

1. Select **Sign in with Google** in the client, then continue in the system authentication window or browser.
2. Choose the Google account matching the email of your existing oixCloud account. This entry signs in existing accounts; it does not register new ones.
3. Complete verification and allow the browser to return to the original client. Use **Return to App** on the completion page if it does not return automatically.
4. Wait for account information and managed nodes before connecting. If the flow expires or return verification fails, start again from the client instead of reopening an old completion page.

Both the client and website must support this flow. If the button is unavailable, use email/password or an Access Token. Never enter your Google password into the oixCloud password field. When you sign up with Google, the result page shows the initial password once and the site also tries to email it to you. To obtain an oixCloud password, check Gmail, including spam, for that email. If you cannot find it, reset the password: when signed in, open [Account Settings → Password](https://oixcloud.com/user/edit#settings-password) and select **Forgot current password** under **Current Password** in the form that opens; when signed out, select **Forgot password** on the [website sign-in page](https://oixcloud.com/auth/login). After a reset, all clients must sign in again, the main subscription URL changes, two-step verification is turned off and passkeys are removed.

### Google sign-in troubleshooting {#google-troubleshooting}

| Symptom | Next step |
| --- | --- |
| No button in the client | Check the installed version and release channel. Both client and website must support the flow; maintained source does not establish availability in your stable build |
| Browser does not return | Use **Return to App** on the completion page. Start a new client flow after expiry or failed return verification |
| Email not registered | Choose the Google account matching your existing oixCloud email, or register on the website first |
| Signed in but no nodes | Wait for the managed profile, then check the plan, node filter and sync result |

Do not sign out other devices or regenerate Access Tokens to diagnose a browser return. Neither helps Google sign-in; they only make the affected devices sign in again.

## Disable client email/password sign-in {#token-only}

1. Confirm that the clients you need support Google sign-in, or prepare an [Access Token](#manual-token).
2. On [Access Token Management](https://oixcloud.com/user/token), expand **Client sign-in and security tips**, enable **Disable email/password sign-in for clients**, and wait for the saved confirmation.
3. Client/API email/password sign-in is then rejected. Signed-in devices, existing Access Tokens, website sign-in and supported Google sign-in remain available.

While it is on, sign in to new devices with Google or an Access Token; you do not need to turn the option off for a new device. Older pages may label this option **Access Token only**. Its actual scope is email/password sign-in.

## Create an Access Token {#manual-token}

An Access Token can sign in to a client or authenticate third-party clients and scripts. Its full value is shown only once, so have a safe place ready to store it.

1. On [Access Token Management](https://oixcloud.com/user/token), select **New Token**. Choose the **Token Validity**, add a recognizable note and check the **Subscription Configuration**. The validity defaults to 30 days. For a token used to sign in to clients, choose **No expiry**: devices signed in with it are signed out when it expires.
2. Select **Create Token** and confirm with a passkey or your current sign-in password in the dialog.
3. The dialog shows the full token. Select **Copy**, store it somewhere safe, then select **I have saved it**. This is the only time the full value is shown; afterward the list shows only its last 4 characters.
4. Paste it into the client's Access Token field to sign in. Devices that sign in with it are then listed under the token.

You receive an alert by email and, if linked, Telegram when a token is created. If you did not create it, delete it right away and [change your password](#change-password). If the outcome is unclear, reload the list to see whether a token was created before submitting again. If it was created but you did not see the full value, [regenerate it](#refresh-client-token).

An account can keep up to 10 valid Access Tokens, including tokens with no expiry. Client sign-ins with email/password or Google do not count toward this limit. A token with an expiry date stops authenticating when it expires and does not renew through use; before then, you can select its expiry and change it to no expiry without changing the token. When you delete a token, the confirmation lists the devices signed in with it that must sign in again. A subscription URL is not a token. Do not publish token screenshots.

## Regenerate an Access Token {#refresh-client-token}

<figure class="guide-figure">
  <a href="/illustrations/account-tokens-en.svg?v=20261127-1" target="_blank" rel="noopener" aria-label="Regenerate a token or end a client sign-in">
    <img src="/illustrations/account-tokens-en.svg?v=20261127-1" alt="Regenerate a token or end a client sign-in" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

If a token is lost or may have leaked, regenerate it. The note, expiry and subscription configuration stay the same, and the token gets a new value that is shown once. The old value stops working immediately, so every device and script using it must switch to the new value.

1. Open [Access Token Management](https://oixcloud.com/user/token) and find the token under **Access Tokens** by its note and last 4 characters.
2. Select **Regenerate**, review the impact and confirm with a passkey or your current sign-in password in the dialog.
3. Select **Copy** in the dialog to store the new value, select **I have saved it**, then update the devices and scripts that use the token.

Regenerating also sends an alert by email and, if linked, Telegram. Expired tokens cannot be regenerated; create a new one instead. If the request fails or the result is unclear, reload the page and check the last 4 characters. If they changed but you did not get the full value, regenerate it again. To revoke an email/password or Google sign-in, see [Signed-in clients](#signed-in-clients).

## Telegram binding and daily notifications {#notifications}

1. Open [Account Settings → Notifications and Telegram](https://oixcloud.com/user/edit#settings-telegram). The Telegram card shows **Connected** or **Not connected** next to its title. If not connected, select **Connect Telegram** and follow the bot's instructions; the page reloads once binding is complete. The link is created when you click it, so if it expires, click it again.
2. **No Telegram username set** on a card marked **Connected** still means the account is connected. You do not need to connect it again just to add a username.
3. Set email and Telegram independently on the **Daily notifications** card next to it, then wait for the status text to confirm the state. Telegram notifications are unavailable until the account is connected.
4. If saving fails or is unconfirmed, reload the page to check the actual state before retrying. Do not click repeatedly while a save is pending.

These switches control daily notifications only; they do not establish whether security, payment or service notices are disabled. Disconnecting disables Telegram sign-in, daily notifications, the bot, the user group and the in-Telegram user center—confirm you no longer need the connection before removing it. To disconnect, select **Disconnect** on the Telegram card and confirm with a passkey or your current sign-in password in the dialog.

## Before changing your password {#change-password}

Before changing your password, confirm you can update the affected devices:

| Affected credential | What changes |
| --- | --- |
| Signed-in clients | Every device is signed out and must sign in again in its client |
| Access Tokens | All deleted; devices and scripts using them need a newly created token |
| Passkeys | Existing records are cleared, can no longer sign in and must be added again |
| Old main subscription URL | Deleted; clients using it need the new subscription URL |

1. Open [Account Settings → Password](https://oixcloud.com/user/edit#settings-password); the link opens the change form directly (from the page itself, select **Change** on the **Password** card). Enter the current password, new password and confirmation. If you have forgotten the current password, select **Forgot current password** under that field to reset it by email.
2. Confirm you can update the other devices, submit, and wait for success.
3. Sign in to the website again if prompted and sign in again on the clients you still use. Create new Access Tokens where you need them, and update devices using the old main subscription URL.
4. Add the Passkeys you still need again. With account sync enabled, check the resulting sign-in state on other devices and Apple TV.

If client email/password sign-in is disabled, sign in to clients with Google or a newly created Access Token; see the [sign-in restriction guidance](#token-only). Also check each leaked item separately; personal subscription URLs and other items still need the actions in the table below.

## Add and manage Passkeys {#passkey}

A Passkey signs in to the website. It is neither a client Access Token nor a TOTP code.

1. Open [Account Settings → Sign-in and security](https://oixcloud.com/user/edit#settings-passkey) and choose **Add** on the **Passkeys** card.
2. Enter your current account password. If TOTP is enabled, also enter the authenticator's current six-digit code, then choose **Continue**. If you already have a passkey, you can choose **Verify with an existing passkey** instead, then choose **Continue** once it is verified.
3. Follow the browser's face, fingerprint or PIN verification prompt. Wait for the website's success message and confirm the new entry appears in the list.
4. Rename entries to identify them. Before deleting one, confirm you retain another sign-in method. Deleting requires a passkey or your current sign-in password, and the deleted Passkey can no longer sign in to this account.

After cancellation or timeout, start again from **Add** on the **Passkeys** card. Do not reuse a TOTP code already submitted and consumed; wait for a new code. Completing the system prompt alone does not confirm that the website saved the credential. If unsupported, use a browser with Passkey support and check that the page uses HTTPS.

## Enable TOTP two-step verification {#totp}

Once enabled, password sign-in to the website also requires a six-digit code. Follow verification prompts for sensitive actions that request it. Client sign-in does not ask for the code. A Passkey is a separate sign-in method, not a one-time password.

1. Open [Account Settings → Sign-in and security](https://oixcloud.com/user/edit#settings-totp); the link opens the setup dialog directly (from the page itself, select **Turn on** on the **Two-step verification** card).
2. Follow the steps in the dialog: scan the QR code with your authenticator, or enter the displayed secret manually. To use a different secret, select **Regenerate**; the page reloads and returns to the dialog, and you add the new QR code again.
3. Enter the authenticator's six-digit code, select **Enable two-step verification**, and wait for confirmation that two-step verification is on.
4. Keep a secure way to recover your authenticator. The QR code and secret generate login codes; never include them in screenshots, logs or support tickets.

To disable it, select **Turn off** on the **Two-step verification** card, enter the current six-digit code and select **Continue**, then confirm with a passkey or your current sign-in password in the dialog. If verification fails, check device time and the selected account, then try a newly generated code. Follow the stated wait period after too many attempts. If you lost the authenticator and cannot verify, explain the situation in a [support ticket](/en/help/support) instead of repeatedly deleting sign-in credentials.

## Change your nickname {#nickname}

Open [Account Settings → Profile](https://oixcloud.com/user/edit#settings-nickname); the link opens the change form on the **Nickname** card. Enter the new nickname and confirm. Nicknames use letters and numbers only, up to 12 characters, and must not already be in use.

You can change your own nickname once a year. The first change is available at any time; during the year the card shows the next available date. A failed attempt, such as a nickname already in use, does not use up the change.

## Change your sign-in email

You can change your own email once a year. The first change is available at any time; during the year you cannot request a code and the card shows the next available date. A failed attempt, such as a wrong code or password, does not use up the change. If you need to change it sooner, for example because the old mailbox is gone, explain the situation through a [ticket](/en/help/support).

1. Open [Account Settings → Profile](https://oixcloud.com/user/edit#settings-email); the link opens the change form on the **Email** card. Enter the new address and select **Get code**, or press Enter in the address field.
2. Read the 8-digit code in the new inbox, enter it and choose **Change email** (or press Enter in the code field), then confirm with a passkey or your current sign-in password in the dialog.
3. Confirm the success message. The change ends your current session, so sign in again with the new address, then check the email shown on your account.

The security notice uses the contact details from before the change; its email goes to the old address. Contact support immediately if you did not make the change. This action is unavailable when email changes are disabled.

Incorrect passwords entered when changing your email or password, adding or deleting a passkey, creating or regenerating an Access Token, disconnecting Telegram, turning off two-step verification or deleting the account all count together. After 5 incorrect attempts within 15 minutes, all of these actions ask you to wait before trying again.

## What should I keep private?

Redact passwords, Access Tokens, full subscription URLs, node passwords and certificate private keys from screenshots and logs. If a URL leaks, use the [table below](#match-the-response-to-the-leak) to identify and revoke the affected subscription.

## When are inactive accounts deleted?

Eligible accounts without a valid plan have a 30-day cleanup period when both balance and commission are zero or negative, or 365 days when either is positive. The clock starts from the later of the most recent login activity and plan expiry, so a long absence does not by itself cause deletion on the day a plan expires.

Reminders are sent 7 days, 3 days and 1 day before deletion, and accounts with a balance or commission see the amounts. Once the account is deleted, its balance and commission are removed and cannot be restored.

Website/client sign-ins and authenticated activity can update login activity. Active or valid queued plans, pending withdrawals, payments and other unsettled items can defer cleanup. Banned accounts are not automatically deleted under this inactivity rule. Check account notices and the current state.

## Delete your account {#delete-account}

**Deletion is permanent.** All devices are signed out, subscription URLs and tokens are revoked, and purchase and top-up records can no longer be retrieved. Remaining plans, balance and commission are forfeited without a refund. To revoke a client sign-in, use [Signed-in clients](#signed-in-clients).

1. Open [Account Settings](https://oixcloud.com/user/edit#settings-delete), select **Go to account deletion** and check the email of the account being deleted. Resolve any pending payment, plan, withdrawal, reward or dedicated IP deposit listed on the page. If the account is restricted and still has an active plan, contact support through a ticket.
2. Verify with a passkey, or enter your current password and two-step code if enabled. With either method, select **Send code** and enter the code sent to your account email within 10 minutes.
3. When you are ready to give up the account and its remaining value, acknowledge the consequences and select **Confirm Delete**. Success returns you to the sign-in page.

<figure class="guide-figure">
  <a href="/illustrations/account-delete-account-en.svg?v=20261127-1" target="_blank" rel="noopener" aria-label="Account, email code and acknowledgement on the deletion page">
    <img src="/illustrations/account-delete-account-en.svg?v=20261127-1" alt="Account, email code and acknowledgement on the deletion page" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Example using a passkey for identity verification</figcaption>
</figure>

## Stop a device or token

Open [Access Token Management](https://oixcloud.com/user/token) and find the sign-in or token you want to revoke.

- For email/password or Google, follow the [sign-out steps](#signed-in-clients). Every device sharing the credential must sign in again.
- To disable an Access Token, find it under **Access Tokens**, check the devices listed in the confirmation and delete it. If devices or scripts still need it, [regenerate it](#refresh-client-token) and give them the new value.

## Match the response to the leak

| Leaked item | Response |
| --- | --- |
| A personal subscription URL | Delete the leaked URL in [Subscription Management](https://oixcloud.com/user/sub_manage). Create a replacement if needed and update its clients. If someone may already have downloaded the node configuration, then reset connection credentials and update all affected devices |
| Main subscription URL or node credentials | In [Subscription Management](https://oixcloud.com/user/sub_manage), find the main subscription, select **Reset** and confirm. Immediately update subscriptions or managed profiles on all devices. The main URL and connection credentials change. Personal URLs can still fetch the new configuration, and signed-in devices and Access Tokens stay valid |
| Access Token | Regenerate or delete the corresponding Access Token on the token page; resetting a subscription cannot replace this step. |
| Unrecognized device sign-in | Follow the link in the [new-device alert](#device-approval) and revoke the matching sign-in or Access Token. If you suspect your password was exposed, [change it](#change-password). |
| Sign-in password | Follow [password-change guidance](#change-password) to sign in to clients again and update Access Tokens, the main subscription and Passkeys; changing only a subscription URL is insufficient. |

<figure class="guide-figure">
  <a href="/illustrations/account-subscription-reset-en.svg?v=20261127-1" target="_blank" rel="noopener" aria-label="Reset on the main subscription and Delete on a personal subscription">
    <img src="/illustrations/account-subscription-reset-en.svg?v=20261127-1" alt="Reset on the main subscription and Delete on a personal subscription" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Phone is an example subscription name. Subscription tokens are hidden.</figcaption>
</figure>

Retain necessary error and destination information in support material, but hide subscription-path secrets, tokens, node passwords, certificate private keys and full authentication headers.
