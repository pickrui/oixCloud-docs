---
description: "Overrides, groups and added rules \u2014 setup, practical steps and troubleshooting"
---

# Overrides, groups and added rules

## Illustrated steps

<figure class="guide-figure">
  <a href="/illustrations/flclash-rules-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Add a domain-suffix rule">
    <img src="/illustrations/flclash-rules-zh.svg?v=20260929-2" alt="Add a domain-suffix rule" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

## Choose an override mode

<figure class="guide-figure">
  <a href="/illustrations/flclash-override-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="Choose an override mode">
    <img src="/illustrations/flclash-override-zh.svg?v=20260929-2" alt="Choose an override mode" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

Open **Override** from the profile menu.

| Mode | Behavior |
| --- | --- |
| Merge | Keeps subscription groups/rules and layers personal settings; personal rules precede subscription rules, while existing added rules retain priority |
| Custom | You maintain groups and rules yourself |

Start with Merge. Empty custom content does not provide a usable routing configuration.

## Route a website

1. Add a personal rule in Override, or use **Tools → Advanced Configuration → Added Rules**.
2. Choose a rule type such as domain suffix and enter `example.com`.
3. Select Direct, Reject, an existing group or a Tailscale network.
4. Save and apply while using Rule mode.
5. Make a new connection and inspect its matched rule.

Domain fields do not take full page URLs. Old connections can survive a rule change, so reopen the destination when testing.

## Groups and scripts

Create named groups with valid members before referencing them. Recheck rule targets after renaming or deleting a group.

**Tools → Advanced Configuration → Scripts** changes generated configuration; it is not an HTTP-response rewriting interface. Use trusted scripts, preserve a recovery copy and disable the script for comparison if something fails.

Direct edits to a downloaded subscription may disappear on sync. Keep lasting changes in the appropriate override controls.

For rule types and matching syntax, see the [mihomo routing-rule reference](https://wiki.metacubex.one/config/rules/). Use node or group names that exist in your active profile rather than copying example targets blindly.

## Merge example: change one domain's outbound

First confirm a group named `Work` exists on the proxy page. In the selected profile's merge override, add the suffix `example.com` and choose `Work` as its target. Save and check the configuration, then test a destination in Rule mode.

If it does not match, check capture, Rule mode, higher-priority added rules, the existence of the target group and whether you tested an old connection, in that order. Remove the example rule and reapply to restore the subscription's handling of that domain.

Global added rules affect multiple profiles; personal rules in a profile override belong to that profile. Put an exception in the profile override when it should apply only to one subscription.
