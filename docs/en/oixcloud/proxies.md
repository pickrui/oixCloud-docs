---
description: "Nodes and subscriptions \u2014 setup, practical steps and troubleshooting"
---

# Nodes and subscriptions

For iPhone / iPad.

## Illustrated steps

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-proxies-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="oixCloud · Select a node or Best Available">
    <img src="/illustrations/oixcloud-proxies-en.svg?v=20261030-en1" alt="oixCloud · Select a node or Best Available" width="1120" height="1120" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

## Import

1. Open **Proxies → Add**.
2. Import a complete subscription or node link, a file, or a QR code.
3. Review the supported nodes, groups and rules before confirming.
4. Select the new outbound on Home, connect and test a destination.

A single-node link is different from a subscription. Importing a Surge profile only imports supported items; success does not promise full compatibility with the original client.

### One-tap import links {#add-proxy-link}

Supporting versions can open `oixcloud://add-proxy?link=…` or `anywhere://add-proxy?link=…` links. From 2.1.6 (520), the Add Proxy page also accepts the complete wrapper link by paste, scan or text entry. The ellipsis illustrates the format and is not a usable import link.

Check whether the enclosed content is a single node or a subscription, confirm the import, and verify the new list entry. These links may contain node credentials or subscription secrets; do not send them to public conversion services. If the entry is missing or the link is unrecognized, check your installed version or use the provider's original node/subscription link.

## Organize standalone nodes in folders {#folders}

These folder operations apply to iPhone / iPad in 2.1.6 (520) and later supporting builds; availability depends on your release channel. The node-picker illustration on this page does not show folder editing. This does not imply an equivalent management interface on Apple TV.

1. In **Proxies**, select **Servers**, then choose **New Folder** from the toolbar's additional actions.
2. Enter a name, use **Add Proxy** to select standalone nodes not already in other folders, finish selection and save.
3. Long-press a node and choose **Move to Folder**. A filed node can be moved to another folder or taken out with **Remove from Folder**.
4. Long-press a folder and choose **Edit** to rename it, add members or drag members into order. Use **Reorder Proxies** to change the order of folders.
5. Expand the folder to verify its members and order, then check the selected outbound on Home. Organizing folders does not itself switch the connection.

Folders organize standalone nodes, not nodes inside subscriptions. They are neither policy groups nor proxy chains. Each node appears in only one folder.

::: info Deleting a folder is different from deleting nodes
**Deleting a folder keeps its nodes**, returning them to the ungrouped list. Removing a member in the editor also only takes it out of the folder. Deleting a node itself is a separate action; check rule references first. Folders sync through the **Proxies** category; see [sync compatibility](/en/oixcloud/sync#folder-sync).
:::

## Update and filter

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-filter-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="oixCloud · Filter lines, regions and names">
    <img src="/illustrations/oixcloud-filter-en.svg?v=20261030-en1" alt="oixCloud · Filter lines, regions and names" width="1120" height="1120" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

Use **Update** from a subscription's menu. For managed oixCloud nodes, use **Refresh Nodes** on the account page. Refreshing account information alone does not redownload nodes.

Open **oixCloud → Node Filter**, choose lines, regions and names, inspect the preview and save to refresh managed nodes. Restore Default returns to Smart Selection. Filters do not expand plan access and are shared by the same client type on your account; see [subscriptions and filters](/en/account/subscriptions).

## Latency

Test individual nodes or a small batch. Compare the same network and time period. Latency is not sustained download speed or proof of streaming availability.

## Delete and restore

Check group, chain and rule references before deleting. **Recently Deleted** keeps nodes and subscriptions deleted on this device for three days; it is not a shared cloud recycle bin, and expired entries cannot be recovered here. After restoring, check the selected outbound and related rules before connecting.
