---
description: "Tailscale, subnets and exit nodes \u2014 setup, practical steps and troubleshooting"
---

# Tailscale, subnets and exit nodes

## Add and authorize

<figure class="guide-figure">
  <a href="/illustrations/flclash-tailscale-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Authorize a Tailscale network">
    <img src="/illustrations/flclash-tailscale-en.svg?v=20261030-en1" alt="FlClash for oixCloud · Authorize a Tailscale network" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

1. Open **Tools → Tailscale → Add Network**.
2. Name the network/device and choose interactive login or an auth key.
3. Select **Save and log in**, then complete browser authorization or wait for auth-key registration.
4. Approve the device in your Tailnet console if necessary.
5. Select a valid profile, start the proxy and check network status.

Sign-in alone does not capture traffic. If **Not Applied** appears, check whether the running profile includes the network and whether its name duplicates a profile node name.

## Automatic routing

With automatic routing enabled, known peer addresses, MagicDNS names and approved subnets use the network. Added/personal rules precede automatic routing, which precedes profile-provided rules.

Current LAN addresses remain local. Use an explicit rule targeting this Tailscale network for overlapping remote subnets or hostname-based access to subnet devices.

## Exit nodes

Leave the exit blank, select a device, or enter `auto`, a name or IP as supported. Then select this network in a group or point a rule to it; setting an exit does not automatically send all internet traffic there.

<span id="backup-and-limits"></span>

## Backup and removal

Settings are backed up, but auth keys and device identity stay on this device. Use **Save and log in** again after restoring elsewhere or after node-key expiry. Removing a network clears local identity; inspect stale devices in the console after an offline removal.

## Capabilities

FlClash for oixCloud initiates Tailnet access. It does not accept Tailnet inbound connections or advertise itself as a subnet router or exit node. Control-server access policies and approvals still apply.

For remote deployment and approval, see Tailscale's [subnet-router](https://tailscale.com/docs/features/subnet-routers) and [exit-node](https://tailscale.com/docs/features/exit-nodes) documentation. The official app's global capture controls differ from this integration's policy routing.
