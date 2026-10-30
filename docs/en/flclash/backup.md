---
description: "Backups, restore and WebDAV \u2014 setup, practical steps and troubleshooting"
---

# Backups, restore and WebDAV

Open **Tools → Backup and Restore**.

## Back up current data first

<figure class="guide-figure">
  <a href="/illustrations/flclash-backup-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Back up before restoring">
    <img src="/illustrations/flclash-backup-en.svg?v=20261030-en1" alt="FlClash for oixCloud · Back up before restoring" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

::: warning Back up before restoring
Create a local backup before major changes or restoring another backup, save it somewhere you control and verify success. Backups contain ordinary subscriptions and personal settings; keep them private.
:::

## Choose strategy and scope

<figure class="guide-figure">
  <a href="/illustrations/flclash-restore-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Choose the restore scope">
    <img src="/illustrations/flclash-restore-en.svg?v=20261030-en1" alt="FlClash for oixCloud · Choose the restore scope" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

These are two separate choices. First check **Restore Strategy** on the page, then start local or WebDAV restore.

| Strategy | Effect on existing configuration |
| --- | --- |
| Compatible | Merges profiles, scripts and rules; matching records are updated from the backup, not skipped |
| Override | Replaces profiles, scripts and rules; existing content absent from the backup is removed |

Then select a scope:

| Scope | Behavior |
| --- | --- |
| Restore configuration files only | Restores profiles and associated scripts/rules while keeping current app settings |
| Restore all data | Also applies backed-up app and network settings; the chosen strategy still controls configuration-data merging or replacement |

::: info Compatible can still replace data
Compatible does not mean that nothing is replaced. Restore all data still applies the backup's app settings. Check the active profile, overrides, ports, capture settings and node selection before verifying a connection.
:::

## WebDAV

<figure class="guide-figure">
  <a href="/illustrations/flclash-webdav-en.svg?v=20261030-en1" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Bind a WebDAV backup location">
    <img src="/illustrations/flclash-webdav-en.svg?v=20261030-en1" alt="FlClash for oixCloud · Bind a WebDAV backup location" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data · Click to enlarge</figcaption>
</figure>

1. Enter a reachable WebDAV URL and account, preferably over HTTPS.
2. Make a manual backup and confirm a new remote entry.
3. Before restoring, check the strategy, select the intended device/time entry, then choose the scope.
4. Set retention according to how many older copies you need.

Retention affects this device's older WebDAV backups. Backup/restore is not continuous two-way synchronization; saving here does not immediately change another device.

## After moving to another device

Grant VPN or administrator permissions again and check ports, app access control and the active profile. Managed-node files are not transferred in portable backups: sign into oixCloud and sync on the new device. Tailscale device identity and auth keys are also excluded from the backup, so authorize again on the new device.

Exported backups omit the WebDAV password. Enter it again on a new device; same-device restore can retain an existing password for the matching server. Preserve the original backup and exact error if restore fails instead of repeatedly overwriting working data.
