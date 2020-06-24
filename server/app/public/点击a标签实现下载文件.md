---
title: 点击a标签实现下载文件
date: 2020-01-19 17:00:19
author: wyqvong
keywords: a标签
categories: HTML
tags:
    - HTML
    - a标签
---
```html
<a href="文件的地址" >写啥都行</a>
<a href="文件的地址" download="">写啥都行</a>//如果遇到图片或者txt等浏览器可以直接打开的文件需要下载的话就要加上download=""这个属性。
download不给值，会使用默认的文件名。
该属性也可以设置一个值来规定下载的文件的名称。属性的值没有限制，浏览器会自动检测文件扩展名添加到文件的后缀。
```

