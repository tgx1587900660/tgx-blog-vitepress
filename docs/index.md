---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 唐干宵的网络日志
titleTemplate: 唐干宵的博客|唐干宵的网络日志|谭竿霄的博客|谭竿霄的网络日志|tgx的博客|tgx的网络日志|使用 vitepress 搭建的个人博客

hero:
  name: 'tgx的网络日志'
  text: '经验 +1'
  tagline: 芝兰生于幽谷，不以无人而不芳
  actions:
    - theme: brand
      text: 开始阅读 →
      link: '/frontend/nuxt3-template'
    - theme: alt
      text: GitHub
      link: https://github.com/tgx1587900660
  image:
    src: /logo2.jpg
    alt: 唐干宵的网络日志.jpg

features:
  - icon: 🙈
    title: 脚踏实地
    details: 一步一个脚印，才不会迷失方向
  - icon: 🙉
    title: 专注学习
    details: 吾尝终日而思矣，不如须臾之所学也
  - icon: 🙊
    title: 热情不灭
    details: 受尽苦难而不厌，乃修罗之道
  # - icon: 🙊
  #   title: 热情不灭
  #   details: 受尽苦难而不厌，乃修罗之道
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

.image-container .image-src {
  border-radius: 10%;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
