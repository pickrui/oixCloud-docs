# Sign in to a client and sign out devices {#client-sign-in}

<span id="登录、退出与访问令牌"></span>

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
- An Access Token: [create one](/en/account/access-tokens#manual-token) on the website, then paste it into the client's Access Token field. Enter the token itself, not a subscription URL.

All three methods provide the same features, and the device can load nodes as soon as it signs in. To use the same client on another device, sign in there with email/password or Google, or paste a saved or newly created Access Token. The website never shows client sign-in credentials, so there is no sign-in token to copy.

Maintained versions of oixFlow for iPhone/iPad, FlClash for oixCloud, macOS Helper, OpenClash with account integration and oixClash for Merlin offer Google sign-in. Apple TV [receives the account from an iPhone or iPad](/en/oixflow/apple-tv#approval). Linux Helper reads credentials from its [configuration file](/en/other/helper-linux).

## What to do about a “New device signed in” alert {#device-approval}

Once a client signs in with email/password, Google or an Access Token, the device can load nodes immediately without website approval. If two-step verification is enabled, the website asks for an authenticator code at password sign-in and for some account actions.

The **New device signed in** alert arrives by email and, if linked, Telegram. It names the client, device fingerprint and time. If you do not recognize the device, follow the link in the alert to open the matching entry.

- For email/password or Google, select **Sign out** under **Signed-in clients**. Check which devices share the sign-in before confirming.
- For an Access Token, delete the matching token under **Access Tokens**, or [regenerate it](/en/account/access-tokens#refresh-client-token) and update the devices and scripts you still use.

If you suspect your account password was exposed, [change your password](/en/account/security#change-password). This signs out all clients and deletes all Access Tokens.

The former device approval page and the Telegram bot's `/device` command have been removed; old links open **Signed-in clients**. Apple TV still signs in through **Sync to Apple TV** on the iPhone and no longer needs the iPhone to approve it. See [Apple TV sign-in](/en/oixflow/apple-tv#approval).

## Signed-in clients {#signed-in-clients}

Open [Access Token Management → Signed-in clients](https://oixcloud.com/user/token#devices). Sign-ins are grouped by client. Each row shows the device name, sign-in date and, when available, the last use. Devices with separate sign-ins can be signed out individually.

- For example, when oixFlow syncs an iPhone sign-in to Apple TV, the devices share a sign-in credential. Once Apple TV uses it, the iPhone entry shows **Also used by Apple TV**.
- A credential shared by older versions of the same client appears as **Signed in before this update**. Each device gets its own entry after signing in separately with a current client. Devices running OpenClash 0.48.014 or earlier need a plugin update first.
- Devices that use an Access Token are listed under that token in **Access Tokens**.

**End a sign-in**

1. Find the sign-in under its client using the device name and last use.
2. Select **Sign out** on that row and check the devices listed in the confirmation. Confirming immediately revokes the credential and signs out every device that uses it.
3. Sign in again on the devices you still use. For Apple TV, [sync the account](/en/oixflow/apple-tv#approval) from the iPhone or iPad after signing in again. Email/password or Google sign-in keeps that client’s existing **Subscription Configuration**. A manually created Access Token uses [its bound URL](/en/account/subscriptions).

To sign out every device at once, [change your password](/en/account/security#change-password).

## Sign in to a client with Google {#google-client-login}

1. Select **Sign in with Google** in the client, then continue in the system authentication window or browser.
2. Choose the Google account matching the email of your existing oixCloud account. This entry signs in existing accounts; it does not register new ones.
3. After verification, return to the client that started sign-in. On a phone, tap **Return to App** if offered. For a router, open the plugin at its LAN address, allow the pop-up and keep the original tab open. For macOS Helper, complete verification in a browser on the same Mac.
4. Wait for account information and managed nodes before connecting. If the flow expires or return verification fails, start again from the client instead of reopening an old completion page.

Both the client and website must support this flow. If the button is unavailable, use email/password or an Access Token. Never enter your Google password into the oixCloud password field. When you sign up with Google, the result page shows the initial password once and the site also tries to email it to you. To obtain an oixCloud password, check Gmail, including spam, for that email. If you cannot find it, reset the password: when signed in, open [Account Settings → Password](https://oixcloud.com/user/edit#settings-password) and select **Forgot current password** under **Current Password** in the form that opens; when signed out, select **Forgot password** on the [website sign-in page](https://oixcloud.com/auth/login). After a reset, all clients must sign in again, the main subscription URL changes, two-step verification is turned off and passkeys are removed.

### Google sign-in troubleshooting {#google-troubleshooting}

| Symptom | Next step |
| --- | --- |
| No button in the client | Check the installed version and release channel. Both client and website must support the flow; maintained source does not establish availability in your stable build |
| Browser does not return | On a phone, tap **Return to App** if offered. For a router, allow pop-ups and return to the original plugin tab. For Helper, return to the Mac that started sign-in. Restart an expired flow from the client. |
| Email not registered | Choose the Google account matching your existing oixCloud email, or register on the website first |
| Signed in but no nodes | Wait for the managed profile, then check the plan, node filter and sync result |

Do not sign out other devices or regenerate Access Tokens to diagnose a browser return. Neither helps Google sign-in; they only make the affected devices sign in again.
