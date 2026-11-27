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
3. Open the oixCloud menu-bar icon and choose **Sign in…**. Use email and password, paste the [full Access Token shown when you create it](/en/account/access-tokens#manual-token), or choose **Sign in with Google**. For Google, select the email of your existing oixCloud account in a browser on this Mac.
4. Return to Helper and wait for nodes to load. If you just activated a plan or the list is empty, choose **Nodes → Refresh nodes**.

Once signed in, Helper can load managed nodes without device approval. The first sign-in sends a new-device alert to your account; see [New devices and sign-in alerts](/en/account/client-sign-in#device-approval).

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

## Filters, ports and maintenance

1. Open **Nodes → Node Filter**, choose lines, regions or names, check the preview and click **Save**. To return to Smart Selection, choose **Restore Default**, confirm and click **Save**.
2. Helper fetches nodes and updates its mappings after saving. If you edited the filter on the website, choose **Nodes → Refresh nodes** in Helper. Other devices follow the filter for the [subscription URL they use](/en/account/subscriptions).
3. If Surge still shows old nodes, choose **Client Setup → Reapply in Surge**. After applying manually once, you can enable **Automatically reapply Surge after node updates**. This option is off by default.

After changing the mode, local ports or LAN authentication, follow Helper’s prompt to apply the profile in Surge again. **Lean rules** is under **Client Setup**.

For other apps and devices, see [Local ports and LAN access](/en/other/helper-mapping). For server operation, see [Linux and runtime diagnostics](/en/other/helper-linux).

## After the first connection

- [Set DNS, select nodes or add routing rules in Surge](/en/other/surge-routing)

## Troubleshooting

| Message or symptom | Action |
| --- | --- |
| Local configuration service not ready | Wait for sign-in/node retrieval; check port conflicts and Helper's operation feedback. |
| Profile written but not switched | Select the generated profile in Surge and check capture settings. |
| Older version fails in Global mode | Return to Rule mode and reapply in Surge, then update Helper. Adding ordinary DIRECT rules does not fix a loop in Global mode. |
| DNS, TLS, certificate-time or captive-portal error | Follow the specific message, check DNS/time/network and complete network sign-in. Do not bypass HTTPS certificate validation. |
| Token or plan restricted | Check account state, plan and credentials rather than assuming every error is a node outage. |

Use **Tools → Diagnostics…**. Raw logs are in `~/Library/Logs/oixcloud/`; review private data before sharing. Further release guidance: [Helper public documentation](https://github.com/pickrui/oixcloud-external-proxy-program).
