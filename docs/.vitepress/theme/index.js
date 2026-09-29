import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import './style.css'

const legacyPages = {
  start: 'start/quick-start', oixcloud: 'oixcloud/connect', flclash: 'flclash/connect',
  openclash: 'other/openclash', surge: 'other/surge', plans: 'account/plans',
  traffic: 'account/traffic', nodes: 'account/nodes', subscriptions: 'account/subscriptions',
  relay: 'account/relay', unlock: 'account/unlock', security: 'account/security',
  'fair-use': 'account/fair-use', troubleshooting: 'help/troubleshooting', support: 'help/support'
}

export default {
  extends: DefaultTheme,
  setup() {
    onMounted(() => {
      if (!/^\/(?:en\/)?(?:index\.html)?$/.test(window.location.pathname)) return
      const page = legacyPages[window.location.hash.slice(1)]
      if (page) window.location.replace((window.location.pathname.startsWith('/en/') ? '/en/' : '/') + page + '.html')
    })
  }
}
