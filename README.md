# oixCloud Docs

Public, bilingual documentation for setup, client configuration, accounts and troubleshooting, published at [docs.dler.io](https://docs.dler.io) with GitHub Pages.

## Local development

Use Node.js 22 or newer and pnpm 10.6.5.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm check:search
pnpm preview
```

## Content

- Simplified Chinese: `docs/<category>/<topic>.md`
- English: `docs/en/<category>/<topic>.md`
- Main categories: `start`, `clients`, `account`, `help`
- Client articles retain their existing `oixcloud`, `flclash` and `other` paths
- Sidebar: `docs/.vitepress/navigation.json`
- Theme, search and locales: `docs/.vitepress/config.mjs`

Keep both languages at the same relative paths so the language switch opens the corresponding article. Add new articles to both category indexes and the sidebar. Builds reject broken Markdown links. Search pairs matching sections in both languages, includes illustrated interface labels and keeps result links in the current locale. Keep the heading hierarchy and order aligned across each pair. Common bilingual feature names and spelling variants are normalized in `docs/.vitepress/search.mjs`. Add keyword cases to `scripts/search-cases.json` when documenting a new feature, then run `pnpm build` and `pnpm check:search`; the publishing workflow runs these checks too. No search service is required.

The guide has 43 topics in each language. The latest client and account update was checked against maintained source on 16 October 2026; source support does not imply availability in every public binary or a deployed panel. iPhone/iPad, Apple TV and FlClash for oixCloud have different features; document their actual interfaces separately. This is a user guide, not a promise that every release or platform exposes every option.

Old panel links such as `/guide#subscriptions` redirect to the site root with their fragment. The theme maps these legacy fragments to individual articles in the selected language on first load, internal navigation and hash changes; unrelated fragments stay on the current page.

Review findings, source baselines and validation scope are recorded in [REVIEW.md](REVIEW.md).

## Publishing

Push to `main` to build and deploy through `.github/workflows/deploy.yml`. Pull requests build without deploying. In repository **Settings → Pages**, use **GitHub Actions** and set the custom domain to `docs.dler.io`.

DNS: create a DNS-only CNAME `docs` → `pickrui.github.io`. Enable HTTPS enforcement after GitHub provisions the certificate. The VitePress base path is `/` because the site uses its own domain. Keep `docs/public/CNAME`, the sitemap hostname and DNS in agreement.

The custom domain is verified under the `pickrui` GitHub account. Keep the `_github-pages-challenge-pickrui.docs` TXT record in the `dler.io` DNS zone so domain ownership remains verified. The certificate is managed by GitHub Pages; keep the CNAME in DNS-only mode.

Only documentation and public assets belong in this repository. Never include client source trees, runtime configuration, subscription links, tokens or private diagnostic data. The panel repository deploys independently; publishing these docs does not update its `/guide` redirect.

## Tutorial illustrations

The 74 SVG illustrations in `docs/public/illustrations/` are simulated interfaces using fictional data: 37 per language, covering 25 topics in each language. Regenerate Chinese images with `node scripts/render-illustrations.mjs` and English images with `node scripts/render-illustrations.mjs --en`, then inspect the output. They cover account setup and routing, DNS, MITM, sync, backups, Tailscale Helper menus, and oixClash sign-in, running settings and account rules. Their layout follows the maintained clients; they are not captured screenshots.

Use the system-font theme to avoid web-font downloads. Keep illustration dimensions explicit. Images near the article's first screen use `:loading="$isGuidePage ? 'eager' : 'lazy'"` and `:fetchpriority="$isGuidePage ? 'high' : 'auto'"`; later images remain lazy. The theme sets `$isGuidePage` only on the main Vue app, so VitePress's isolated search-preview app keeps these images lazy. Detailed search excerpts hide figures and display text. When changing VitePress or these bindings, verify that article images retain their priority and search excerpts do not download hidden diagrams. Search code and locale indexes should remain lazy, with no index download before search opens.
