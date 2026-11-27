---
description: "Nodes, groups and chains \u2014 setup, practical steps and troubleshooting"
---

# Nodes, groups and chains

To add sources first, see [individual third-party nodes](/en/flclash/import-nodes#single-node), [subscription imports](/en/flclash/import-nodes#other-subscription) and [combining them with managed nodes](/en/flclash/mixed-nodes).

## Illustrated steps

<figure class="guide-figure">
  <a href="/illustrations/flclash-proxies-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Select a node in its group">
    <img src="/illustrations/flclash-proxies-en.svg?v=20261127-5" alt="FlClash for oixCloud · Select a node in its group" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

<span id="choose-outbound"></span>

## Select a node

1. On desktop or Android, open **Proxies**. Use the group tabs or list to open the group for the site. To find its name, visit the site once and look at the matched rule and group in **Requests**.
2. In a Select group, tap the node to use. If you select another group as the member, open that group to choose its member. Opening a group tab displays its members. Selecting a member changes the outbound.
3. Open a new connection to the site and check its exit in **Requests**. Different sites can match different groups in Rule mode.

## Automatic groups

| Group type | What selecting a member does |
| --- | --- |
| Manual (Selector) | Uses the member you select. |
| URLTest or Fallback | Tap a node to set it as **Preferred**. Tap the same node again to clear the preference and resume automatic selection. |
| Load balancing and other group types | The group chooses according to its strategy. |

On desktop, right-click a member to see its selection or preference. On Android, touch and hold it.

Latency measures response time on the current network. If all tests fail, check the test address and the local network. See [diagnostics](/en/flclash/diagnostics).

## Personal groups

In **Profiles**, open the subscription's menu and choose **Override → Overlay → Proxy group**. For a custom profile, open **Edit** and find **Proxy group**. Add a name, type and members, then save. Assign the group to the site's [rule](/en/flclash/rules#website-rule). Members can be nodes or other groups. Avoid circular references.

To send traffic through a specific entry and exit, follow [the proxy chain guide](/en/flclash/proxy-chains).
