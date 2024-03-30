// https://vitepress.dev/reference/site-config
import { defineConfig, type DefaultTheme } from 'vitepress';

export default defineConfig({
  title: 'tangganxiao',
  base: '/tgx-blog-vitepress-test/',
  description: '唐干宵的博客|唐干宵的网络日志|谭竿霄的博客|谭竿霄的网络日志|tgx的博客|tgx的网络日志|使用 vitepress 搭建的个人博客',
  head: [
    // 改变title的图标
    ['meta', { name: 'theme-color', content: 'pink' }],
  ],
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.jpg',
    nav: nav(),
    sidebar: {
      '/frontend': { base: '/frontend', items: sidebarGuide() },
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} - 谭竿霄`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/tgx1587900660/tgx-blog-vitepress-test' }],
  },
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
    image: {
      lazyLoading: true,
    },
    lineNumbers: true,
  },
});

// 顶部导航栏
function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '前端',
      items: [
        {
          text: 'nuxt3-template',
          link: 'frontend/nuxt3-template',
        },
      ],
    },
  ];
}

// 侧边栏
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '前端 skills',
      collapsed: false,
      items: [
        { text: 'Nuxt3 项目功能集成', link: '/nuxt3-template' },
        { text: '提前图片主要色值', link: '/demo1' },
        // { text: '路由', link: 'routing' },
        // { text: '部署', link: 'deploy' },
      ],
    },
    // {
    //   text: '写作',
    //   collapsed: false,
    //   items: [
    //     { text: 'Markdown 扩展', link: 'markdown' },
    //     { text: '资源处理', link: 'asset-handling' },
    //     { text: 'frontmatter', link: 'frontmatter' },
    //     { text: '在 Markdown 使用 Vue', link: 'using-vue' },
    //     { text: '国际化', link: 'i18n' }
    //   ]
    // },
    // {
    //   text: '自定义',
    //   collapsed: false,
    //   items: [
    //     { text: '自定义主题', link: 'custom-theme' },
    //     { text: '扩展默认主题', link: 'extending-default-theme' },
    //     { text: '构建时数据加载', link: 'data-loading' },
    //     { text: 'SSR 兼容性', link: 'ssr-compat' },
    //     { text: '连接 CMS', link: 'cms' }
    //   ]
    // },
    // {
    //   text: '实验性功能',
    //   collapsed: false,
    //   items: [
    //     { text: 'MPA 模式', link: 'mpa-mode' },
    //     { text: 'sitemap 生成', link: 'sitemap-generation' }
    //   ]
    // },
    // { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
  ];
}
