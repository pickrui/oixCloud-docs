# Create and verify a proxy chain {#proxy-chains}

<span id="代理链"></span>

In FlClash for oixCloud, a proxy chain connects the entry and exit in order. Create the chain in the active profile, then verify its path using a new connection.

## Create a proxy chain {#create-chain}

<figure class="guide-figure">
  <a href="/illustrations/flclash-chains-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Edit the chain’s forwarding order">
    <img src="/illustrations/flclash-chains-en.svg?v=20261127-5" alt="FlClash for oixCloud · Edit the chain’s forwarding order" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. Open **Profiles**. For a managed or ordinary subscription, choose **Proxy chains** from its menu. For a custom profile, choose **Edit → More → Proxy chains**. Tap **Add** and name the chain.
2. Add at least two different members in forwarding order: entry first, exit last. Drag their handles to reorder them. Any hop can be a node or a listed Select, URL-test, Fallback or Load-balance group.
3. Save, make sure the chain is enabled and wait for the profile to apply successfully. The maintained version creates a group named after the chain. Use it in **Proxies** or select the chain name as a rule target. Check your [installed version](/en/flclash/connect#downloads) if this entry is missing.
4. Make a new connection and verify the entry, hops and exit in [connection records](/en/flclash/diagnostics).

Use a chain name distinct from nodes, groups, proxy providers, Tailscale networks and built-in policies. Avoid `MATCH` and commas.

| Last hop | How to use it after saving |
| --- | --- |
| Node | Prefer the chain name; the derived `Node name (via Previous hop name)` entry remains available. The original node keeps its original route |
| Policy group | Select the chain name or the corresponding group; its strategy chooses the actual node |

A chain ending in a node joins subscription manual groups that already list that exit, under the chain name. Groups used by the chain and their dependencies are excluded; personal groups need explicit members. If the name is missing from a selector, you can target it directly with a personal rule. Selecting the original exit node does not test the chain.

## Groups after the first hop {#group-hops}

With `Entry A → Exit group` saved and applied, a rule targeting Exit group directly, or another group referencing it, also sends its concrete nodes through A. Tests use each actual derived route. Original nodes elsewhere keep their routes. Nested groups, DIRECT and REJECT do not inherit the preceding path; DIRECT skips earlier hops.

Avoid group members that loop back to chain hops or a group following conflicting preceding paths. Saving or enabling a new chain can disable conflicting older chains. After a related-chains-updated notice, check every chain's switch and verify a new connection.

## If the saved chain does not work {#chain-troubleshooting}

Check the current profile, chain switch, apply result, rule target and manual selection of the chain name. Resolve missing members, cycles or dialer conflicts as reported. A group with no usable nodes does not silently bypass its preceding hops. Per-hop latency does not prove the complete chain works: test nodes separately, then verify the full path.

Test each member independently. A chain forwards through several stages; load balancing distributes different connections across members. If a chain fails, compare a single node, then check each segment.
