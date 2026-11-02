import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { createMarkdownRenderer } from 'vitepress'
import { clean, clientName, sections } from './search.mjs'

// Section text published as /guide-index.json; the panel retrieves it for AI support replies
export async function writeGuideIndex(siteConfig) {
  const md = await createMarkdownRenderer(siteConfig.srcDir, siteConfig.markdown, siteConfig.site.base, siteConfig.logger)
  // Blocks become lines and table cells keep separators; inline tags join without spaces
  const text = html => md.utils.unescapeAll(html
    .replace(/<span class="lang">[^<]*<\/span>/g, '')
    .replace(/<\/t[dh]>\s*/g, ' | ')
    .replace(/<(?:br|\/?(?:p|div|li|ul|ol|tr|table|thead|tbody|h[1-6]|pre|blockquote|figure))\b[^>]*>/g, '\n')
    .replace(/<[^>]*>/g, ''))
    .replace(/\u200b/g, '').replace(/[^\S\n]+/g, ' ').replace(/[ |]*\n[\s|]*/g, '\n').trim()
  const entries = []
  for (const relativePath of [...siteConfig.pages].sort()) {
    const file = path.join(siteConfig.srcDir, relativePath)
    const env = { path: file, relativePath, cleanUrls: false }
    const html = clean(md.render(readFileSync(file, 'utf8'), env))
    if (env.frontmatter?.search === false) continue
    const url = '/' + relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '.html')
    const built = readFileSync(path.join(siteConfig.outDir, url.endsWith('/') ? url + 'index.html' : url), 'utf8')
    const client = clientName(relativePath.replace(/^en\//, ''))
    const titles = []
    for (const section of sections(html)) {
      const level = Number(section.level)
      let title = text(section.heading)
      if (level === 1 && client && !title.toLowerCase().includes(client.toLowerCase())) title = client + ' · ' + title
      titles.length = level - 1
      titles[level - 1] = title
      const body = text(section.content)
      if (!body) continue
      const id = md.utils.unescapeAll(section.heading.match(/\bid="([^"]+)"/)?.[1] ?? '')
      if (level > 1 && !built.includes(`id="${id}"`)) throw new Error(`Missing guide index anchor: ${relativePath}#${id}`)
      entries.push({
        lang: relativePath.startsWith('en/') ? 'en' : 'zh',
        url: level > 1 ? url + '#' + encodeURIComponent(id) : url,
        title: titles.filter(Boolean).join(' › '),
        text: body
      })
    }
  }
  writeFileSync(path.join(siteConfig.outDir, 'guide-index.json'), JSON.stringify({ version: 1, sections: entries }))
}
