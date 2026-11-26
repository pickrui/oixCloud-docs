// The sidebar in navigation.json is the single source for the homepage directory and article trails
import navigation from '../navigation.json'

// Marks for sections and client entries, keyed by link without the locale prefix
const ICONS = {
  'start/': 'start', 'clients/': 'clients', 'account/': 'account', 'help/': 'help',
  'oixflow/': 'oixflow', 'flclash/': 'flclash', 'other/openclash': 'openclash',
  'other/oixclash': 'oixclash', 'other/surge': 'helper'
}

const key = link => link.replace(/^\/(en\/)?/, '')

export const isEnglish = relativePath => relativePath.startsWith('en/')
export const sectionsFor = relativePath => navigation[isEnglish(relativePath) ? 'en' : 'zh']
export const iconFor = link => ICONS[key(link)]

// Sidebar links omit the extension; pages are published as .html
export const hrefFor = link => link.endsWith('/') ? link : link + '.html'

// The sidebar link of a page: account/nodes.md → /account/nodes, en/account/index.md → /en/account/
export const linkFor = relativePath => '/' + relativePath.replace(/\.md$/, '').replace(/(^|\/)index$/, '$1')

// Sidebar entries above a link, nearest last; undefined when the link is not in the sidebar
export function ancestorsOf(items, link, trail = []) {
  for (const item of items) {
    if (item.link === link) return trail
    if (!item.items) continue
    const found = ancestorsOf(item.items, link, item.link ? [...trail, item] : trail)
    if (found) return found
  }
}

// Client hubs show their mark above the title
export const hubMarkFor = link => ['oixflow/', 'flclash/'].includes(key(link)) ? iconFor(link) : null
