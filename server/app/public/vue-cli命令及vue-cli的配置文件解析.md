---
title: vue-cli命令及vue-cli的配置文件解析
date: 2020-01-19 17:32:56
author: wyqvong
keywords: vue-cli
categories: vue-cli
tags:
    - vue-cli
    - vue.js
---
## vue init命令
用vue init命令来初始化项目，如下：

```js
vue init <template-name> <project-name>
```


init：表示要用vue-cli来初始化项目
< template-name>：表示模板名称，vue-cli官方提供的5种模板：

 1. webpack：一个全面的webpack+vue-loader的模板，功能包括热加载，linting,检测和CSS扩展。
 2. webpack-simple：一个简单webpack+vue-loader的模板，不包含其他功能，让你快速的搭建vue的开发环境。
 3. browserify：一个全面的Browserify+vueify 的模板，功能包括热加载，linting,单元检测。
 4. browserify-simple：一个简单Browserify+vueify的模板，不包含其他功能，让你快速的搭建vue的开发环境。
 5. simple：一个最简单的单页应用模板。

< project-name>：标识项目名称，根据自己的项目来起名字。

## 项目初始化
一般会使用webpack这个模板，命令使用如下：

```js
vue init webpack my-vue-demo
```
Project name：项目名称 ，默认为初始化建项目的名称my-vue-demo，不需要直接回车
Project description：项目描述，默认为A Vue.js project，不需要直接回车
Author：作者，如果有配置git的作者，自动会读取。直接回车
Install vue-router? 是否安装vue的路由插件，需要安装，选择Y
Use ESLint to lint your code? 是否用ESLint来限制你的代码错误和风格。不需要输入n，需要选择y，如果是大型团队开发，最好是进行配置
setup unit tests with Karma + Mocha? 是否需要安装单元测试工具，不需要输入n，需要选择y
Setup e2e tests with Nightwatch? 是否安装e2e来进行用户行为模拟测试，不需要输入n，需要选择y

## 运行项目

```js
cd my-vue-demo，使用cd命令进入到项目目录

npm run dev
以上命令为开发模式下运行项目

npm run build
以上命令为项目发布打包
```
![](https://img-blog.csdnimg.cn/20190919144031161.png)
![](https://img-blog.csdnimg.cn/20190919144126333.png)
## 停止项目
在终端按 **ctrl+c**
![](https://img-blog.csdnimg.cn/2019091914385265.png)
**然后按输入y即可停止**
