import DefaultTheme from 'vitepress/theme-without-fonts'
import { h, onMounted, onUnmounted } from 'vue'
import movedSections from '../moved-sections.json'
import DocMedia from './DocMedia.vue'
import DocTrail from './DocTrail.vue'
import HomeDirectory from './HomeDirectory.vue'
import HomeSearch from './HomeSearch.vue'
import './styles/tokens.css'
import './styles/layout.css'
import './styles/content.css'
import './styles/tables.css'
import './styles/components.css'
import './styles/home.css'
import './styles/icons.css'

const legacyPages = new Map(Object.entries({
  start: 'start/quick-start', oixflow: 'oixflow/connect', oixcloud: 'oixflow/connect', flclash: 'flclash/connect',
  openclash: 'other/openclash', surge: 'other/surge', plans: 'account/plans',
  traffic: 'account/traffic', nodes: 'account/nodes', subscriptions: 'account/subscriptions',
  'home-isp': 'account/home-isp', relay: 'account/relay', unlock: 'account/unlock', security: 'account/security',
  'fair-use': 'account/fair-use', troubleshooting: 'help/troubleshooting', support: 'help/support'
}))

function redirectLegacyPage() {
  const { pathname, search, hash } = window.location
  if (!hash) return
  const locale = pathname.startsWith('/en/') ? '/en/' : '/'
  const path = pathname.slice(locale.length).replace(/\.html$/, '')
  if (!path || path === 'index') {
    const page = legacyPages.get(hash.slice(1))
    if (page) window.location.replace(locale + page + '.html' + search)
    return
  }
  const sections = movedSections[path]
  if (!sections) return
  let id
  try {
    id = decodeURIComponent(hash.slice(1))
  } catch {
    return
  }
  for (const [page, anchors] of Object.entries(sections)) {
    if (anchors.includes(id)) {
      window.location.replace(pathname.slice(0, pathname.lastIndexOf('/') + 1) + page + '.html' + search + hash)
      return
    }
  }
}

export default {
  extends: DefaultTheme,
  // The logo is drawn as a mask in the brand color; /logo.svg stays the favicon
  Layout: () => h(DefaultTheme.Layout, null, {
    'nav-bar-title-before': () => h('span', { class: 'brand-mark', 'aria-hidden': 'true' }),
    'home-hero-image': () => h('span', { class: 'brand-mark hero-mark', role: 'img', 'aria-label': 'oixCloud' }),
    'home-hero-info-after': () => h(HomeSearch),
    'home-features-before': () => h(HomeDirectory),
    'doc-before': () => h(DocTrail),
    'layout-bottom': () => h(DocMedia)
  }),
  enhanceApp({ app, router }) {
    // Search excerpts use an isolated Vue app, so their images stay lazy.
    app.config.globalProperties.$isGuidePage = true
    if (typeof window !== 'undefined') router.onAfterRouteChange = redirectLegacyPage
  },
  setup() {
    onMounted(() => {
      redirectLegacyPage()
      window.addEventListener('hashchange', redirectLegacyPage)
    })
    onUnmounted(() => window.removeEventListener('hashchange', redirectLegacyPage))
  }
}
