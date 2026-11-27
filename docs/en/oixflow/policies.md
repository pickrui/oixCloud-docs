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

A personal group can include standalone nodes and nodes from third-party and managed subscriptions; follow [Create a mixed group](/en/oixflow/mixed-nodes#mixed-group). **All** in the subscription-grouped member picker selects current nodes, not future additions to that source. The built-in Best Available group's **Include All Proxies** is a separate setting; when enabled, third-party nodes can participate too.

## Tests and priority

Use a reachable test URL and keep the default interval initially. For Smart priority, lower values are preferred and 1.0 is neutral. Do not exclude large numbers of members based on one high-latency result. Automatic changes normally affect new connections; reopen the target connection when checking a switch.

### Why Best Available latency may stay unchanged {#retesting}

In the maintained version, the built-in **Best Available** skips a scheduled background retest if no proxied traffic has occurred since the previous check. An interval does not imply continuous idle testing. Network changes, failed connections or relevant configuration changes can still trigger a check. Do not generalize this behavior to every custom group or another client.

To compare nodes immediately, long-press one under **Proxies → Servers** and choose **Test Latency**. Use **Test All** in the toolbar for a batch, or a folder's menu to test its members. Tap an existing latency result to view details.

After testing finishes, check Best Available's current choice on Home and create a new request to inspect the outbound. A low manual result does not guarantee automatic selection or service availability. An unchanged number alone is not a connection failure.

To send traffic through a specific entry and exit, follow [the proxy chain guide](/en/oixflow/proxy-chains).
