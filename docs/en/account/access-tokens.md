# Create, rotate and revoke Access Tokens {#access-tokens}

## Create an Access Token {#manual-token}

An Access Token can sign in to a client or authenticate third-party clients and scripts. Its full value is shown only once, so have a safe place ready to store it.

1. On [Access Token Management](https://oixcloud.com/user/token), select **New Token**. Choose the **Token Validity**, add a recognizable note and check the **Subscription Configuration**. The validity defaults to 30 days. For a token used to sign in to clients, choose **No expiry**: devices signed in with it are signed out when it expires.
2. Select **Create Token** and confirm with a passkey or your current sign-in password in the dialog.
3. The dialog shows the full token. Select **Copy**, store it somewhere safe, then select **I have saved it**. This is the only time the full value is shown; afterward the list shows only its last 4 characters.
4. Paste it into the client's Access Token field to sign in. Devices that sign in with it are then listed under the token.

You receive an alert by email and, if linked, Telegram when a token is created. If you did not create it, delete it right away and [change your password](/en/account/security#change-password). If the outcome is unclear, reload the list to see whether a token was created before submitting again. If it was created but you did not see the full value, [regenerate it](#refresh-client-token).

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

Regenerating also sends an alert by email and, if linked, Telegram. Expired tokens cannot be regenerated; create a new one instead. If the request fails or the result is unclear, reload the page and check the last 4 characters. If they changed but you did not get the full value, regenerate it again. To revoke an email/password or Google sign-in, see [Signed-in clients](/en/account/client-sign-in#signed-in-clients).

## Disable client email/password sign-in {#token-only}

1. Confirm that the clients you need support Google sign-in, or prepare an [Access Token](#manual-token).
2. On [Access Token Management](https://oixcloud.com/user/token), expand **Client sign-in and security tips**, enable **Disable email/password sign-in for clients**, and wait for the saved confirmation.
3. Client/API email/password sign-in is then rejected. Signed-in devices, existing Access Tokens, website sign-in and supported Google sign-in remain available.

While it is on, sign in to new devices with Google or an Access Token; you do not need to turn the option off for a new device. Older pages may label this option **Access Token only**. Its actual scope is email/password sign-in.

<span id="停用设备或-token"></span>

## Stop a device or token

Open [Access Token Management](https://oixcloud.com/user/token) and find the sign-in or token you want to revoke.

- For email/password or Google, follow the [sign-out steps](/en/account/client-sign-in#signed-in-clients). Every device sharing the credential must sign in again.
- To disable an Access Token, find it under **Access Tokens**, check the devices listed in the confirmation and delete it. If devices or scripts still need it, [regenerate it](#refresh-client-token) and give them the new value.
