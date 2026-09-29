---
description: "Nodes, groups and routing \u2014 setup, practical steps and troubleshooting"
---

# Nodes, groups and routing

Separate three questions: does traffic reach the client, which route should it take, and which node serves that route?

| Item | Purpose |
| --- | --- |
| System proxy / VPN / TUN | Captures traffic from applications |
| Routing rules | Choose proxy, direct access or rejection by destination |
| Policy group | Selects a member manually or automatically |
| Node | The server that establishes the proxy connection |
| Subscription | Updates nodes and some configuration from a provider |

## Modes

- **Rule:** follows routing rules; suitable for everyday use.
- **Global:** uses the selected outbound for most captured traffic. Local-network handling still depends on the client.
- **Direct:** accesses destinations without a proxy node; it does not test whether a remote node works.

PROXY usually follows the current proxy selection rather than naming one fixed server. A rule pointing to a particular node or group overrides that selection for its matching traffic.

## Credentials

An Access Token signs into an account, a subscription URL downloads configuration, and a node password authenticates a server connection. They are not interchangeable.

Signing out, revoking a token and resetting a subscription have different effects. See [account security](/en/account/security).
