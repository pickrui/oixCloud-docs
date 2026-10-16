# Fair-use and inventory documentation — 16 October 2026

Updated five paired topics: Fair use, Plans, Traffic, Troubleshooting and Support. Fair use now documents account-wide activity aggregation, the plan multiplier, both scoring tables with exact boundaries, Beijing-time off-peak hours, score clamping, warnings, recovery and separate evening limits. Ban criteria and detection details remain undisclosed.

Inventory wording follows the implementation: disabling renewal does not immediately return stock, and switching, upgrading or refunding does not return the original stock. Eligible expired-plan termination/cleanup returns stock; normal automatic renewal does not deduct again, while early renewal does. The operator's policy is normally not to replenish limited plans manually, with no fixed restocking schedule.

Source basis: dler-panel `0d733f60` (`UserJob`, `Tools`, `Boot`, `FinanceJob`, `OrderService`, `PurchaseService`, plan operations and shop templates); dler-server `3c6c1fd` (request counters and traffic reporting). The accompanying panel changes replace outdated inline rules with a bilingual summary and guide link, and add a stock explanation/link to sold-out cards. No scoring, inventory or account-state behavior was changed.

Validation: `pnpm build` passed; 103 generated pages and 7,967 internal references resolved. Ten numerical examples and time/threshold boundaries matched the current PHP methods without loading runtime configuration or a database. Both changed Smarty templates compiled under PHP 7.4.33; new translation keys resolved. Checked the ten guide pages and two fictional panel previews at 390 and 1440 pixels (24 cases), without horizontal page overflow or browser console warnings/errors. Visually inspected both language tables, the stock explanation and panel snippets; the language switch retained the paired article and section.

Pre-push review: generated 516 quantity and time-boundary cases from the bilingual scoring tables; all matched the maintained PHP implementation. Rebuilt the site and rechecked 103 pages, 7,967 internal references, paired section anchors, translation keys and Smarty compilation. The panel documentation patch is isolated on a branch based on remote `2fa6532e`, leaving 24 existing local commits unpublished. The guide describes maintained `0d733f60`; deployment must include its lower-speed preservation and evening restoration changes, which are outside this documentation patch. Neither documentation push publishes the site or deploys the panel.

Checks used a temporary source copy and fictional panel data. No live account, database, production configuration, purchase, notification or deployment was used. This record confirms local documentation validation only; GitHub Pages and the panel are published separately.

---

# Documentation update — 16 October 2026

Reviewed the maintained clients and panel for changes since the earlier guide review. Updated 14 paired topic/index pages, added the paired Local Controller article and its navigation, and refreshed the two sign-in illustrations. The guide now contains 43 tutorial topics and 51 pages per language. Earlier review records below remain historical evidence, not a statement of current release availability.

## Source baselines for this update

| Component | Revision examined | Relevant behavior |
| --- | --- | --- |
| dler-panel | `7c28cf15` plus this audit's sign-in wording correction | Existing-account Google client sign-in, token reuse, password-only restriction and authorization failure behavior |
| oixCloud | `d1297aa3` | iPhone/iPad Google sign-in, Strict DNS, independent IPv6 controls, persistent MITM exclusions, module categories and Local Controller |
| FlClash for oixCloud | `2cf21720d` | Google sign-in, desktop diagnostic actions, recognized local BitTorrent processes using DIRECT, script refresh and restored-script handling |
| oixCloud Helper | `3daa929` | Existing email/password and token account flow |
| OpenClash integration | `e2502195` | Existing integrated account flow and dedicated token |
| oixClash for Merlin | `cf102f3` | Existing integrated account flow and dedicated token |

Client repositories were read only. Source support can precede a stable/App Store binary or a deployed panel. The guide describes available menu entries and does not imply Apple TV, Android, desktop and router feature parity.

## Corrections and additions

- Explain Google client sign-in for existing accounts, browser return and expired-flow recovery. Preserve Apple TV's iPhone sync flow and the actual Helper/router account methods
- Correct the password restriction: it blocks client/API email-password sign-in, while website sign-in, valid tokens and supported Google sign-in remain available. Preserve the `token-only` anchor and describe the old label for already-deployed pages
- Replace outdated DNS advice with Strict DNS, effective configuration sources, routing-DNS and fallback behavior, and three independent IPv6 controls. Preserve the old DNS-help anchors in both languages
- Describe exact-domain MITM exclusions, their persistence and new-connection behavior; distinguish them from ordinary routing and plaintext HTTP
- Explain module category deletion and the separate Module Order setting
- Add a Local Controller article for HTTPS access on the same LAN, fingerprint/key checks, node selection, profile conflicts and key reset
- Document the desktop-only recognized BitTorrent-process DIRECT policy, diagnostic settings shortcuts, script refresh and restoring scripts without automatically activating them
- Update the two Chinese sign-in simulations and both locales' asset version references; all illustration data remains fictional

## Validation for this update

- `pnpm build` passed; all 103 generated HTML pages and 7,923 internal links, assets and anchors resolved
- All 51 source paths have corresponding Chinese/English pages; all 37 illustration SVGs parsed successfully
- Checked 60 desktop/mobile page cases at 1440 px and 390 px, with no horizontal page overflow or browser errors; checked corresponding language switches and local search for the new article
- Visually inspected the new article on desktop/mobile, mobile account/DNS instructions and both updated sign-in illustrations
- Reviewed the final bilingual changes and `git diff --check`

No client source, live accounts or network settings were changed. The documentation is committed to `codex/client-guides-20261016`; `main` publishes automatically, so this update does not merge to `main` or deploy GitHub Pages. Actual device connectivity and installed-release behavior were not acceptance-tested.

---

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
