---
description: "Nodes, groups and routing \u2014 setup, practical steps and troubleshooting"
---

# Nodes, groups and routing

Separate three questions: does traffic reach the client, which route should it take, and which node serves that route?

<figure class="guide-figure">
  <a href="/illustrations/start-concepts-en.svg?v=20261103-1" target="_blank" rel="noopener" aria-label="oixCloud · Traffic capture, routing rules, and node selection model">
    <img src="/illustrations/start-concepts-en.svg?v=20261103-1" alt="oixCloud · Traffic capture, routing rules, and node selection model" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface architecture simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

| Item | Purpose | Example |
| --- | --- | --- |
| System proxy / VPN / TUN | Captures traffic from applications | Enable System Proxy or TUN in FlClash for oixCloud |
| Routing rules | Choose an outbound by domain, IP or other conditions | Send company domains direct and other requests through a proxy |
| Policy group | Selects a node from its members | Manual selection, URL test or fallback |
| Node | The server that establishes the proxy connection | Choose a node your account is permitted to use |
| Subscription | Updates nodes and some configuration from a provider | A provider's managed profile |

## Modes

| Mode | Behavior | Keep in mind |
| --- | --- | --- |
| Rule | Follows rules for proxy, direct access or rejection | Suitable for everyday use |
| Global | Uses the selected outbound for most captured traffic | Useful for a brief comparison; local-network handling still depends on client settings |
| Direct | Accesses destinations without a proxy node | Does not test whether a remote node works |

In oixCloud, the Proxy rule target follows the current proxy selection; a specific node or group uses that outbound. In FlClash for oixCloud, targets must exist in the active profile. `PROXY` may simply be a group name in one profile, not a universal keyword for the current proxy. Do not copy targets across clients without checking.

## Credentials

| Credential | Purpose |
| --- | --- |
| Access Token | Signs into an account in the client |
| Subscription URL | Downloads nodes and configuration |
| Node password | Authenticates a server connection |

These credentials are not interchangeable.

Signing out, revoking a token and resetting a subscription have different effects. See [account security](/en/account/security).
