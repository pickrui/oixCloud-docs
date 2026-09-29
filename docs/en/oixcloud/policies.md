---
description: "Policy groups and proxy chains \u2014 setup, practical steps and troubleshooting"
---

# Policy groups and proxy chains

For iPhone / iPad. Supported configuration can also sync to Apple TV.

## Create and select a group

In the policy area of **Proxies**, create a named group, choose its type and add members. Select the saved group on Home or as a rule target; creating it alone does not route traffic through it.

| Type | Use |
| --- | --- |
| URL test | Select using configured connectivity tests |
| Fallback | Prefer earlier members and switch when unavailable |
| Load balance | Distribute separate connections among available members |
| Smart | Learn from real connections and try another member when setup fails |

**Best Available** is the built-in automatic group. Empty or unusable groups require checking member sources, filters and test results.

## Tests and priority

Use a reachable test URL and keep the default interval initially. For Smart priority, lower values are preferred and 1.0 is neutral. Automatic changes normally affect new connections; reopen the target connection when checking a switch.

## Proxy chains

1. Add a chain in Proxies with at least two nodes.
2. Arrange the entry and subsequent nodes in forwarding order.
3. Select the chain on Home or in a rule.
4. Verify the final exit and compare performance.

Test every member separately first. Longer chains are not inherently faster, and a failure in any segment can break the chain. Avoid circular dependencies.
