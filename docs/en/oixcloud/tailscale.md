---
description: "Tailscale, subnets and exit nodes \u2014 setup, practical steps and troubleshooting"
---

# Tailscale, subnets and exit nodes

For iPhone / iPad. Apple TV provides a simpler device-authorization page.

## Authorize this device

1. Open **Settings → Network → Tailscale** and add a network.
2. Choose interactive login and authorize in the browser, or provide an auth key for the Tailnet.
3. Return to the app. Approve the device in the Tailnet console if required.
4. Start the VPN, check network status and visit a peer address or MagicDNS name.

Signing in alone does not capture traffic. An auth key registers a device; it is not an administrator API key.

## Automatic routes

Automatic routing covers known peer addresses, the assigned MagicDNS suffix and approved subnet routes. Other traffic follows your routing configuration.

Addresses on the device's current local network stay local. An overlapping remote subnet needs an explicit rule; confirm which network you mean before adding it.

## Exit nodes

Choose an online, approved exit node in the network settings, then direct the intended traffic to its Tailscale policy. Discovery or filling in an exit node does not automatically move all internet traffic. Verify the actual exit with a request.

## Other devices and Headscale

Authorize each device separately. Syncing configuration does not copy local identity. Use your administrator's control URL for Headscale and recheck sign-in after changing control servers or network identity.

For failures, check VPN state, authorization, peers, access rules, subnet approval and exit-node status. Start a fresh login when an authorization page expires.
