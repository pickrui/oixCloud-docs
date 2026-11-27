---
description: "Import and update Clash, Surge or sing-box nodes and filter managed oixCloud nodes"
---

# Nodes and subscriptions

For iPhone / iPad, using the maintained client's menus. If an option is missing, check your [installed version](/en/oixflow/connect). Third-party nodes and subscriptions do not require an oixCloud managed account. Follow the [Apple TV guide](/en/oixflow/apple-tv) for that platform's add and sync controls.

| I want to… | Method |
| --- | --- |
| Add a self-hosted or third-party node | [Share link, QR code or manual entry](/en/oixflow/import-nodes#single-node) |
| Add another provider's subscription | [Import a third-party subscription](/en/oixflow/import-nodes#third-party-subscription) |
| Use third-party and managed nodes together | [Select outbounds, route websites or create a mixed group](/en/oixflow/mixed-nodes) |
| Update nodes and subscriptions | [Update each source separately](#update-third-party) |

## Illustrated steps

<figure class="guide-figure">
  <a href="/illustrations/oixflow-proxies-en.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="oixFlow · Select a node or Best Available">
    <img src="/illustrations/oixflow-proxies-en.svg?v=20261127-4" alt="oixFlow · Select a node or Best Available" width="1120" height="1120" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

## Organize standalone nodes in folders {#folders}

These folder operations apply to iPhone / iPad in 2.1.6 (520) and later supporting builds; availability depends on your release channel. The node-picker illustration on this page does not show folder editing. This does not imply an equivalent management interface on Apple TV.

1. In **Proxies**, select **Servers**, then choose **New Folder** from the toolbar's additional actions.
2. Enter a name, use **Add Proxy** to select standalone nodes not already in other folders, finish selection and save.
3. Long-press a node and choose **Move to Folder**. A filed node can be moved to another folder or taken out with **Remove from Folder**.
4. Long-press a folder and choose **Edit** to rename it, add members or drag members into order. Use **Reorder Proxies** to change the order of folders.
5. Expand the folder to verify its members and order, then check the selected outbound on Home. Organizing folders does not itself switch the connection.

Folders organize standalone nodes, not nodes inside subscriptions. They are neither policy groups nor proxy chains. Each node appears in only one folder.

::: info Deleting a folder is different from deleting nodes
**Deleting a folder keeps its nodes**, returning them to the ungrouped list. Removing a member in the editor also only takes it out of the folder. Deleting a node itself is a separate action; check rule references first. Folders sync through the **Proxies** category; see [sync compatibility](/en/oixflow/sync#folder-sync).
:::

## Update and filter

<figure class="guide-figure">
  <a href="/illustrations/oixflow-filter-en.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="oixFlow · Filter lines, regions and names">
    <img src="/illustrations/oixflow-filter-en.svg?v=20261127-3" alt="oixFlow · Filter lines, regions and names" width="1120" height="1120" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

Use **Update** from a subscription's menu. For managed oixCloud nodes, use **Refresh Nodes** on the account page. Refreshing account information alone does not redownload nodes.

### Update third-party nodes and subscriptions {#update-third-party}

| Source | How to update |
| --- | --- |
| Standalone node added manually or by share link | Long-press the node, choose **Edit**, change the provider's parameters and save; it has no subscription URL to refresh |
| Third-party URL subscription | Long-press its header under Servers and choose **Update**, or use that subscription row's update button; wait for the success marker and open any warning to read its cause |
| Local profile file | Import the new file and inspect the result; changing the original file does not update imported content automatically |

Enable **Auto Update** under the subscription's **Edit** menu, enter **Auto Update Interval (minutes)** and save. Due subscriptions are checked while the app can run and when you reopen it. This does not guarantee scheduled downloads while iOS has closed or suspended the app.

Updates can add, replace or remove subscription nodes. Recheck Home's selection, group members and rule references. Connection parameters edited directly on subscription nodes can be overwritten by a later update; use a standalone node for independent maintenance. If the provider replaces the subscription URL, add and verify the new URL before removing the old subscription and its references.

A subscription offering **Preview Profile Update** is a full-profile source whose update may affect groups and rules. Preview the differences before applying and check which local edits are retained. Ordinary node subscriptions do not use the same whole-profile update workflow.

**Restore Previous Refresh** in a third-party subscription's menu rolls that subscription back to the preceding version retained on this device, affecting current nodes and references. Decide which version to keep before using it. It does not download the latest content, and a previous version is not always available.

### Refresh managed nodes and filters {#update-managed}

1. Open **oixCloud → Node Filter** and choose lines, regions or names. Wait for the preview to show the nodes you want to keep.
2. Tap **Save** at the top right and wait on the account page for managed nodes to refresh. To return to Smart Selection, choose **Restore Default**, confirm, then tap **Save**.
3. Choose a node on Home. Other devices using the same subscription URL pick up the filter on their next refresh. A manually created Access Token uses its bound URL. See [Subscriptions and filters](/en/account/subscriptions).

**Refresh Nodes** and managed filters handle the managed source, not third-party subscriptions. Updating third-party nodes does not require deleting the managed subscription or signing out.

## Troubleshoot additions, updates and mixed use {#import-troubleshooting}

| Symptom | What to check |
| --- | --- |
| A link cannot be recognized | Check completeness, extra whitespace and protocol support; for manual entry verify the port, credentials, TLS, SNI and transport parameters |
| Download fails or the subscription has no nodes | Check the URL, expiry, provider permissions, connectivity and format; use Activity → Events to see whether every node was skipped, and do not substitute an account page for a subscription |
| A newly added node is not used by a website | Check Home's selection, Rule mode and explicit rule targets; inspect a new request, since old connections can retain their previous outbound |
| A group is missing new nodes after an update | Check its explicit members; All in the member picker is not a switch that continuously follows the entire subscription |
| An update fails or says it was saved but not applied | Open the subscription row's error, resolve it and retry; retain the source and current content, then verify a request's outbound rather than relying on the update time alone |

Do not post full subscription URLs, node credentials or diagnostic bundles in public issues or submit them to untrusted converters. Before deleting a third-party source, check and adjust references from Home's selection, personal rules, groups and chains.

## Latency

Test individual nodes or a small batch. Compare the same network and time period. Latency is not sustained download speed or proof of streaming availability.

## Delete and restore

Check group, chain and rule references before deleting. **Recently Deleted** keeps nodes and subscriptions deleted on this device for three days; it is not a shared cloud recycle bin, and expired entries cannot be recovered here. After restoring, check the selected outbound and related rules before connecting.
