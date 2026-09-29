---
description: "Overrides, groups and added rules \u2014 setup, practical steps and troubleshooting"
---

# Overrides, groups and added rules

## Illustrated steps

[![FlClash for oixCloud · Routing rule](/illustrations/flclash-rules-zh.svg)](/illustrations/flclash-rules-zh.svg)

*Simulated interface in Chinese, with fictional nodes and data. Layout varies by version; open the image for a larger view.*

## Choose an override mode

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
