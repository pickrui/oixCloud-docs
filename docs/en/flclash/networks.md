---
description: "LAN proxy and network exclusions \u2014 setup, practical steps and troubleshooting"
---

# LAN proxy and network exclusions

## Share a local proxy

1. Keep FlClash for oixCloud running with a working profile.
2. Enable LAN Proxy and check the listen address and mixed port.
3. On the other device, enter this computer's LAN IP and the appropriate proxy port.
4. Allow the trusted LAN through the firewall, then test the target app.

The other device cannot use `127.0.0.1` to refer to this computer. It must support the chosen proxy protocol. Sharing a listener does not automatically capture your entire household network.

Restrict use to trusted LANs and do not forward the port to the public internet. Configure local authentication if needed; with local proxy authentication enabled, the client does not automatically set the system HTTP proxy.

## Pause on a matching network

The IP/gateway exclusion setting accepts IPv4 addresses, networks and gateway rules, for example:

```text
192.168.1.0/24,gateway:192.168.1.1
```

Replace these examples with your actual network. Matching Wi-Fi/Ethernet environments pause forwarding; leaving them restores it. A commonly reused subnet is not a unique trusted-network identity.

Network exclusion affects an environment, routing rules affect destinations, and Android access control affects applications. First check whether forwarding is currently paused before diagnosing a node.
