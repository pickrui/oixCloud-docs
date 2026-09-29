---
description: "Profiles, subscriptions and updates \u2014 setup, practical steps and troubleshooting"
---

# Profiles, subscriptions and updates

## Managed and ordinary profiles

Signing into oixCloud imports a managed profile. Add your own subscription URL or local file through **Profiles → Add Profile**. Select it, start the client and verify the node list; an imported profile is not necessarily applied.

## Update

Use **Sync** in the profile menu. Edit a profile to enable automatic updates and set an interval. Check the result: a failed download does not mean new nodes were applied.

Managed account information, filters and plan access are handled on the oixCloud page. Refreshing account information is different from syncing a profile.

## Managed options

Set supported account filters, then sync. All Nodes only includes nodes your plan permits. Empty filters can leave no usable members. Keep options such as minimal rules and TCP Fast Open at their defaults unless you have a specific reason to change them.

## Keep personal changes

An ordinary downloaded profile may be previewed or edited, but subscription updates can overwrite direct edits. Use [overrides and added rules](/en/flclash/rules) for persistent personal routing.

Managed profiles have dedicated controls; do not assume they expose the same export and editing options as ordinary YAML files.
