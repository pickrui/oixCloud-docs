---
description: "System Proxy and TUN \u2014 setup, practical steps and troubleshooting"
---

# System Proxy and TUN

<span id="choose-traffic-capture"></span>

## Choose traffic capture {#mode}

1. Press play in **Dashboard → Status**. Under **Outbound mode**, choose **Rule**, **Global** or **Direct**. Use Rule for per-site routing. For Global, choose the global group's exit under **Proxies**. Direct sends ordinary captured requests straight to their destinations.
2. Enable System Proxy, TUN or Android VPN as described below, then reopen the site. Existing connections can keep their previous exit.
3. Open **Requests** in the desktop sidebar, or **Tools → More → Requests** on a phone or compact layout. Find the new record by domain and check its rule and exit. A new record confirms the client captured that request.

## Desktop System Proxy

<figure class="guide-figure">
  <a href="/illustrations/flclash-capture-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Enable System Proxy or TUN in network settings">
    <img src="/illustrations/flclash-capture-en.svg?v=20261127-5" alt="Enable System Proxy or TUN in network settings" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

On Windows, macOS or Linux, enable **System Proxy** on the dashboard or under **Tools → Advanced Configuration → Network → System Proxy**. Open a site in a browser that follows the system proxy, then find the new request as described above.

| Platform | How to check the system proxy |
| --- | --- |
| Windows | In **Settings → Network & internet → Proxy**, check the manual proxy address and port. |
| macOS | Run `scutil --proxy` in Terminal. Check whether HTTP and HTTPS proxies are enabled and inspect their addresses and ports. |
| Linux desktop | Open the desktop environment’s network proxy settings. Check the HTTP and HTTPS addresses and ports, then test with an app that uses those settings. |

The address should point to this device and the port should match the mixed port under **Tools → General → Port**. For an app with its own proxy settings, enter that port in the app or enable TUN below.

## TUN

Enable **TUN** on the desktop dashboard or under **Tools → Advanced Configuration → Network → Options**. Complete any system permission prompt and wait for the dashboard to show TUN is enabled. To verify it, make a new connection from an app that ignores the system proxy and has no HTTP proxy configured. Look for its destination and exit in **Requests**.

On Windows and macOS, **Tools → Network self-check** can also check TUN routes. On Linux, if the request is missing, check whether the target is excluded from routing or is handled by another VPN.

<span id="android-and-verification"></span>
<span id="android-vpn"></span>

## Android

<figure class="guide-figure">
  <a href="/illustrations/flclash-android-vpn-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Enable Android VPN in Network, then start from the dashboard">
    <img src="/illustrations/flclash-android-vpn-en.svg?v=20261127-5" alt="Enable Android VPN in Network, then start from the dashboard" width="1120" height="1120" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. Turn on **VPN** in **Tools → Advanced Configuration → Network**, start from the dashboard and accept Android’s VPN connection request on first use.
2. Confirm FlClash for oixCloud is connected in Android’s VPN settings. Make a new request from an app included by [access control](/en/flclash/android). Check the exit under **Tools → More → Requests**.
3. On Android 10 and later, the separate **System Proxy** option in Network can advertise an HTTP proxy through the VPN. Enabling **VPN** is enough to capture eligible apps.

## Verify

If a request appears with the wrong exit, check Outbound Mode, the matched rule and the selected group. If it never appears, check traffic capture, excluded apps and other VPNs. To verify the resolver, [inspect a DNS query](/en/flclash/dns#configure-dns).

## Proxy conflicts and occupied ports

On Windows/macOS, startup may report a possible proxy conflict and list existing system proxies, a PAC script or another VPN/tunnel. Identify their purpose and open **Network self-check** from the message if needed. This is evidence to investigate, not proof of the failure's cause.

If the mixed port is occupied, the port dialog suggests an available port when it finds one. Review it, choose **Save and retry**, and update apps with manually configured proxy addresses. A successful port check does not reserve it against another process using it later.
