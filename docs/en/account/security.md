---
description: "Accounts and access tokens \u2014 setup, practical steps and troubleshooting"
---

# Accounts and access tokens

## Sign-in, sign-out, and Access Tokens

Official clients of the same type on one account reuse the token issued at sign-in. Signing out of a client does not revoke that token on the server. You can revoke it on the website's token page; all devices using it will then need to sign in again. With iCloud account or Apple TV sync enabled, sign-in state may also change through sync. Manually created tokens expire according to the validity period you chose; they differ from the long-lived tokens issued at sign-in.

## What should I keep private?

Do not share passwords, Access Tokens, full subscription URLs, node passwords, or certificate private keys. Redact them from screenshots and logs. If a subscription URL leaks, use Reset on the subscription page, then update subscriptions and connection details on every device. This does not revoke Access Tokens; delete a leaked token separately on the token page.

## When are inactive accounts deleted?

Only accounts without an active plan are eligible for cleanup. If both balance and commission are zero or negative, the account is deleted after 30 days without login activity; if either is positive, the period is 90 days. Signing in on the website or a client, or making authenticated requests while signed in, restarts the clock.

[Open your account](https://oixcloud.com/user)
