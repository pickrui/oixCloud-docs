import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const docs = fileURLToPath(new URL('../', import.meta.url))
const headingPattern = /<h([1-6])\b[^>]*>[\s\S]*?<\/h\1>/g
const plain = html => html.replace(/<[^>]*>/g, ' ').replace(/\u200b/g, '').trim()

function sections(html) {
  const headings = [...html.matchAll(headingPattern)]
  return headings.map((m, i) => ({
    level: m[1], heading: m[0],
    content: html.slice(m.index + m[0].length, headings[i + 1]?.index ?? html.length)
  }))
}

function searchableText(section, md, includeContent = false) {
  const labels = [...section.content.matchAll(/<img\b[^>]*src="(\/illustrations\/[a-z0-9-]+\.svg)(?:\?[^" ]*)?"/g)]
    .flatMap(m => [...readFileSync(path.join(docs, 'public', m[1].slice(1)), 'utf8').matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/g)].map(t => t[1]))
  return md.utils.unescapeAll(plain(section.heading + (includeContent ? ' ' + section.content : '')) + ' ' + labels.join(' '))
}

// Search-only content: pair translations by heading order, preserving local URLs/titles.
export function renderSearch(src, env, md) {
  const clean = html => html.replace(/<p class="table-hint">[\s\S]*?<\/p>/g, '').replace(/<figcaption>[\s\S]*?<\/figcaption>/g, '')
  const html = clean(md.render(src, env))
  if (env.frontmatter?.search === false) return ''
  const relative = env.relativePath.replace(/^en\//, '')
  const pairedPath = env.relativePath.startsWith('en/') ? relative : 'en/' + relative
  const pairedEnv = { ...env, path: path.join(docs, pairedPath), relativePath: pairedPath }
  const paired = clean(md.render(readFileSync(pairedEnv.path, 'utf8'), pairedEnv))
  const own = sections(html), other = pairedEnv.frontmatter?.search === false ? [] : sections(paired)
  if (other.length && (own.length !== other.length || own.some((s, i) => s.level !== other[i].level))) {
    throw new Error(`Paired search headings differ: ${env.relativePath}`)
  }
  const client = relative.startsWith('flclash/') ? 'FlClash for oixCloud'
    : relative.startsWith('oixcloud/') ? 'oixCloud'
    : relative.startsWith('other/helper-') || relative === 'other/surge.md' ? 'oixCloud Helper' : ''
  return own.map((section, i) => {
    let heading = section.heading
    if (section.level === '1' && client && !plain(heading).toLowerCase().includes(client.toLowerCase())) {
      heading = heading.replace(/(<h1\b[^>]*>)/, '$1' + client + ' · ')
    }
    const terms = searchableText(section, md) + ' ' + (other[i] ? searchableText(other[i], md, true) : '')
    return heading + section.content + '<p>' + md.utils.escapeHtml(terms) + '</p>'
  }).join('\n')
}

// Self-contained: VitePress serializes this same function into the browser config.
export function tokenizeSearch(text) {
  const normalized = text.normalize('NFKC').toLowerCase()
    .replace(/\bauth[\s_-]*key\b/g, 'auth key')
    .replace(/\baccess[\s_-]*token\b/g, 'access token')
    .replace(/\bicloud[\s_-]*sync\b/g, 'icloud sync')
    .replace(/\bfake[\s_-]*ip\b/g, 'fake ip')
    .replace(/\bdomain[\s_-]*suffix\b/g, 'domain suffix')
    .replace(/\bnode[\s_-]*filters?\b/g, 'node filter')
    .replace(/\baccess[\s_-]*control\b/g, 'access control')
    .replace(/\bweb[\s_-]*dav\b/g, 'webdav')
    .replace(/\bfl[\s_-]*clash\b/g, 'flclash')
    .replace(/\boix[\s_-]*cloud\b/g, 'oixcloud')
    .replace(/\boix[\s_-]*clash\b/g, 'oixclash')
    .replace(/账号|帐号|帐户/g, '账户')
  const aliases = [
    [/节点筛选|节点过滤|node[\s_-]*filters?\b/g, 'nodefilter'],
    [/代理链|链式代理|proxy[\s_-]*chains?\b/g, 'proxychain'],
    [/自动优选|best[\s_-]*available\b/g, 'bestavailable'],
    [/网络自检|network[\s_-]*self[\s_-]*check\b/g, 'networkselfcheck'],
    [/系统代理|system[\s_-]*proxy\b/g, 'systemproxy'],
    [/应用访问控制|(?:app[\s_-]*)?access[\s_-]*control\b/g, 'appaccesscontrol'],
    [/局域网控制|local[\s_-]*controller\b/g, 'localcontroller'],
    [/严格\s*dns|strict[\s_-]*dns\b/g, 'strictdns'],
    [/dns\s*泄漏|dns[\s_-]*leaks?\b/g, 'dnsleak'],
    [/模块排序|模块顺序|生效顺序|module[\s_-]*order\b/g, 'moduleorder'],
    [/可莉(?:插件)?中心|kelee[\s_-]*module[\s_-]*hub\b/g, 'keleemodulehub'],
    [/恢复默认|restor(?:e|ing)[\s_-]*defaults?\b/g, 'restoredefault'],
    [/备份|back[\s_-]*ups?\b/g, 'backup'],
    [/自动化|automation\b/g, 'automation'],
    [/密码|passwords?\b/g, 'password'],
    [/流量|traffic\b/g, 'traffic'],
    [/订阅|subscriptions?\b/g, 'subscription'],
    [/账户|accounts?\b/g, 'account'],
    [/虚拟网卡|\btun\b/g, 'tun'],
    [/季付|季度|quarterly\b/g, 'quarterly'],
    [/升级|upgrades?\b/g, 'upgrade'],
    [/故障排查|排障|troubleshooting\b/g, 'troubleshooting'],
    [/专用\s*ip|专属\s*ip|独享\s*ip|dedicated[\s_-]*ip\b/g, 'dedicatedip'],
    [/多跳中继|多级路径|多跳路径|multi[\s_-]*hop\b/g, 'multihop'],
    [/流媒体|streaming\b/g, 'streaming'],
    [/支持请求|support[\s_-]*requests?\b|服务单|工单|\btickets?\b/g, 'supportticket'],
    [/策略组|policy[\s_-]*groups?\b/g, 'policygroup'],
    [/自动测速|url[\s_-]*test\b/g, 'urltest']
  ]
  let input = normalized
  for (const [pattern, term] of aliases) input = input.replace(pattern, ' ' + term + ' ')

  const terms = []
  for (const m of input.matchAll(/[\u3400-\u9fff]+|[a-z0-9]+/g)) {
    const word = m[0]
    if (/^[\u3400-\u9fff]/.test(word)) {
      for (let i = 0; i < word.length; i++) {
        if (word.length === 1) terms.push(word)
        if (i + 1 < word.length) terms.push(word.slice(i, i + 2))
      }
    } else terms.push(word)
  }
  return [...new Set(terms)]
}
