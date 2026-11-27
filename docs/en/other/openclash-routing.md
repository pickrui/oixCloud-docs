# OpenClash groups, rules and proxy chains {#openclash-routing}

## Choose a node or switch a group {#routing}

<figure class="guide-figure">
  <a href="/illustrations/metacubexd-groups-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Choose a node in a MetaCubeXD Select group and check the exit in Connections">
    <img src="/illustrations/metacubexd-groups-en.svg?v=20261127-5" alt="Choose a node in a MetaCubeXD Select group and check the exit in Connections" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Illustrated interface · Fictional data</figcaption>
</figure>

1. In **Services → OpenClash → Overviews**, open MetaCubeXD from the dashboard area and go to **Proxies**. If you need the group name, visit the site once and check its matched rule and group in **Connections**.
2. Expand the matching Select group and choose a node. If the member is another group, open it to choose its member. Automatic groups such as URLTest and Fallback follow their own strategies.
3. Keep Rule mode on and revisit the site from a LAN device. Check the exit in **Connections**.

## Add a website rule on the router {#routing-rules}

<figure class="guide-figure">
  <a href="/illustrations/openclash-routing-en.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="Priority rule editor and Apply Settings button in OpenClash">
    <img src="/illustrations/openclash-routing-en.svg?v=20261127-4" alt="Priority rule editor and Apply Settings button in OpenClash" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Illustrated interface · Fictional data</figcaption>
</figure>

In LuCI, open **Services → OpenClash → Overwrite Settings → Rules Setting** and enable **Custom Clash Rules**. Add a line under the existing `rules:` in **Priority**. This example sends the test domain directly.

```yaml
rules:
  - DOMAIN-SUFFIX,example.com,DIRECT
```

Keep existing entries and a single `rules:` key. To proxy the site, replace `DIRECT` with a group in the active profile. Click **Apply Settings** at the bottom, wait for the core to restart, then make a new connection from a LAN device. This override is stored on the router. When switching profiles, check that the target group exists there too.

## Chain two nodes {#create-chain}

<figure class="guide-figure">
  <a href="/illustrations/openclash-chain-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Set Dialer-proxy on the OpenClash exit node to the name of the entry">
    <img src="/illustrations/openclash-chain-en.svg?v=20261127-5" alt="Set Dialer-proxy on the OpenClash exit node to the name of the entry" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>Illustrated interface · Fictional data</figcaption>
</figure>

1. Use a YAML profile you maintain with both an entry and an exit node. To start from an existing file, open its **⋯ → Copy Config** menu in **Config Manage** and edit the copy. Subscription updates regenerate the managed file.
2. Open **⋯ → Servers Manage** for your file and click **Read Config**. Under **Proxies**, edit the **exit node**, set `Dialer-proxy` to the name of the existing **entry node**, and click **Commit Settings**.
3. Back in **Servers Manage**, click **Apply Settings** to write the file. Switch to it in **Config Manage** and wait for the core to run. Choose the **exit node** in a dashboard Select group. New connections now go through the entry before reaching the exit.
