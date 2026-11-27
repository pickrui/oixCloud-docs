# Import third-party nodes and subscriptions {#import}

<span id="添加自有节点或订阅"></span>

On iPhone or iPad, you can import third-party nodes or subscriptions without signing in to a managed account. To keep using managed nodes as well, see [using both node sources together](/en/oixflow/mixed-nodes).

## Add an individual third-party node {#single-node}

<figure class="guide-figure">
  <a href="/illustrations/oixflow-add-node-en.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="Add your own node from a link">
    <img src="/illustrations/oixflow-add-node-en.svg?v=20261127-3" alt="Add your own node from a link" width="1120" height="1120" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

1. Open **Proxies → Servers** and use the toolbar's add button to open **Add Proxy**.
2. Choose **Link**, paste one complete node share link such as `ss://`, `vless://`, `trojan://`, `anytls://` or `hy2://`, then choose **Continue**. For a QR code, choose **QR Code → Continue** and scan it.
3. Without a share link, choose **Manual → Continue**. In the editor, select the protocol and enter its name, address, port and required password, UUID, TLS, SNI or transport parameters. Check them and **Save**.
4. Verify the new node under **Servers**, then open the node picker on Home (when a long list has more than one group, each starts folded; your own nodes are under **Other Nodes**), select it and connect. Check the actual outbound in [request details](/en/oixflow/diagnostics).

Use a recognizable name and parameters supplied by the node provider. Supported protocols and options depend on the current protocol picker and import validation. A Clash or Surge format does not imply support for every node it contains.

For an HTTP / HTTPS proxy, manual entry is the clearest option. **Link** recognizes an HTTP(S) URL as an individual proxy only when it contains a username, password and explicit port, with no destination path. Other HTTP(S) URLs are downloaded as subscriptions. Do not repeatedly import a proxy server's address as a subscription.

## Add a third-party subscription {#third-party-subscription}

1. Copy the provider’s complete Clash, Surge or sing-box subscription URL. For an ordinary oixCloud subscription, copy the main URL for that format under [User Center → Subscription addresses](https://oixcloud.com/user#subscription-details). For managed nodes, [sign in to oixCloud](/en/oixflow/connect).
2. Open **Proxies → Servers → Add → Link**, paste the URL and choose **Continue**. A subscription QR code can also be read through **QR Code**.
3. If the provider requires **Remnawave HWID**, understand that enabling it sends this device's identifier to that subscription over HTTPS, then enable it as needed. Leave it off when ordinary import does not require it.
4. Wait for download and parsing to finish. Expand the new subscription under **Servers**, check its name and node count, then select a node on Home and verify the connection.

**Link** saves the subscription URL so you can choose **Update** later. It imports supported nodes. Check **Activity → Events** for any skipped entries. To import groups and rules as well, follow the full-profile steps below.

## Import a profile file {#profile-file}

To import just the nodes in a file, open **Proxies → Servers → Add → File**, tap **Continue** and choose the file. This creates standalone nodes. Import the file again when its contents change.

To include groups and rules, use **Rule** mode and open **Proxies → Policies → Routing Rules → + → Import Rule Set**. Choose a compatible Clash YAML or Surge profile.

**A full profile can add rules, groups and related resources that affect existing traffic.** Use the node-subscription workflow above when you only need nodes. For a full-profile import, retain the current sources or a recovery copy first, select the file, review the import summary and unsupported items, then confirm. Check **Servers**, **Policies** and **Routing Rules** separately afterward, and use new requests to verify priority and outbounds.

A local file imports a copy and has no remote URL for updating the whole file. Remote proxy or rule providers referenced inside it retain their own sources. Successful import does not establish that DNS, modules or every feature from the original client was migrated.

## One-tap import links {#add-proxy-link}

Supporting versions can open `oixflow://add-proxy?link=…` or `anywhere://add-proxy?link=…` links. From 2.1.6 (520), the Add Proxy page also accepts the complete wrapper link by paste, scan or text entry. The ellipsis illustrates the format and is not a usable import link.

Review the node link or subscription URL in the import form, select **Continue**, then check the new list entry. These links may contain node credentials or subscription secrets; do not send them to public conversion services. If the entry is missing or the link is unrecognized, check your installed version or use the provider's original node/subscription link.

[Troubleshoot an import](/en/oixflow/proxies#import-troubleshooting)
