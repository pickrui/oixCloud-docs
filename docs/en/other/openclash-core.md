# Update the oix core in OpenClash {#kernel-update}

<figure class="guide-figure">
  <a href="/illustrations/openclash-version-en.svg?v=20261105-3" target="_blank" rel="noopener" aria-label="OpenClash · Update or replace the oix core in Version Update">
    <img src="/illustrations/openclash-version-en.svg?v=20261105-3" alt="OpenClash · Update or replace the oix core in Version Update" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

The oix core is a Mihomo build supporting oixCloud managed nodes; an ordinary Mihomo package is not a substitute. The maintained integration prioritizes it after sign-in. Plugin, core and subscription updates are separate operations.

<span id="在线更新内核"></span>

## Online core update

1. Open **Services → OpenClash → Plugin Settings → Version Update**. Export a backup including the core and save it to your computer first.
2. Check the CPU build architecture, such as `linux-arm64`, `linux-amd64-v1` or `linux-armv7`.
3. Click the version link in the Core column and wait for the log to confirm download, validation and replacement using the matching dedicated package.
4. Return to **Overviews (Running Status)**, start OpenClash if needed, check that the version contains `oix`, and verify a connection from a LAN device.

The usual installation path is `/etc/openclash/core/clash_meta`; small-flash mode uses `/tmp/etc/openclash/core/clash_meta`. The updater selects the path for the active mode and sets executable permissions.

<span id="手动上传与替换内核"></span>

## Manual core replacement via SSH

If online updates fail, download a `.gz` file matching the CPU build architecture from the [mihomo-oix Pre-Alpha release](https://github.com/vernesong/mihomo-oix/releases/tag/Pre-Alpha). Do not use an ordinary Mihomo build, a different CPU architecture or a desktop installer.

::: warning Back up and check space before replacing
Export a backup including the old core, and record the architecture and installation path. File size varies by version and architecture; use the actual extracted size. Run `df -h` to check temporary and destination storage. These commands assume ordinary mode and router address `192.168.1.1`. Use your actual address; in small-flash mode, replace the destination with `/tmp/etc/openclash/core/clash_meta`.
:::

1. Extract on your computer, replacing the placeholder with the actual downloaded filename:
   ```sh
   gzip -dc 'mihomo-<arch>-<version>.gz' > clash_meta
   ```
2. Stop OpenClash in LuCI's Running Status page, then upload the new file to a temporary location:
   ```sh
   scp clash_meta root@192.168.1.1:/tmp/clash_meta.new
   ```
3. Sign in to the router over SSH and confirm the new file runs and its version contains `oix`:
   ```sh
   chmod 755 /tmp/clash_meta.new
   /tmp/clash_meta.new -v
   ```
   If it fails, check architecture, file integrity and the exact error before replacing anything.
4. Confirm the destination path, copy the file and set permissions as the plugin does:
   ```sh
   cp /tmp/clash_meta.new /etc/openclash/core/clash_meta
   chmod 4755 /etc/openclash/core/clash_meta
   /etc/openclash/core/clash_meta -v
   ```
5. Start OpenClash from the web interface, inspect logs and test from a LAN device. If it fails, stop it, extract the old core from your backup and restore it with the same upload and validation steps. Repeated subscription updates do not fix a core that cannot start.

After successful verification, remove the uploaded `/tmp/clash_meta.new` if desired. Keep the computer-side backup for recovery.
