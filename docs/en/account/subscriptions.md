---
description: "Subscriptions and filters \u2014 setup, practical steps and troubleshooting"
---

# Subscriptions and filters

## Account sign-in versus subscription import

oixCloud, FlClash for oixCloud, OpenClash with account integration, and the Surge helper can fetch configurations through your account. For other compatible clients, choose a subscription URL in the matching format in your account dashboard. After importing, you still need to enable the configuration, start the proxy, and select a node in the client.

## Manage subscriptions and options

When creating or editing a subscription in your account dashboard, use the available options to choose nodes, routing rules, and features supported by the client. Then copy the new URL and update the client. Clash, Surge, and other formats are not interchangeable. Avoid copying query parameters from old documentation. Managed updates may overwrite direct edits to generated content, so use the provided settings for customization whenever possible.

## Which subscription options should I choose?

All Nodes shows only nodes your current plan is entitled to use; it does not grant additional access. Overseas Network is for networks outside mainland China. Emergency Mode uses backup nodes on eligible plans only. Choose region filters, name filters, and simplified rules according to the page instructions. After saving, refresh nodes or sync the configuration in your client.

## How do I enter other advanced parameters?

Leave the field empty to use defaults. Use &key=value and join multiple options with &, for example &simplerules=true&tfo=false to enable simplified rules and disable TCP Fast Open. Boolean options use true / false and only affect clients that support the feature. Use the filters above that field for regions, names and nodes instead of entering them again here.

[Open your account](https://oixcloud.com/user)
