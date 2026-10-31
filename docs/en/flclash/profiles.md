---
description: "Add individual third-party nodes, import subscriptions, combine them with oixCloud managed nodes and update profiles"
---

# Profiles, subscriptions and updates

FlClash for oixCloud supports compatible third-party nodes and subscriptions. Ordinary imports do not require an oixCloud account. These steps follow the maintained client's menus; if an option is missing, check your [installed version](/en/flclash/connect#downloads).

| I want to… | Method |
| --- | --- |
| Add one node to an existing profile | [Add a custom node](#single-node) |
| Use another provider's subscription separately | [Import and switch profiles](#other-subscription) |
| Use third-party and managed nodes together | [Keep the managed profile and add nodes or a proxy provider](#managed-mix) |

## Managed and ordinary profiles

| Profile source | Import | Update |
| --- | --- | --- |
| oixCloud managed profile | Imported when you sign into oixCloud | Account and managed-profile refresh/sync controls |
| Third-party subscription URL | **Profiles → Add Profile → Link**, enter the complete URL | Sync from the remote subscription |
| Local file | **Profiles → Add Profile → File**, select a file | No remote URL to refresh |

The client applies one profile at a time. Select it, start the client and verify the node list. Keeping several profiles in the list does not automatically combine their nodes or rules.

## Add an individual third-party node {#single-node}

Use this method to add a self-hosted or third-party node to a working profile, including the oixCloud managed profile.

Choose a distinct name before adding it: **matching a node name in the original profile replaces that node's definition**, rather than creating a second node with the same name. Avoid existing group names and built-in names such as `DIRECT` and `REJECT`.

1. Open **Profiles**, find the profile you want to use and choose **Proxy chains** from its menu.
2. Under **Custom nodes**, choose **Add** and select an input method for the information you have.
3. Check the name, server, port and credentials, save, and make sure the node's switch is on.
4. Select and apply this profile. In **Proxies**, open a manual selection group and choose the new node. Make a new connection to your destination and verify its outbound in [connection records](/en/flclash/diagnostics).

| Input | What to enter |
| --- | --- |
| URI | One complete node share link, such as `ss://`, `vmess://`, `vless://`, `trojan://` or `hy2://`; consult the input hint and validation result for other formats |
| Quick edit | Choose the proxy type and enter its name, server, port and required password, UUID, TLS, transport or other protocol settings |
| YAML | One complete node definition, or a `proxies:` list containing exactly one node; do not paste a whole multi-node subscription |

This example only demonstrates the single-node YAML structure. Replace the server and password with your provider's actual parameters; it cannot connect as written:

```yaml
name: My-Third-Party
type: trojan
server: proxy.example.com
port: 443
password: replace-with-your-password
sni: proxy.example.com
udp: true
```

Although **Custom nodes** is on the **Proxy chains** page, these nodes also work independently: **you do not need to create or enable a chain**. Ordinary and managed profiles append enabled custom nodes to their existing manual selection groups. Whether URL-test, fallback or personal groups in Overlay include the new node depends on their member selection and options such as **Include all proxies**; check the relevant group.

Custom nodes belong to the profile you edited and are reapplied after subscription updates.

### Import a share link as a separate profile {#standalone-node}

To use a share link separately, paste a supported link such as `ss://` or `vless://` into **Profiles → Add Profile → Link**. The client saves a local profile. It is not merged into the managed profile and has no remote subscription to sync.

A node share link supplies connection parameters, not the provider's full routing rules. To route remaining traffic through this node:

1. Select the imported profile, open **Override** and choose **Overlay**.
2. Under **Rule**, add a `MATCH` rule targeting the imported node. Leave the domain/content field empty for `MATCH`: it catches all traffic not handled by preceding rules, so place it last among your personal rules.
3. Save, use **Check configuration** or **Apply now**, keep Rule mode and verify the outbound with a new connection.

For complete routing such as direct access to local destinations, prefer the provider's full Clash / mihomo profile, or add more specific rules first using [overrides and added rules](/en/flclash/rules).

For an HTTP / HTTPS proxy expressed as an `http://` or `https://` link, use **Custom nodes → URI** above. **Add Profile → Link** treats HTTP / HTTPS URLs as remote subscription downloads.

## Import another subscription or profile file {#other-subscription}

1. Obtain the complete URL for a Clash / mihomo compatible subscription. An account page, purchase page and individual node share link are different inputs.
2. Open **Profiles → Add Profile → Link**, enter a recognizable name and the complete URL, and confirm. You can also use **QR code** to read a subscription link, or **File** to import a downloaded YAML profile.
3. Wait for download and validation to succeed, select the new profile in the list, then start or apply the client.
4. Open **Proxies**, select a node in this profile's groups and verify the rule and outbound with a new connection. To return to managed nodes, select the oixCloud managed profile in **Profiles** again.

Use **Sync** in a URL profile's menu to update it, or set automatic updates and an interval under **Edit**. A local-file import is a copy: changes to the original file do not update the client automatically. Import it again or edit the client's copy.

**Add Profile → Import config** is a separate workflow: it extracts nodes, groups, rules and supported settings from a URL, file or text into an editable **Custom profile**. It does not retain the original URL as the sync source for the whole subscription. Use **Link** above to keep following the original subscription. **Importing a whole configuration into an existing custom profile replaces its nodes, groups, rules and settings**; [back up first](/en/flclash/backup) and review any **Not imported** notices.

## Use third-party and oixCloud managed nodes together {#managed-mix}

To keep managed routing while sending some traffic through third-party nodes, keep the **oixCloud managed profile selected** and add a source as described below. Combining node sources does not create a forwarding chain. Configure [proxy chains](/en/flclash/proxies#proxy-chains) only when you specifically need multiple entry/exit hops.

### Add one or a few nodes {#managed-single-node}

Follow [Add an individual third-party node](#single-node) to save and enable a node in the managed profile, then select it in an existing manual selection group. To use it only for a website, add a domain-suffix rule under the managed profile's **Override → Overlay → Rule** targeting that node. Other traffic continues through managed rules.

### Add a whole third-party subscription {#managed-subscription}

Reference the subscription as a **Proxy provider** in the provider library to update its nodes while keeping managed routing.

1. Open **Tools → Custom profile resources → Provider library** and select **Proxy providers**.
2. Choose the add button, then **Import from URL**. Enter a distinct name such as `ThirdParty` and the complete third-party subscription URL, check that its source is **Remote URL**, and save. Prefer Clash / mihomo YAML containing a `proxies:` node list. For a local file, use **Import from file**; it has no remote automatic updates.
3. Return to **Profiles**, open **Override** for the **oixCloud managed profile** and choose **Overlay** to preserve the managed groups and rules.
4. Under **Proxy group**, add a manual selection group (`select`) with a distinct name such as `Third-party exit`. In the member picker, select `ThirdParty` under **Proxy providers** and save. To switch between managed and third-party outbounds in this group, you can also add an available managed node or existing managed group as a member.
5. Under **Rule** in the same override, add the suffix `example.com` and target `Third-party exit`. Save and use **Check configuration** or **Apply now**. Keep Rule mode and select an actual node under **Proxies → Third-party exit**.
6. Reconnect to the website covered by your rule. In connection records, verify the personal rule and selected third-party outbound, then check that a destination without a personal rule still follows managed routing.

The domain and names above are examples; use your actual destination. Creating a group or saving a resource does not send websites through it automatically: a rule must reference the group. New groups are not automatically inserted into existing manual selection groups either. Personal rules precede subscription rules, while existing added rules may still take priority; see [overrides](/en/flclash/rules).

This reference uses only the third-party subscription's nodes. **It does not apply that subscription's groups, rules, DNS or TUN settings.** The proxy provider keeps its remote URL. After applying the profile, open **Providers** from the **Proxies** page menu and use the update button to refresh the relevant proxy provider. **Sync** on the account page updates the managed profile; syncing a separate URL profile does not update this proxy provider either.

An oixCloud managed profile cannot serve as a proxy provider for another **Custom profile**, and **Import config** does not accept oixCloud managed URLs. Keep the managed profile and reference third-party sources as described above.

For proxy-provider formats and fields, see the [official mihomo proxy-provider reference](https://wiki.metacubex.one/en/config/proxy-providers/).

## Troubleshoot additions and imports {#import-troubleshooting}

| Symptom | What to check |
| --- | --- |
| A share link cannot be read or saved | Check completeness, whitespace, line breaks and supported protocols; for manual entry, verify credentials, TLS, SNI and transport settings and resolve the editor's error |
| Download fails or returns a web page | Check the original URL, expiry, provider permissions and connectivity; select the correct Clash / mihomo format rather than a sign-in page |
| A saved node is missing from Proxies | Confirm you edited the selected profile, enabled the node and applied the profile; check a manual group and explicitly add members to personal groups |
| A saved proxy provider has no nodes in its group | Saving only registers the source; check the actual download/parse result, `proxies:` content, source name and group filters, then update it under Providers and recheck |
| Traffic still uses the old outbound | Check Rule mode, rule priority, group selection and a new connection's matched rule; successful import alone does not switch outbounds |

Subscription URLs and node links may contain credentials. Do not post them in public issues or submit them to untrusted converters. To undo an addition, first remove references from personal rules, groups and chains, then disable or delete the node or provider. Do not delete the managed profile just to remove one third-party node.

## Update

<figure class="guide-figure">
  <a href="/illustrations/flclash-profiles-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Update and manage profiles">
    <img src="/illustrations/flclash-profiles-en.svg?v=20261030-en1" alt="FlClash for oixCloud · Update and manage profiles" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

Use **Sync** in the profile menu. Edit a profile to enable automatic updates and set an interval. Check the result: a failed download does not mean new nodes were applied.

Managed account information, filters and plan access are handled on the oixCloud page. Refreshing account information is different from syncing a profile.

## Managed options

<figure class="guide-figure">
  <a href="/illustrations/flclash-filter-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Filter managed nodes">
    <img src="/illustrations/flclash-filter-en.svg?v=20261030-en1" alt="FlClash for oixCloud · Filter managed nodes" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

Open **oixCloud → Node Filter**, select lines, regions and names, check the preview and save. Saving starts an account refresh and managed-profile sync automatically. Wait for completion and check the nodes; if it fails, resolve the reported error and use **Sync** on the account page. Restore Default uses Smart Selection. Devices using this client type on your account share the filter; see [subscriptions and filters](/en/account/subscriptions).

Profile editing still offers supported options such as **Minimal Configuration** (simplified rules) and TCP Fast Open. Keep their defaults unless needed. Filtering cannot expand plan access, and conditions retaining zero nodes cannot be saved.

## Keep personal changes

An ordinary downloaded profile may be previewed or edited, but subscription updates can overwrite direct edits. Use [overrides and added rules](/en/flclash/rules) for persistent personal routing.

Managed profiles have dedicated controls; do not assume they expose the same export and editing options as ordinary YAML files.

## Verify four things after an update

1. The sync result succeeded, not merely that the button stopped spinning.
2. The selected profile is the one you just updated.
3. Retained nodes appear on the proxy page and the previous node selection is still valid.
4. A new connection uses the expected rule and outbound; older connections may keep their previous path.

A URL profile depends on reaching its subscription service. A local-file profile has no remote URL to refresh. On download failure, retain the error and old profile, then check expiry, permissions and connectivity; repeatedly adding the same profile makes diagnosis harder.
