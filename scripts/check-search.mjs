import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
import { gzipSync } from 'node:zlib'
import config from '../docs/.vitepress/config.mjs'
import vm from 'node:vm'

const root = process.cwd()
const require = createRequire(path.join(fs.realpathSync('node_modules/vitepress'), 'package.json'))
const MiniSearch = require('minisearch')
const chunks = 'docs/.vitepress/dist/assets/chunks'
const miniSearch = config.themeConfig.search.options.miniSearch
const serialized = vm.runInNewContext('(' + miniSearch.options.tokenize.toString() + ')', { Intl: undefined })
for (const sample of ['节点筛选 FlClash NodeFilter AuthKey ＴＵＮ', '账号 密码 fake-ip']) {
  assert.deepEqual(Array.from(serialized(sample)), miniSearch.options.tokenize(sample), 'Browser tokenizer must work without build-time dependencies or Intl.Segmenter')
}
const cases = JSON.parse(fs.readFileSync(new URL('./search-cases.json', import.meta.url), 'utf8'))
let queries = 0, anchors = 0
const failures = []
for (const locale of ['root', 'en']) {
  const file = fs.readdirSync(chunks).find(name => name.startsWith('@localSearchIndex' + locale + '.'))
  assert(file, 'Run pnpm build before checking the search index')
  const data = (await import(pathToFileURL(path.join(root, chunks, file)))).default
  const index = MiniSearch.loadJSON(data, {
    fields: ['title', 'titles', 'text'], storeFields: ['title', 'titles'],
    searchOptions: { prefix: true, fuzzy: 0.2, boost: { title: 4, text: 2, titles: 1 }, ...miniSearch.searchOptions },
    ...miniSearch.options
  })
  const prefix = locale === 'en' ? '/en' : ''
  const ids = Object.values(JSON.parse(data).documentIds)
  const pages = new Set()
  for (const id of ids) {
    assert.equal(id.startsWith('/en/'), locale === 'en', id)
    const [url, anchor] = id.split('#')
    pages.add(url)
    const html = fs.readFileSync(path.join('docs/.vitepress/dist', url.endsWith('/') ? url + 'index.html' : url), 'utf8')
    assert(html.includes(`id="${decodeURIComponent(anchor)}"`), 'Missing result anchor: ' + id)
    anchors++
  }
  const sources = fs.readdirSync(locale === 'en' ? 'docs/en' : 'docs', { recursive: true })
    .map(name => name.split(path.sep).join('/'))
    .filter(name => name.endsWith('.md') && !name.startsWith('en/') && !name.startsWith('.vitepress/'))
  const expected = sources.map(name => prefix + '/' + name.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '.html'))
  assert.deepEqual([...pages].sort(), expected.sort(), 'All locale pages must be searchable')
  for (const { terms, targets } of cases) {
    for (const query of terms) {
      const results = index.search(query).slice(0, 5)
      if (!results.some(r => targets.some(target => r.id.startsWith(prefix + target)))) failures.push({ locale, query, results: results.map(r => r.id) })
      queries++
    }
  }
  for (const query of ['unicornfeaturezzzzz', 'FlClash unicornfeaturezzzzz']) {
    assert.equal(index.search(query).length, 0, 'Unknown terms must not return unrelated client results')
    queries++
  }
  console.log(`${locale}: ${index.documentCount} sections, ${pages.size} pages, ${gzipSync(data).length} gzip bytes`)
}
assert.deepEqual(failures, [], 'Keyword results must include the relevant guide in the top five')
console.log(`Passed ${queries} keyword checks and ${anchors} result-anchor checks`)
