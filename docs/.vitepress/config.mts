import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'telectron 的网络日志',
  // base: '/tgx-blog-vitepress-test/',
  description: '唐干宵的博客|唐干宵的网络日志|谭竿霄的博客|谭竿霄的网络日志|前端技术学习|使用 vuepress 搭建个人博客',
  head: [
    // 改变title的图标
    ['link', { rel: 'icon', href: '/xiao.ico' }],
    ['meta', { name: 'theme-color', content: 'pink' }]
  ],
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/tgx1587900660/tgx-blog-vitepress-test' }]
  },
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  }
})
