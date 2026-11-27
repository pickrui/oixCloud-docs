# Create a proxy chain or set an underlying proxy {#proxy-chains}

<span id="创建代理链"></span>

Set up the chain on iPhone or iPad. Supported configuration can sync to Apple TV.

## Create a proxy chain {#create-chain}

<figure class="guide-figure">
  <a href="/illustrations/oixflow-chains-en.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="oixFlow · Build a proxy chain in order">
    <img src="/illustrations/oixflow-chains-en.svg?v=20261127-4" alt="oixFlow · Build a proxy chain in order" width="1120" height="1120" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. Have at least two nodes in **Proxies → Servers**. Switch to **Chains** and tap **+** in the toolbar.
2. Name the chain, tap **Add Proxy**, and add at least two hops in order. The first is the entry and the last is the exit. Drag to reorder. Each hop can be a node or an eligible group from the picker.
3. Check **Route Preview** and save. Choose the chain on the current node card on Home to use it as your usual outbound. To use it for one website, choose the chain as that site's rule target.
4. Open a new connection to the site and check the matched rule and exit.

Test every member separately first. Longer chains are not inherently faster, and a failure in any segment can break the chain. Avoid circular dependencies.

## Entry groups and later-hop groups {#group-hops}

After subscription, provider and filter expansion, an entry group's effective members must be standalone nodes, without nested groups, DIRECT/REJECT or existing chains. It cannot also have an underlying proxy.

**Placing a group after the first hop changes its route wherever that group is used:**
- After saving `Entry A → Exit group`, a rule targeting `Exit group` directly also sends its concrete nodes through A (this applies beyond selecting the chain itself).
- Concrete members receive derived `Node name (via …)` routes with separate tests through the preceding hops; selecting the original node elsewhere keeps its original route.

Nested groups and DIRECT/REJECT in a later-hop group keep their own behavior and do not inherit preceding hops. DIRECT skips those hops; REJECT rejects the connection. Review and remove these exceptions if every connection must use the entry. A later-hop group needs at least one usable concrete node.

Each new connection resolves the groups' current selections and health results; existing connections keep their routes. Entry-group tests check entry candidates, not every candidate through all later hops. Testing the chain checks its currently selected complete path.

## Conflicts and unavailable members {#chain-troubleshooting}

A later-hop group can have only one preceding path. It cannot follow different hops in another chain, start a chain, set its own underlying proxy or underlie another group. Every affected chain reports a conflict; selecting the same group elsewhere does not bypass it.

Fix references or restore nodes when a cycle, invalid member or entirely unavailable group is reported. These errors reject new connections rather than silently going direct. After syncing to Apple TV, the TV resolves its own group selections and health results; it has no chain editor.

## Set a group's underlying proxy {#underlying-proxy}

Choose **Underlying Proxy** in the group editor and select a permitted node, chain or group. After saving, concrete node members use `Node name (via Relay name)` routes and are tested through the complete route. Nested groups and DIRECT/REJECT do not inherit this setting.

An existing via route is replaced rather than stacked. A group with an underlying proxy cannot also be a chain entry, a later-hop group or another group's underlying proxy. Resolve cycle or invalid-member messages rather than expecting direct fallback.
