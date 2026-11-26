// Tables render inside a scrollable region with a localized swipe hint.
// On the homepage and section indexes, "task → article" tables are marked .table-links and shown as cards

// True when every body row's second cell holds exactly one link and nothing else
function linksOnly(tokens, from) {
  let rows = 0
  let cell = 0
  for (let i = from; tokens[i].type !== 'table_close'; i++) {
    if (tokens[i].type === 'tr_open') cell = 0
    if (tokens[i].type !== 'td_open' || ++cell !== 2) continue
    const parts = (tokens[i + 1].children ?? []).filter(t => t.type !== 'text' || t.content.trim())
    if (parts[0]?.type !== 'link_open' || parts.at(-1)?.type !== 'link_close') return false
    if (parts.filter(t => t.type === 'link_open').length !== 1) return false
    rows++
  }
  return rows > 0
}

export function tableBlocks(md) {
  md.renderer.rules.table_open = (tokens, index, options, env) => {
    let columns = 0
    let i = index + 1
    for (; tokens[i].type !== 'thead_close'; i++) {
      if (tokens[i].type === 'th_open') columns++
    }
    const frontmatter = env.frontmatter ?? {}
    const indexPage = frontmatter.layout === 'home' || /\bguide-index\b/.test(frontmatter.pageClass ?? '')
    const classes = ['table-block']
    if (columns > 2) classes.push('table-wide')
    if (indexPage && columns === 2 && linksOnly(tokens, i)) classes.push('table-links')
    const english = env.relativePath.startsWith('en/')
    const hint = english ? 'Swipe left or right to see all columns' : '左右滑动，查看完整表格'
    const label = english ? 'Table' : '表格'
    return `<div class="${classes.join(' ')}"><p class="table-hint">↔ ${hint}</p><div class="table-scroll" tabindex="0" role="region" aria-label="${label}"><table>\n`
  }
  md.renderer.rules.table_close = () => '</table></div></div>\n'
}
