---
description: "Backups, restore and WebDAV \u2014 setup, practical steps and troubleshooting"
---

# Backups, restore and WebDAV

Open **Tools → Backup and Restore**.

## Local backup

1. Create a backup before major configuration changes.
2. Store it somewhere you control and verify export success.
3. Select the correct backup and read merge/overwrite choices before restoring.
4. Check profiles, node selection, overrides and network settings before connecting.

Backups may contain private subscriptions and settings. Do not attach them to public issues. Device permissions and local networking may differ after migration.

## WebDAV

1. Configure the provider's reachable WebDAV URL and account, preferably using HTTPS.
2. Make a manual backup and confirm a new entry appears remotely.
3. Choose the intended device/time entry and restore mode when recovering.
4. Set retention according to how many older copies you need.

Retention removes this device's older WebDAV backups. Backup/restore is not continuous two-way synchronization; another device does not update merely because this backup succeeded.

## After migration

Grant VPN or administrator permissions again, and check ports, app access control and the active profile. Tailscale identity does not migrate; authorize the new device separately.

If restore fails, preserve the original backup and record the version and error rather than repeatedly overwriting working configuration.
