---
description: "Profiles, subscriptions and updates \u2014 setup, practical steps and troubleshooting"
---

# Profiles, subscriptions and updates

## Managed and ordinary profiles

| Profile source | Import | Update |
| --- | --- | --- |
| oixCloud managed profile | Imported when you sign into oixCloud | Account and managed-profile refresh/sync controls |
| Your subscription URL | **Profiles → Add Profile**, enter the complete URL | Sync from the remote subscription |
| Local file | **Profiles → Add Profile**, select a file | No remote URL to refresh |

Select the profile, start the client and verify the node list; an imported profile is not necessarily applied.

## Update

<figure class="guide-figure">
  <a href="/illustrations/flclash-profiles-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="Update and manage profiles">
    <img src="/illustrations/flclash-profiles-zh.svg?v=20261030-2" alt="Update and manage profiles" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

Use **Sync** in the profile menu. Edit a profile to enable automatic updates and set an interval. Check the result: a failed download does not mean new nodes were applied.

Managed account information, filters and plan access are handled on the oixCloud page. Refreshing account information is different from syncing a profile.

## Managed options

<figure class="guide-figure">
  <a href="/illustrations/flclash-filter-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="Filter managed nodes">
    <img src="/illustrations/flclash-filter-zh.svg?v=20261030-2" alt="Filter managed nodes" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

Open **oixCloud → Node Filter**, select lines, regions and names, check the preview and save. Saving starts an account refresh and managed-profile sync automatically. Wait for completion and check the nodes; if it fails, resolve the reported error and use **Sync** on the account page. Restore Default uses Smart Selection. Devices using this client type on your account share the filter; see [subscriptions and filters](/en/account/subscriptions).

Profile editing still offers minimal rules and TCP Fast Open. Keep their defaults unless needed. Filtering cannot expand plan access, and conditions retaining zero nodes cannot be saved.

## Keep personal changes

An ordinary downloaded profile may be previewed or edited, but subscription updates can overwrite direct edits. Use [overrides and added rules](/en/flclash/rules) for persistent personal routing.

Managed profiles have dedicated controls; do not assume they expose the same export and editing options as ordinary YAML files.

## Verify four things after an update

1. The sync result succeeded, not merely that the button stopped spinning.
2. The selected profile is the one you just updated.
3. Retained nodes appear on the proxy page and the previous node selection is still valid.
4. A new connection uses the expected rule and outbound; older connections may keep their previous path.

A URL profile depends on reaching its subscription service. A local-file profile has no remote URL to refresh. On download failure, retain the error and old profile, then check expiry, permissions and connectivity; repeatedly adding the same profile makes diagnosis harder.
