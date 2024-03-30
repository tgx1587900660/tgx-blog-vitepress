# Nuxt3 项目中功能的具体实现

::: info
<span> </span>

这篇文章主要介绍了 [Nuxt3 项目](https://github.com/tgx1587900660/nuxt3-antd-template) 中功能日志的具体实现步骤

:::

## 1. 初始化项目 - 2024.03.10

跟随 [Nuxt3 官方文档](https://nuxt.com/docs/getting-started/installation) 初始化项目即可

## 2. 配置 env 环境变量, 并在 .vue 文件中获得 TS 代码智能提示 - 2024.03.12

### 2.1 创建 .env 文件

在根目录下创建 .env 文件，并在其中设置一系列环境变量：

```bash
# .env 文件
VITE_APP_NAME = 'my-nuxt3-antd-template'
VITE_APP_TEST_VAR = 'test-var'
# and more ...
```

### 2.2 添加 env.d.ts 文件

在根目录下创建 env.d.ts 文件，添加以下内容，就可以在 .vue 文件中获得环境变量的代码提示了

```ts
// env.d.ts 文件
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_TEST_VAR: string;
  // 添加更多环境变量，以用来获得代码提示...
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// 然后在 .vue 文件中使用有智能提示的环境变量：
// const appName = import.meta.env.VITE_APP_NAME; // my-nuxt3-antd-template
```

## 3. 添加 https 启动脚本, 并测试 preview 脚本 - 2024.03.13

在 package.json 文件中添加以下脚本即可:

```json{4,5}
{
  "scripts": {
    "dev": "nuxt dev",
    "dev-https": "nuxt dev --https -p 4000",
    "preview": "nuxt preview",
    "https": "vite --https"
  }
}
```

运行 pnpm preview 之后会生成一句命令(node ./server/index.mjs)，运行即可最大程度还原生产环境.

运行 pnpm dev-https 之后会启动一个 https 服务，端口为 4000.

## 4. 添加 tailwindcss 并测试 - 2024.03.16

使用标准方式引入 tailwindcss，大致分成 4 步，查看文档 [在 nuxt 中安装 TailwindCSS](https://tailwindcss.com/docs/guides/nuxtjshttps://tailwindcss.com/docs/guides/nuxtjs)
，重启 nuxt 项目之后，就可以在全局使用 tailwindcss 了。
值得注意的是 **加了 tailwindcss 之后，项目启动会变慢，因为需要编译生成原子类**

## 5. 添加 less 和 ant-design-vue@3.2.20 并测试 - 2024.03.17

- 使用 less 直接安装即可

```bash
pnpm add less -D
```

- 使用 ant-design-vue@3.2.20 分 2 步

1. 安装依赖：

> 之所以要安装 3.2.20 版本是因为 4.x 版本的 ant-design-vue 有很多问题，比如 刷新页面之后，样式会闪一下再出来

```bash
pnpm add ant-design-vue@3.2.20
```

2. 在 plugins 目录中注册组件

```ts
// plugins/antd.ts
import Antd from 'ant-design-vue';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd);
});
```

## 6. 添加 prettier + prettier-plugin-tailwindcss 依赖，实现 tailwindcss 类名自动排序 - 2024.03.30

查看文档 [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file)

1. 安装依赖

```bash
pnpm add prettier prettier-plugin-tailwindcss -D
```

2. 在根目录下创建 prettier 配置文件，并添加 prettier-plugin-tailwindcss 到插件列表中

## 7. 添加 husky + lint-staged 依赖，实现 git 钩子注册 - 2024.03.30

> TODO 这里是为了集成 prettier 的时候加的，研究的还不够透测

查看文档 [Git hooks](https://prettier.io/docs/en/install.html#git-hooks)，安步骤操作完成后，会生成一个 .husky 文件夹，同时在提交代码时，会自动扫描代码，并使用 prettier 配置文件来格式化代码
