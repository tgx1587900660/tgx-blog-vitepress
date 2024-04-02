// https://vitepress.dev/reference/site-config
// import { createRequire } from 'module'; // 需安装开发依赖 @types/node
import { defineConfig, type DefaultTheme } from 'vitepress';

// const require = createRequire(import.meta.url);
// const imageMap = require('../imgs/images.config.json');

export default defineConfig({
  title: 'tangganxiao',
  base: '/tgx-blog-vitepress/',
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
      '/about-me': { base: '/about-me', items: sidebarAboutMe() },
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} - 唐干宵`,
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

    socialLinks: [{ icon: 'github', link: 'https://github.com/tgx1587900660/tgx-blog-vitepress' }],
  },
  markdown: {
    container: {
      infoLabel: '简介',
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
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
    {
      text: '个人中心',
      link: 'about-me/career-plans',
    },
  ];
}

// 前端侧边栏
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '前端 skills',
      collapsed: false,
      items: [
        { text: 'Nuxt3 项目功能集成', link: '/nuxt3-template' },
        { text: '提取图片主要色值', link: '/demo1' },
        // { text: '路由', link: 'routing' },
        // { text: '部署', link: 'deploy' },
      ],
    },
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

// 个人中心侧边栏
function sidebarAboutMe(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '创作',
      collapsed: false,
      items: [
        { text: '九项重要的职业规划', link: '/career-plans' },
        // { text: '资源处理', link: 'asset-handling' },
        // { text: 'frontmatter', link: 'frontmatter' },
        // { text: '在 Markdown 使用 Vue', link: 'using-vue' },
        // { text: '国际化', link: 'i18n' }
      ],
    },
  ];
}
