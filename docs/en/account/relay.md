# Relays and your own destinations

<div class="vps-providers">

## VPS recommendations {#vps-providers}

Providers with an established reputation in the industry

<div class="vps-provider-links">
  <a href="https://akile.ai/register?aff_code=f9cd9c94-8a32-491b-92d9-d7cb858748ed" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>AkileCloud</strong><small>Multi-region, high-bandwidth cloud servers</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://cloud.isif.net/login?affiliation_code=adiao123" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>ISIF Cloud</strong><small>Cloud servers and network services</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://my.rfchost.com/aff.php?aff=542" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>RFC Host</strong><small>Cloud VMs with international and China-optimized routes</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://nube.sh/invite/2624168578884Z" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>Nube Cloud</strong><small>Multi-region VMs and bare metal</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://www.dmit.io/aff.php?aff=21" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>DMIT</strong><small>Cloud servers and bare metal</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://hyvps.hytron.io/register?invite=8JqB2f37VzcP" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>HytronVPS</strong><small>APAC cloud servers with hourly billing</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://www.vultr.com/?ref=7118937" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>Vultr</strong><small>Cloud compute across global regions</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://www.vmrack.net?ref_code=5nHUCVdwUDD" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>VMRACK</strong><small>Cloud servers, bare metal and CDN</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
  <a href="https://lamhosting.com/aff.php?aff=148" target="_blank" rel="sponsored noopener"><span class="vps-provider-copy"><strong>LamHosting</strong><small>VPS, web hosting and dedicated servers</small></span><span class="vps-provider-arrow" aria-hidden="true">↗</span></a>
</div>
</div>

Choose the intended traffic path first, then open the corresponding feature under **Traffic Routes** in the user center. Website relay settings belong to your account; client-side proxy chains are configured in that client.

| Goal | Feature |
| --- | --- |
| Enter through one service node and pass through others in order | The path editor in [Internal relay](https://oixcloud.com/user/relay) |
| Give an entry several alternative exits, or forward selected domains/IPs | Internal relay's individual rules |
| Forward from a service entry to your own deployed destination | Protocol-preserving mode in [External relay](https://oixcloud.com/user/cusrelay) |
| Reach an existing SSH, remote-desktop or game service | External relay's protocol-conversion mode, using an allowed destination port |
| Combine existing proxies on your device | [oixCloud chains](/en/oixcloud/policies) or [FlClash for oixCloud chains](/en/flclash/proxies#proxy-chains) |

Home ISP nodes excluded from default subscriptions can serve as internal relay targets or exits, but not as entries or intermediate hops. External relay configuration remains unavailable. Adding them to a subscription does not lift these restrictions; existing settings remain active and can be deleted. Check [traffic routing restrictions](/en/account/nodes#isp-routing) and the [Home ISP user guide](/en/account/home-isp) before choosing nodes.

::: warning Check WARP and existing relays first
Enabling WARP removes internal relays using the logical node as source or destination and external relays using it as source. Disabling WARP does not recreate them. Record settings you still need first; relay creation also rejects nodes with a WARP conflict. A source already used for external relay cannot acquire an internal forwarding rule. A source with internal forwarding rules or another external relay cannot acquire a duplicate external relay either.
:::

## Internal relay

Internal relay forwards traffic from one service node through other service nodes before it leaves. The relay paths diagram shows your configuration, and the relay rules list below shows each segment. **The diagram is not a live connectivity test.** System forwarding rules can still affect the actual route.

### Add a multihop path

<figure class="guide-figure">
  <a href="/illustrations/account-relay-en.svg?v=20261105-2" target="_blank" rel="noopener" aria-label="Arrange entry and exit in the path editor">
    <img src="/illustrations/account-relay-en.svg?v=20261105-2" alt="Arrange entry and exit in the path editor" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

1. Open [Internal relay](https://oixcloud.com/user/relay) and select **Add path**.
2. Choose nodes in forwarding order: the first is the entry your client connects to, and the last is the exit that reaches the destination. Insert intermediate hops as needed. A path contains 2–17 nodes with no repeated node entry. When selecting a dedicated IP, check its specific address as well as its name.
3. Use the buttons beside each node to move it earlier, move it later or remove it. **Preview path** updates as you go.
4. Choose a priority and select **Save path**. Higher-priority rules take precedence at the same entry; user choices are Lowest, Low, Medium and High. If shared segments are affected, review the named entries and rules before confirming the change.

You do not need to add a terminating rule after the exit. If a system or All nodes rule could keep forwarding, the service adds a path end automatically; it does not appear in your rule list. If branches, domain conditions or an incomplete node group prevent whole-path editing, use **Single rule** as prompted.

### Add an individual rule

To give one entry node several destinations, or to forward only some websites, select **Add individual rule** under **Relay rules**.

1. Choose the source and priority, then select up to 10 destinations per submission. Existing destinations are marked **Added** and are not added again.
2. Destinations at the same priority form a load-balancing group; no more than four per group is recommended. Traffic selects an exit from the group rather than passing through every destination in order. Unavailable destinations can give way to other available targets or lower-priority rules; this does not guarantee seamless continuation of an interrupted connection.
3. To forward selected traffic, fill in **Forward only these domains / IPs** using [domain/IP matching](#domain-rules). Empty means all traffic. A higher-priority catch-all rule can override lower-priority conditional rules.

**All nodes (except Fusion)** is a broad entry scope, not just the node currently connected. In the list, **Edit path** opens the containing path (under **More** on phones) and **Single rule** changes one segment. Editing or deleting a segment affects every path that uses it.

### Status and applying changes

| Status | Meaning |
| --- | --- |
| Active | Eligible at its current priority and node state; individual requests still need to match the rule. |
| Standby | A higher-priority available rule takes precedence. |
| Unavailable | The source or destination does not meet current availability conditions. |
| Configuring | Just saved and waiting for a status update. |

After saving, refresh the client subscription or managed profile, use a relay-capable protocol and select the entry. Wait for node synchronization, close the target app's old connections, then establish a new connection and check the actual exit. These statuses alone do not prove website or streaming access.

## Create an external relay

External relay sends traffic to a specified host and port. Decide which mode you need before filling in the form. **Leaving Protocol keep mode unchecked selects protocol conversion.** Some lines automatically enable and lock protocol-preserving mode.

| Mode | Client connection details | Destination preparation |
| --- | --- | --- |
| Protocol-preserving | The subscription switches to the entry address, personal port and the account's AnyTLS credentials. | Run the form's generated installation command on your own destination server; its listening port must match the destination port. |
| Protocol-conversion | Keeps the node's original protocol and connection details; the source decrypts and forwards raw TCP/UDP. | Use an existing SSH, RDP, game or similar service; do not run the protocol-preserving installation command. |

<figure class="guide-figure">
  <a href="/illustrations/account-cusrelay-en.svg?v=20261105-2" target="_blank" rel="noopener" aria-label="Set the external relay destination and mode">
    <img src="/illustrations/account-cusrelay-en.svg?v=20261105-2" alt="Set the external relay destination and mode" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data · Click to enlarge</figcaption>
</figure>

1. Open [External relay](https://oixcloud.com/user/cusrelay), select **Add Rule**, and choose an available **Entry node** without conflicting rules. **Entry port** is your read-only personal port.
2. Enter **Target address** and **Target port**. Use an IP or domain without a scheme, path or port in the address field. The port starts at your personal port: change it to the service's actual listening port and keep a valid value. For ordinary external destinations, both modes allow `22`, `23`, `3306`, `3389` or `10000–65535`; system-node exceptions follow form validation. Localhost and ordinary private-network addresses cannot be external targets.
3. Optionally add a **Note**. Usually leave **Forward only these domains / IPs** empty; read the matching limits below before restricting it. The note becomes the subscription node name, is limited to 30 characters and must not duplicate another node or rule name. Empty matching rules forward all traffic.
4. Set **Protocol keep mode** according to the table. If enabled, run the command currently generated by the page on your destination server and check the listening port and firewall. The optional DNS field takes an IPv4 DNS-server address, not the destination server's address. The command contains account credentials; do not publish it or attach it to a ticket.
5. Select **Add relay rule** or **Save changes**, review the confirmation and submit. After returning to the list, check source, destination, ports and **Protocol keep** state. Refresh the client subscription or managed profile, select the corresponding node, create a new connection and test the application.

Entering the address automatically checks whether it is a system node and updates port guidance. **It does not probe the destination port or verify TCP, UDP or application reachability.** There is no separate connectivity-test button to find. Check the destination service directly, then test it through the relay.

External relay is intended for SSH/RDP, games and live-streaming services. It is not recommended for video-on-demand or large file transfers; forwarding websites or web administration panels is prohibited. For VPN, SS or other proxies, prefer a client-side proxy chain with the service node as its upstream proxy.

## Domain/IP matching {#domain-rules}

Internal relay's individual rules and the external relay form share **Forward only these domains / IPs**. Enter one pattern per line, or separate them with English commas.

| Example | Matches |
| --- | --- |
| `example.com` | This domain only. |
| `+.example.com` | The domain and all its subdomains. |
| `*.example.com` | Subdomains only, excluding the domain itself. |
| `1.1.1.1` | One IP address. |
| `example.com:443` | This domain on the specified port. |

Rules match domains/IPs and ports, not webpage paths or query strings. Do not use a full webpage URL as a path-specific rule. If the client resolves a domain to an IP before submitting it, domain matching may miss; check the destination the client submits, not only the browser address bar.

For external connections through the personal port, nonempty matching rules depend on a hostname identifiable at the start of the connection. Unidentified or unmatched connections are refused, and raw UDP is not forwarded with this restriction. Protocol-preserving mode cannot use it to filter final websites inside the encrypted tunnel. Do not enter domains that an SSH or game connection cannot expose. Usually leave it empty; use client routing or conditional internal relay rules to select routes by the final website.

## Multiple nodes and bulk deletion {#bulk-delete}

Internal and external relay lists have no pagination. Scroll the internal path diagram as needed; if it reports that not everything is shown, use the rule list below to inspect the full configuration. Use your browser's Find function to locate nodes in long lists.

1. Record paths, priorities, matching conditions and external targets you need to retain. Check internal segments shared by other entries in particular.
2. Select individual rules, or use **Select all** for every selectable rule in the list, including records below the visible screen.
3. Select **Delete selected**, review the count and warning, then confirm. The action applies to logical rule groups and their backend records, not just whichever backend row is displayed. This is different from changing node switches one at a time.
4. Wait for the result, check the list, refresh the subscription or managed profile and reconnect. If a network error leaves the result unclear, refresh before deciding whether to retry.

Deleting an internal segment can affect every path sharing it; it does not automatically delete all other segments of that path. Deleting an external rule stops the corresponding source's external forwarding. Deletion cannot be undone; recreate the settings manually if needed again.

## Other settings and performance {#other-settings}

| Setting | Relationship to relays |
| --- | --- |
| [HTTP/3](/en/account/http3) | Controls the supported client's transport to the entry, not every internal hop. External protocol-preserving mode uses AnyTLS and does not use this HTTP/3 transport setting. |
| [IPv4 Only](/en/account/unlock#ipv4-only) | Preserves relays. Passing through an enabled node carries the restriction to the internal path's final destination connection, but it cannot control an external server's or further third-party proxy's final exit. |
| [WARP](/en/account/unlock#warp-ip-preference) | Conflicts with ordinary relays using the same node; record settings as described above before enabling it. |
| [Streaming regions](/en/account/unlock#streaming-regions) | Internal forwarding chooses the next hop first. The node that finally handles the destination connection then applies its available unlock settings; setting a region only at the entry does not ensure the exit uses it. |

Every additional hop adds network round trips, failure points and forwarding overhead; the slowest segment limits throughput. Performance may improve only when the chosen route is more suitable. Load balancing does not combine node bandwidth or guarantee a faster single download. Compare direct node use with a single relay hop on the same network, destination and time window before adding hops. See [Traffic and billing](/en/account/traffic) for charging details.

## Troubleshooting order

- Save rejected: check node permissions, Home ISP restrictions, WARP, an occupied source and destination ports. Wait for an unavailable node to recover before saving.
- Existing relay conflict: open the named rule, adjust or delete it with **Single rule**, then save the path again. Several targets on one source are not a multihop path.
- Relay disabled for all nodes: delete the rule whose source is **All nodes** and destination is **Relay disabled**.
- System forwarding conflict: choose other nodes or contact support instead of repeatedly adding the same rule.
- External destination unreachable: check its listening address, port, firewall and service. In protocol-preserving mode, also check the current installation command, account credentials and client subscription.
- Path unchanged: wait for synchronization, refresh the subscription, close old connections, and check the selected entry and domain/IP matches.
- Unexpected speed or streaming region: reduce hops and check the final exit and unlock settings. The diagram, port guidance and latency tests cannot replace testing the actual application.
