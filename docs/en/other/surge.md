---
description: Install oixCloud Helper on macOS, choose an integration mode and connect Surge
---

# oixCloud Helper and Surge

oixCloud Helper runs alongside Surge Mac and also supports local proxy ports and Linux. It is not an iPhone/iPad `.sgmodule` module.

<figure class="guide-figure">
  <a href="/illustrations/helper-surge-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Helper: apply the profile in Surge">
    <img src="/illustrations/helper-surge-zh.svg?v=20260929-2" alt="Helper: apply the profile in Surge" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

## Install and sign in

1. Download the release matching your macOS version and processor from the [download center](https://oixcloud.com/client/macos) or [public releases](https://github.com/pickrui/oixcloud-external-proxy-program/releases). Use Legacy builds for macOS 12/13 and the matching architecture for macOS 14 or later.
2. Follow the launcher instructions included in the package. Packages containing `启动 oixCloud.command` offer a persistent launch option.
3. Open **Account → Sign in…** from the oixCloud menu-bar icon and use email/password or an Access Token.
4. Wait for plan and node retrieval. The top of the menu shows progress and results; act on the specific error if an operation fails.

## Choose an integration mode

Use **Connection → Mode…**. Local port mapping is the default.

| Mode | Where to select nodes | Intended use |
| --- | --- | --- |
| Local port mapping | Surge policy groups | Each node has a local port; Surge selects or tests them. |
| Single port | Helper's node or automatic selection | Connections using that port follow Helper's current selection. |

In mapping mode, Helper tells you to select nodes in Surge; it does not show the single-port mode's node-selection list.

## Apply in Surge and verify

1. Confirm Surge Mac is installed and working.
2. Use **Connection → Apply in Surge** in Helper and verify Surge actually switches to the generated profile.
3. Enable System Proxy or Enhanced Mode in Surge as needed; start with Rule mode.
4. Select nodes in Surge for mapping mode, or in Helper for single-port mode.
5. Visit a target site and check its matched policy and outbound in Surge's connection records.

Keep both Helper and Surge running. A successful profile write does not necessarily mean automatic profile switching succeeded; select the written profile manually in Surge if prompted.

## Filters, ports and maintenance

**Connection → Node filter…** previews nodes by line, region and name. **Restore default** clears the draft; click **Save** afterwards. Saving fetches nodes and updates mappings, after which you should run **Apply in Surge** again.

Reapply after changing mode, local port, LAN authentication or filtering so Surge does not retain removed nodes or old ports. Simplified rules remain available in connection settings; old `oixParams` / `oixDefaultParams` settings no longer control node filtering.

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
