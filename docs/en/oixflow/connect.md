---
description: "Sign in and connect \u2014 setup, practical steps and troubleshooting"
---

# Sign in and connect

For iPhone / iPad. See the separate [Apple TV guide](/en/oixflow/apple-tv).

## Installation and system requirements

| Device | Minimum OS | Download |
| --- | --- | --- |
| iPhone | iOS 18.0 | [App Store](https://apps.apple.com/app/id6838819085) · [TestFlight](#testflight) |
| iPad | iPadOS 18.0 | Same as iPhone |

### Install or update with TestFlight {#testflight}

On your iPhone or iPad, install [TestFlight](https://apps.apple.com/app/id899247664), open the [oixFlow beta invitation](https://testflight.apple.com/join/CfGzSk6M), then tap **Accept** and **Install**. If you have already joined, open TestFlight and tap **Update** next to oixFlow. Joining requires an open slot. To install or update, you need an unexpired build that supports your OS version.

**A mainland China Apple Account cannot install or update the beta directly.** Apple has disabled internal testing, external testing and public invitations for oixFlow in mainland China. Some users suggest temporarily switching storefronts. Check TestFlight to see whether a build is available to you.

1. On your iPhone or iPad, open the [storefront picker](https://www.liangjianghu.com/searchads-appstore-switch) and select **US 美国 United States**.
2. Quit TestFlight completely and reopen it. If oixFlow appears, tap **Install** or **Update**. If this is your first time joining, open the beta invitation above.

::: details On a Mac or unable to open the storefront picker?
Add the [App Store Region shortcut](https://www.icloud.com/shortcuts/cd008a5e6d1440689173d548ce0eac78), run it, choose **United States**, then reopen TestFlight. You can also select the United States in [Store Redirect](https://apps.apple.com/cn/app/store-redirect/id1601434613).

If you previously enabled any TestFlight MitM modules or rules, turn them off or remove them first.
:::

## Illustrated steps

<figure class="guide-figure">
  <a href="/illustrations/oixflow-connect-en.svg?v=20261123-1" target="_blank" rel="noopener" aria-label="oixFlow · Connect and choose an outbound">
    <img src="/illustrations/oixflow-connect-en.svg?v=20261123-1" alt="oixFlow · Connect and choose an outbound" width="1120" height="1120" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

## Managed account

<figure class="guide-figure">
  <a href="/illustrations/oixflow-login-en.svg?v=20261126-1" target="_blank" rel="noopener" aria-label="oixFlow · Sign in to your account">
    <img src="/illustrations/oixflow-login-en.svg?v=20261126-1" alt="oixFlow · Sign in to your account" width="1120" height="1120" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. Install oixFlow and open its **oixCloud** account page. To buy a plan or add funds, use your account on the website.
2. Sign in with email and password, switch to an Access Token at the bottom of the form, or choose **Sign in with Google**. Google sign-in is for existing accounts and needs client and website support; follow the [Google sign-in steps](/en/account/security#google-client-login). Wait for the active plan and managed nodes to load before connecting.
3. Select a node or policy group on the home screen, keep Rule mode selected, and tap the power button in the status card. Allow the system to add a VPN configuration when prompted on your first connection.

Once signed in, the app loads managed nodes without device approval. The first sign-in on a new device sends an alert to your account; see [New devices and sign-in alerts](/en/account/security#device-approval). To sign in with an Access Token, first [create one](/en/account/security#manual-token) on the website; its full value is shown only once.

## Your own nodes

You can also use compatible private nodes or subscriptions without a managed account. Use a link, QR code or manual entry under **Proxies → Servers → Add**; local profile files use a separate import entry. See [nodes and subscriptions](/en/oixflow/proxies#single-node) for the steps and mixed use.

## Refresh and verify

Pull down on the oixCloud account page to refresh account information. Use Refresh Nodes to fetch the managed nodes again after a plan or node change. Policy groups choose the exit, while routing rules decide which requests use it. Keep Rule mode enabled to apply your routing settings.

Open a destination after connecting and check the actual outbound in [requests and diagnostics](/en/oixflow/diagnostics). If sign-in works but the node list is empty, check your plan and node filters.

## Sign out

Signing out removes local sign-in state; the website still lists the device as signed in. To end its sign-in on the server, select **Sign out** under [Signed-in clients](https://oixcloud.com/user/token#devices) on the website. Sign-ins synced over iCloud to devices such as Apple TV are signed out with it. With account sync enabled, also check the sync state on other devices.

## Google sign-in troubleshooting

For a missing button, failed browser return, expired flow or unregistered email, follow the shared [Google sign-in checks](/en/account/security#google-troubleshooting).
