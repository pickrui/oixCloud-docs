---
description: "DNS overrides and network settings \u2014 setup, practical steps and troubleshooting"
---

# DNS overrides and network settings

<span id="configure-dns"></span>

## Begin with default DNS

<figure class="guide-figure">
  <a href="/illustrations/flclash-dns-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Add DNS override entries">
    <img src="/illustrations/flclash-dns-en.svg?v=20261127-5" alt="FlClash for oixCloud · Add DNS override entries" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. Open **Tools → Advanced Configuration → DNS**. To change the resolver for ordinary websites, select **+** at the top right and add **Nameserver**. If it is already listed, open that entry. Edit the list, enter a reachable DNS server and confirm.
2. Keep this profile active. Use a test app to visit a fresh, resolvable domain. Open **DNS queries** in the desktop sidebar, or **Tools → More → DNS queries** on a phone or compact layout.
3. Open the record for that domain and check **Upstream**. If the answer was cached, try another fresh domain. An app using its own encrypted DNS may send the query outside this view.
4. To undo the change, restore the previous server list. If you added the override during this test, remove it to inherit the profile’s value again.

App-level overrides apply to the selected fields across profiles. A custom profile’s own DNS settings take priority. Scripts and domain-specific policies can also affect the result. For proxy servers’ own hostnames, see the fields table below.

## Fake-IP and real addresses

DNS mode affects domain identification and routing. Some LAN services or apps need compatible handling. Adjust only confirmed exceptions rather than excluding every domain.

## Ports and DNS interception

Check the mixed port under **Tools → General → Port**; TUN options are under **Tools → Advanced Configuration → Network**. If a port is occupied, choose an unused one and update apps with manually configured proxy ports.

On macOS, **Auto-set system DNS** adjusts the network service’s DNS while TUN is running. The **Nameserver** field above chooses the core’s upstream resolver. For company domains, confirm resolver reachability and routing; switching to public DNS may not help.

## Managed-node lookups

Check system time, client version, profile and networking. Windows/macOS diagnostics distinguish system, core and managed-node DNS. One failed answer does not by itself prove an invalid token.

## Identify which field you need

| Field or switch | Role |
| --- | --- |
| Nameservers | Resolve ordinary destination domains |
| Proxy nameservers | Resolve proxy servers' own hostnames |
| Respect rules | Routes DNS connections according to rules; avoid circular DNS/proxy dependencies |
| Add / remove override entries | Selects which fields replace the profile's values; fields not added remain inherited |

For failed node-hostname resolution, inspect proxy nameservers first. For internal company domains, check internal DNS and network reachability. Repeatedly switching fake-IP and real-address modes is not a substitute for identifying the failing stage.

Record original values and test the same domain through the same node. With TUN active, a diagnostic “system path” can still pass through TUN; interpret comparisons alongside current capture settings.

## Change only the remote node's IPv4 exit {#ipv4-only}

The client's DNS IPv6 option and TUN capture settings are separate from remote egress restrictions. To make destinations see IPv4, use [IPv4 Only](/en/account/unlock#ipv4-only) and confirm traffic uses the selected supported node. Direct traffic or traffic bypassing the client is outside its scope.

If a test reports a resolver on your local network, follow [the DNS leak checks](/en/flclash/dns-leaks).
