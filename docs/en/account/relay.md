# Relays and your own destinations

Choose the intended traffic path first. Website relay settings and client-side proxy chains are separate features.

| Goal | Feature |
| --- | --- |
| Enter through one service node and exit through one or more others | [Internal relay](https://oixcloud.com/user/relay) |
| Forward from a service entry to your own deployed destination | Protocol-preserving mode in [External relay](https://oixcloud.com/user/cusrelay) |
| Reach an existing SSH, remote-desktop or game service | External relay's protocol-conversion mode, using an allowed destination port |
| Combine existing proxies on your device | [oixCloud chains](/en/oixcloud/policies) or [FlClash for oixCloud chains](/en/flclash/proxies) |

## Internal relay

Internal relay forwards traffic from one service node through other service nodes before it leaves. The relay paths diagram at the top of the page shows your configuration, and the relay rules list below shows each segment of those paths.

### Add a multihop path

1. Open [Internal relay](https://oixcloud.com/user/relay) and select Add path.
2. Choose nodes in the order traffic passes through them. The first is the entry node your client connects to; the last is the exit node, where traffic reaches the website. Insert relay nodes in between as needed; a path can include up to 17 nodes.
3. Use the buttons beside each node to move it earlier, move it later or remove it. Preview path updates as you go.
4. Choose a priority and select Save path. If the change affects segments shared with your other entry nodes, the page lists the affected entries and rules and saves only after you confirm.

Nothing needs to be configured after the exit node, and there is no "do not forward" option. The service adds a path end automatically only when another system rule could forward traffic from the exit node; it does not appear in your rule list.

### Add an individual rule

To give one source node several destinations, or to forward only some websites, select Add individual rule under Relay rules.

1. Choose the source node and priority, then select one or more destination nodes. Destinations that already exist are marked Added and are not added again.
2. Destinations at the same priority form a load-balancing group. When the current destination is unavailable, traffic fails over to another available destination in the group or to a lower-priority rule.
3. To forward only selected traffic, enter one domain or IP per line under Forward only these domains / IPs, such as `example.com`, `+.example.com`, `1.1.1.1` or `example.com:443`. Do not include `https://`, paths or query strings. Leaving it empty matches all traffic.

In the rule list, Edit path opens the whole path that contains the rule, and Edit rule changes only that segment. Editing or deleting a segment affects every path that uses it.

### Status and applying changes

| Status | Meaning |
| --- | --- |
| Active | The node uses this rule now |
| Standby | Not used while a higher-priority rule is available |
| Unavailable | The source or destination node is currently unavailable |
| Configuring | Just saved and waiting for a status update |

- After saving, update your subscription or managed configuration, select the entry node, open a new connection and check the actual exit.
- Check WARP on both nodes first; a WARP-enabled node cannot be used as an ordinary relay node.

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
- Conflicts with existing relay settings: open the rule named in the message, adjust or delete it with Edit rule, then save the path again.
- Relay is disabled for all your nodes: delete the rule whose source is All nodes and whose destination is Relay disabled.
- Conflicts with system forwarding settings: choose different nodes or contact support.
- Destination unreachable: verify listening address, firewall and service health, starting with a direct test of that service.
- Path unchanged: update the subscription, reconnect and confirm the entry node is selected.
- Website forwarding: external relay is not for forwarding websites or web administration panels; choose an appropriate alternative within the service's usage rules.
