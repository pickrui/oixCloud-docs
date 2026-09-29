---
description: "Tailscale, subnets and exit nodes \u2014 setup, practical steps and troubleshooting"
---

# Tailscale, subnets and exit nodes

## Add and authorize

1. Open **Tools → Tailscale → Add Network**.
2. Name the network/device and choose interactive login or an auth key.
3. Select Save and Sign In, then complete browser authorization or registration.
4. Approve the device in your Tailnet console if necessary.
5. Select a valid profile, start the proxy and check network status.

Sign-in alone does not capture traffic. Not Applied means the running profile does not contain the network; check the selected profile and duplicate node names.

## Automatic routing

Known peers, MagicDNS names and approved subnets use the network. Added/personal rules precede automatic routing, which precedes profile-provided rules.

Current LAN addresses remain local. Use an explicit rule for overlapping remote subnets or hostname-based access to subnet devices.

## Exit nodes

Leave the exit blank, select a device, or enter `auto`, a name or IP as supported. Then select this network in a group or point a rule to it; setting an exit does not automatically send all internet traffic there.

## Backup and limits

Settings are backed up, but auth keys and device identity stay on this device. Sign in again after restoring elsewhere or after key expiry. Removing a network clears local identity; inspect stale devices in the console after an offline removal.

FlClash for oixCloud initiates Tailnet access. It does not accept Tailnet inbound connections or advertise itself as a subnet router or exit node. Control-server access policies and approvals still apply.
