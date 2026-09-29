---
description: Share a LAN proxy, configure local credentials and pause on Wi-Fi or Android network conditions
---

# LAN proxy and network exclusions

## Share a local proxy

1. Keep FlClash for oixCloud running with a working profile.
2. Enable **LAN Proxy** under **Tools → Basic configuration**, then check the mixed port in **Port**.
3. On the other device, enter this computer's LAN IP and mixed port, using HTTP or SOCKS as supported by that device's app.
4. Allow the trusted LAN through the firewall, then test the target app and inspect connection records.

The other device cannot use `127.0.0.1` to refer to this computer. Sharing a listener does not automatically capture your entire household network: configure the device or app that will use it.

### Local proxy authentication

Enable local proxy authentication under **Tools → Basic configuration**, then open **Account / Password** to view or change the credentials. Enter the same credentials in the other device's proxy settings. These protect the local listener and are separate from your oixCloud account password.

With authentication enabled, the client does not automatically set the system HTTP proxy. Apps using an explicit proxy must support a username and password. Whether this computer needs TUN depends on how traffic should be captured; see [System Proxy and TUN](/en/flclash/capture).

Restrict use to trusted LANs and do not forward the port to the public internet. Network isolation and firewalls can still block connections from other devices.

## Pause on a named Wi-Fi network

Open **Tools → Advanced Configuration → Network → Exclude SSIDs**.

1. Add the exact Wi-Fi name to pause proxying while connected to it.
2. On Android/macOS, follow the location-permission prompt if the name cannot be read. SSID matching cannot work without an available network name.
3. Leaving that Wi-Fi resumes proxying only while the app remains started. This feature does not restart an app you stopped manually.
4. Check connection state and the target app on both a listed Wi-Fi and a network not in the list.

Identical Wi-Fi names do not establish that two networks are the same trusted network; the name is not an authentication mechanism.

## Android: pause by IP or gateway

The current IP/gateway pause control is shown only on Android, on the same Network page. It accepts Wi-Fi/Ethernet IPv4 addresses, networks and gateway rules, with up to 16 comma-separated entries, for example:

```text
192.168.1.0/24,gateway:192.168.1.1
```

Replace the examples with your actual network; IPv6 conditions are not accepted here. Matching environments pause forwarding, and leaving them resumes according to the app's running state. Common subnets recur across unrelated networks, so check the rule's scope to avoid unwanted pauses.

## Pausing versus routing

Network exclusion affects the current environment, routing rules affect destinations, and Android access control affects applications. Check for an intentional network pause before investigating nodes, DNS or rules.
