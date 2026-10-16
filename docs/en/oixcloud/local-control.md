---
description: "Use HTTPS on the same LAN to inspect oixCloud, select nodes and read recent logs"
---

# Local Controller

For iPhone/iPad versions with **Settings → Local Controller**. It lets a device on the same Wi-Fi or Ethernet network control oixCloud on this device. It is separate from [serving proxy traffic to other devices](/en/oixcloud/networks).

## Enable and connect

1. Connect oixCloud's VPN, open **Settings → Local Controller**, and enable **Allow Local Access**.
2. The default port is `9091`. To change it, choose an unused port from `1024–65535`, different from the HTTP/SOCKS5 proxy ports, then choose **Apply**.
3. Confirm **Ready**, copy the displayed HTTPS LAN address, and open it on another device on the same network.
4. If the browser warns about the certificate, compare its fingerprint with **Certificate Fingerprint** in the app before proceeding. Stop and check the address if they differ.
5. Select **Copy Access Key** in the app and enter it in the controller. This is the device's local-control key, not an account Access Token or password.

The service is available only while the VPN is connected. Do not assume cellular or hotspot access works. Copy the current address again after a network change.

## Available actions

- Inspect the current node, mode, transfer totals, speeds and active-connection count.
- Search and page through available nodes. Confirm a selection and check the result; existing connections may reconnect.
- Expand recent logs for troubleshooting. The limited recent list does not replace a full diagnostic record.

The page refreshes periodically while visible. If a network profile controls the selected node, change that profile in the app first. Refresh after a selection-conflict message instead of repeatedly overwriting it.

## End access or replace the key

**Lock** in the browser clears that page's sign-in state. To invalidate existing controllers, select **Reset Access Key** in the app. Each controller must then enter the new key; account tokens are unchanged.

Turn off **Allow Local Access** when no longer needed. The controller uses the key only in the current page's memory. Do not share it, certificate private keys or sensitive logs.

| Symptom | Check |
| --- | --- |
| No LAN address | Wi-Fi connectivity and system local-network permission |
| Unavailable or unreachable | Connected VPN, unlocked device, port conflicts and Wi-Fi client isolation |
| Invalid key | Copy the key from the current device; a reset invalidates the old key |
| Cannot select a node | A network profile pinning the node or a changed node list |

This controller cannot remotely start a disconnected VPN and is not a public Internet management endpoint.
