---
description: Choose a subscription format, filter nodes, restore defaults and understand shared settings
---

# Subscriptions and filters

## Choose how to connect

oixCloud, FlClash for oixCloud, the integrated OpenClash build, oixClash on Merlin routers and oixCloud Helper can sign in to retrieve managed profiles. For another compatible client, select its format in [Subscription management](https://oixcloud.com/user/sub_manage) and import that URL.

A full profile and a Provider node list serve different purposes. A Provider must be referenced by an existing client configuration; it is not a complete runnable profile. An Access Token is a sign-in credential, not a subscription URL.

## Configure a filter

1. Open **oixCloud → Node Filter** in the client, or **Connection → Node filter…** in Helper. You can also edit the corresponding address on the website.
2. Click a line or region to cycle through **Any → Only → Exclude**. Line and region conditions apply together.
3. Optionally enter name-inclusion or exclusion patterns. Wait for the preview and check the retained count and intended nodes.
4. Save, check the refresh result below, then select an available node and connect.

| Client | Applying a saved filter |
| --- | --- |
| oixCloud | Managed nodes refresh automatically; check the result and selected outbound. |
| FlClash for oixCloud | Starts an account refresh and managed-profile sync automatically. Wait for completion; if it fails, resolve the error and use **Sync** on the account page. |
| oixCloud Helper | Fetches nodes and updates mappings. Run **Apply in Surge** again when using Surge. |
| OpenClash | After saving in the web editor, restart OpenClash to fetch immediately or wait for the core's next subscription update. |
| oixClash | **订阅管理** (Subscription Management) in the plugin's account row opens the web editor. After saving, click **更新节点** (Update Nodes) in the plugin to fetch immediately, or wait for the daily update. |
| Other subscription clients | Update the imported address and confirm the updated profile is selected. |

Names support case-insensitive regular expressions: `香港|日本` matches either word. Node names remain Chinese even in an English interface. Search within the preview only locates entries; it does not add a filter. Pending previews, invalid expressions and zero retained nodes prevent saving.

See the illustrations for [oixCloud](/en/oixcloud/proxies) and [FlClash for oixCloud](/en/flclash/profiles).

## Empty filters and restoring defaults

| Address type | Without custom conditions |
| --- | --- |
| Official-client smart subscription | Uses Smart Selection's default lines, excluding dedicated IPs by default. Only if that default set is empty does it fall back to permitted nodes. |
| Ordinary personal subscription URL | Returns nodes permitted for the account and subscription format, without an additional custom filter. |

In oixCloud, resetting a saved custom filter asks for confirmation and resets it on the server; an unsaved draft can simply be cleared. FlClash for oixCloud's **Restore default** submits the reset and starts sync. Helper clears the draft first, so you must still click **Save**.

Resetting does not increase plan permissions or make every node compatible with every subscription format. Visual filters replace the old All Nodes, Overseas Network and Emergency Mode controls.

## Which devices share a filter?

Filters belong to subscription addresses. Devices using the same official client and account normally share that client's sign-in token and bound address; they apply the same conditions on their next refresh. Different clients can have different settings.

The first official-client save creates and binds a dedicated client address when necessary without overwriting the main subscription's conditions. If you manually bind a personal address to the token, the client uses that address's filter instead.

## Account custom rules {#account-rules}

The website's [Custom Rules](https://oixcloud.com/user/rule) are shared by the account. Changes affect subscriptions or clients that use this list. Node filters are saved on subscription addresses and can differ between clients.

oixClash uses this account rule list; supported plugin versions can read and edit it directly. After saving on the website, click **更新节点** (Update Nodes) in the plugin. See [oixClash account rules](/en/other/oixclash#_7-edit-account-custom-rules) for the steps. Local routing rules added inside the oixCloud App continue to be managed separately in that app.

Saving an empty list deletes the account rules, so keep anything you need first. After saving, also confirm that the client updated its configuration and check the matched rule on a new connection.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| No filter entry | Check the client source/version and plan eligibility (rank 20 or higher). |
| Preview works but saving is rejected | Read the error. A manually created token may lack a writable personal-address binding; bind it on the website or sign in with the official client account flow. |
| Old nodes after saving | Check sync completion, selected profile and whether another device changed the shared filter. |
| Dedicated IP absent | Confirm it is retained in the preview; an empty official-client filter does not mean every node. |
| Old region parameters have no effect | Official smart subscriptions use visual filters; ordinary addresses with a filter also ignore legacy region, name and mode parameters. |

Adjust other options, such as simplified rules and TCP Fast Open, through the client. A subscription supporting those parameters can use `&simplerules=true&tfo=false`; formats and options are not interchangeable between clients.
