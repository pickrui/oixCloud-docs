---
description: "Tailscale, subnets and exit nodes \u2014 setup, practical steps and troubleshooting"
---

# Tailscale, subnets and exit nodes

For iPhone / iPad. Apple TV provides a simpler device-authorization page.

## Authorize this device

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-tailscale-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="oixCloud · Add and authorize a Tailscale network">
    <img src="/illustrations/oixcloud-tailscale-en.svg?v=20261030-en1" alt="oixCloud · Add and authorize a Tailscale network" width="1120" height="1120" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

1. Open **Settings → Tailscale** in the Network section and add a network.
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

## Connection failures

Check in order: VPN state, device authorization, peer availability, access permissions, subnet approval and exit-node status. Start a fresh login when an authorization page expires; do not repeatedly share the same old authorization link with other devices.

## Capabilities and server-side setup

This integration provides outbound access. It does not advertise this device as a subnet router, exit node or inbound Tailnet service. Removing a network deletes its associated policies and local identity; check old device records separately in the admin console.

Remote subnets require advertised routes, approval and access permissions; see [Tailscale subnet routers](https://tailscale.com/docs/features/subnet-routers). Internet egress also requires an approved exit node and permission to use it; see [exit nodes](https://tailscale.com/docs/features/exit-nodes). This client still selects the traffic through its routing policies as described above.
