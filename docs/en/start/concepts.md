---
description: "Nodes, groups and routing \u2014 setup, practical steps and troubleshooting"
---

# Nodes, groups and routing

Separate three questions: does traffic reach the client, which route should it take, and which node serves that route?

<figure class="guide-figure">
  <a href="/illustrations/start-concepts-en.svg?v=20261103-1" target="_blank" rel="noopener" aria-label="oixCloud · Traffic capture, routing rules, and node selection model">
    <img src="/illustrations/start-concepts-en.svg?v=20261103-1" alt="oixCloud · Traffic capture, routing rules, and node selection model" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface architecture simulation based on the maintained version · Fictional data</figcaption>
</figure>

| Item | Purpose | Example |
| --- | --- | --- |
| System proxy / VPN / TUN | Captures traffic from applications | Enable System Proxy or TUN in FlClash for oixCloud |
| Routing rules | Choose an outbound by domain, IP or other conditions | Send company domains direct and other requests through a proxy |
| Policy group | Selects a node from its members | Manual selection, URL test or fallback |
| Node | The server that establishes the proxy connection | Choose a node your account is permitted to use |
| Subscription | Fetches and updates nodes and configuration available to your plan | A dedicated client retrieves its managed profile at sign-in. Other compatible clients can import a URL in their format |

## Modes

| Mode | Behavior | Keep in mind |
| --- | --- | --- |
| Rule | Follows rules for proxy, direct access or rejection | Suitable for everyday use |
| Global | Uses the selected outbound for most captured traffic | Useful for a brief comparison; local-network handling still depends on client settings |
| Direct | Accesses destinations without a proxy node | Does not test whether a remote node works |

In oixFlow, the Proxy rule target follows the current proxy selection; a specific node or group uses that outbound. In FlClash for oixCloud, targets must exist in the active profile. `PROXY` may simply be a group name in one profile, not a universal keyword for the current proxy. Do not copy targets across clients without checking.

## Credentials

| Credential | Purpose |
| --- | --- |
| Access Token | Goes in the client’s token sign-in field. Scripts can also use it for account API calls. The full value appears once when created or regenerated |
| Subscription URL | Copy the full URL from [User Center → Subscription addresses](/en/start/quick-start#import-subscription) into the client’s subscription field. **Copy Token** in Subscription Management copies only part of the URL |
| Node password | Use the authentication details from the node’s **Config Info** when adding it manually |

Ending a sign-in on the website signs out every device using that credential. If a subscription URL was exposed, first identify whether it was a personal URL or the main subscription, then follow the [steps for that credential](/en/account/security#match-the-response-to-the-leak).
