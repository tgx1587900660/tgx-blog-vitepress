# npm 命令

::: info
此文收集常用的 npm 命令
:::

## 1. npm 配置文件

```bash
# 在根目录下创建 .npmrc 文件
registry=https://registry.npmmirror.com # 设置 npm 源为淘宝镜像
```

## 2. npm 命令

```bash
npm -v # 查看 npm 版本
npm init # 初始化项目

npm install # 安装依赖
npm i # 安装依赖(同 npm install)
npm i -g # 全局安装依赖
npm i -g 'packageName' # 全局安装指定包
npm i 'packageName' # 安装指定包
npm i 'packageName@version' # 安装指定版本的包
npm i 'packageName' -S # 安装到 dependencies 中
npm i 'packageName' -D # 安装到 devDependencies 中
npm i --legacy--peer-deps # 安装 peerDependencies 中

npm list # 查看已安装的包
npm list -g # 查看全局已安装的包
npm config get 'key' # 获取配置项
npm config set 'key' 'value' # 设置配置项

npm run 'scriptName' # 运行脚本
npm publish # 发布包
npm cache clean --force # 清除缓存
npm uninstall 'packageName' # 卸载指定包
npm update 'packageName' # 更新指定包
```
