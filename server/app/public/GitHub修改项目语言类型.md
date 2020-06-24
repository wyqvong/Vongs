---
title: GitHub修改项目语言类型
date: 2020-02-15 13:48:16
author: wyqvong
keywords: github
categories: github
tags:
    - github
---
>当我们把项目上传到github仓库上时，github会自动识别你的代码并且判断归为哪一类语言，而这往往会显示错误的语言，例如我上传了html+css+js+java+等等很多混杂的文件，但是却被自动识别为html类别
>解决方法：
> 在项目的根目录下添加.gitattributes文件
> 并且在文件里写入以下代码

```bash
*.js linguist-language=java//将.js结尾的文件当做java文件
*.css linguist-language=java//将.css结尾的文件当做java文件
*.html linguist-language=java//将.html结尾的文件当做java文件
```
