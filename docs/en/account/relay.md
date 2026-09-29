# Relays and your own destinations

Choose the intended traffic path first. Website relay settings and client-side proxy chains are separate features.

| Goal | Feature |
| --- | --- |
| Enter through one service node and exit through another | [Internal relay](https://oixcloud.com/user/relay) |
| Forward from a service entry to your own deployed destination | Protocol-preserving mode in [External relay](https://oixcloud.com/user/cusrelay) |
| Reach an existing SSH, remote-desktop or game service | External relay's protocol-conversion mode, using an allowed destination port |
| Combine existing proxies on your device | [oixCloud chains](/en/oixcloud/policies) or [FlClash for oixCloud chains](/en/flclash/proxies) |

## Create an internal relay

1. Add a rule on the internal-relay page and select an entry and destination you are permitted to use.
2. To forward only selected traffic, enter supported domain, IP or port conditions. Leaving conditions empty matches all traffic.
3. Use hostnames rather than `https://`, paths or query strings. Follow the form's domain-matching guidance when including subdomains.
4. Save, update the client configuration, select the source node and establish a new connection to verify the exit.

Check WARP on both nodes first; a WARP-enabled node cannot simply be used as an ordinary relay endpoint.

## Create an external relay

1. Prepare the destination IP or domain, port and a server you can administer. Supply IPv4 resolution information where requested.
2. Select protocol-preserving or protocol-conversion mode and a source node. Their deployment instructions are not interchangeable.
3. In protocol-preserving mode, deploy the destination using the generated command and ensure its listening port matches the form; omitted ports follow the personal-port behavior described there.
4. Protocol-conversion mode reaches an existing service. Allowed destination ports are currently `22`, `23`, `3306`, `3389` or `10000–65535`, subject to form validation.
5. Run the page's destination check, save, update client connection details and test the actual application.

A successful destination check is only that check's result; also verify the TCP/UDP transport and application protocol you need. Protocol-preserving connection details contain account credentials and belong on your own devices.

::: warning Record settings before switching features
Enabling WARP removes internal relays using the logical node as source or destination and external relays using it as source. Disabling WARP does not recreate them.
:::

## Troubleshooting order

- Save rejected: check permissions, endpoint conflicts, WARP and allowed ports.
- Destination unreachable: verify listening address, firewall and service health, starting with a direct test of that service.
- Path unchanged: update the subscription, reconnect and confirm the source node is selected.
- Website forwarding: external relay is not for forwarding websites or web administration panels; choose an appropriate alternative within the service's usage rules.
