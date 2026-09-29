import DefaultTheme from 'vitepress/theme'
import { onMounted, onUnmounted } from 'vue'
import './style.css'

const legacyPages = new Map(Object.entries({
  start: 'start/quick-start', oixcloud: 'oixcloud/connect', flclash: 'flclash/connect',
  openclash: 'other/openclash', surge: 'other/surge', plans: 'account/plans',
  traffic: 'account/traffic', nodes: 'account/nodes', subscriptions: 'account/subscriptions',
  relay: 'account/relay', unlock: 'account/unlock', security: 'account/security',
  'fair-use': 'account/fair-use', troubleshooting: 'help/troubleshooting', support: 'help/support'
}))

function redirectLegacyPage() {
  if (!/^\/(?:en\/)?(?:index\.html)?$/.test(window.location.pathname)) return
  const page = legacyPages.get(window.location.hash.slice(1))
  if (page) window.location.replace((window.location.pathname.startsWith('/en/') ? '/en/' : '/') + page + '.html')
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
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
