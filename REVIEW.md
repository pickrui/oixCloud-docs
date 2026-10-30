# External link audit — 2026-10-30

Inventoried 65 distinct external links in the rendered site, including article links, homepage actions and the shared GitHub navigation. Eleven installer/archive links were covered by the preceding download audit; this pass fetched the other 54 destinations with GET requests and inspected final URLs, titles, page content and fragment targets. Localhost diagnostic commands, DNS endpoint examples and XML namespaces are not website links and were not treated as dead pages.

| Finding | Correction / evidence |
| --- | --- |
| OpenClash maintained installation link points to a missing fragment | The public `pickrui/OpenClash` default branch is `master`, whose README has no `快速开始` section. The public `dev` branch contains the maintained installation instructions and the live `user-content-快速开始` anchor. Both locale guides now use `/tree/dev#快速开始`; the maintained-integration reference also uses `/tree/dev` instead of the older default branch. The upstream installation link has a working section and stays unchanged. |
| English rule reference opens the Chinese mihomo page | Use the official English `/en/config/rules/` counterpart, verified by the Chinese page's language link and the English page title/content. The Chinese reference remains on the Chinese page and its label identifies the official source. |
| Apple certificate guide selects a locale by redirect | Both pages use article 102390, the current manual certificate-trust guide. Link directly to `/zh-cn/102390` in Chinese and `/en-us/102390` in English instead of relying on the locale-neutral redirect. Both official localized pages were verified with GET/content checks. |

Retained working Tailscale subnet-router/exit-node guides, mihomo DNS/TUN pages and strict-route anchors, the DirectX repair author's article, Surge site/update feed, public Helper/Docker guides and their English fragments, GitHub release entry points, the public site terms and homepage/software-center sections. Rolling `/releases/latest` links intentionally redirect to current tags; they should not be pinned to today's version. Microsoft's version-selector redirect also preserves the intended current runtime documentation.

Twenty protected oixCloud URLs (including four settings fragments) correctly redirect unauthenticated visitors to sign-in. All corresponding GET routes and all four settings target IDs were verified against committed panel source `7fc1c5785c6cee4977e0b6bfe3b75a730c6c47b9`; no account operations, credential handling or authenticated page changes were performed. A login redirect alone was not taken as proof of a valid account destination.

Apple App Store remains region-dependent: curl in this environment redirected even the explicit US URL to the China storefront homepage, while the web reader retrieved the intended oixCloud app at the existing US URL. The download instructions already require an Apple Account outside mainland China, so the documented link was preserved rather than replaced on the strength of a region-specific probe. This audit does not establish universal availability across regions or logged-in account permissions.

Validation: `pnpm build` and `git diff --check` passed. The generated site has 103 HTML pages, 7,106 valid internal references, 172 wrapped tables and 51 matching locale pairs. The six edited pages passed desktop (1440 px) and mobile (390 px) inspection: no horizontal page overflow or broken images across 12 cases. Desktop and mobile language switching retained the matching article and common-ports anchor. All five new external URLs returned HTTP 200; the maintained OpenClash section fragment was found in the served page. Locale-specific references increase the final inventory to 67 distinct external URLs. No client, navigation, illustration or legacy fragment-mapping files were changed.

# Download and system requirement audit — 2026-10-30

Audited all Markdown pages in both locales for download links and platform requirements. Updated nine paired pages: client index, first-use guide, FlClash connection guide, Apple connection/TV guides, Helper Mac/Linux guides, OpenClash and oixClash. Existing navigation, legacy fragment mappings and illustrations were preserved.

| Area | Evidence checked | Result |
| --- | --- | --- |
| Apple oixCloud | US App Store `id6782528093` compatibility section; maintained app deployment settings | iOS / iPadOS / tvOS 18.0 minimum; use the explicit US store URL because the regionless URL redirected this environment to the China storefront homepage. TestFlight remains subject to slots, expiry and per-build requirements. Store availability was checked independently of newer local source builds. |
| FlClash v0.9.2 | Current GitHub release/tag `cee40decdb9210d512db80232f49b524e9de93a6`, release notes, Android version catalog, macOS deployment settings and Windows README | Android API 24 / Android 7.0; Windows 10+, x64 / ARM64; ordinary macOS builds require 13.0+. Explicitly link the two unmaintained `macos12-final` DMGs and distinguish their checksum file. |
| FlClash Linux | Both current released DEBs, version `0.9.2+2026103000`, package control data and bundled ELF version references | amd64 / arm64; glibc 2.35 runtime baseline, graphical desktop/GTK 3; DEB dependencies include libayatana-appindicator3-1 and libsecret-1-0. Explain that AppImage does not remove system-library requirements. RPM/AppImage ARM64 assets exist on GitHub even though the software center lists fewer formats. |
| Helper v0.0.50 | Public release assets, public Homebrew formula, launcher instructions, maintained release script / Package.swift | Main ARM64 / Intel builds require macOS 14+; Legacy is universal for macOS 12 / 13. The public launcher ZIP differs from the raw Release executables. Preserve the public warning that Legacy lacks full physical-device validation. |
| Helper Linux | Public Docker instructions and Compose service `helper`; anonymous GHCR latest OCI index | GitHub Release executables are macOS-only. Replace the misleading Linux binary download path with the published Compose workflow. Image supports linux/amd64 and linux/arm64; configuration checks operate inside a temporary container, not on host ports. Preserve UID 10001 file access and LAN-authentication requirements. |
| Surge Mac | Official website download and signed appcast | Latest stable feed entry 6.10.0, minimum macOS 12.0. Link official download and requirement sources separately from Helper. |
| OpenClash | Software center's actual destination, maintained/upstream README and upstream v0.48.002 assets | Explicit `.ipk` versus `.apk`, firewall/feed/core-architecture requirements. Do not promise that an upstream download includes the maintained oixCloud account tab. The old Wiki URL redirects to the repository; link the current installation section instead. |
| oixClash v0.0.14 | Five platform assets, public checksum file and software-center CDN | Keep working direct downloads and add the current GitHub release as a fallback. CDN checksum file equals public SHA256SUMS. |

All 16 software-center CDN installers (11 FlClash and five oixClash) were streamed in full and their sizes and SHA-256 digests matched the latest GitHub asset metadata. Both Microsoft VC++ runtime links resolve to vendor executables. Existing Docker guides, third-party DLL repair information and new release/launcher links returned successful GET responses. A Python HEAD probe returned CDN 403 responses, but actual curl GET/range requests and full installer digest comparisons succeeded; those links were not incorrectly removed. Current software-center anchors are `apple`, `macos` and `router`; legacy redirect paths were normalized.

Source review used committed snapshots and public release artifacts only; sibling working changes were excluded and no client code was modified. This is a download/requirements and documentation-render audit, not installation/runtime testing on every listed OS. Public release URLs remain rolling unless intentionally pinned to the final macOS 12 compatibility artifacts.

Validation: `pnpm build` passed; generated output contains 103 HTML pages, 7,106 valid internal references and 172 wrapped tables, with 51 matching locale pairs. The 18 edited pages passed desktop (1440 px) and mobile (390 px) checks in both languages: no page overflow or broken images across 36 cases. Relevant desktop/mobile tables were visually inspected. Desktop English and mobile Chinese switching retained the shared downloads/requirements anchors. Existing explicit anchors, navigation and legacy fragment mappings were preserved. `git diff --check` passed. No cross-platform client runtime installation or signed-in account calls were performed.

# Complete illustration audit — 30 October 2026

Checked all 37 Chinese simulated illustrations, including the three revised in the preceding pass, against committed client UI and localization sources. Revised 29 scene definitions and regenerated all 37 SVGs with updated shared navigation and an explicit operation-diagram label. Updated the image revision to `20261030-2` in all 25 paired articles (50 pages), including full-size links, so cached old illustrations are replaced. Images remain diagrams with fictional values, not screenshots or a claim of identical styling across operating systems and themes.

The largest corrections are FlClash's Status-card start control, title-bar form confirmations and DNS add/remove controls, current sidebar DNS Queries entry, mode-card order, URL-profile menu order, macOS-only system DNS placement, Android More/Settings/Mode workflow and bottom status bar, and the two clients' different Tailscale forms. Apple figures now use the current Home label, correct login labels, group underlying-proxy section, chain route preview, network-preset Save action, module creation/import/subscription/hub entries, certificate login states and JavaScript-before-Run-Now order. The sync figure and prose distinguish MITM rule sets from device-local certificates. Smart is included among eligible Apple chain-entry groups. Merlin now shows the common-port row in its real order and refers to the page-bottom apply action instead of drawing it immediately after the cropped login/run area.

Per-illustration checks (filenames below are under `docs/public/illustrations/` and end in `-zh.svg`):

| Client | Illustration | Maintained UI checked / result |
| --- | --- | --- |
| Apple | oixcloud-login | CloudLoginView; email-password and Create Account translations |
| Apple | oixcloud-connect | HomeView/HomeWorkbench; status, power, node card and mode controls |
| Apple | oixcloud-proxies | NodePickerView; Done, search and directly selectable automatic/group rows |
| Apple | oixcloud-filter | CloudNodeFilterView; tri-state filters, preview search and save |
| Apple | oixcloud-policies | PolicyGroupEditorView; members, underlying proxy and health-check order |
| Apple | oixcloud-chains | ChainEditorView; title, first-hop groups, reorder and route preview |
| Apple | oixcloud-rules | RoutingRuleEditorView; match/value/action and add confirmation |
| Apple | oixcloud-dns | DNSSettingsView rule editor; enabled, match, action and save |
| Apple | oixcloud-networks | NetworkProfileEditorView; Save, inherited DNS and per-network controls |
| Apple | oixcloud-mitm | MITMCertificateView; generated local certificate and signed-out account actions |
| Apple | oixcloud-mitm-generate | MITMCertificateView; empty local state and Generate Certificate |
| Apple | oixcloud-modules | ModuleListView; creation/import/subscription/hub, toggles and order |
| Apple | oixcloud-sync | SettingsView/ICloudSyncCategory; categories, default choices and certificate scope |
| Apple | oixcloud-tailscale | TailscaleSettingsView/TailscaleEditorForm; interactive login and Save and Log In |
| Apple | oixcloud-automation | AutomationSettingsView; name-based title, triggers, code and Run Now |
| Apple | oixcloud-requests | RequestDetailView; Host field and connection/decision sections |
| FlClash | flclash-login | CloudLoginPage/CloudFormSheet; title-bar confirmation and fields |
| FlClash | flclash-connect | Dashboard/CurrentOutboundCard; start control inside Status card |
| FlClash | flclash-proxies | ProxiesView/card/list; selectable groups and example delay cards |
| FlClash | flclash-profiles | Profile menu; URL profile example distinct from managed controls |
| FlClash | flclash-filter | NodeFilterPage; title-bar reset/save and side-by-side preview |
| FlClash | flclash-chains | ProxyChainEditView; warning, name, selected chain and candidates |
| FlClash | flclash-override | OverwriteView; mode order and check/apply controls |
| FlClash | flclash-rules | CustomRuleEditor; form/raw, basic information, preview and confirmation |
| FlClash | flclash-capture | NetworkListView; macOS System/Options sections and platform-specific DNS |
| FlClash | flclash-dns | OverrideView/DnsOverrideSpec; add, remove, quick edit and field grouping |
| FlClash | flclash-backup | BackupAndRestore; unbound WebDAV state and restore strategy |
| FlClash | flclash-restore | Restore dialog; separate configuration-only/all-data choices |
| FlClash | flclash-webdav | WebDAVForm/FormPage; grouped fields and title-bar confirmation |
| FlClash | flclash-tailscale | Network editor; segmented login methods and lower login controls |
| FlClash | flclash-android | AccessControlView; More menu, mode submenu, save and status |
| FlClash | flclash-diagnostics | NetworkDiagnosticsPage; top actions and actual check labels |
| Helper | helper-surge | MenuBar connection submenu; labels and order retained |
| Helper | helper-lan | MenuBar/Legacy; local ports, LAN access and authentication retained |
| Merlin | oixclash-login | Module_oixclash.asp; login methods and cropped Run section |
| Merlin | oixclash-running | Module_oixclash.asp; common ports, UDP, QUIC and memory optimization order |
| Merlin | oixclash-rules | Module_oixclash.asp; read/save-account-rules workflow retained |

Source snapshots: `oixCloud 8219e9cd7bb913e4575c889681458a5c715a37cc`, `FlClash 5cde0769ff2a9b7ece3ca21151a4b05c821f03fa`, `oixClash 16394d14a3eea7c04348d304923f79b6509bec03`, `oixCloud-Helper 71087638df26dfd7f0b9e16d7d455c3ecac31eeb`, `oixCloud-Helper-legacy 1ced3ade2afd89915da1e30824f8b9bfec71513f`. Additional related UI forms were read at the same committed revisions. Helper advanced to `50151de1543dfc812f392fe053370e26cd6d2717` during the audit; its illustrated graphical menu files did not change. Uncommitted client work was excluded and no client files were edited. Public release metadata was rechecked for FlClash v0.9.2, oixClash v0.0.14 and Helper v0.0.50. This source/diagram audit does not establish App Store availability or exercise every distributed binary.

Validation: `pnpm build` and `git diff --check` passed. All 37 SVGs parse; each was visually inspected and browser geometry checks found no overlapping text or text outside its canvas. The 50 affected Chinese/English pages passed 100 layout cases at 390px/1440px after client-side hydration, without page overflow, broken loaded images, old illustration revisions or browser warnings/errors. Desktop/mobile language switching retained the paired sync article and shared folder section. All 103 generated HTML pages, 7,076 internal references, 162 tables and 51 locale pairs passed link/anchor/locale checks; image/full-size-link revisions are paired. Navigation and legacy fragment mappings are unchanged. Preview servers were restarted after the final build to clear their asset index; no production client login, VPN connection, certificate installation or account operation was performed. Publication is checked separately after pushing main.

---

# Site-wide factual audit — 30 October 2026

Reviewed all 51 Chinese/English guide pairs against maintained implementation and official references. Corrected 13 paired topics (26 pages), with three regenerated Chinese simulated illustrations shared by both locales:

- Dedicated IP expiry is an upper bound: it must not exceed active-plan expiry plus consecutively activatable queued duration. Corrected the previously reversed inequality, purchase/renewal instructions and automatic-renewal recovery. Added the 12-month operation limit, new-purchase minimum versus one-month renewal, and supported-node dedicated IPv6 scope.
- Account cleanup starts from the later of last activity and expired-plan time, with pending-plan/payment/withdrawal deferrals. Support now documents the three creation confirmations, calendar-year allowances, continuing existing tickets and input limits.
- FlClash DNS uses individual override entries instead of a master switch. Desktop TUN exposes Strict route, with custom-profile settings taking precedence. Proxy chains accept eligible groups and use derived `Node (via Previous hop)` exits without changing the original node's route.
- Apple oixCloud supports eligible first-hop policy groups and group underlying proxies. English uses the current Best Available label. MITM exclusions distinguish shared Surge-style modules from native embedded and standalone sets; exclusion-only Surge modules can contribute. Apple TV local control has its own settings path and QR workflow, distinct from iPhone/iPad controls.
- Router guidance documents default common-port capture, UDP scope, the current Memory Optimization label and failed-apply recovery. Removed the fixed package-download size. Added account-wide STUN and YouTube-background compatibility settings and their defaults.

The remaining guides were checked for plan billing and annual benefit-credit eligibility, stock/activation/refund distinctions, crypto-feedback timing, published low-speed rates and fair-use calculations, credential changes and subscription filters, client import/update/sync/recovery, DNS and IPv6 boundaries, Android access, Tailscale, diagnostics, and Helper modes/ports/Linux deployment. Their verified instructions and published numeric tables were retained. No internal abuse criteria, private source or credentials were added.

Source references included panel DedicatedIpPlanPolicy, UserController, DedicatedIpJob, AccountDeletionPolicy/UserJob, Ticket, AccountSettingsService and bilingual UI; Apple routing/MITM/runtime stores and iOS/tvOS views/localizations; FlClash DNS/TUN override editors, profile assembly, backup and pinned core; router defaults/LuCI/Merlin UI; and both Helper variants. Source snapshots inspected: dler-panel `347090e998933af06d7c06c88725f8b08ffec1fc` through `7fc1c5785c6cee4977e0b6bfe3b75a730c6c47b9`, oix-server `05daf63285cc20b65cb9cc778fab45651e69715f`, oixCloud `8219e9cd7bb913e4575c889681458a5c715a37cc`, FlClash `6e6795bde2268ee2ab78750a45a6357d2b7ee2ea` through `5c8ae83f6206bf878e930662e13adc412c5ad11b`, Helper `0d9583e89e5106c335f265379bdc39c913d99ef7` through `71087638df26dfd7f0b9e16d7d455c3ecac31eeb`, Legacy Helper `1ced3ade2afd89915da1e30824f8b9bfec71513f`, OpenClash `82ba13993c3ccd3ae627da89022ed01c3cd12fe0` and oixClash `16394d14a3eea7c04348d304923f79b6509bec03`. Uncommitted work in those repositories was not treated as released behavior or modified. Public GitHub releases report FlClash v0.9.2 and oixClash v0.0.14; the reviewed FlClash DNS/TUN and chain changes are ancestors of the current v0.9.2 tag. Official mihomo TUN documentation was also checked.

Validation: `pnpm build` and `git diff --check` passed. All 103 generated HTML pages, 7,076 internal references, 162 tables and 51 locale pairs passed link/anchor, paired table/callout and existing explicit-anchor checks; navigation and legacy fragment mappings are unchanged. The 26 edited pages passed 390px/1440px checks (52 cases), without horizontal page overflow, broken images or browser warnings/errors. Desktop and mobile language switching retained the same new/shared section anchors. Visually inspected the MITM comparison table and all three regenerated illustrations; all 37 SVGs parse. A temporary PHP fixture executed the actual maintained DedicatedIpPlanPolicy with isolated model/query stubs: 13 scenarios and 104 assertions passed, covering equality, one-second boundaries, active-plan requirements, queued plans and invalid queue gaps, with/without transaction locks. No database or live account was used and fixture files remain outside the repository.

This audit verifies source-backed guidance and local rendering. It does not exercise production purchases, account deletion, payments, device traffic or every distributed client binary. Source commits do not establish production deployment; GitHub Pages publication is checked separately after pushing.

---

# Quarterly and semiannual upgrade eligibility — 30 October 2026

Corrected the paired Plans guides: quarterly, semiannual and annual plans may upgrade or exchange when eligible; monthly plans cannot. The target must offer the original billing period, which remains unchanged. Active plans require a higher tier and at least 60 remaining days under the system calculation. Never-used queued plans may exchange; previously used queued plans must be activated before upgrade eligibility is checked. Target purchase eligibility, stock, funds and the Plan Management preview still apply. Annual benefit-credit eligibility is a separate rule and was not broadened.

Verified `Bought::isUpgradeableBilling`, `ShopPolicy::canUpgrade`, `PurchaseService::validateUpgradeEligibility`, `PriceCalculator` and the upgrade transaction, plus the bilingual panel labels. The change was introduced by dler-panel `04af57481`; the inspected source HEAD `347090e998933af06d7c06c88725f8b08ffec1fc` matched remote main during this audit. No panel files were changed and no account purchase or upgrade was performed. Source publication does not establish production deployment.

Validation: `pnpm build` and `git diff --check` passed. All 103 generated HTML pages, 7,056 internal references, 154 tables and 51 locale pairs passed the local link/anchor and table checks. Rechecked the corrected Chinese and English Plans pages at 390px and 1440px: the new eligibility text rendered without horizontal page overflow.

---

# Site-wide reading layout and node comparison — 30 October 2026

Reorganized 27 Chinese/English page pairs: the homepage and seven category indexes now offer task-to-guide lookup tables; topic pages use tables for node types, ingress lines, renewal conditions, credentials, configuration sources and recovery choices. Existing procedures remain numbered steps. Consequences of replacement, deletion, credential changes and public exposure are highlighted using VitePress callouts. The seven Chinese node descriptions match the current official homepage; dedicated-line directions are presented separately without adding inferred use cases.

The shared theme applies to all 51 locale pairs. Tables retain native table semantics inside focusable horizontal-scroll containers, with consistent headers, spacing, borders and light/dark colors. Updated indexes retain the full client display names and platform boundaries. Existing article paths, explicit anchors, sidebar categories and legacy panel fragment mappings are preserved. New paired sections share explicit anchors. Removed the homepage/footer's blanket historical verification date so a layout update does not imply a new audit of every client release.

Validation: `pnpm build` and `git diff --check` passed. All 103 generated HTML pages, 7,056 internal references, 152 tables and 51 locale pairs passed link/anchor and table-wrapper checks. Edited pairs have matching table counts, callout types and explicit heading anchors. Browser layout checks covered all 102 localized pages at 390px and 1440px (204 cases), with no horizontal page overflow, failed loaded images or browser warnings/errors. Inspected representative light/dark homepage, category and node tables; verified keyboard table scrolling, mobile and desktop language links retaining the node article/section, local search for Fusion and representative legacy fragment redirects. The final node-table wording and width adjustment were rechecked separately.

This pass updates documentation layout and presentation, with homepage-backed node descriptions. It does not re-audit client implementation, measure production routes or verify deployment. No commit, push or publication was performed.

---

# Panel guidance and account protection — 23 October 2026

Updated six paired topics: account security, nodes, traffic, fair use, troubleshooting and support. The guides now match the panel's token creation/regeneration labels, Telegram binding without a username, daily-notification save states, TOTP wording and member service-status page. Published points tables, calculation examples and recovery conditions remain available. The account-protection notice explains automated abnormal-use detection and human review without publishing ban criteria or detection details. Current low-speed rate tiers remain documented; additional resource restrictions are described without internal trigger values.

Validation: `pnpm build` passed in an isolated source copy using the repository's installed dependencies. All 103 generated HTML pages, 6,990 internal links and 51 locale pairs passed link/anchor checks. The 12 edited guide pages were checked at 390px and 1440px without horizontal page overflow or browser script errors; desktop and mobile language switching retained the fair-use article and recovery section. A temporary PHP 8.5.12 check compared 888 boundary cases from the bilingual points tables with the maintained implementation. Low-speed rate tiers were checked against current server source. No live account, production configuration, payment, database or notification was used.

These checks establish local source and documentation behavior only. They do not verify production deployment, live network speeds or GitHub Pages publication. No commit, push or deployment was performed in this pass.

---

# Low-speed traffic documentation — 22 October 2026

Added paired 32/128/256 KiB/s low-speed rate tables and scope, further reductions, gaming-node and pay-as-you-go restrictions, connection limits and recovery steps. Updated Fair use and Troubleshooting cross-references while preserving existing section anchors and legacy panel fragment mappings.

Source checks used dler-server `f7a000b` (rate selection, shared upload/download limiter, connection admission and UDP handling) and dler-panel `b30e4b6a` (plan names/ranks, node category and traffic-state recovery). Public pages contain user-facing behavior only, with no private source code or account data.

Validation: `pnpm build` and `git diff --check` passed. All 103 generated HTML pages and 6,980 internal links resolved; all 51 locale paths matched. The six edited pages were checked at 390px and 1440px, with no horizontal page overflow or browser errors. Desktop/mobile language switching retained the paired traffic article, and both language rate tables were visually inspected. Speed values and restrictions were verified against maintained source, not measured on production accounts. The paired server change passed race-enabled tests for ratelimit, rate-limiter, repo, tunnel and Snell; additional restrictions apply to severe overuse. Source publication does not confirm deployment to running nodes.

---

# Documentation update — 17 October 2026

Completed the eight follow-up topics in paired Chinese/English articles: password-change consequences and Passkey/TOTP management; module/native/device MITM exclusion scopes; folder sync compatibility; folder operations and wrapped imports; uncredited crypto payment feedback; activity-driven Auto Select retesting; rule-driven process lookup; and centralized external-resource updates. Added concrete Activity and diagnostic-export paths, corrected the nonexistent diagnostic-range selection step, aligned FlClash for oixCloud's current General menu paths, and refined ordinary connection terminology.

Source checks used oixCloud `21587040`, FlClash for oixCloud `c008592c7` and dler-panel `f4a1e4ed`. Verified the folder editor/store and sync schema, import parser, Auto Select scheduler, MITM policy and inspector, external-resource view, Activity/export UI, process-lookup configuration and translations, password/token/main-link handling, Passkey registration, TOTP validation, payment timing and feedback UI. Other repositories contain unrelated local work; no client or panel files were changed. Public prose contains no private implementation code or real credentials.

Folder instructions explicitly start at 2.1.6 (520) on supporting iPhone/iPad builds, with release-channel availability left to the installed version. The guide does not assume equivalent Apple TV management or claim current App Store approval. Payment submission, review, credit and plan activation remain separate outcomes.

Validation: `pnpm build` passed; 103 generated HTML pages and 8,021 internal references resolved. All 51 locale paths, navigation structure and explicit paired section anchors matched. Checked 32 relevant pages at 390 and 1440 pixels (64 cases), without horizontal page overflow or browser warnings/errors. Visually inspected password-change instructions, the MITM comparison table, folder steps and payment feedback. Desktop/mobile language switches preserved the paired article and section; local search found the new folder and sync sections. `git diff --check` passed. Legacy fragment mappings are unchanged.

This is source-backed documentation and local-site validation. No live password changes, Passkey registration, payments, production account tests or client release/deployment checks were performed. Pushing `main` triggers the repository's GitHub Pages publication workflow; its result is separate from these local checks.

---

# Fair-use and inventory documentation — 16 October 2026

Updated five paired topics: Fair use, Plans, Traffic, Troubleshooting and Support. Fair use now documents account-wide activity aggregation, the plan multiplier, both scoring tables with exact boundaries, Beijing-time off-peak hours, score clamping, warnings and recovery. Ban criteria and detection details remain undisclosed.

Inventory wording follows the implementation: disabling renewal does not immediately return stock, and switching, upgrading or refunding does not return the original stock. Eligible expired-plan termination/cleanup returns stock; normal automatic renewal does not deduct again, while early renewal does. The operator's policy is normally not to replenish limited plans manually, with no fixed restocking schedule.

Source basis: dler-panel `0d733f60` (`UserJob`, `Tools`, `Boot`, `FinanceJob`, `OrderService`, `PurchaseService`, plan operations and shop templates); dler-server `3c6c1fd` (request counters and traffic reporting). The accompanying panel changes replace outdated inline rules with a bilingual summary and guide link, and add a stock explanation/link to sold-out cards. No scoring, inventory or account-state behavior was changed.

Validation: `pnpm build` passed; 103 generated pages and 7,967 internal references resolved. Ten numerical examples and time/threshold boundaries matched the current PHP methods without loading runtime configuration or a database. Both changed Smarty templates compiled under PHP 7.4.33; new translation keys resolved. Checked the ten guide pages and two fictional panel previews at 390 and 1440 pixels (24 cases), without horizontal page overflow or browser console warnings/errors. Visually inspected both language tables, the stock explanation and panel snippets; the language switch retained the paired article and section.

Pre-push review: generated 516 quantity and time-boundary cases from the bilingual scoring tables; all matched the maintained PHP implementation. Rebuilt the site and rechecked 103 pages, 7,967 internal references, paired section anchors, translation keys and Smarty compilation. The panel documentation patch is isolated on a branch based on remote `2fa6532e`, leaving 24 existing local commits unpublished. The guide describes maintained `0d733f60`; deployment must include its lower-speed preservation changes, which are outside this documentation patch. Neither documentation push publishes the site or deploys the panel.

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
