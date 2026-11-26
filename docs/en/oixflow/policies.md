---
description: "Policy groups and proxy chains \u2014 setup, practical steps and troubleshooting"
---

# Policy groups and proxy chains

For iPhone / iPad. Supported configuration can also sync to Apple TV.

<span id="choose-outbound"></span>

## Create and select a group

<figure class="guide-figure">
  <a href="/illustrations/oixflow-policies-en.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="oixFlow · Create a policy group">
    <img src="/illustrations/oixflow-policies-en.svg?v=20261127-4" alt="oixFlow · Create a policy group" width="1120" height="1120" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. On iPhone or iPad, tap the current node card on **Home**. Expand a subscription or folder to choose one node. To switch to a group, tap its name or **Best Available**. The card shows the new selection.
2. To create a group, open **Proxies → Policies → Add Policy Group**, enter a name and type, tap **Add Member**, choose the nodes and save. Select the new group on Home or assign it to a [routing rule](/en/oixflow/routing#website-rule).
3. In Rule mode, requests assigned to **Proxy** follow Home. If a site's rule names an outbound, change that rule's target. If the active [network profile](/en/oixflow/networks) sets the outbound, change it there. Make a new connection to check the result.

| Type | Use |
| --- | --- |
| Manual | Uses the device's saved member selection, or the first available member when that selection is unavailable |
| URL test | Select using configured connectivity tests |
| Fallback | Prefer earlier members and switch when unavailable |
| Load balance | Distribute separate connections among available members |
| Smart | Learn from real connections and try another member when setup fails |

To use one particular member, choose that node under its subscription or folder on Home. To use it for one website, select the node as the site’s rule target.

**Best Available** (called Auto Select in older versions) is the built-in automatic group. Your own groups appear as separate selectable outbounds. Empty or unusable groups require checking member sources, filters and test results.

A personal group can include standalone nodes and nodes from third-party and managed subscriptions; follow [Create a mixed group](/en/oixflow/proxies#mixed-group). **All** in the subscription-grouped member picker selects current nodes, not future additions to that source. The built-in Best Available group's **Include All Proxies** is a separate setting; when enabled, third-party nodes can participate too.

## Tests and priority

Use a reachable test URL and keep the default interval initially. For Smart priority, lower values are preferred and 1.0 is neutral. Do not exclude large numbers of members based on one high-latency result. Automatic changes normally affect new connections; reopen the target connection when checking a switch.

### Why Best Available latency may stay unchanged {#retesting}

In the maintained version, the built-in **Best Available** skips a scheduled background retest if no proxied traffic has occurred since the previous check. An interval does not imply continuous idle testing. Network changes, failed connections or relevant configuration changes can still trigger a check. Do not generalize this behavior to every custom group or another client.

To compare nodes immediately, long-press one under **Proxies → Servers** and choose **Test Latency**. Use **Test All** in the toolbar for a batch, or a folder's menu to test its members. Tap an existing latency result to view details.

After testing finishes, check Best Available's current choice on Home and create a new request to inspect the outbound. A low manual result does not guarantee automatic selection or service availability. An unchanged number alone is not a connection failure.

<span id="create-chain"></span>

## Proxy chains

<figure class="guide-figure">
  <a href="/illustrations/oixflow-chains-en.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="oixFlow · Build a proxy chain in order">
    <img src="/illustrations/oixflow-chains-en.svg?v=20261127-4" alt="oixFlow · Build a proxy chain in order" width="1120" height="1120" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. Have at least two nodes in **Proxies → Servers**. Switch to **Chains** and tap **+** in the toolbar.
2. Name the chain, tap **Add Proxy**, and add at least two hops in order. The first is the entry and the last is the exit. Drag to reorder. Each hop can be a node or an eligible group from the picker.
3. Check **Route Preview** and save. Choose the chain on the current node card on Home to use it as your usual outbound. To use it for one website, choose the chain as that site's rule target.
4. Open a new connection to the site and check the matched rule and exit.

Test every member separately first. Longer chains are not inherently faster, and a failure in any segment can break the chain. Avoid circular dependencies.

### Entry groups and later-hop groups {#group-hops}

After subscription, provider and filter expansion, an entry group's effective members must be standalone nodes, without nested groups, DIRECT/REJECT or existing chains. It cannot also have an underlying proxy.

**Placing a group after the first hop changes its route wherever that group is used:**
- After saving `Entry A → Exit group`, a rule targeting `Exit group` directly also sends its concrete nodes through A (this applies beyond selecting the chain itself).
- Concrete members receive derived `Node name (via …)` routes with separate tests through the preceding hops; selecting the original node elsewhere keeps its original route.

Nested groups and DIRECT/REJECT in a later-hop group keep their own behavior and do not inherit preceding hops. DIRECT skips those hops; REJECT rejects the connection. Review and remove these exceptions if every connection must use the entry. A later-hop group needs at least one usable concrete node.

Each new connection resolves the groups' current selections and health results; existing connections keep their routes. Entry-group tests check entry candidates, not every candidate through all later hops. Testing the chain checks its currently selected complete path.

### Conflicts and unavailable members {#chain-troubleshooting}

A later-hop group can have only one preceding path. It cannot follow different hops in another chain, start a chain, set its own underlying proxy or underlie another group. Every affected chain reports a conflict; selecting the same group elsewhere does not bypass it.

Fix references or restore nodes when a cycle, invalid member or entirely unavailable group is reported. These errors reject new connections rather than silently going direct. After syncing to Apple TV, the TV resolves its own group selections and health results; it has no chain editor.

### Set a group's underlying proxy {#underlying-proxy}

Choose **Underlying Proxy** in the group editor and select a permitted node, chain or group. After saving, concrete node members use `Node name (via Relay name)` routes and are tested through the complete route. Nested groups and DIRECT/REJECT do not inherit this setting.

An existing via route is replaced rather than stacked. A group with an underlying proxy cannot also be a chain entry, a later-hop group or another group's underlying proxy. Resolve cycle or invalid-member messages rather than expecting direct fallback.
