# Git 命令

::: info
此文收集常用的 git 命令
:::

## 1. git 配置相关

```bash
git init # 初始化本地仓库
git clone 'url' # 克隆远程仓库
git remote add 'origin' 'url' # 添加远程仓库 url 起别名为 origin
git remote # 查看远程仓库名称
git remote -v # 查看远程仓库地址
git remote rm 'origin' # 删除别名为 origin 的远程仓库
git remote rename 'origin' 'new_origin' # 重命名仓库别名 origin 为 new_origin

git log # 查看提交日志(按⬇键滚动，按q键退出，不包含删除/回退操作)
git log --[options] # 查看配置化的提交日志
git reflog # 查看简版提交日志(包括删除/回退操作)

git config user.name 'tgx' # 局部设置 name
git config user.email 'xxxx@qq.com' # 局部设置 email
git config --global user.name 'tgx' # 全局设置 name
git config --global user.email 'xxxxx@qq.com' # 全局设置 email
git config --list # 查看局部配置
git config --list --global # 查看全局配置
# 给 log 命令起别名 lg (使用 git lg 代替 git log)
git config alias.lg 'log --pretty=oneline --abbrev-commit'
```

## 2. git 操作相关

```bash
git add 'fileName' # 添加指定文件到缓存区
git add . # 添加所有文件到缓存区
git commit -m 'message' # 提交到本地仓库
git status # 查看当前状态
git pull # 拉取合并远程分支
git pull origin dev_tgx # 拉取远程分支 dev_tgx 到当前分支
git pull origin dev_tgx --rebase # 拉取远程分支 dev_tgx 到当前分支并变基合并
git merge dev_tgx # 合并分支 dev_tgx 到当前分支
git fetch # 抓取远程分支信息
git push # 推送到远程仓库
git push -f # 强制推送到远程仓库
git push -u origin dev_tgx # 首次推送当前分支到远程仓库
git cherry-pick 'commitId' # 合并指定提交 commitId 到当前分支
git reset --hard 'commitId' # 回退到指定版本(先删远程分支再推,或用git push -f强推)

git branch # 查看本地分支
git branch -a # 查看本地和远程分支
git branch -r # 查看远程分支
git branch -vv # 查看本地分支与远程分支的关系
git branch -d dev_tgx # 删除本地分支 dev_tgx
git branch -D dev_tgx # 强制删除本地分支 dev_tgx
git branch -m dev_tgx2 # 重命名当前分支为 dev_tgx2
git checkout -b dev_tgx3 # 新建并切换到分支 dev_tgx3
git checkout dev_tgx # 切换到分支 dev_tgx (也可以是远程的分支)

git tag 'tagName' # 新建标签 tagName
git tag # 查看标签
git tag -d 'tagName' # 删除标签
git push origin 'tagName' # 推送指定标签 tagName
git push origin --tags # 推送所有标签

git stash # 查看缓存区
git stash apply # 取出缓存区
git stash drop # 删除最近一次缓存区
git stash pop # 取出缓存区并删除
git stash list # 查看缓存区列表
git stash clear # 清空缓存区
```
