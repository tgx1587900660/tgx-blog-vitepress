---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'telectron 的网络日志'
  text: 测试一下 vitepress
  tagline: '经验 +1'
  actions:
    - theme: brand
      text: 开始阅读 →
      link: /markdown-examples
    - theme: alt
      text: Examples
      link: /api-examples
  image:
    src: /logo2.jpg
    alt: VitePress

features:
  - title: 坐
    details: 你我之相遇，乃命运之指引
  - title: 忘
    details: 吾尝终日而思矣，不如须臾之所学也
  - title: 道
    details: 受尽苦难而不厌，乃修罗之道
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

/* 图片加上圆角 */
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
