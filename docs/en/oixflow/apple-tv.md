---
description: "Apple TV setup and sync \u2014 setup, practical steps and troubleshooting"
---

# Apple TV setup and sync

TV focuses on remote-friendly node selection and connections, not every iPhone/iPad editing feature.

## Installation and system requirements

Apple TV requires tvOS 18.0 or later, and the iPhone / iPad publishing the account and configuration must run iOS / iPadOS 18.0 or later. Using an Apple Account outside mainland China, search for oixFlow in the TV’s App Store. Check the [App Store listing](https://apps.apple.com/app/id6838819085) for availability in your region.

You can also install the beta with TestFlight, using the same App Store account in TestFlight on the phone or tablet and the TV:

1. Install TestFlight from the App Store on Apple TV.
2. On your iPhone or iPad, install [TestFlight](https://apps.apple.com/app/id899247664) and accept the [oixFlow beta invitation](https://testflight.apple.com/join/CfGzSk6M) with the same App Store account.
3. Open TestFlight on the TV, select oixFlow and choose **Install**. Choose **Update** there when a new build is available.

Joining requires an open slot, and the build must be unexpired and support your tvOS version.

A mainland China Apple Account cannot install or update the beta directly. For the invitation and storefront options on your phone or tablet, see [Install or update with TestFlight](/en/oixflow/connect#testflight).

## Receive configuration


<figure class="guide-figure">
  <a href="/illustrations/apple-tv-sync-en.svg?v=20261123-1" target="_blank" rel="noopener" aria-label="Enable sync in TV settings">
    <img src="/illustrations/apple-tv-sync-en.svg?v=20261123-1" alt="Enable sync in TV settings" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

1. Use the same Apple Account on iPhone/iPad and Apple TV, with compatible updated clients.
2. Complete account sign-in and node setup on the phone or tablet.
3. Enable **Settings → iCloud Sync → Sync to Apple TV** there.
4. Enable iCloud sync in TV Settings and read any replacement prompt.
5. Wait for nodes, choose an outbound, connect and test a TV app.

Sync may replace existing TV configuration. TV retains its own connection/routing settings and can change rule-set destinations. Modules are not included.

## Account source

The current oixCloud account page on TV displays the account received from iPhone/iPad. Account sign-in, sign-out and managed-node filtering happen there; TV does not provide the same account-management flow.

Tailscale device authorization is separate and cannot sign into the managed oixCloud account.

<span id="everyday-use-and-troubleshooting"></span>

## Apple TV sign-in {#approval}

Apple TV still signs in through **Sync to Apple TV** on the iPhone or iPad. The phone or tablet must be signed in with that switch on. Once the TV receives the sync, it can load nodes without approval, and the iPhone no longer needs to confirm it.

Under [Signed-in clients](https://oixcloud.com/user/token#devices) on the website, the TV appears under the iPhone or iPad that signed in. Signing out that phone or tablet also signs out the TV. To restore it, sign in again on the phone or tablet and check that **Sync to Apple TV** is still on. For new-device alerts and other clients, see [New devices and sign-in alerts](/en/account/security#device-approval).

## Everyday use

Use the remote to choose a node or group and inspect latency and connection status. Perform complex node, chain and rule organization on the phone/tablet before syncing.

Open the proxy picker on Home and select **Test All** to check the listed proxies and chains. Each result appears under its name so you can choose an exit with the remote.

## Sync or connection failures

Check Apple Accounts, client versions and both sync switches first, then the TV network and plan status. If nodes exist but streaming fails, inspect the chosen exit and service region rather than repeatedly syncing the same data.

## Inspect and select from a LAN browser {#local-control}

Supporting TV versions offer **Settings → Local Control Panel** for temporary browser access from a phone or computer on the same network. TV displays separate QR codes for the address and access key. Follow [Local control on Apple TV](/en/oixflow/local-control#apple-tv).

The TV connection must already be running. The controller cannot start a disconnected TV connection remotely and does not provide full configuration editing.
