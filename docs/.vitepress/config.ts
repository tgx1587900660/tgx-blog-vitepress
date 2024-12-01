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
      '/cognition': { base: '/cognition', items: sidebarCognition() },
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
      text: '前端学习',
      items: [
        {
          text: 'Nuxt',
          items: [
            { text: 'nuxt3-template', link: '/frontend/nuxt3-template' },
            // { text: 'nuxt3-template', link: '/frontend/nuxt3-template' },
          ],
        },
        {
          text: '问题解决',
          items: [
            { text: '提取图片主要色值', link: '/frontend/demo1' },
            { text: 'translate 抖动问题', link: '/frontend/demo2' },
          ],
        },
        {
          text: '代码管理',
          items: [
            { text: 'Git 命令', link: '/frontend/code/git' },
            // { text: 'Git', link: '/frontend/code/git' },
          ],
        },
      ],
    },
    {
      text: '认知提升',
      items: [
        {
          text: '记忆大师',
          items: [
            { text: '记忆大师（原理篇）', link: '/cognition/memory/memory' },
            { text: '记忆 十二星座', link: '/cognition/memory/demo1' },
            { text: '记忆 圆周率前 30 位', link: '/cognition/memory/demo2' },
            { text: '记忆 世界十大文豪', link: '/cognition/memory/demo3' },
            { text: '记忆 《三十六计》', link: '/cognition/memory/demo4' },
          ],
        },
      ],
    },
    {
      text: '个人收藏',
      link: '/about-me/create/career-plans',
    },
  ];
}

// 前端学习 侧边栏
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Nuxt3',
      collapsed: false,
      items: [
        { text: 'nuxt3-template 项目功能集成', link: '/nuxt3-template' },
        // { text: '部署', link: 'deploy' },
      ],
    },
    {
      text: '问题解决',
      collapsed: false,
      items: [
        { text: '提取图片主要色值', link: '/demo1' },
        { text: 'translate 抖动问题', link: '/demo2' },
        // { text: '部署', link: 'deploy' },
      ],
    },
    {
      text: '代码管理',
      collapsed: false,
      items: [
        { text: 'Git 命令', link: '/code/git' },
        // { text: 'sitemap 生成', link: 'sitemap-generation' }
      ],
    },
    // { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
  ];
}

// 认知 侧边栏
function sidebarCognition(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '记忆大师',
      collapsed: false,
      items: [
        { text: '记忆大师（原理篇）', link: '/memory/memory' },
        { text: '记忆 十二星座', link: '/memory/demo1' },
        { text: '记忆 圆周率前 30 位', link: '/memory/demo2' },
        { text: '记忆 世界十大文豪', link: '/memory/demo3' },
        { text: '记忆 《三十六计》', link: '/memory/demo4' },
      ],
    },
    // {
    //   text: '代码管理',
    //   collapsed: false,
    //   items: [
    //     { text: 'Git', link: '/code/git' },
    //     // { text: 'sitemap 生成', link: 'sitemap-generation' }
    //   ],
    // },
    // { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
  ];
}

// 个人收藏 侧边栏
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
