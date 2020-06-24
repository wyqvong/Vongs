---
title: git常用指令以及git在vscode中的使用
date: 2020-01-19 16:57:16
author: wyqvong
keywords: git
categories: git
tags:
    - git
---



>    **git常用指令**
>    Git基本常用命令如下：
> 
> 　　mkdir：         XX (创建一个空目录 XX指目录名)
> 
> 　　pwd：          显示当前目录的路径。
> 
> 　　git init          把当前的目录变成可以管理的git仓库，生成隐藏.git文件。
> 
> 　　git add XX       把xx文件添加到暂存区去。
> 
> 　　git commit –m “XX”  提交文件 –m 后面的是注释。
> 
> 　　git status        查看仓库状态
> 
> 　　git diff  XX      查看XX文件修改了那些内容
> 
> 　　git log          查看历史记录
> 
> 　　git reset  --hard HEAD^ 或者 git reset  --hard HEAD~ 回退到上一个版本
> 
> 　　(如果想回退到100个版本，使用git reset –hard HEAD~100 )
> 
> 　　cat XX         查看XX文件内容
> 
> 　　git reflog       查看历史记录的版本号id
> 
> 　　git checkout -- XX  把XX文件在工作区的修改全部撤销。
> 
> 　　git rm XX          删除XX文件
> 
> 　　git remote add origin https://github.com/xxx/xxx
> 关联一个远程库
> 
> 　　git push –u(第一次要用-u 以后不需要) origin master 把当前master分支推送到远程库
> 
> 　　git clone https://github.com/xxx/xxx  从远程库中克隆
> 
> 　　git checkout –b dev  创建dev分支 并切换到dev分支上
> 
> 　　git branch  查看当前所有的分支
> 
> 　　git checkout master 切换回master分支
> 
> 　　git merge dev    在当前的分支上合并dev分支
> 
> 　　git branch –d dev 删除dev分支
> 
> 　　git branch name  创建分支
> 
> 　　git stash 把当前的工作隐藏起来 等以后恢复现场后继续工作
> 
> 　　git stash list 查看所有被隐藏的文件列表
> 
> 　　git stash apply 恢复被隐藏的文件，但是内容不删除
> 
> 　　git stash drop 删除文件
> 
> 　　git stash pop 恢复文件的同时 也删除文件
> 
> 　　git remote 查看远程库的信息
> 
> 　　git remote –v 查看远程库的详细信息
> 
> 　　git push origin master  Git会把master分支推送到远程库对应的远程分支上
> 
> **>  总结创建与合并分支命令如下：**
> 查看分支：git branch
> 
> 　　创建分支：git branch name
> 
> 　　切换分支：git checkout name
> 
> 　　创建+切换分支：git checkout –b name
> 
> 　　合并某分支到当前分支：git merge name
> 
> 　　删除分支：git branch –d name
**> 远程库常用指令**
要查看远程库的信息 使用 git remote
要查看远程库的详细信息 使用 git remote –v
推送分支  git push origin master
推送到远程库的其它分支 git push origin dev
把远程的origin的dev分支创建到本地可以使用命令创建本地dev分支：git checkout  –b dev origin/dev
抓取远程分支或者合并 git pull

```javascript
拉取代码： 
git pull

推本地代码上去： 
1、git status 
2、git add [filename1] [filename2] 
3、git commit [filename1] -m “提交信息说明” 
4、git push

回退 
1、退回至缓存区的coding回退 
git reset [filename1] 
2、会退到制定版本 
git reset –hard 版本号（版本号为commit后的）

看提交日志： 
git log 
git log –oneline

分支 
1、查看分支 
git branch 
2、创建分支 
git branch 分支名 
3、切换分支 
git checkout 分支名 
git checkout -b 分支名（创建并切换分支） 
4、合并某分支到当前分支 
git merge 分支名 
5、删除分支 
git branch -d 分支名（强行删除 -D）
git commit -m "[T]-[N/A]-add request method code"

git submodule init
git submodule update
然后cd cmbcar-b-contracts
然后git checkout master 将contractcheck到master

git stash

git stash pop

git push --no-verify (本地跑完，不用test)

git add .  提交所有

改完之后 
git stash 
git pull --rebase
git stash pop 
git add .
git commit -m "[T]-[N/A]-add request method code"
git push

新建分支 xxx

git pull (目录下 命令行将线上分支拉倒本地)

git checkout xxx (切换到到该分支 )
(可使用 git status 查看目前处于哪一个分支)

git add . (有个句号

git commit -m 'xxx' (提交，-m ''提示信息)

git push

git checkout master (回到主分支)

git merge xxx (将该分支合并到主分支上)

git push
```

**vscode中git的应用就比较方便**
![gitline](https://img-blog.csdnimg.cn/20190909141647672.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d5cXZvbmc=,size_16,color_FFFFFF,t_70)
**vscode中git的操作部分**

![a](https://img-blog.csdnimg.cn/20190909141906935.png)从左到右分别代表git指令中的push、pull、刷新。

![b](https://img-blog.csdnimg.cn/20190909142051908.png)第二个按钮代表checkout到这个分支
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190909163223914.png)
这个界面的选项比刚才那些选项更人性化一点，可以指定pull以及push、checkout指定的分支
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190909163456520.png)最右的加号对应git指令里的add（暂存）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190909163620397.png)
勾号对应指令commit（提交）
