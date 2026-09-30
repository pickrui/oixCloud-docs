---
description: "Accounts and access tokens \u2014 setup, practical steps and troubleshooting"
---

# Accounts and access tokens

## Sign-in, sign-out, and Access Tokens

Official clients of the same type on one account reuse the token issued at sign-in. Signing out of a client does not revoke that token on the server. You can revoke it on the website's token page; all devices using it will then need to sign in again. With iCloud account or Apple TV sync enabled, sign-in state may also change through sync. Manually created tokens expire according to the validity period you chose; they differ from the long-lived tokens issued at sign-in.

## Change your sign-in email

1. Open **Change Email** in [Account Settings](https://oixcloud.com/user/edit#settings-email), enter the new address and request a verification code.
2. Read the code in the new inbox, enter it together with your current sign-in password, then submit the change.
3. Confirm the success message and the email shown on your account. Use the new address for later sign-ins.

The security notice uses the contact details from before the change; its email goes to the old address. Contact support immediately if you did not make the change. If too many incorrect-password attempts are reported, wait as instructed before trying again. This action is unavailable when email changes are disabled.

## What should I keep private?

Do not share passwords, Access Tokens, full subscription URLs, node passwords, or certificate private keys. Redact them from screenshots and logs. If a subscription URL leaks, use Reset on the subscription page, then update subscriptions and connection details on every device. This does not revoke Access Tokens; delete a leaked token separately on the token page.

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
| Access Token | Delete the corresponding token; resetting a subscription cannot replace this step. |
| Sign-in password | Change it and recheck sign-in/token state; changing only a subscription URL is insufficient. |

Retain necessary error and destination information in support material, but hide subscription-path secrets, tokens, node passwords, certificate private keys and full authentication headers.
