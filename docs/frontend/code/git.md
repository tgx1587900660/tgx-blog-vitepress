# Git 命令

::: info
此文收集常用的 git 命令
:::

## 1. git 配置

> 这里 假设我英文名是 `telectron`, 邮箱是 `shuaibi@qq.com`

```bash
git config user.name telectron # 局部设置 name
git config user.email shuaibi@qq.com # 局部设置 email
git config --global user.name telectron # 全局设置 name
git config --global user.email shuaibi@qq.com # 全局设置 email
git config --list # 查看局部配置
git config --list --global # 查看全局配置
```

## 2. git 分支操作

```bash
git branch # 查看本地分支
git branch -a # 查看本地和远程分支
git branch -r # 查看远程分支
git branch -vv # 查看本地分支与远程分支的关系
git branch -d 'telectron_dev' # 删除本地分支 telectron_dev
git branch -m telectron_dev # 重命名当前分支为 telectron_dev
```

## 3. 版本回退

> 版本在本地回退之后，本地仓库的代码将会落后于远程仓库，此时 git 会拒绝提交，可强推覆盖，也可删掉远程的分支再推送

```bash
# 回退到 44tte48c(缩写)
git reset --hard 44tte48c

# 强推 -->
git push -f
```

## 4. 删除分支

> 删掉分支 telectron_dev

```bash
git branch -d telectron_dev
git branch -D telectron_dev (强制删除)
```

## 5. 加入、取出缓存区

```bash
# 剪切内容到缓存区
git stash

# 粘贴最近一次修改内容，并删除这次缓存区
git stash pop

# 查看缓存区
git stash list
```

## 6. 克隆仓库

```bash
git clone https://gitee.com/tgx-1587900660/tgx_vue_vision
```

## 7. 给远程地址起别名

```bash
# 给仓库https://gitee.com/tgx-1587900660/tgx_vue_vision起别名为 origin
git remote add origin https://gitee.com/tgx-1587900660/tgx_vue_vision

# 查看别名列表
git remote
```

## 8. 查看分支

```bash

git branch -a # 查看所有分支(包括远程分支)
git branch -vv # 查看本地分支与远程分支的关系
```

## 9. 同步远程分支内容

```bash
git fetch # 从远程仓库拉取代码
git checkout dev_tgx # 切换到 dev_tgx 分支
```

## 10. 提取某一次 commit 内容

```bash
git cherry-pick 921dc370 # 提取 commit 921dc370 到当前分支
```

## 11. 其他命令

```bash
git checkout -b telectron_dev # 新建并切换到 telectron_dev 分支
git push -u origin telectron_dev # 首次推送telectron_dev分支
git push # 将当前分支推送到远程仓库
git pull origin master # 拉取远程 master，并合入当前分支
git pull origin master --rebase # 拉取远程 master，并变基合入当前分支
```
