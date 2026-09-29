---
description: "iCloud sync and recovery \u2014 setup, practical steps and troubleshooting"
---

# iCloud sync and recovery

For iPhone / iPad. Apple TV publishing has a separate switch.

::: tip Align versions first
Use oixCloud 1.34 or later on every syncing device. Versions 1.33 and earlier use a different sync system.
:::

## Enable sync

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-sync-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Select iCloud sync categories">
    <img src="/illustrations/oixcloud-sync-zh.svg?v=20260929-2" alt="Select iCloud sync categories" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

1. Use the same Apple Account and confirm iCloud works.
2. First enable the iCloud Sync switch on the main **Settings** page, then open **iCloud Sync** to select the categories you need.
3. Use **Sync Now**, wait for completion and check another device.
4. Verify with one recognizable configuration before reorganizing many items.

Categories cover proxies, rules, modules, MITM, automation, settings and accounts. Disabling a category stops its transport without automatically deleting its local contents.

## Account changes and recovery

After an Apple Account change or cloud deletion, read the recovery choices carefully. Upload and Merge adds local content to the cloud. Use iCloud Data replaces local content in enabled categories with the cloud version, including empty categories.

First identify the device that retains complete data. Repeatedly deleting cloud data on every device is not a troubleshooting procedure.

## Recently Deleted

Nodes and subscriptions deleted locally remain recoverable for three days. This recovery list is device-local and does not sync. Restoring an item does not restore your former connection selection.

## Apple TV

Enable **Sync to Apple TV** on the phone/tablet and iCloud sync on TV. Nodes, subscriptions, chains, groups, rule sets and account state are shared; TV keeps its own connection/routing settings and does not receive modules. See [Apple TV](/en/oixcloud/apple-tv).

## Check sync in order

1. Add a recognizable ordinary node or rule on the device with complete data, then use **Sync Now**.
2. On the other device, confirm the same Apple Account, main sync switch and relevant category, then sync.
3. Verify the item's contents before testing connectivity. Configuration sync does not complete system VPN permission or Tailscale authorization on another device.
4. For one missing category, check its switch. For TV-only failures, check both **Sync to Apple TV** and the TV's own switch.

Recently Deleted recovers local node/subscription deletions; it does not restore an entire cloud account or replace keeping a copy before bulk edits. Identify the device holding the desired version before choosing a replacement operation such as **Use iCloud Data**.
