# Use third-party nodes with a managed subscription {#managed-mix}

To keep managed routing while sending some traffic through third-party nodes, keep the **oixCloud managed profile selected** and add a source as described below. Combining node sources does not create a forwarding chain. Configure [proxy chains](/en/flclash/proxy-chains) only when you specifically need multiple entry/exit hops.

## Add one or a few nodes {#managed-single-node}

Follow [Add an individual third-party node](/en/flclash/import-nodes#single-node) to save and enable a node in the managed profile, then select it in an existing manual selection group. To use it only for a website, add a domain-suffix rule under the managed profile's **Override → Overlay → Rule** targeting that node. Other traffic continues through managed rules.

## Add a whole third-party subscription {#managed-subscription}

<figure class="guide-figure">
  <a href="/illustrations/flclash-provider-members-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Add a third-party provider to your group">
    <img src="/illustrations/flclash-provider-members-en.svg?v=20261127-5" alt="Add a third-party provider to your group" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

Reference the subscription as a **Proxy provider** in the provider library to update its nodes while keeping managed routing.

1. Open **Tools → Custom profile resources → Provider library** and select **Proxy providers**.
2. Choose the add button, then **Import from URL**. Enter a distinct name such as `ThirdParty` and the complete third-party subscription URL, check that its source is **Remote URL**, and save. Prefer Clash / mihomo YAML containing a `proxies:` node list. For a local file, use **Import from file**; it has no remote automatic updates.
3. Return to **Profiles**, open **Override** for the **oixCloud managed profile** and choose **Overlay** to preserve the managed groups and rules.
4. Under **Proxy group**, add a manual selection group (`select`) with a distinct name such as `Third-party exit`. In the member picker, select `ThirdParty` under **Proxy providers** and save. To switch between managed and third-party outbounds in this group, you can also add an available managed node or existing managed group as a member.
5. Under **Rule** in the same override, add the suffix `example.com` and target `Third-party exit`. Save and use **Check configuration** or **Apply now**. Keep Rule mode and select an actual node under **Proxies → Third-party exit**.
6. Reconnect to the website covered by your rule. In connection records, verify the personal rule and selected third-party outbound, then check that a destination without a personal rule still follows managed routing.

The domain and names above are examples; use your actual destination. Creating a group or saving a resource does not send websites through it automatically: a rule must reference the group. New groups are not automatically inserted into existing manual selection groups either. Personal rules precede subscription rules, while existing added rules may still take priority; see [overrides](/en/flclash/rules).

This reference uses only the third-party subscription's nodes. **It does not apply that subscription's groups, rules, DNS or TUN settings.** The proxy provider keeps its remote URL. After applying the profile, open **Providers** from the **Proxies** page menu and use the update button to refresh the relevant proxy provider. **Refresh nodes** on the account page updates the managed profile; syncing a separate URL profile does not update this proxy provider either.

An oixCloud managed profile cannot serve as a proxy provider for another **Custom profile**, and **Import config** does not accept oixCloud managed URLs. Keep the managed profile and reference third-party sources as described above.

For proxy-provider formats and fields, see the [official mihomo proxy-provider reference](https://wiki.metacubex.one/en/config/proxy-providers/).

To add a source, [import a third-party node or subscription](/en/flclash/import-nodes); for an unexpected result, [check the symptoms](/en/flclash/profiles#import-troubleshooting).
