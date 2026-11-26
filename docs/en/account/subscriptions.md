---
description: Choose a subscription format, filter nodes, restore defaults and understand shared settings
---

# Subscriptions and filters

## Choose how to connect

oixFlow, FlClash for oixCloud, the integrated OpenClash build, oixClash on Merlin routers and oixCloud Helper can sign in to retrieve managed profiles. For another compatible client, open [User Center → Subscription addresses](https://oixcloud.com/user#subscription-details), copy the full main subscription URL for its format and [import it](/en/start/quick-start#import-subscription). Use [Subscription Management](https://oixcloud.com/user/sub_manage) to manage individual URLs and filters. **Copy Token** there copies only the subscription token.

A full profile and a Provider node list serve different purposes. A Provider must be referenced by an existing client configuration; it is not a complete runnable profile. An Access Token is a sign-in credential, not a subscription URL.

## A node appears in the website’s node list but is missing from the client’s proxy list {#missing-nodes}

1. Search for the node in your account’s [node list](https://oixcloud.com/user/node). If it is missing there too, check the active plan and the lines it includes.
2. Open the **subscription this device uses**. If you set a filter, search for the node in the preview and check the line, region and name conditions. For a default smart subscription, check which lines your plan receives by default in the section below.
3. On the **oixCloud** account page, select **Refresh Nodes** in oixFlow on iPhone or iPad, or **Refresh nodes** in FlClash for oixCloud. In older FlClash for oixCloud builds with separate **Refresh** and **Sync** actions, select **Sync**. In an ordinary subscription client, update the imported URL and select the updated profile.
4. Search for the same name again in the client. If it is still missing, include the client version, subscription format and whether the node appeared in the preview when contacting support. Keep the full subscription URL private.

Ordinary third-party subscriptions can include **Edge, Home ISP and the account’s dedicated IPs**, subject to plan permissions, format and filters. For CIA, IXP, Fusion or GIA, sign in to a dedicated client that supports the line. If your plan includes IXP but Smart Selection only shows Fusion, retain IXP alongside the other lines you want. For your own forwarder, see [IXP connection options](/en/account/nodes#ixp).

## Configure a filter


<figure class="guide-figure">
  <a href="/illustrations/oixflow-filter-en.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="Filter lines, regions and names">
    <img src="/illustrations/oixflow-filter-en.svg?v=20261127-3" alt="Filter lines, regions and names" width="1120" height="1120" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>oixFlow iPhone / iPad example · Follow the relevant guide for other clients</figcaption>
</figure>

1. In oixFlow or FlClash for oixCloud, open **oixCloud → Node Filter**. In macOS Helper, open **Nodes → Node Filter**. The router plugins’ **Node Filter** opens the website editor. You can also edit the device’s actual URL in [Subscription Management](https://oixcloud.com/user/sub_manage).
2. Click a line or region to cycle through **Any → Only → Exclude**. Line and region conditions apply together.
3. Optionally enter name-inclusion or exclusion patterns. Wait for the preview and check the retained count and intended nodes.
4. Save, check the refresh result below, then select an available node and connect.

<span id="apply-filter"></span>

| Client | Applying a saved filter |
| --- | --- |
| oixFlow | Managed nodes refresh automatically; check the result and selected outbound. |
| FlClash for oixCloud | Refreshes the account, then selects and applies the managed profile when sync succeeds. If sync fails, resolve the reported error and select **Refresh nodes** on the account page to retry. |
| macOS Helper | Fetches nodes and updates mappings. Reapply in Surge under **Client Setup** when needed, or enable automatic reapplication after the first manual setup. |
| OpenClash | Open **Node Filter** on the oixCloud tab. After saving on the website, select **Update Config** on that tab and check the active `oixCloud.yaml`. |
| oixClash | Select **节点筛选** (Node Filter) beside the account. Save on the website, then select **更新节点** (Update Nodes) in the plugin. A stopped plugin fetches the update the next time you enable it. |
| Other subscription clients | Update the imported address and confirm the updated profile is selected. |

Names support case-insensitive regular expressions: `香港|日本` matches either word. Changing the interface language does not translate node names. Search within the preview only locates entries; it does not add a filter. Wait for the preview and correct any invalid expressions. Custom conditions saved in an official client or on its dedicated URL must keep at least one node.

See the illustrations for [oixFlow](/en/oixflow/proxies#update-and-filter) and [FlClash for oixCloud](/en/flclash/profiles#managed-options).

## Empty filters and restoring defaults

| Address type | Without custom conditions |
| --- | --- |
| Official-client smart subscription | Uses Smart Selection's default lines by plan:<br>• **Plans with Fusion**: permitted Fusion and GIA (without dedicated IPs or Home ISP)<br>• **Plans with CIA / IXP**: CIA + IXP (without dedicated IPs or Home ISP)<br>• **Plans with Edge only**: Edge, Home ISP nodes eligible for default inclusion and the account's dedicated IPs<br>Only if that default set is empty does it fall back to permitted nodes eligible for default inclusion. |
| Ordinary personal subscription URL | Returns permitted nodes eligible for default inclusion in that subscription format, without an additional custom filter. |

In oixFlow, FlClash for oixCloud and macOS Helper, confirming **Restore default** clears the draft. To replace a saved custom filter with Smart Selection, select **Save** and wait for the managed nodes to update.

Resetting does not increase plan permissions or make every node compatible with every subscription format. Visual filters replace the old All Nodes, Overseas Network and Emergency Mode controls.

## Include Home ISP nodes {#home-isp}

Default inclusion is set per Home ISP node, whether static or dynamic. Plans with CIA, IXP, Fusion or GIA normally prefer their own lines. If none of the default lines has an available node, the fallback can include eligible Home ISP nodes marked for default inclusion. To include other eligible Home ISP nodes, explicitly retain the ISP line.

1. Find the **ISP** line in the current subscription address's node filter and set it to **Only**. Set any other lines you want to **Only** as well.
2. Add region or name conditions as needed, wait for the preview and check the intended nodes and retained count.
3. Save, update the client subscription and select a node again. Static and dynamic home-broadband nodes both belong to ISP; Edge is a separate line.

Region or name filters alone do not add these nodes. Restoring defaults removes ISP nodes excluded by default again. See the [Home ISP user guide](/en/account/home-isp) for relay and proxy chain setup, and [traffic routing restrictions](/en/account/nodes#isp-routing) for node eligibility.

## Which devices share a filter?

Filters are saved on the **subscription URL**. Devices signed in to the same official client with email/password or Google share that client’s binding. A manually created Access Token uses its own binding. Devices using the same URL see filter changes on their next refresh.

- If a personal subscription URL is already bound, saving or resetting filters edits that URL.
- Without a personal binding, the first save from a recognized official client creates or reuses its dedicated URL and leaves the main subscription’s filters intact.
- A third-party tool or script using an unbound Access Token can read and preview filters. To save or reset them, open [Access Token Management](https://oixcloud.com/user/token) and select a personal subscription URL for that token’s subscription configuration.

## Account custom rules {#account-rules}

The website's [Custom Rules](https://oixcloud.com/user/rule) are shared by the account. Changes affect subscriptions or clients that use this list. Node filters are saved on subscription addresses and can differ between clients.

If saving reports an incorrectly capitalized policy group, correct the name on the indicated line. For a custom node or template-specific group, also check the resulting subscription. Clash configurations omit rules whose targets are missing.

oixClash uses this account rule list; supported plugin versions can read and edit it directly. After saving on the website, click **更新节点** (Update Nodes) in the plugin. See [oixClash account rules](/en/other/oixclash#_7-edit-account-custom-rules) for the steps. Local routing rules added inside the oixFlow App continue to be managed separately in that app.

Saving an empty list deletes the account rules, so keep anything you need first. After saving, also confirm that the client updated its configuration and check the matched rule on a new connection.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| No filter entry | Check that you have a plan and use a client that supports filters. Pass Iron can filter the nodes it has access to |
| Preview works but saving is rejected | Read the error. If it asks for a separate URL, bind the current token to a personal subscription as described above |
| The old nodes still appear | Check the URL in use, the sync result and whether another device using the same URL edited the filters |
| Dedicated IP absent | Confirm it is retained in the preview; an empty official-client filter does not mean every node. |
| Old region parameters have no effect | Official smart subscriptions use visual filters; ordinary addresses with a filter also ignore legacy region, name and mode parameters. |

Adjust other options, such as simplified rules and TCP Fast Open, through the client. A subscription supporting those parameters can use `&simplerules=true&tfo=false`; formats and options are not interchangeable between clients.
