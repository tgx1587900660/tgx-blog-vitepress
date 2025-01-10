# pnpm 命令

::: info
此文收集常用的 pnpm 命令
:::

## 1. pnpm 命令

```bash
npm i -g pnpm # 全局安装 pnpm
pnpm -v # 查看 pnpm 版本
pnpm install # 安装依赖

pnpm add 'packageName' # 安装指定包
pnpm add 'packageName@1.2.0' # 安装指定版本的包
pnpm add 'packageName' -S # 安装到 dependencies 中
pnpm add 'packageName' -D # 安装到 devDependencies 中
pnpm remove 'packageName' # 卸载指定包

pnpm run 'scriptName' # 运行脚本(run可以不加)
pnpm store prune # 清除缓存
pnpm store path # 查看 pnpm 缓存路径

pnpm list # or pnpm ls 查看已安装的包
pnpm update # 更新所有包
pnpm update 'packageName' # 更新指定包
pnpm outdated # 查看已安装的包是否有更新

pnpm config get 'key' # 获取配置项
pnpm config set 'key' 'value' # 设置配置项
```
