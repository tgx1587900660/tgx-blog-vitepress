// https://vitepress.dev/reference/site-config
import { defineConfig, type DefaultTheme } from 'vitepress';
import { getCsdnSvgIcon, getJueJinSvgIcon } from './utils';

export default defineConfig({
  title: 'tangganxiao',
  base: '/tgx-blog-vitepress/',
  description: '唐干宵 的博客| 唐干宵 的网络日志|谭竿霄 的博客|谭竿霄 的网络日志|tgx 的博客|tgx 的网络日志|使用 vitepress 搭建的个人博客',
  head: [
    // 添加头部信息
    ['meta', { name: 'theme-color', content: 'test-meta' }],
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tgx1587900660/tgx-blog-vitepress' },
      { icon: { svg: getCsdnSvgIcon() }, link: 'https://blog.csdn.net/baidu_41651062?type=blog' },
      { icon: { svg: getJueJinSvgIcon() }, link: 'https://juejin.cn/user/4442497214339501' },
    ],
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
      text: '个人收藏',
      link: 'about-me/create/career-plans',
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
        { text: '解决 translate 抖动问题', link: '/demo2' },
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

// 个人收藏侧边栏
function sidebarAboutMe(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '创作',
      collapsed: false,
      items: [
        { text: '九项重要的职业规划', link: '/create/career-plans' },
        // { text: '资源处理', link: 'asset-handling' },
        // { text: 'frontmatter', link: 'frontmatter' },
        // { text: '在 Markdown 使用 Vue', link: 'using-vue' },
        // { text: '国际化', link: 'i18n' }
      ],
    },
    {
      text: '链接',
      collapsed: false,
      items: [
        { text: '友情链接', link: '/link/friend' },
        // { text: '资源处理', link: 'asset-handling' },
        // { text: 'frontmatter', link: 'frontmatter' },
        // { text: '在 Markdown 使用 Vue', link: 'using-vue' },
        // { text: '国际化', link: 'i18n' }
      ],
    },
  ];
}
