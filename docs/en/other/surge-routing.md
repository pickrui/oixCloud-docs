# Surge Mac traffic capture, DNS and routing {#surge-routing}

## Switch modes and capture traffic in Surge Mac {#capture-mode}

<figure class="guide-figure">
  <a href="/illustrations/helper-surge-mode-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Choose Outbound Mode, System Proxy or Enhanced Mode in the Surge menu">
    <img src="/illustrations/helper-surge-mode-en.svg?v=20261127-5" alt="Choose Outbound Mode, System Proxy or Enhanced Mode in the Surge menu" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. Keep Helper and Surge running. Open **Surge’s own menu bar icon** and choose **Outbound Mode → Rule-Based Proxy**, **Global Proxy** or **Direct Outbound**. Use Rule-Based Proxy for per-site routing.
2. Select **Set as System Proxy** for browsers and apps that follow macOS proxy settings. Run `scutil --proxy` in Terminal to check the local HTTP and HTTPS proxies. Visit a site and find the new request and policy in Surge Dashboard.
3. For an app that ignores system proxy settings or needs UDP, enable **Enhanced Mode** in the Surge menu and approve the requested system component. Make a new connection from that app and check its destination and policy in the request list. [Enhanced Mode](https://manual.nssurge.com/features/enhanced-mode.html)

## Set and test Surge DNS {#configure-dns}

Open the active editable Surge profile and select **Edit in Text Editor**. In the existing `[General]` section, edit `dns-server` for plain DNS or `encrypted-dns-server` for encrypted DNS, for example `encrypted-dns-server = https://1.1.1.1/dns-query`. Save and reload the profile in Surge. With a read-only managed profile, create a Linked Profile that references its proxies and policy groups and keeps an editable `[General]` section. [DNS settings](https://manual.nssurge.com/dns/dns-server.html) · [Managed and linked profiles](https://kb.nssurge.com/surge-knowledge-base/faq/common-faqs)

On versions that support DNS lookup, run `surge-cli dns lookup example.com` with a fresh domain and check the responding server and route. On older versions, use a resolver whose query records you can inspect and check a fresh lookup for a directly routed test domain. Proxied requests can also be resolved remotely. [Surge CLI manual](https://manual.nssurge.com/tools/cli.html)

## Choose a node or policy group {#routing}

<figure class="guide-figure">
  <a href="/illustrations/helper-nodes-en.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="Select Auto-select or a specific node in the single-port Helper menu">
    <img src="/illustrations/helper-nodes-en.svg?v=20261127-4" alt="Select Auto-select or a specific node in the single-port Helper menu" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Illustrated interface · Fictional data</figcaption>
</figure>

- **Local multi-port mapping**. Open the **Surge** menu bar icon, open the site's Select group, and choose a mapped node. If the selected member is another group, open it to choose its member.
- **Single port**. Open the **oixCloud → Nodes** menu in the menu bar. Choosing a specific node turns off auto-selection. Click **Auto-select** to turn it back on. Applications using that port share the chosen exit.

## Route a website or use a proxy chain {#routing-rules}

1. To keep a rule across Surge setup and refreshes, open or create `~/.config/oixcloud-external-proxy-program/custom.conf` in a text editor. Add the rule under the existing `[Rule]` section. In an empty file, enter both lines below.

   ```ini
   [Rule]
   DOMAIN-SUFFIX,example.com,DIRECT
   ```

2. To use a group, replace `DIRECT` with its name from the active Surge profile. Save the file, then open **Client Setup** in Helper and choose **Apply in Surge** or **Reapply in Surge**. Use Rule mode in Surge, revisit the site and check the matched rule and policy in its requests.
3. To chain two **remote proxy servers that Surge connects to itself**, append `underlying-proxy=EntryPolicyName` to the exit proxy in your own `[Proxy]` section. Target the exit policy from a rule or a Select group. Each local Helper mapping makes its own connection to its node. To relay managed nodes, eligible accounts can set up an [internal relay](/en/account/relay#internal-relay) and choose its entry in Surge. See the [Surge proxy chain parameter](https://manual.nssurge.com/policies/parameters.html#underlying-proxy).
