# Helper local ports and LAN access

Complete [installation and sign-in](/en/other/surge) first. The default loopback listener is for Surge or another proxy app on the same Mac.

<figure class="guide-figure">
  <a href="/illustrations/helper-lan-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Helper: local ports and LAN access">
    <img src="/illustrations/helper-lan-zh.svg?v=20260929-2" alt="Helper: local ports and LAN access" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

## Configuration ports versus proxy ports

| Default port | Purpose |
| --- | --- |
| `6172` | HTTP configuration/node-list service, not an ordinary HTTP proxy |
| `7100` | Mixed proxy in menu-bar single-port mode |
| Starting at `7200` | Per-node listeners in mapping mode |

Check actual values under **Connection → Local port…**. After changing them, update consuming clients and run **Apply in Surge** again.

The default configuration service is `http://127.0.0.1:6172`:

| Path | Content |
| --- | --- |
| `/` | Surge profile for the current mode |
| `/list` | Surge `policy-path` node list |
| `/clash` | Clash YAML Provider to reference from a full configuration |
| `/opensurge` | OpenSurge import configuration |
| `/map` | Menu-bar mode's port-mapping configuration |
| `/health` | HTTP-service liveness check |
| `/status` | Runtime and mapping status |

Use **Copy local node list URL** for local apps expecting a node list. **Export OpenSurge configuration** produces a different import format, not a universal profile for every client.

## Access from trusted LAN devices

1. Set a dedicated username/password under **Connection → LAN authentication…**.
2. Enable **Allow LAN access** and permit the required trusted-LAN traffic through the system firewall.
3. On the other device, use the Helper computer's LAN IP, not `127.0.0.1`. Choose the configuration or proxy port according to the task.
4. Supply HTTP Basic credentials when retrieving protected profiles, or HTTP/SOCKS5 proxy credentials for the proxy protocol in use.
5. Refresh the receiving client's configuration and test a new connection. Update it again when the Mac's IP, port or authentication changes.

Allow only the network scope you need; do not expose these ports publicly through router forwarding. LAN authentication is separate from your oixCloud sign-in credentials.

## Fixed mappings and node changes

In CLI configuration, omitting `listeners` enables automatic mappings, `[]` creates no mapped listeners, and a nonempty array creates only declared listeners. A fixed node name must exactly match the current list; filtering it out prevents that listener from being created.

Automatic mappings change with the node list. Do not assume an automatic port permanently identifies one node. Use fixed mappings for applications requiring stable ports and confirm the target node remains available.

## UDP and reachability

SOCKS5 UDP forwarding uses separate association ports; opening only the TCP proxy port is insufficient. Containers/NAT also need a UDP range and a reachable advertised address; see [Linux and runtime diagnostics](/en/other/helper-linux).

For LAN failures, check listening address, computer IP, firewall, credentials, retained nodes and port conflicts in that order. Reaching the configuration page does not prove an upstream proxy works.
