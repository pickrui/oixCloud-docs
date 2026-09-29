---
description: "Nodes, groups and chains \u2014 setup, practical steps and troubleshooting"
---

# Nodes, groups and chains

## Illustrated steps

[![FlClash for oixCloud · Node selection](/illustrations/flclash-proxies-zh.svg)](/illustrations/flclash-proxies-zh.svg)

*Simulated interface in Chinese, with fictional nodes and data. Layout varies by version; open the image for a larger view.*

## Select a node

In **Proxies**, open the group responsible for your destination and select a node. Under Rule mode, a streaming service may use a different group from the default one. Verify the actual chain in connection records.

## Automatic groups

A profile may contain manual selection, URL-test, fallback or load-balancing groups. Manual groups follow your choice; automatic groups follow their strategy.

Test a small set of nodes on the same network. Latency is not bandwidth or proof of streaming access. If every test fails, check the test URL and local networking too; see [diagnostics](/en/flclash/diagnostics).

## Personal groups

Add a group with valid members in a profile's Override settings, then point personal rules to it. Read [merge versus custom mode](/en/flclash/rules) first. Avoid empty groups and circular references.

## Proxy chains

Open **Proxy Chains** from the profile menu. Add the entry and subsequent nodes in forwarding order, then select the chain through the intended policy or rule.

Test each member independently. A chain forwards through several stages; load balancing distributes different connections across members. If a chain fails, compare a single node, then check each segment.
