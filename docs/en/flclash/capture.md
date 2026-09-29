---
description: "System Proxy and TUN \u2014 setup, practical steps and troubleshooting"
---

# System Proxy and TUN

## Choose traffic capture

| Situation | Check first |
| --- | --- |
| Desktop browser or app following system settings | System Proxy |
| Apps ignoring system proxy, some games and UDP | TUN |
| Android | VPN permission and app access control |
| App with its own proxy settings | Its protocol, address and port |

Rule/Global/Direct modes act after capture; they do not replace the capture switch.

## Desktop System Proxy

Start the client and enable System Proxy. Check that system HTTP/HTTPS settings use its local port. Other proxy software, a PAC script or organization policy may override them.

Apps with independent settings need separate configuration. If networking breaks after closing the client, check for a stale system proxy pointing to a stopped port.

## TUN

Enable TUN and complete administrator authorization. A rejected permission request cannot be fixed by repeatedly toggling the switch.

After connection, check exclusions, routes, DNS and competing VPNs. Change MTU or stack only with a specific comparison in mind, and restart as required by the interface.

## Android and verification

Allow the system VPN request and inspect [app access control](/en/flclash/android). Compare the target app with connection records. Windows/macOS users can run [network checks](/en/flclash/diagnostics) for listeners, system proxy and TUN state.
