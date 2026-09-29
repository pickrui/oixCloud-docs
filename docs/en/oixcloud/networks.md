---
description: "Network profiles and local access \u2014 setup, practical steps and troubleshooting"
---

# Network profiles and local access

For iPhone / iPad.

## Different routes for different networks

Use **Settings → Network → Trusted Network** to add a network profile with matching conditions, mode, outbound and rules.

1. Create a profile on the target network and check its match condition.
2. Choose the intended mode and outbound, save and inspect the active profile.
3. Switch networks and verify the default selection returns.
4. Test requests on both networks; a profile name alone does not prove a match.

Profiles may supply their own routing choices. Check the active profile if a global-rule change appears ineffective.

## Trusted networks versus excluded routes

Trusted-network settings affect behavior for a network environment. **Routing Rules → Excluded Routes** makes particular domains or networks direct. Exclusions take priority over normal rules; verify address ranges before adding them.

## Local proxy service

In **Settings → Network → Proxy Service**, configure the listen address, port and access scope. Another device must use this device's LAN address and the matching protocol/port.

Keep the client connected on an accessible network. Other devices must support that proxy protocol. Use trusted LANs and do not forward the listener to the public internet.

IPv6, Enhanced Compatibility and Apple push capture solve different problems. Keep defaults unless you have a specific need, and read in-app explanations before changing broad network-capture options.
