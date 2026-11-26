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
  <a href="/illustrations/apple-tv-sync-en.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="Enable sync in TV settings">
    <img src="/illustrations/apple-tv-sync-en.svg?v=20261127-3" alt="Enable sync in TV settings" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

1. Use the same Apple Account on iPhone/iPad and Apple TV, with compatible updated clients.
2. Complete account sign-in and node setup on the phone or tablet.
3. Enable **Settings → iCloud Sync → Sync to Apple TV** there.
4. If the TV has local nodes, subscriptions or groups, enabling sync replaces them with the phone or tablet’s configuration. To receive it, turn on **Settings → iCloud Sync** on the TV and confirm.
5. Wait for nodes, choose an outbound, connect and test a TV app.

The TV keeps its previous local configuration for restoration when you turn sync off. It keeps its own connection and routing settings. Modules stay on the phone or tablet.

## Account source

- **With iCloud Sync on**, sign in on the publishing iPhone or iPad. Save changes under **oixCloud → Node Filter**, or tap **Refresh Nodes**. Update third-party subscriptions under **Proxies → Servers** on that device. Choose an outbound once the new nodes appear under **Proxies** on the TV.
- **To use the TV independently**, leave **Settings → iCloud Sync** off. Under **Proxies**, select **Add**, enter a node share link or a complete compatible subscription URL, then select **Continue**. Use the update button beside the subscription heading for later updates. Managed account sign-in still goes through the phone or tablet.

Tailscale device authorization is separate and cannot sign into the managed oixCloud account.

<span id="everyday-use-and-troubleshooting"></span>

## Apple TV sign-in {#approval}

Apple TV still signs in through **Sync to Apple TV** on the iPhone or iPad. The phone or tablet must be signed in with that switch on. Once the TV receives the sync, it can load nodes without approval, and the iPhone no longer needs to confirm it.

After the TV uses an email/password or Google sign-in synced from an iPhone or iPad, it appears under that device’s entry in [Signed-in clients](/en/account/security#signed-in-clients). Signing out that entry on the website signs out both devices. If you used a manually created Access Token, look under that token instead. To restore access, sign in again on the phone or tablet and check that **Sync to Apple TV** is enabled.

<span id="routing"></span>

## Everyday use

<figure class="guide-figure">
  <a href="/illustrations/apple-tv-routing-en.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="Best Available, chains and subscription nodes in the Apple TV Home picker">
    <img src="/illustrations/apple-tv-routing-en.svg?v=20261127-4" alt="Best Available, chains and subscription nodes in the Apple TV Home picker" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Illustrated interface · Fictional data</figcaption>
</figure>

1. Use the remote to open the current node card on Home. Pick a standalone node, a node in a subscription, an existing chain, or **Best Available** when it has eligible members. **Test All** checks the nodes and chains in the list.
2. To send a service through a personal policy group, set **Settings → Mode** to **Rule**, then open **Settings → Routing Rules**. Select an enabled rule set and choose its group, node or chain. For a disabled built-in set, the first press enables it. Press again to assign the outbound.
3. With iCloud mirroring, [create groups or chains](/en/oixflow/policies#create-chain) and add rules on the publishing iPhone or iPad. Choose them once the TV receives the update. With a local TV configuration, you can also open **Routing Rules → Add Rule**, enter a domain, choose an action and save.
4. Reopen the service on the TV and check the exit on a new connection.

## Switch modes and DNS on the TV {#capture-dns}

<figure class="guide-figure">
  <a href="/illustrations/apple-tv-dns-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="DNS Sync and TV-only custom DNS on Apple TV">
    <img src="/illustrations/apple-tv-dns-en.svg?v=20261127-5" alt="DNS Sync and TV-only custom DNS on Apple TV" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. Press the power button on Home with the remote. Allow the VPN if prompted and wait for the connected state. In **Settings → Mode**, choose **Rule**, **Global** or **Direct**. Reopen the menu to see the checkmark beside the current choice.
2. Open **Settings → DNS**. With **DNS Sync** on, the TV receives DNS settings from the iPhone or iPad. Make the change on the publishing device and check the servers shown on the TV after both devices sync through iCloud.
3. For a TV-only change, turn off **DNS Sync**, open **Custom DNS**, enter a reachable server and confirm. The change stays on the TV. If you turn sync back on, incoming DNS settings replace the local ones.
4. Confirm the VPN is connected on Home. Make a new connection from the target app and check that the traffic counters increase. To verify a specific DNS upstream, use a resolver whose query records you can inspect, request a fresh domain, then check whether the query reached that resolver.

## Sync or connection failures

Check Apple Accounts, client versions and both sync switches first, then the TV network and plan status. If nodes exist but streaming fails, inspect the chosen exit and service region rather than repeatedly syncing the same data.

## Inspect and select from a LAN browser {#local-control}

Supporting TV versions offer **Settings → Local Control Panel** for temporary browser access from a phone or computer on the same network. TV displays separate QR codes for the address and access key. Follow [Local control on Apple TV](/en/oixflow/local-control#apple-tv).

The TV connection must already be running. The controller cannot start a disconnected TV connection remotely and does not provide full configuration editing.
