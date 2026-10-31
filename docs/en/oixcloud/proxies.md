---
description: "Add and update third-party nodes, Clash or Surge subscriptions, and use them alongside oixCloud managed nodes"
---

# Nodes and subscriptions

For iPhone / iPad, using the maintained client's menus. If an option is missing, check your [installed version](/en/oixcloud/connect). Third-party nodes and subscriptions do not require an oixCloud managed account. Follow the [Apple TV guide](/en/oixcloud/apple-tv) for that platform's add and sync controls.

| I want to… | Method |
| --- | --- |
| Add a self-hosted or third-party node | [Share link, QR code or manual entry](#single-node) |
| Add another provider's subscription | [Import a third-party subscription](#third-party-subscription) |
| Use third-party and managed nodes together | [Select outbounds, route websites or create a mixed group](#managed-mix) |
| Update nodes and subscriptions | [Update each source separately](#update-third-party) |

## Illustrated steps

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-proxies-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="oixCloud · Select a node or Best Available">
    <img src="/illustrations/oixcloud-proxies-en.svg?v=20261030-en1" alt="oixCloud · Select a node or Best Available" width="1120" height="1120" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

## Import

### Add an individual third-party node {#single-node}

1. Open **Proxies → Servers** and use the toolbar's add button to open **Add Proxy**.
2. Choose **Link**, paste one complete node share link such as `ss://`, `vless://`, `trojan://`, `anytls://` or `hy2://`, then choose **Continue**. For a QR code, choose **QR Code → Continue** and scan it.
3. Without a share link, choose **Manual → Continue**. In the editor, select the protocol and enter its name, address, port and required password, UUID, TLS, SNI or transport parameters. Check them and **Save**.
4. Verify the new node under **Servers**, then open the node picker on Home, select it and connect. Check the actual outbound in [request details](/en/oixcloud/diagnostics).

Use a recognizable name and parameters supplied by the node provider. Supported protocols and options depend on the current protocol picker and import validation. A Clash or Surge format does not imply support for every node it contains.

For an HTTP / HTTPS proxy, manual entry is the clearest option. **Link** recognizes an HTTP(S) URL as an individual proxy only when it contains a username, password and explicit port, with no destination path. Other HTTP(S) URLs are downloaded as subscriptions. Do not repeatedly import a proxy server's address as a subscription.

### Add a third-party subscription {#third-party-subscription}

1. Obtain the complete URL for a Clash / Surge compatible subscription. It must return node content, rather than an account sign-in or purchase page.
2. Open **Proxies → Servers → Add → Link**, paste the URL and choose **Continue**. A subscription QR code can also be read through **QR Code**.
3. If the provider requires **Remnawave HWID**, understand that enabling it sends this device's identifier to that subscription over HTTPS, then enable it as needed. Leave it off when ordinary import does not require it.
4. Wait for download and parsing to finish. Expand the new subscription under **Servers**, check its name and node count, then select a node on Home and verify the connection.

This workflow saves the subscription source for later updates and extracts supported nodes from Clash / Surge content. **It does not install the profile's complete policy groups and routing rules.** Unsupported items may be skipped while other nodes are imported. Check **Activity → Events** for skipped items and their reasons; successful addition does not establish full compatibility.

### Import a profile file {#profile-file}

Keep **Rule** mode, then open **Proxies → Policies → Routing Rules → More → Import Rule Set**. File import is separate from the **Add Proxy** method list. It recognizes supported nodes, groups and rules in Clash YAML (`.yaml` / `.yml`) and Surge profiles such as `.conf`.

**A full profile can add rules, groups and related resources that affect existing traffic.** Use the node-subscription workflow above when you only need nodes. For a full-profile import, retain the current sources or a recovery copy first, select the file, review the import summary and unsupported items, then confirm. Check **Servers**, **Policies** and **Routing Rules** separately afterward, and use new requests to verify priority and outbounds.

A local file imports a copy and has no remote URL for updating the whole file. Remote proxy or rule providers referenced inside it retain their own sources. Successful import does not establish that DNS, modules or every feature from the original client was migrated.

### One-tap import links {#add-proxy-link}

Supporting versions can open `oixcloud://add-proxy?link=…` or `anywhere://add-proxy?link=…` links. From 2.1.6 (520), the Add Proxy page also accepts the complete wrapper link by paste, scan or text entry. The ellipsis illustrates the format and is not a usable import link.

Check whether the enclosed content is a single node or a subscription, confirm the import, and verify the new list entry. These links may contain node credentials or subscription secrets; do not send them to public conversion services. If the entry is missing or the link is unrecognized, check your installed version or use the provider's original node/subscription link.

## Use third-party and oixCloud managed nodes together {#managed-mix}

Standalone nodes, third-party subscriptions and the oixCloud managed subscription can coexist in the proxy list. You do not need to insert another provider's nodes into the managed subscription. Add the third-party source as described above, keep the managed subscription, and find the desired outbound by subscription name in Home's node picker.

In Rule mode, the Home selection handles traffic targeting **Proxy**. Rules explicitly targeting a node, group, Direct or Reject keep their own destinations. Adding a third-party node to the list does not automatically send every website through it.

If you use the built-in **Best Available** group, check **Include All Proxies** and its members under **Proxies → Policies → Best Available**. With include-all enabled, third-party nodes can become candidates too. To keep everyday traffic on managed nodes, turn off include-all and select only the managed members you want before adding website exceptions below.

### Use a third-party outbound for selected websites {#route-third-party}

1. On Home, select your usual managed node or a group containing only managed members, and keep **Rule** mode.
2. Open **Proxies → Policies → Routing Rules → More → Add Rule**, choose **Domain Suffix** and enter the actual destination, such as `example.com`.
3. Target the imported third-party node directly, or choose a group containing third-party nodes, and save.
4. Make a new request to the destination. In **Activity → Requests**, confirm the matched rule and third-party outbound. Check that a destination without an exception still follows the original routing.

Enter a hostname rather than a complete page URL. A simple website exception does not need a proxy chain. Other traffic follows the remaining rules and Final Route; source priority and [network profiles](/en/oixcloud/networks) can also affect the result. See [routing rules](/en/oixcloud/routing) for diagnosis.

### Combine both sources in a policy group {#mixed-group}

To choose automatically between managed and third-party nodes, create your own URL-test group:

1. Open **Proxies → Policies → Add Policy Group**, enter a distinct name such as `Mixed exit`, and select **URL Test** as its type.
2. Choose **Add Member**, group by **Subscriptions**, expand oixCloud and the third-party subscription, and select the nodes you want from each. Standalone nodes are available in their own list or folder.
3. Choose **Done**, check the members and a reachable health-check URL, then **Save**.
4. Select `Mixed exit` on Home, or target it with a website rule, and use new requests to verify the selected member. To use a fixed outbound, you can instead choose the concrete node directly on Home or in a rule.

**All** in the member picker selects currently available nodes. **It does not mean future nodes added to that subscription automatically join this personal group.** After subscription updates, check added, removed or unusable members. Existing imported groups with dynamic provider sources follow those sources; that does not establish equivalent behavior for manually selected members.

Putting nodes in one group does not forward traffic through each of them in turn. Configure a [proxy chain or underlying proxy](/en/oixcloud/policies#underlying-proxy) only when you need multiple hops.

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

Open **oixCloud → Node Filter**, choose lines, regions and names, inspect the preview and save to refresh managed nodes. Restore Default returns to Smart Selection. Filters do not expand plan access and are shared by the same client type on your account; see [subscriptions and filters](/en/account/subscriptions).

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
