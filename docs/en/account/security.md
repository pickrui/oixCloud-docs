---
description: "Accounts and access tokens \u2014 setup, practical steps and troubleshooting"
---

# Accounts and access tokens

Manage your password, passkeys and two-step verification on the website. For device sessions, tokens or account closure, see the following guides.

- [Sign in to a client or sign out a device](/en/account/client-sign-in)
- [Create or revoke an Access Token](/en/account/access-tokens)
- [Delete your account](/en/account/delete-account#delete-account)

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

If client email/password sign-in is disabled, sign in to clients with Google or a newly created Access Token; see the [sign-in restriction guidance](/en/account/access-tokens#token-only). Also check each leaked item separately; personal subscription URLs and other items still need the actions in the table below.

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

## Match the response to the leak

| Leaked item | Response |
| --- | --- |
| A personal subscription URL | Delete the leaked URL in [Subscription Management](https://oixcloud.com/user/sub_manage). Create a replacement if needed and update its clients. If someone may already have downloaded the node configuration, then reset connection credentials and update all affected devices |
| Main subscription URL or node credentials | In [Subscription Management](https://oixcloud.com/user/sub_manage), find the main subscription, select **Reset** and confirm. Immediately update subscriptions or managed profiles on all devices. The main URL and connection credentials change. Personal URLs can still fetch the new configuration, and signed-in devices and Access Tokens stay valid |
| Access Token | Regenerate or delete the corresponding Access Token on the token page; resetting a subscription cannot replace this step. |
| Unrecognized device sign-in | Follow the link in the [new-device alert](/en/account/client-sign-in#device-approval) and revoke the matching sign-in or Access Token. If you suspect your password was exposed, [change it](#change-password). |
| Sign-in password | Follow [password-change guidance](#change-password) to sign in to clients again and update Access Tokens, the main subscription and Passkeys; changing only a subscription URL is insufficient. |

<figure class="guide-figure">
  <a href="/illustrations/account-subscription-reset-en.svg?v=20261127-1" target="_blank" rel="noopener" aria-label="Reset on the main subscription and Delete on a personal subscription">
    <img src="/illustrations/account-subscription-reset-en.svg?v=20261127-1" alt="Reset on the main subscription and Delete on a personal subscription" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Phone is an example subscription name. Subscription tokens are hidden.</figcaption>
</figure>

Retain necessary error and destination information in support material, but hide subscription-path secrets, tokens, node passwords, certificate private keys and full authentication headers.
