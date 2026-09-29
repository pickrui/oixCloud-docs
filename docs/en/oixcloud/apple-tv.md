---
description: "Apple TV setup and sync \u2014 setup, practical steps and troubleshooting"
---

# Apple TV setup and sync

TV focuses on remote-friendly node selection and connections, not every iPhone/iPad editing feature.

## Receive configuration

1. Use the same Apple Account on iPhone/iPad and Apple TV, with compatible updated clients.
2. Complete account sign-in and node setup on the phone or tablet.
3. Enable **Settings → iCloud Sync → Sync to Apple TV** there.
4. Enable iCloud sync in TV Settings and read any replacement prompt.
5. Wait for nodes, choose an outbound, connect and test a TV app.

Sync may replace existing TV configuration. TV retains its own connection/routing settings and can change rule-set destinations. Modules are not included.

## Account source

The current oixCloud account page on TV displays the account received from iPhone/iPad. Account sign-in, sign-out and managed-node filtering happen there; TV does not provide the same account-management flow.

Tailscale device authorization is separate and cannot sign into the managed oixCloud account.

## Everyday use and troubleshooting

Use the remote to choose a node or group and inspect latency and connection status. Perform complex node, chain and rule organization on the phone/tablet before syncing.

If sync fails, check Apple Accounts, versions and both switches first. If nodes exist but streaming fails, inspect the chosen exit and service region rather than repeatedly syncing the same data.
