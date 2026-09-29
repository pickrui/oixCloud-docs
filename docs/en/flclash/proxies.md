---
description: "Nodes, groups and chains \u2014 setup, practical steps and troubleshooting"
---

# Nodes, groups and chains

## Illustrated steps

<figure class="guide-figure">
  <a href="/illustrations/flclash-proxies-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Select a node in a group">
    <img src="/illustrations/flclash-proxies-zh.svg?v=20260929-2" alt="Select a node in a group" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

## Select a node

In **Proxies**, open the group responsible for your destination and select a node. Under Rule mode, a streaming service may use a different group from the default one. Verify the actual chain in connection records.

## Automatic groups

A profile may contain manual selection, URL-test, fallback or load-balancing groups. Manual groups follow your choice; automatic groups follow their strategy.

Test a small set of nodes on the same network. Latency is not bandwidth or proof of streaming access. If every test fails, check the test URL and local networking too; see [diagnostics](/en/flclash/diagnostics).

## Personal groups

Add a group with valid members in a profile's Override settings, then point personal rules to it. Read [merge versus custom mode](/en/flclash/rules) first. Avoid empty groups and circular references.

## Proxy chains

<figure class="guide-figure">
  <a href="/illustrations/flclash-chains-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Set a proxy chain in forwarding order">
    <img src="/illustrations/flclash-chains-zh.svg?v=20260929-2" alt="Set a proxy chain in forwarding order" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

Open **Proxy Chains** from the profile menu and add at least two nodes in forwarding order: entry first, exit last. After saving, select the chain's **exit node** in the relevant group or rule. The feature does not create a separate selectable chain node.

Test each member independently. A chain forwards through several stages; load balancing distributes different connections across members. If a chain fails, compare a single node, then check each segment.
