---
description: "Add individual third-party nodes, import subscriptions, combine them with oixCloud managed nodes and update profiles"
---

# Profiles, subscriptions and updates

FlClash for oixCloud supports compatible third-party nodes and subscriptions. Ordinary imports do not require an oixCloud account. These steps follow the maintained client's menus; if an option is missing, check your [installed version](/en/flclash/connect#downloads).

| I want to… | Method |
| --- | --- |
| Add one node to an existing profile | [Add a custom node](/en/flclash/import-nodes#single-node) |
| Use another provider's subscription separately | [Import and switch profiles](/en/flclash/import-nodes#other-subscription) |
| Use third-party and managed nodes together | [Keep the managed profile and add nodes or a proxy provider](/en/flclash/mixed-nodes) |

## Managed and ordinary profiles

| Profile source | Import | Update |
| --- | --- | --- |
| oixCloud managed profile | Imported when you sign in to oixCloud | Select **Refresh nodes** on the **oixCloud** page |
| Third-party subscription URL | **Profiles → Add Profile → Link**, enter the complete URL | Sync from the remote subscription |
| Local file | **Profiles → Add Profile → File**, select a file | No remote URL to refresh |

The client applies one profile at a time. Select it, start the client and verify the node list. Keeping several profiles in the list does not automatically combine their nodes or rules.

## Troubleshoot additions and imports {#import-troubleshooting}

| Symptom | What to check |
| --- | --- |
| A share link cannot be read or saved | Check completeness, whitespace, line breaks and supported protocols; for manual entry, verify credentials, TLS, SNI and transport settings and resolve the editor's error |
| Download fails or returns a web page | Check the original URL, expiry, provider permissions and connectivity; select the correct Clash / mihomo format rather than a sign-in page |
| A saved node is missing from Proxies | Confirm you edited the selected profile, enabled the node and applied the profile; check a manual group and explicitly add members to personal groups |
| A saved proxy provider has no nodes in its group | Saving only registers the source; check the actual download/parse result, `proxies:` content, source name and group filters, then update it under Providers and recheck |
| Traffic still uses the old outbound | Check Rule mode, rule priority, group selection and a new connection's matched rule; successful import alone does not switch outbounds |

Subscription URLs and node links may contain credentials. Do not post them in public issues or submit them to untrusted converters. To undo an addition, first remove references from personal rules, groups and chains, then disable or delete the node or provider. Do not delete the managed profile just to remove one third-party node.

## Refresh account details, sync managed nodes or update a subscription {#update}

<span id="手动与自动更新"></span>

<figure class="guide-figure">
  <a href="/illustrations/flclash-profiles-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Update and manage profiles">
    <img src="/illustrations/flclash-profiles-en.svg?v=20261127-5" alt="FlClash for oixCloud · Update and manage profiles" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

To update an ordinary URL subscription, open its menu under **Profiles** and select **Sync**. After the download succeeds, verify that the intended profile is selected and check its nodes under **Proxies**.

To keep using an ordinary subscription, update it from its own menu. **oixCloud → Refresh nodes** refreshes the account first. A successful sync selects and applies the oixCloud managed profile. In older builds with separate **Refresh** and **Sync** actions, use **Sync**. When it finishes, search for the node under **Proxies**.

## Managed options

<figure class="guide-figure">
  <a href="/illustrations/flclash-filter-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Filter managed nodes">
    <img src="/illustrations/flclash-filter-en.svg?v=20261127-5" alt="FlClash for oixCloud · Filter managed nodes" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. Open **oixCloud → Node Filter**, choose lines, regions or names and wait for the preview. To return to Smart Selection, choose **Restore default** at the bottom and confirm.
2. Select the checkmark at the top right to save. The account refreshes, and a successful sync switches to the managed profile. If sync fails, address the reported error and select **Refresh nodes** to retry.
3. Check the nodes under **Proxies**. Other devices using the same subscription URL receive the filter on their next refresh. A manually created Access Token uses its bound URL. [Subscriptions and filters](/en/account/subscriptions).

Profile editing still offers supported options such as **Minimal Configuration** (simplified rules) and TCP Fast Open. Keep their defaults unless needed. Filtering cannot expand plan access, and custom conditions must keep at least one node.

## Keep personal changes

An ordinary downloaded profile may be previewed or edited, but subscription updates can overwrite direct edits. Use [overrides and added rules](/en/flclash/rules) for persistent personal routing.

Managed profiles have dedicated controls; do not assume they expose the same export and editing options as ordinary YAML files.

## Verify four things after an update

1. The sync result succeeded, not merely that the button stopped spinning.
2. The selected profile is the one you just updated.
3. Retained nodes appear on the proxy page and the previous node selection is still valid.
4. A new connection uses the expected rule and outbound; older connections may keep their previous path.

A URL profile depends on reaching its subscription service. A local-file profile has no remote URL to refresh. On download failure, retain the error and old profile, then check expiry, permissions and connectivity; repeatedly adding the same profile makes diagnosis harder.
