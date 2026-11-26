---
description: Install oixCloud Helper on macOS, choose an integration mode and connect Surge
---

# oixCloud Helper and Surge

oixCloud Helper runs alongside Surge Mac and also supports local proxy ports and Linux. It is not an iPhone/iPad `.sgmodule` module.

<figure class="guide-figure">
  <a href="/illustrations/helper-surge-en.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="oixCloud Helper · Apply Helper’s profile in Surge">
    <img src="/illustrations/helper-surge-en.svg?v=20261127-3" alt="oixCloud Helper · Apply Helper’s profile in Surge" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

## Downloads and system requirements {#downloads}

Helper and FlClash for oixCloud have different requirements and packages.

| macOS | Helper file | Processor |
| --- | --- | --- |
| 14 or later | `oixcloud-external-proxy-program-arm64` | Apple Silicon |
| 14 or later | `oixcloud-external-proxy-program-amd64` | Intel |
| 12 / 13 | `oixcloud-external-proxy-program-legacy` | Universal: Apple Silicon and Intel |

Download the [public launcher ZIP](https://github.com/pickrui/oixcloud-external-proxy-program/archive/refs/heads/main.zip), extract it and run `启动 oixCloud.command`. The launcher selects the current release file for your OS and architecture. Alternatively, follow the [public installation guide](https://github.com/pickrui/oixcloud-external-proxy-program/blob/main/docs/configuration.md#english) for Homebrew or manual installation. macOS 11 is unsupported. Legacy has not been fully verified on physical hardware. The current stable Surge Mac also requires macOS 12.0 or later; use the [Surge website](https://nssurge.com/) to download and the [official update feed](https://nssurge.com/mac/latest/appcast-signed.xml) to check its minimum OS.

## Install and sign in

1. Download the launcher package above, or manually select the matching executable from the [latest release](https://github.com/pickrui/oixcloud-external-proxy-program/releases/latest).
2. For the launcher package, double-click `启动 oixCloud.command` and select resident startup on first use. For a directly downloaded executable, follow the public installation guide and start it with `--tray`.
3. Open the oixCloud menu-bar icon and choose **Sign in…**. Use email and password, paste the [full Access Token shown when you create it](/en/account/security#manual-token), or choose **Sign in with Google**. For Google, select the email of your existing oixCloud account in a browser on this Mac.
4. Return to Helper and wait for nodes to load. If you just activated a plan or the list is empty, choose **Nodes → Refresh nodes**.

Once signed in, Helper can load managed nodes without device approval. The first sign-in sends a new-device alert to your account; see [New devices and sign-in alerts](/en/account/security#device-approval).

## Choose an integration mode

Choose **Settings → Mode…**. Local port mapping is the default.

| Mode | Where to select nodes | Intended use |
| --- | --- | --- |
| Local port mapping | Surge policy groups | Each node has a local port; Surge selects or tests them. |
| Single port | Helper's node or automatic selection | Connections using that port follow Helper's current selection. |

In mapping mode, Helper tells you to select nodes in Surge; it does not show the single-port mode's node-selection list.

## Apply in Surge and verify

1. Confirm Surge Mac is installed and working.
2. In Helper, select **Client Setup → Apply in Surge** and confirm that Surge switches to the generated profile.
3. Enable System Proxy or Enhanced Mode in Surge as needed; start with Rule mode.
4. Select nodes in Surge for mapping mode, or in Helper for single-port mode.
5. Visit a target site and check its matched policy and outbound in Surge's connection records.

Keep both Helper and Surge running. A successful profile write does not necessarily mean automatic profile switching succeeded; select the written profile manually in Surge if prompted.

### Switch modes and capture traffic in Surge Mac {#capture-mode}

<figure class="guide-figure">
  <a href="/illustrations/helper-surge-mode-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Choose Outbound Mode, System Proxy or Enhanced Mode in the Surge menu">
    <img src="/illustrations/helper-surge-mode-en.svg?v=20261127-5" alt="Choose Outbound Mode, System Proxy or Enhanced Mode in the Surge menu" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. Keep Helper and Surge running. Open **Surge’s own menu bar icon** and choose **Outbound Mode → Rule-Based Proxy**, **Global Proxy** or **Direct Outbound**. Use Rule-Based Proxy for per-site routing.
2. Select **Set as System Proxy** for browsers and apps that follow macOS proxy settings. Run `scutil --proxy` in Terminal to check the local HTTP and HTTPS proxies. Visit a site and find the new request and policy in Surge Dashboard.
3. For an app that ignores system proxy settings or needs UDP, enable **Enhanced Mode** in the Surge menu and approve the requested system component. Make a new connection from that app and check its destination and policy in the request list. [Enhanced Mode](https://manual.nssurge.com/features/enhanced-mode.html)

### Set and test Surge DNS {#configure-dns}

Open the active editable Surge profile and select **Edit in Text Editor**. In the existing `[General]` section, edit `dns-server` for plain DNS or `encrypted-dns-server` for encrypted DNS, for example `encrypted-dns-server = https://1.1.1.1/dns-query`. Save and reload the profile in Surge. With a read-only managed profile, create a Linked Profile that references its proxies and policy groups and keeps an editable `[General]` section. [DNS settings](https://manual.nssurge.com/dns/dns-server.html) · [Managed and linked profiles](https://kb.nssurge.com/surge-knowledge-base/faq/common-faqs)

On versions that support DNS lookup, run `surge-cli dns lookup example.com` with a fresh domain and check the responding server and route. On older versions, use a resolver whose query records you can inspect and check a fresh lookup for a directly routed test domain. Proxied requests can also be resolved remotely. [Surge CLI manual](https://manual.nssurge.com/tools/cli.html)


### Choose a node or policy group {#routing}

<figure class="guide-figure">
  <a href="/illustrations/helper-nodes-en.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="Select Auto-select or a specific node in the single-port Helper menu">
    <img src="/illustrations/helper-nodes-en.svg?v=20261127-4" alt="Select Auto-select or a specific node in the single-port Helper menu" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Illustrated interface · Fictional data</figcaption>
</figure>

- **Local multi-port mapping**. Open the **Surge** menu bar icon, open the site's Select group, and choose a mapped node. If the selected member is another group, open it to choose its member.
- **Single port**. Open the **oixCloud → Nodes** menu in the menu bar. Choosing a specific node turns off auto-selection. Click **Auto-select** to turn it back on. Applications using that port share the chosen exit.

### Route a website or use a proxy chain {#routing-rules}

1. To keep a rule across Surge setup and refreshes, open or create `~/.config/oixcloud-external-proxy-program/custom.conf` in a text editor. Add the rule under the existing `[Rule]` section. In an empty file, enter both lines below.

   ```ini
   [Rule]
   DOMAIN-SUFFIX,example.com,DIRECT
   ```

2. To use a group, replace `DIRECT` with its name from the active Surge profile. Save the file, then open **Client Setup** in Helper and choose **Apply in Surge** or **Reapply in Surge**. Use Rule mode in Surge, revisit the site and check the matched rule and policy in its requests.
3. To chain two **remote proxy servers that Surge connects to itself**, append `underlying-proxy=EntryPolicyName` to the exit proxy in your own `[Proxy]` section. Target the exit policy from a rule or a Select group. Each local Helper mapping makes its own connection to its node. To relay managed nodes, eligible accounts can set up an [internal relay](/en/account/relay#internal-relay) and choose its entry in Surge. See the [Surge proxy chain parameter](https://manual.nssurge.com/policies/parameters.html#underlying-proxy).

## Filters, ports and maintenance

1. Open **Nodes → Node Filter**, choose lines, regions or names, check the preview and click **Save**. To return to Smart Selection, choose **Restore Default**, confirm and click **Save**.
2. Helper fetches nodes and updates its mappings after saving. If you edited the filter on the website, choose **Nodes → Refresh nodes** in Helper. Other devices follow the filter for the [subscription URL they use](/en/account/subscriptions).
3. If Surge still shows old nodes, choose **Client Setup → Reapply in Surge**. After applying manually once, you can enable **Automatically reapply Surge after node updates**. This option is off by default.

After changing the mode, local ports or LAN authentication, follow Helper’s prompt to apply the profile in Surge again. **Lean rules** is under **Client Setup**.

For other apps and devices, see [Local ports and LAN access](/en/other/helper-mapping). For server operation, see [Linux and runtime diagnostics](/en/other/helper-linux).

## Troubleshooting

| Message or symptom | Action |
| --- | --- |
| Local configuration service not ready | Wait for sign-in/node retrieval; check port conflicts and Helper's operation feedback. |
| Profile written but not switched | Select the generated profile in Surge and check capture settings. |
| Older version fails in Global mode | Return to Rule mode and reapply in Surge, then update Helper. Adding ordinary DIRECT rules does not fix a loop in Global mode. |
| DNS, TLS, certificate-time or captive-portal error | Follow the specific message, check DNS/time/network and complete network sign-in. Do not bypass HTTPS certificate validation. |
| Token or plan restricted | Check account state, plan and credentials rather than assuming every error is a node outage. |

Use **Tools → Diagnostics…**. Raw logs are in `~/Library/Logs/oixcloud/`; review private data before sharing. Further release guidance: [Helper public documentation](https://github.com/pickrui/oixcloud-external-proxy-program).
