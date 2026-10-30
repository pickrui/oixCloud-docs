---
description: "Accounts and access tokens \u2014 setup, practical steps and troubleshooting"
---

# Accounts and access tokens

## Sign-in, sign-out, and Access Tokens

Official clients of the same type on one account reuse the token issued at sign-in. Signing out of a client does not revoke that token on the server. You can revoke it on the website's token page; all devices using it will then need to sign in again. With iCloud account or Apple TV sync enabled, sign-in state may also change through sync. Manually created tokens expire according to the validity period you chose; they differ from the long-lived tokens issued at sign-in.

## First sign-in to a custom client {#first-client-login}

For the first sign-in to each custom client, use email and password or its **Sign in with Google** option, if available, to issue that client's dedicated token. If you already have the corresponding Access Token, paste the token itself, not a subscription URL.

After signing in, find the client under **Issued by client login** on the [Access Token page](https://oixcloud.com/user/token). The same account and client type reuse a token; you do not need to create one per device.

Google sign-in is available in supporting iPhone/iPad versions of oixCloud and FlClash for oixCloud. Apple TV continues to [receive the account from an iPhone](/en/oixcloud/apple-tv). Follow the email/password or token instructions for Helper, OpenClash and oixClash; do not assume they have a Google button.

## Sign in to a client with Google {#google-client-login}

1. Select **Sign in with Google** in the client, then continue in the system authentication window or browser.
2. Choose the Google account matching the email of your existing oixCloud account. This entry signs in existing accounts; it does not register new ones.
3. Complete verification and allow the browser to return to the original client. Use **Return to App** on the completion page if it does not return automatically.
4. Wait for account information and managed nodes before connecting. If the flow expires or return verification fails, start again from the client instead of reopening an old completion page.

Both the client and website must support this flow. If the button is unavailable, use email/password or an Access Token. Never enter your Google password into the oixCloud password field. To obtain an oixCloud password, check Gmail, including spam, for the initial-password email, or use **Forgot password** on the [website sign-in page](https://oixcloud.com/auth/login).

## Disable client email/password sign-in {#token-only}

1. Confirm that the clients you need have a usable token or support Google sign-in.
2. Enable **Disable email/password sign-in for clients** on the [Access Token page](https://oixcloud.com/user/token), and wait for the saved confirmation.
3. Client/API email/password sign-in is then rejected. Existing tokens, website sign-in and supported Google sign-in remain available.

Older pages may label this option **Access Token only**. Its actual scope is email/password sign-in. If a client has no Google option and needs a new token, temporarily disable the restriction on the website, sign in with email/password, then enable it again.

## Refresh a client Access Token {#refresh-client-token}

Refreshing immediately invalidates the old token. Every same-client device sharing it must switch to the new token. The client identity and subscription binding stay the same.

1. Open the [Access Token page](https://oixcloud.com/user/token) and find the intended client under **Issued by client login**.
2. Click **Regenerate** on that entry, review the affected devices, and confirm.
3. Wait for the page to reload, copy the new token, and update every device using it. If your Apple TV account is synced from an iPhone, sync it again.

You can refresh while client email/password sign-in is disabled; there is no need to allow email/password sign-in temporarily. If the request fails or its result is unclear, reload the token page and check the current token before retrying. Manually created tokens do not have this button; delete and recreate them when a replacement is needed.

## Create a manual token {#manual-token}

1. On [Access Token Management](https://oixcloud.com/user/token), choose **New Token**, select its validity, add a recognizable note and check the subscription binding.
2. Submit and wait for success. After the page reloads, find the new entry under **Tokens you created**.
3. An account can retain up to 10 manual tokens. Client sign-in tokens are listed separately and do not use this quota.
4. Read any failure message. If the outcome is unclear, reload the list to see whether a token was created before submitting again.

Manual tokens stop authenticating at expiry and do not renew automatically through use. A subscription URL is not a token. Do not publish token screenshots.

## Telegram binding and daily notifications {#notifications}

1. Open [Account Settings → Basic Account Settings](https://oixcloud.com/user/edit#settings-basic) and check the Telegram card. If unbound, use its binding link and follow the bot's instructions.
2. **No Telegram username set** under **Bound Account** still means the account is bound. You do not need to bind it again just to add a username.
3. Set email and Telegram independently under **Daily Notification Subscription**, then wait for the status text to confirm the state. Telegram notifications are unavailable until the account is bound.
4. If saving fails or is unconfirmed, reload the page to check the actual state before retrying. Do not click repeatedly while a save is pending.

These switches control daily notifications only; they do not establish whether security, payment or service notices are disabled. Confirm you no longer need the Telegram binding before removing it.

## Before changing your password {#change-password}

Before changing your password, confirm you can update the affected devices:

| Affected credential | What changes |
| --- | --- |
| Access Tokens | Account tokens are revoked; affected clients need to sign in again |
| Passkeys | Existing records are cleared, can no longer sign in and must be added again |
| Old main subscription URL | Deleted; clients using it need the new subscription URL |

1. Open [Account Settings → Change Password](https://oixcloud.com/user/edit#settings-password) and enter the current password, new password and confirmation.
2. Confirm you can update the other devices, submit, and wait for success.
3. Sign in to the website again if prompted, obtain new client tokens on the token page, and update devices using the old main subscription URL.
4. Add the Passkeys you still need again. With account sync enabled, check the resulting sign-in state on other devices and Apple TV.

If client email/password sign-in is disabled, follow the [sign-in restriction guidance](#token-only) when obtaining new tokens. Also check each leaked item separately; personal subscription URLs and other items still need the actions in the table below.

## Add and manage Passkeys {#passkey}

A Passkey signs in to the website. It is neither a client Access Token nor a TOTP code.

1. Open [Account Settings → Passkey and Two-step Verification](https://oixcloud.com/user/edit#settings-security) and choose **Add New Passkey**.
2. Enter your current account password. If TOTP is enabled, also enter the authenticator's current six-digit code, then choose **Continue**.
3. Follow the browser's face, fingerprint or PIN verification prompt. Wait for the website's success message and confirm the new entry appears in the list.
4. Rename entries to identify them. Before deleting one, confirm you retain another sign-in method; the deleted Passkey can no longer sign in to this account.

After cancellation or timeout, start again from **Add New Passkey**. Do not reuse a TOTP code already submitted and consumed; wait for a new code. Completing the system prompt alone does not confirm that the website saved the credential. If unsupported, use a browser with Passkey support and check that the page uses HTTPS.

## Enable TOTP two-step verification {#totp}

Once enabled, password sign-in to the website also requires a six-digit code. Follow verification prompts for sensitive actions that request it. A Passkey is a separate sign-in method, not a one-time password.

1. Find **TOTP** on the same settings page. Scan its QR code with your authenticator, or enter the displayed secret manually.
2. Enter the authenticator's six-digit code, submit activation, and wait for confirmation that TOTP is enabled.
3. Keep a secure way to recover your authenticator. The QR code and secret generate login codes; never include them in screenshots, logs or support tickets.

Disabling TOTP also requires a valid code. If verification fails, check device time and the selected account, then try a newly generated code. Follow the stated wait period after too many attempts. If you lost the authenticator and cannot verify, explain the situation in a [support ticket](/en/help/support) instead of repeatedly deleting sign-in credentials.

## Change your sign-in email

1. Open **Change Email** in [Account Settings](https://oixcloud.com/user/edit#settings-email), enter the new address and request a verification code.
2. Read the code in the new inbox, enter it together with your current sign-in password, then submit the change.
3. Confirm the success message and the email shown on your account. Use the new address for later sign-ins.

The security notice uses the contact details from before the change; its email goes to the old address. Contact support immediately if you did not make the change. If too many incorrect-password attempts are reported, wait as instructed before trying again. This action is unavailable when email changes are disabled.

## What should I keep private?

Do not share passwords, Access Tokens, full subscription URLs, node passwords, or certificate private keys. Redact them from screenshots and logs. If a subscription URL leaks, use Reset on the subscription page, then update subscriptions and connection details on every device. This does not revoke Access Tokens; refresh or delete a leaked token separately on the token page.

## When are inactive accounts deleted?

Only accounts without an active plan are eligible for cleanup. If both balance and commission are zero or negative, the account is deleted after 30 days without login activity; if either is positive, the period is 90 days. Signing in on the website or a client, or making authenticated requests while signed in, restarts the clock.

[Open Access Tokens](https://oixcloud.com/user/token)

## Manage and revoke tokens

1. Open the token page and identify the intended client or manual token by its note and source.
2. Distinguish signing out on one device from revoking a server token. Official-client sign-out clears local sign-in state.
3. Delete the relevant token on the website if it leaked or is no longer needed. Same-client devices on the account may share it and will all be affected.
4. Sign in again on devices you still use. Also check the resulting state on devices that sync account information.

Manual tokens have separate expiry dates. Sign-in tokens are not automatically reclaimed merely because of repeated logins. A shared client token does not provide per-device revocation.

## Match the response to the leak

| Leaked item | Response |
| --- | --- |
| A personal subscription URL | Delete or replace that address in Subscription Management and update its clients. |
| Main subscription or connection credentials | Use the page's reset-connection-parameters/main-subscription action, read its impact and update all affected devices. |
| Access Token | Refresh a client-issued token or delete the corresponding token; resetting a subscription cannot replace this step. |
| Sign-in password | Follow [password-change guidance](#change-password) to update tokens, the main subscription and Passkeys; changing only a subscription URL is insufficient. |

Retain necessary error and destination information in support material, but hide subscription-path secrets, tokens, node passwords, certificate private keys and full authentication headers.
