# Import third-party nodes, subscriptions and profiles {#import-nodes}

On FlClash for oixCloud, you can import third-party nodes or subscriptions without signing in to a managed account. To keep using managed nodes as well, see [using both node sources together](/en/flclash/mixed-nodes).

## Add an individual third-party node {#single-node}

<figure class="guide-figure">
  <a href="/illustrations/flclash-custom-node-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Add a custom node to this profile">
    <img src="/illustrations/flclash-custom-node-en.svg?v=20261127-5" alt="Add a custom node to this profile" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

Use this method to add a self-hosted or third-party node to a working profile, including the oixCloud managed profile.

Choose a distinct name before adding it: **matching a node name in the original profile replaces that node's definition**, rather than creating a second node with the same name. Avoid existing group names and built-in names such as `DIRECT` and `REJECT`.

1. Open **Profiles**. For a managed or ordinary subscription, choose **Proxy chains** from its menu and find **Custom nodes**. For a custom profile, use **Edit → Custom nodes**.
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

Custom nodes can be used on their own. Ordinary and managed profiles append enabled custom nodes to their existing manual selection groups. Whether URL-test, fallback or personal groups in Overlay include the new node depends on their member selection and options such as **Include all proxies**; check the relevant group.

Custom nodes belong to the profile you edited and are reapplied after subscription updates.

### Import a share link as a separate profile {#standalone-node}

To use a share link separately, paste a supported link such as `ss://` or `vless://` into **Profiles → Add Profile → Link**. The client saves a local profile. It is not merged into the managed profile and has no remote subscription to sync.

A node share link supplies connection parameters, not the provider's full routing rules. To route remaining traffic through this node:

1. Select the imported profile, open **Override** and choose **Overlay**.
2. Under **Rule**, add a `MATCH` rule targeting the imported node. Leave the domain/content field empty for `MATCH`: it catches all traffic not handled by preceding rules, so place it last among your personal rules.
3. Save the rule. With this profile active, use **Check configuration** or **Apply now**. Once it applies, verify the outbound on a new connection in Rule mode.

For complete routing such as direct access to local destinations, prefer the provider's full Clash / mihomo profile, or add more specific rules first using [overrides and added rules](/en/flclash/rules).

For an HTTP / HTTPS proxy expressed as an `http://` or `https://` link, use **Custom nodes → URI** above. **Add Profile → Link** treats HTTP / HTTPS URLs as remote subscription downloads.

## Import another subscription or profile file {#other-subscription}

<figure class="guide-figure">
  <a href="/illustrations/flclash-import-link-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Import from link and the Save checkmark in FlClash for oixCloud">
    <img src="/illustrations/flclash-import-link-en.svg?v=20261127-5" alt="Import from link and the Save checkmark in FlClash for oixCloud" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. Copy the provider’s complete Clash / mihomo subscription URL. For an ordinary oixCloud subscription, copy the main **Clash/Stash** row under [User Center → Subscription addresses](https://oixcloud.com/user#subscription-details). The Provider URL supplies nodes to an existing profile.
2. Open **Profiles → Add Profile → Link**, paste the URL and confirm. For a QR code, choose the image on desktop or scan it on an Android phone. Choose **File** for a downloaded YAML file.
3. Wait for download and validation to succeed, select the new profile in the list, then start or apply the client.
4. Open **Proxies**, select a node in this profile's groups and verify the rule and outbound with a new connection. To return to managed nodes, select the oixCloud managed profile in **Profiles** again.

On Android TV, choose **Profiles → Add Profile → Send from phone**. Connect the phone and TV to the same network, scan the TV’s QR code with the phone camera, paste the complete link on the page and send it. Confirm **Import** on the TV.

For a URL subscription, choose **Sync** in its profile menu or configure automatic updates under **Edit**. To update an imported file, import the new copy.

::: warning Distinguish "Link" from "Import config"
**Add Profile → Import config** is a separate workflow: it extracts nodes, groups, rules and supported settings from a URL, file or text into an editable **Custom profile**, and does not retain the original URL as the sync source for the whole subscription. Use **Link** above to keep following the original subscription. **Importing a whole configuration into an existing custom profile replaces its nodes, groups, rules and settings**; [back up first](/en/flclash/backup) and review any **Not imported** notices.
:::

[Troubleshoot an import](/en/flclash/profiles#import-troubleshooting)
