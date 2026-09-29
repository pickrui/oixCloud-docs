# Documentation review — 29 September 2026

Reviewed all 41 tutorial topics in Simplified Chinese and English, their category pages and navigation (49 pages per language), and 34 shared Chinese illustrations. Instructions were compared with maintained application/server implementations and the primary references below. This was a documentation and source review, not a device-by-device VPN acceptance test.

## Source basis

| Component | Baseline examined | Areas checked |
| --- | --- | --- |
| oixCloud | `163a28e6` | Account/node filters, proxy and policy screens, routing/DNS/modules, network profiles, MITM certificates, sync, TV, automation, diagnostics and Tailscale |
| FlClash for oixCloud | `d401258d1` (final source readback) | Account/profile filters, proxy chains, capture/DNS/access controls, restore UI and database behavior, portable backup exclusions, diagnostics and Tailscale |
| dler-panel | `f2adfc44` | Subscription bindings and filter validation, token identity, plan/traffic/renewal policies, dedicated IP, account activity and WARP settings |
| OpenClash integration | `2fdef0bf` | oixCloud tab, configuration creation, node-filter editor and refresh behavior |
| oixCloud Helper | `c0954c7`; public distribution remains `oixcloud-external-proxy-program` | Menu-bar mode selection, filters, Surge integration, local ports/LAN authentication, Linux/container settings and diagnostics |
| Proxy cores | Maintained source at review time | Rule-target validation and server-side WARP fallback |

Client repositories were read only. Concurrent FlClash for oixCloud changes were read back at the final revision; no client source was edited or staged. Source behavior can precede a public binary release; the guide tells readers to check their installed version and download source when an entry is unavailable.

## Findings corrected

| Finding | Correction |
| --- | --- |
| Subscription articles still described removed All Nodes / Overseas Network / Emergency Mode switches | Distinguish official smart defaults from ordinary personal URLs, explain preview/zero-result validation and shared address scope, and document automatic refresh plus client-specific reset behavior |
| Several oixCloud instructions used outdated or incomplete menu paths | Use Network Profiles / 网络预设, Proxies → Policies, Auto Select / 自动优选, and current DNS/routing labels |
| Restoring backups could be mistaken for a nondestructive merge | Explain strategy separately from scope, record replacement/removal, managed-node exclusions, local Tailscale identity and WebDAV-password handling |
| MITM onboarding assumed a certificate already existed | Include first-time generation and the separate installation/trust steps; explain replacement requires trusting the new certificate |
| Generic routing advice treated PROXY as universal | Distinguish oixCloud's current-proxy target from names in a mihomo profile |
| Proxy-chain instructions implied a separately selectable chain node | Specify entry-to-exit order and select the exit node after saving |
| WARP fallback wording could imply local direct access | State that fallback uses the remote node's ordinary outbound |
| Tailscale and router/helper instructions lacked deployment boundaries | Explain outbound-only client integration, remote approval/access requirements, the integrated OpenClash build and helper build compatibility |
| Many topics were too brief to follow without prior knowledge | Add concrete account/plan/traffic/relay workflows, DNS examples, override checks and symptom tables in both languages |
| Helper guidance did not cover current modes or Linux | Add a full Surge workflow plus dedicated local-port/LAN and Linux/diagnostics topics; distinguish liveness, readiness and actual connectivity |
| OpenClash and Windows DLL help remained outside the guide | Expand router installation, profile switching, core checks and updates; add a DLL article that distinguishes runtime, missing app files and TUN issues, with the original DirectX Repair link |
| Illustrations did not resemble current apps closely enough | Rebuild 34 Chinese simulations using current SwiftUI, Material and macOS menu structures, with fictional data and clickable full-size views across 24 paired topics |
| Browser titles repeated the guide name | Home is `使用指南 | oixCloud`; article pages use the article heading followed by `| oixCloud` |

Chinese and English articles were changed together. Both languages continue to use only Chinese schematic illustrations with fictional data. Primary navigation remains organized by task.

## Primary references

- [Apple: trust manually installed certificate profiles](https://support.apple.com/en-us/102390)
- [Tailscale: subnet routers](https://tailscale.com/docs/features/subnet-routers)
- [Tailscale: exit nodes](https://tailscale.com/docs/features/exit-nodes)
- [mihomo: routing rules](https://wiki.metacubex.one/config/rules/)
- [Maintained OpenClash integration](https://github.com/pickrui/OpenClash)
- [Public Surge helper guide](https://github.com/pickrui/oixcloud-external-proxy-program)
- [Microsoft Visual C++ runtime downloads](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist)
- [DirectX Repair author page](https://www.zysoftware.top/post/9.html)
- Former panel OpenClash guide (read from the local template and translations before retirement; its legacy routes now redirect to this documentation article)
- [Surge Mac legacy support](https://kb.nssurge.com/surge-knowledge-base/release-notes/surge-mac-legacy)

These references support platform and server setup details. The client-specific menus and limitations follow each maintained implementation; upstream applications are not assumed to expose identical interfaces.

## Follow-up review and cleanup

- Reproduced legacy `#constructor` / `#toString` fragments resolving through inherited object properties. The mapping now uses a `Map`; unknown fragments remain on the current page
- Legacy links now work after SPA navigation and same-page hash changes as well as initial load; SSR and ordinary article anchors remain unaffected
- Corrected the first-connection and plan guides to distinguish standalone top-ups from checkout that attempts the selected plan purchase after funds arrive, including retries and the stopped-retry notice
- Checked FlClash for oixCloud's configuration views and localization at `d401258d1`: LAN proxy/authentication/port controls belong to Basic configuration; the IP/gateway pause control is Android-only. Added SSID matching, permission and running-state limits, and corrected the Chinese Advanced configuration label to 进阶配置 in text and two illustrations
- Removed unused dashboard-card styles and help-link translations in the panel, and made its public guide footer link visible to guests. Panel deployment remains independent
- Passed 89 isolated legacy-route/hash/unknown-fragment/article/SSR checks and browser checks for SPA Chinese/English links, same-page hash changes and unknown fragments. Verified corresponding article language switching and 390 px mobile layout; all 99 HTML pages and 7,315 internal references passed. The panel passed ten localized guest/member footer cases, language-key parity, Smarty/CSS checks and its static-site build

## Validation

- `pnpm build` passed with paired Chinese/English pages
- Parsed all 99 generated HTML pages: 7,315 internal links, assets and anchors resolved
- Confirmed all 49 paths exist in both locales and all 34 illustration assets are valid Chinese SVG files
- Checked desktop layouts and 390 px mobile layouts, including restore tables, client directory and the Windows DLL article; no horizontal page overflow in those checks
- Switched articles between corresponding Chinese and English paths, including new content; verified local search finds the Windows DLL guide
- Verified legacy subscription fragments resolve to the correct localized article
- Visually reviewed all client simulations and the added Helper scenes, then rechecked filter labels, save markers and full-size image navigation
- `git diff --check` passed

No production accounts, subscriptions or network settings were changed for validation. Actual device permissions, provider access, VPN connectivity and platform-specific runtime behavior still require testing on the user's installed release and network.
