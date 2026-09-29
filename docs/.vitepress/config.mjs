import { defineConfig } from 'vitepress'
import navigation from './navigation.json' with { type: 'json' }

export default defineConfig({
  title: 'oixCloud Docs',
  description: '连接、客户端设置、账户与故障排查 · Setup, client configuration, accounts and troubleshooting',
  base: '/',
  cleanUrls: false,
  sitemap: { hostname: 'https://docs.dler.io' },
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  locales: {
    root: {
      label: '简体中文', lang: 'zh-CN', title: 'oixCloud 使用指南',
      themeConfig: {
        nav: [{ text: '快速开始', link: '/start/' }, { text: '客户端教程', link: '/clients/' }, { text: '账户与服务', link: '/account/' }, { text: '故障排查', link: '/help/' }],
        sidebar: navigation.zh,
        outline: { label: '本页目录', level: [2, 3] },
        docFooter: { prev: '上一篇', next: '下一篇' },
        sidebarMenuLabel: '分类目录', returnToTopLabel: '返回顶部', darkModeSwitchLabel: '外观',
        langMenuLabel: '语言', skipToContentLabel: '跳转到正文',
        footer: { message: '功能核对：2026-09-29 · 每个主题独立成篇', copyright: 'oixCloud 使用指南' }
      }
    },
    en: {
      label: 'English', lang: 'en', title: 'oixCloud User Guide',
      themeConfig: {
        nav: [{ text: 'Start here', link: '/en/start/' }, { text: 'Client guides', link: '/en/clients/' }, { text: 'Account & service', link: '/en/account/' }, { text: 'Troubleshooting', link: '/en/help/' }],
        sidebar: navigation.en,
        outline: { label: 'On this page', level: [2, 3] },
        footer: { message: 'Features checked: 29 September 2026 · One topic per page', copyright: 'oixCloud User Guide' }
      }
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/pickrui/oixCloud-docs' }],
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (text) => {
              if (typeof Intl.Segmenter === 'function') return Array.from(new Intl.Segmenter('zh', { granularity: 'word' }).segment(text)).filter(item => item.isWordLike).map(item => item.segment)
              return text.match(/[a-z0-9]+|[\u3400-\u9fff]/gi) || []
            }
          }
        },
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索教程', buttonAriaLabel: '搜索教程' },
              modal: { displayDetails: '显示详细内容', resetButtonTitle: '清除搜索', backButtonTitle: '关闭搜索', noResultsText: '未找到相关教程', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } }
            }
          }
        }
      }
    }
  }
})
