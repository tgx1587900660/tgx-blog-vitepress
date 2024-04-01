# 提取图片主要色值

<script setup>
import { withBase } from 'vitepress'
</script>

::: info

此文实现一个功能：如何提取一张图片的主要色值，并应用到任意元素的渐变背景中。

1. 依赖一个 js 库 [color-thief](https://github.com/lokesh/color-thief)，可抓取图片中颜色。
2. 用到一个图片库 [picsum](https://picsum.photos)，可随机生成图片用于排版。
3. 用到一个 img 标签属性 crossorigin="anonymous"，若远程图片被 canvas 操作，需设置此属性，才不会报错。

:::

> (TODO: 怎么在设置渐变背景的时候给个过渡？)

效果图:
<img :src="withBase('/imgs/css-1/css-1.gif')" />

## 1. 安装依赖

```bash
pnpm add --save colorthief
```

## 2. 主要代码

```vue
<template>
  <div class="h-full w-full transition duration-1000">
    <div class="color-change-box w-full py-5">
      <div class="m-auto flex w-[900px] flex-wrap gap-5">
        <div v-for="(img, i) in imgs" :key="i" :class="'basis-[calc(50%-10px)] '">
          <img
            class="duration-800 w-full object-cover transition-transform hover:scale-105"
            crossorigin="anonymous"
            :style="{
              opacity: curIndex === -1 || curIndex === i ? 1 : 0.3,
            }"
            :src="img"
            @mouseenter="handleMouseEnter($event.target, i)"
            @mouseleave="handleMouseLeave" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ColorThief from 'colorthief';
import { onMounted, ref } from 'vue';

const imgs = [];
for (let i = 0; i < 4; i++) {
  imgs.push(`https://picsum.photos/600/500?r=${i}`);
}

const curIndex = ref(-1);
const html = ref();

async function handleMouseEnter(img, index) {
  // console.log('handleMouseEnter')
  curIndex.value = index;

  const colorThief = new ColorThief();
  // console.log('colorThief :>> ', colorThief)
  const colors = await colorThief.getPalette(img, 3); // img: 是img元素， 3:是跳过的像素来采样， https://lokeshdhakar.com/projects/color-thief/#api
  // console.log('colors :>> ', colors)
  const newColors = colors.map((c) => `rgb(${c[0]}, ${c[1]}, ${c[2]})`);
  // console.log('newColors :>> ', newColors)

  // 设置3个主色值
  html.value.style.setProperty('--c1', newColors[0]);
  html.value.style.setProperty('--c2', newColors[1]);
  html.value.style.setProperty('--c3', newColors[2]);
}

function handleMouseLeave() {
  // console.log('handleMouseLeave')
  curIndex.value = -1;

  html.value.style.setProperty('--c1', '#fff');
  html.value.style.setProperty('--c2', '#fff');
  html.value.style.setProperty('--c3', '#fff');
}

onMounted(() => {
  html.value = document.documentElement;
});
</script>

<style lang="less" scoped>
.color-change-box {
  background: linear-gradient(to bottom, var(--c1), var(--c2), var(--c3));
  // transition: all 0.8s;
  // TODO 怎么给 color-change-box 的渐变背景设置一个过渡，而不是突然变色？
}
</style>
```
