---
description: "Use HTTPS on the same LAN to inspect oixCloud, select nodes and read recent logs"
---

# Local Controller

For iPhone/iPad and Apple TV versions offering this feature. It lets a device on the same Wi-Fi or Ethernet network control oixCloud on this device. It is separate from [serving proxy traffic to other devices](/en/oixcloud/networks).

| Device | Settings entry |
| --- | --- |
| iPhone / iPad | Settings → Local Controller |
| Apple TV | Settings → Local Control Panel |

## Enable and connect

These steps apply to iPhone/iPad; see [Apple TV instructions](#apple-tv) for TV.

1. Establish a connection in oixCloud, open **Settings → Local Controller**, and enable **Allow Local Access**.
2. The default port is `9091`. To change it, choose an unused port from `1024–65535`, different from the HTTP/SOCKS5 proxy ports, then choose **Apply**.
3. Confirm **Ready**, copy the displayed HTTPS LAN address, and open it on another device on the same network.
4. If the browser warns about the certificate, compare its fingerprint with **Certificate Fingerprint** in the app before proceeding. Stop and check the address if they differ.
5. Select **Copy Access Key** in the app and enter it in the controller. This is the device's local-control key, not an account Access Token or password.

The service is available only while oixCloud is connected. Do not assume cellular or hotspot access works. Copy the current address again after a network change.

### Enable on Apple TV {#apple-tv}

1. Open **Settings → Local Control Panel** on TV, enable **Allow Local Access**, and keep oixCloud connected.
2. Select an HTTPS address under **Local Network Address** to view its QR code. Scan it with a phone on the same network or enter the address on a computer.
3. View **Certificate Fingerprint** on TV and compare it with the browser certificate.
4. Open **Access Key** to view its text or scan its QR, then paste it into the browser. The address QR contains no key; the key QR contains only the key text.
5. Inspect status or select a node, then disable local access when finished.

The TV's switch and key remain local to that Apple TV and do not sync through iCloud. Its default port is also `9091`. Confirm port changes on TV rather than looking for the iPhone/iPad copy controls.

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
| Unavailable or unreachable | Active connection, unlocked device, port conflicts and Wi-Fi client isolation |
| Invalid key | Copy the key from the current device; a reset invalidates the old key |
| Cannot select a node | A network profile pinning the node or a changed node list |

This controller cannot remotely establish a connection while oixCloud is disconnected and is not a public Internet management endpoint.
