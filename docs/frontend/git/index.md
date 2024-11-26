# Git 命令收集

::: info
此文收集了一些常用的 git 命令
:::

## 1. 设置用户名和邮箱

> 这里 假设我英文名是 `telectron`, 邮箱是 `shuaibi@qq.com`

```xml
<!-- 1. 全局设置-语法 -->
git config --global user.name 用户名
git config --global user.email 邮箱地址
<!-- 作用于本电脑上所有项目 -->
git config --global user.name telectron
git config --global user.email shuaibi@qq.com

<!-- 2. 局部设置-语法 -->
git config user.name 用户名
git config user.email 邮箱地址
<!-- 作用于当前项目 -->
git config user.name telectron
git config user.email shuaibi@qq.com
```

## 2. 查看当前项目的配置

```xml
<!-- 当前项目 -->
git config --list

<!-- 全局配置 -->
git config --list --global
```

## 3. 恢复到某次 commit 版本

```xml
<!-- 语法 -->
git reset --hard [commitID]

<!-- 回退到 44tte48c59eb8093686ceb517a37ea065a38a676, 缩写为 44tte48c -->
git reset --hard 44tte48c

<!--
版本在本地回退之后，本地仓库的代码将会落后于远程仓库，此时git会拒绝提交，
可用 git push -f 强行推送覆盖远程代码，
或删掉远程的分支再 git push 推送
-->
git push -f
```

## 4. 删除分支

```xml
<!-- 语法 -->
git branch -d 分支名
git branch -D 分支名 (强制删除)

<!-- 删了 telectron_dev 分支 -->
git branch -d telectron_dev
git branch -D telectron_dev
```

## 5. 加入、取出缓存区

```xml
<!-- 相当于 剪切 本次修改内容 -->
git stash

<!-- 相当于 粘贴 那次修改内容 -->
git stash pop

<!-- 可以查看当前是否有暂存修改 -->
git stash list
```

## 6. 拉取代码

> 初入公司或在 github/gitee 第一次获取项目代码时使用

```xml
<!-- 语法 -->
git clone 远程地址

git clone https://gitee.com/tgx-1587900660/tgx_vue_vision
```

## 7. 给远程地址起别名

```xml
<!-- 语法 -->
git remote add origin 远程地址

<!-- 给仓库https://gitee.com/tgx-1587900660/tgx_vue_vision起别名为 origin  -->
git remote add origin https://gitee.com/tgx-1587900660/tgx_vue_vision

<!-- 查看别名列表 -->
git remote
```

## 8. 查看分支

```xml
<!-- 查看所有分支(包括远程分支) -->
git branch -a

<!-- 查看本地分支与远程分支的关系 -->
git branch -vv
```

## 9. 同步远程分支内容

```xml
git fetch // 从远程仓库拉取代码
git checkout dev_tgx // 切换到 dev_tgx 分支
```

## 10. 只提取某一次 commit 内容

```xml
<!-- 语法 -->
git cherry-pick [commitID]

<!-- 提取 commit 921dc370 -->
git cherry-pick 921dc370
```

## 11. 高频命令

```xml
<!-- 新建一个 telectron_dev 分支 -->
git checkout -b telectron_dev

<!-- 首次推送这个分支（线上没有 telectron_dev 分支） -->
git push -u origin telectron_dev
<!-- 线上有 telectron_dev 分支后推送 -->
git push

<!-- 拉取远程 master，并合入当前分支 -->
git pull origin master

<!-- 拉取远程 master，并变基合入当前分支 -->
git pull origin master --rebase
```
