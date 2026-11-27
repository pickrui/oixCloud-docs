---
description: "Overrides, groups and added rules \u2014 setup, practical steps and troubleshooting"
---

# Overrides, groups and added rules

## Illustrated steps

<figure class="guide-figure">
  <a href="/illustrations/flclash-rules-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Add a domain suffix rule">
    <img src="/illustrations/flclash-rules-en.svg?v=20261127-5" alt="FlClash for oixCloud · Add a domain suffix rule" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

## Choose an override mode

<figure class="guide-figure">
  <a href="/illustrations/flclash-override-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · Choose a profile override mode">
    <img src="/illustrations/flclash-override-en.svg?v=20261127-5" alt="FlClash for oixCloud · Choose a profile override mode" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

In **Profiles**, open the menu for a managed or ordinary subscription and choose **Override**. Select **Overlay** to add an exception to that subscription.

| Mode | Behavior |
| --- | --- |
| Standard | Uses the original profile with an optional override script and added rules. |
| Overlay | Keeps subscription groups/rules and layers personal settings; personal rules precede subscription rules, while existing added rules retain priority |
| Custom | You maintain groups and rules yourself; intended for users who understand the full routing structure |

Start with Overlay. Empty custom content does not provide a usable routing configuration; do not switch to an empty Custom configuration just to remove default rules.

<span id="website-rule"></span>

## Route a website

1. For a managed or ordinary subscription, open **Profiles → profile menu → Override**, choose **Overlay**, then open **Rule → Add**. For a custom profile, use **Profiles → profile menu → Edit → Rule → Add**.
2. Select `DOMAIN-SUFFIX`, enter `example.com` and choose `DIRECT`, `REJECT`, an existing group or an enabled chain by name. To proxy this domain, choose a group with usable members.
3. Save the rule. For a subscription override, return to **Override** and select **Apply now** if shown. With this profile active in Rule mode, revisit the site and check the matched rule and outbound in **Requests**.

To share a rule across subscriptions, create it in **Tools → Advanced Configuration → Added rules**, then check that it is enabled in each profile's **Override** settings. Use the steps above for an exception that belongs to just one profile.

<span id="groups-and-scripts"></span>

An added rule can use a named exit such as `Media`. In the profile override, map it to a node or group. The default mapping looks for a group or node of the same name, then falls back to the target of the profile’s last `MATCH` rule. If a previously selected target turns red, choose a current target and test a new connection.

## Add a policy group

Create named groups with valid members before referencing them. Recheck rule targets after renaming or deleting a group.

To add another subscription's nodes to the managed profile, add a **Proxy provider** to the provider library, select it in an Overlay **Proxy group** and add a rule targeting that group. Follow [Use with managed nodes](/en/flclash/mixed-nodes#managed-subscription). Importing a separate profile does not automatically combine nodes.

## Override scripts

**Tools → Advanced Configuration → Scripts** changes generated configuration; it is not an HTTP-response rewriting interface. Use trusted scripts, preserve a recovery copy and disable the script for comparison if something fails.

A standard profile can use a script together with added rules. The script runs first, then enabled added rules go ahead of the rules it returns. When checking which rule matched, review the added rules enabled for that profile.

Direct edits to a downloaded subscription may disappear on sync. Keep lasting changes in the appropriate override controls.

For rule types and matching syntax, see the [mihomo routing-rule reference](https://wiki.metacubex.one/en/config/rules/). Use node or group names that exist in your active profile rather than copying example targets blindly.

<span id="merge-example-change-one-domain-s-outbound"></span>

## Overlay example: change one domain's outbound

First confirm a group named `Work` exists on the proxy page. In the selected profile's Overlay override, add the suffix `example.com` and choose `Work` as its target. Save and check the configuration, then test a destination in Rule mode.

If it does not match, check capture, Rule mode, higher-priority added rules, the existence of the target group and whether you tested an old connection, in that order. Remove the example rule and reapply to restore the subscription's handling of that domain.

Global added rules affect multiple profiles; personal rules in a profile override belong to that profile. Put an exception in the profile override when it should apply only to one subscription.

## Process lookup and rule-driven detection {#process-lookup}

Check the switch and its explanation under **Tools → General → Connection → Find process**. The maintained version behaves as follows; check your version if an older build lacks the explanation.

| State | Behavior |
| --- | --- |
| Process lookup enabled | Actively looks up processes, with potential overhead |
| Disabled, but current rules need process information | Still looks up processes when checking those rules; the explanation says “Process rules look up the process only when they are checked” |
| Disabled and ordinary rules need no process information | Does not actively look up processes for ordinary rules; connection records may lack a process name |

A referenced classical rule provider that could contain process rules can also enable rule-driven detection. Turning off the switch does not prohibit all process identification. The desktop download-application Direct policy below is separate.

When diagnosing a process rule, first confirm that the application's traffic reaches the client. Save and apply the profile, then check the matched rule and outbound on a new connection. A missing process name alone does not prove a rule failed. Do not assume this device can identify processes on another device using its LAN proxy.

## Desktop BitTorrent applications use Direct {#bittorrent-direct}

The maintained Windows, macOS and Linux versions force recognized local BitTorrent applications, such as qBittorrent, Transmission, Deluge, aria2c and Motrix, to `DIRECT`. This policy precedes Rule and Global modes and cannot be disabled through subscriptions, personal rules or the process-lookup setting.

Those recognized connections use the local network's exit and can expose its public IP to peers. Check the process and outbound in connection records; Global mode alone does not establish that BitTorrent uses a proxy. This is not a guarantee of identifying all P2P traffic and does not describe Android or other devices connecting through a LAN proxy.

## Script options and restore

Refresh script options manually when needed, check unsaved inputs, and review additions, changes and removals in the preview. Resolve missing-script or application errors before applying again.

Restored scripts need inspection and manual enabling. A successful profile restore does not mean its script is already affecting routing. See [backup and restore](/en/flclash/backup).
