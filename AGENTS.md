# Documentation editing

- Author user-facing instructions from the maintained client implementation or official documentation; do not infer platform parity
- Keep Simplified Chinese and English pages paired at identical paths below their locale root
- Keep categories, navigation and cross-links aligned in both languages
- Use concrete menu paths, steps, expected results and troubleshooting; explain destructive choices before the step
- Chinese prose omits terminal full stops; preserve punctuation required by code and URLs
- Do not include private client source, credentials, real subscription URLs or diagnostic bundles
- Run `pnpm build`, check internal links and language switching, and inspect relevant desktop/mobile pages before committing
- Preserve legacy panel fragment mappings in `docs/.vitepress/theme/index.js`
- GitHub Pages publishes `main`; use `docs.dler.io` with base `/`, local search and no authenticated backend
- Organize the homepage and primary navigation by user tasks; keep individual apps under Client guides and use the full display name `FlClash for oixCloud`
