# oixCloud Docs

Public, bilingual documentation for setup, client configuration, accounts and troubleshooting, published at [docs.dler.io](https://docs.dler.io) with GitHub Pages.

## Local development

Use Node.js 22 or newer and pnpm 10.6.5.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

## Content

- Simplified Chinese: `docs/<category>/<topic>.md`
- English: `docs/en/<category>/<topic>.md`
- Main categories: `start`, `clients`, `account`, `help`
- Client articles retain their existing `oixcloud`, `flclash` and `other` paths
- Sidebar: `docs/.vitepress/navigation.json`
- Theme, search and locales: `docs/.vitepress/config.mjs`

Keep both languages at the same relative paths so the language switch opens the corresponding article. Add new articles to both category indexes and the sidebar. Builds reject broken Markdown links. Search uses local indexes with Chinese word segmentation; no search service is required.

The guide has 41 topics in each language, checked against the maintained clients on 29 September 2026. iPhone/iPad, Apple TV and FlClash for oixCloud have different features; document their actual interfaces separately. This is a user guide, not a promise that every release or platform exposes every option.

Old panel links such as `/guide#subscriptions` redirect to the site root with their fragment. The theme maps these legacy fragments to individual articles in the selected language on first load, internal navigation and hash changes; unrelated fragments stay on the current page.

Review findings, source baselines and validation scope are recorded in [REVIEW.md](REVIEW.md).

## Publishing

Push to `main` to build and deploy through `.github/workflows/deploy.yml`. Pull requests build without deploying. In repository **Settings → Pages**, use **GitHub Actions** and set the custom domain to `docs.dler.io`.

DNS: create a DNS-only CNAME `docs` → `pickrui.github.io`. Enable HTTPS enforcement after GitHub provisions the certificate. The VitePress base path is `/` because the site uses its own domain. Keep `docs/public/CNAME`, the sitemap hostname and DNS in agreement.

The custom domain is verified under the `pickrui` GitHub account. Keep the `_github-pages-challenge-pickrui.docs` TXT record in the `dler.io` DNS zone so domain ownership remains verified. The certificate is managed by GitHub Pages; keep the CNAME in DNS-only mode.

Only documentation and public assets belong in this repository. Never include client source trees, runtime configuration, subscription links, tokens or private diagnostic data. The panel repository deploys independently; publishing these docs does not update its `/guide` redirect.

## Tutorial illustrations

The 37 Chinese SVG illustrations in `docs/public/illustrations/` are simulated interfaces using fictional data, with labels paired to the tutorial steps. Regenerate them with `node scripts/render-illustrations.mjs` and inspect the output after editing. Both documentation languages use the same Chinese images. They cover 25 topics in each language, from account setup and routing to DNS, MITM, sync, backups, Tailscale Helper menus, and oixClash sign-in, running settings and account rules. Their layout follows the maintained clients; they are not captured screenshots.
