---
description: "Nodes, groups and chains \u2014 setup, practical steps and troubleshooting"
---

# Nodes, groups and chains

## Illustrated steps

<figure class="guide-figure">
  <a href="/illustrations/flclash-proxies-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Select a node in its group">
    <img src="/illustrations/flclash-proxies-en.svg?v=20261030-en1" alt="FlClash for oixCloud · Select a node in its group" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

## Select a node

In **Proxies**, open the group responsible for your destination and select a node. Under Rule mode, a streaming service may use a different group from the default one. Verify the actual chain in connection records.

## Automatic groups

| Group in the profile | How members are chosen |
| --- | --- |
| Manual selection | Follows your choice |
| URL-test, fallback or load balancing | Follows the group's own strategy |

Test a small set of nodes on the same network. Latency is not bandwidth or proof of streaming access. If every test fails, check the test URL and local networking too; see [diagnostics](/en/flclash/diagnostics).

## Personal groups

Add a group with valid members in a profile's Override settings, then point personal rules to it. Read [Overlay versus Custom mode](/en/flclash/rules) first. Avoid empty groups and circular references.

## Proxy chains

<figure class="guide-figure">
  <a href="/illustrations/flclash-chains-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Edit the chain’s forwarding order">
    <img src="/illustrations/flclash-chains-en.svg?v=20261030-en1" alt="FlClash for oixCloud · Edit the chain’s forwarding order" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

Open **Proxy Chains** from the profile menu and add at least two members in forwarding order: entry first, exit last. Current versions accept nodes and supported policy groups listed in the editor. The Apple oixCloud client's first-hop-only group restriction does not apply here.

| Last hop | How to use it after saving |
| --- | --- |
| Node | Select the derived `Node name (via Previous hop name)` entry; the original node keeps its original route |
| Policy group | Select or target that group; its strategy chooses the actual node |

Save and apply the profile, select the correct entry in the relevant group or rule, then check the complete path in connection records. Derived entries appear in applicable manual groups. Selecting the original exit node alone no longer applies the chain.

Test each member independently. A chain forwards through several stages; load balancing distributes different connections across members. If a chain fails, compare a single node, then check each segment.
