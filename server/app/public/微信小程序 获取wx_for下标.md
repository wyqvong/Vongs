---
title: 微信小程序获取wx_for下标
date: 2020-03-06 13:48:16
author: wyqvong
keywords: 小程序
categories: 小程序
tags:
    - 小程序
---

> 刚接触小程序，想通过看文档一边自学一边做一个简单但是刚需的小程序
> 在使用wx:for循环button按钮的时候，我需要获取每个按钮的下标index，但是官方文档好像并没有说的很清楚，后来通过面向百度编程找到了解决方法

在标签上加

```javascript
wx:for-index="index"   data-index="{{index}}"
```

即

```html
<button wx:for="{{picks}}" 
		type="primary" 
		class="pick_button" 
		size="mini" 
		bindtap="getIndex" 
		wx:for-index="index"
		data-index="{{index}}">
  	{{item.name}}
 </button>
```

在js那边就是

```javascript
getIndex: function (e) {
    console.log(e.target.dataset.index)
  },
```
