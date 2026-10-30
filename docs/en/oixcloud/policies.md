---
description: "Policy groups and proxy chains \u2014 setup, practical steps and troubleshooting"
---

# Policy groups and proxy chains

For iPhone / iPad. Supported configuration can also sync to Apple TV.

## Create and select a group

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-policies-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="Create a policy group">
    <img src="/illustrations/oixcloud-policies-zh.svg?v=20261030-2" alt="Create a policy group" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

In **Proxies → Policies**, create a named group, choose its type and add members. Select the saved group on Home or as a rule target; creating it alone does not route traffic through it.

| Type | Use |
| --- | --- |
| Manual | Select the current member yourself |
| URL test | Select using configured connectivity tests |
| Fallback | Prefer earlier members and switch when unavailable |
| Load balance | Distribute separate connections among available members |
| Smart | Learn from real connections and try another member when setup fails |

**Best Available** (called Auto Select in older versions) is the built-in automatic group. Empty or unusable groups require checking member sources, filters and test results.

## Tests and priority

Use a reachable test URL and keep the default interval initially. For Smart priority, lower values are preferred and 1.0 is neutral. Automatic changes normally affect new connections; reopen the target connection when checking a switch.

### Why Best Available latency may stay unchanged {#retesting}

In the maintained version, the built-in **Best Available** skips a scheduled background retest if no proxied traffic has occurred since the previous check. An interval does not imply continuous idle testing. Network changes, failed connections or relevant configuration changes can still trigger a check. Do not generalize this behavior to every custom group or another client.

To compare nodes immediately, long-press one under **Proxies → Servers** and choose **Test Latency**. Use **Test All** in the toolbar for a batch, or a folder's menu to test its members. Tap an existing latency result to view details.

After testing finishes, check Best Available's current choice on Home and create a new request to inspect the outbound. A low manual result does not guarantee automatic selection or service availability. An unchanged number alone is not a connection failure.

## Proxy chains

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-chains-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="Create a proxy chain">
    <img src="/illustrations/oixcloud-chains-zh.svg?v=20261030-2" alt="Create a proxy chain" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

1. Add a chain in Proxies with at least two members.
2. The first hop can be a standalone node or an eligible Manual, URL Test, Fallback or Smart group. Later hops remain fixed nodes.
3. Select the chain on Home or in a rule.
4. Verify the final exit and compare performance.

Test every member separately first. Longer chains are not inherently faster, and a failure in any segment can break the chain. Avoid circular dependencies.

An entry group's effective members must be standalone nodes, without nested groups, DIRECT/REJECT or existing chains. It cannot also have an underlying proxy. Each new connection resolves the group's current choice and health state; existing connections keep their entry. Group latency tests do not test every candidate through the complete chain.

### Set a group's underlying proxy {#underlying-proxy}

Choose **Underlying Proxy** in the group editor and select a permitted node, chain or group. After saving, concrete node members use `Node name (via Relay name)` routes and are tested through the complete route. Nested groups and DIRECT/REJECT do not inherit this setting.

An existing via route is replaced rather than stacked. A group with an underlying proxy cannot also be a chain entry or another group's underlying proxy. Resolve cycle or invalid-member messages rather than expecting direct fallback.
