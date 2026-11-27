# oixClash traffic capture, DNS and node selection {#oixclash-network}

## Switch modes and verify LAN capture {#capture-mode}

Under **运行** (Run), select **开启** (Enable), then **保存并应用** (Save and apply). Wait for the service to resume. Open **运行 → 节点切换 → 打开控制面板** (Run → Node switching → Open dashboard). In MetaCubeXD go to **Config → Core Config → Running Mode** and choose **Rule**, **Global** or **Direct**. Use Rule for per-site routing. Revisit a site from an included device and find its new record by device IP or hostname in **Connections** to check the exit.

This plugin uses the router firewall to capture LAN traffic and generates a profile with TUN off. Devices can use it through their gateway without setting a system proxy or enabling TUN in the dashboard. If a request is missing, check device policies, the gateway, common ports and the mainland IP bypass option.

## Set DNS on this router {#configure-dns}

<figure class="guide-figure">
  <a href="/illustrations/oixclash-dns-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Custom direct and proxy DNS fields and the Merlin save button">
    <img src="/illustrations/oixclash-dns-en.svg?v=20261127-5" alt="Custom direct and proxy DNS fields and the Merlin save button" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English guide to the Chinese plugin interface · Fictional data</figcaption>
</figure>

1. Open **DNS 设置 → 展开 DNS 设置** (DNS settings → Expand DNS settings). Leave **使用自定义 DNS** (Use custom DNS) unchecked to follow the subscription. Select it for a local override.
2. Under **直连 DNS** (Direct DNS), enter an IPv4 address with an optional port, or an HTTPS URL. **代理 DNS** (Proxy DNS) accepts HTTPS URLs and sends queries through the `Proxy` group. Omit the `#Proxy` suffix. Each field takes one to four addresses separated by commas.
3. Select **保存并应用** (Save and apply). Once running, select **自检** (Self-check). On an included device, query a fresh domain using the router as its DNS server. To confirm a particular upstream, check that domain in the resolver’s own query records. **面板下发的 DNS** always shows the subscription’s original values.
4. To restore the subscription’s DNS, clear **使用自定义 DNS** and save. The router retains your entries for later use.

## Choose a node, policy group or relay entry {#routing}

<figure class="guide-figure">
  <a href="/illustrations/metacubexd-groups-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Choose a node in the MetaCubeXD dashboard opened by oixClash">
    <img src="/illustrations/metacubexd-groups-en.svg?v=20261127-5" alt="Choose a node in the MetaCubeXD dashboard opened by oixClash" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Illustrated interface · Fictional data</figcaption>
</figure>

1. In the router's Software Center, open oixClash and find **运行 → 节点切换** (Run → Node switching). Click **打开控制面板** (Open dashboard). In MetaCubeXD, open **Proxies**, expand the site's Select group and choose a node. If you select a subgroup, open it to choose its member.
2. To send a site through a particular group, point its domain to that group in [account custom rules](/en/other/oixclash-rules#routing-rules). Revisit the site from a LAN device and check the matched rule and exit in the dashboard's **Connections** view.
3. The plugin's node switcher selects an existing outbound. For multihop routing with managed nodes, eligible accounts can configure an [internal relay](/en/account/relay#internal-relay) on the website. Then select the path's **entry node** in the router's Select group.
