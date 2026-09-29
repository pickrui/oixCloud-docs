---
description: "Relays and your own destinations \u2014 setup, practical steps and troubleshooting"
---

# Relays and your own destinations

## Internal relays versus your own exit server

An internal relay forwards traffic through an entry node to a destination node. An external relay forwards traffic to a destination you specify. Protocol-preserving mode requires you to deploy an exit server following the page instructions. Protocol-conversion mode can forward traffic to an existing SSH, remote desktop, game, or other service. Check the source, destination, mode, and ports, then save and update your client configuration. External relays are not for forwarding websites or web administration panels; use the client's proxy chaining feature when you need to chain proxies.

::: warning Before changing settings
WARP, internal relays, and custom relays for the same logical node can conflict. Enabling WARP removes the related relay settings, so save any configuration you need before switching.
:::

[Open your account](https://oixcloud.com/user)
