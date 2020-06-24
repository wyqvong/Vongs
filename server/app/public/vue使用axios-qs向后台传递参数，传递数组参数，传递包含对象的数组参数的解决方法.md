---
title: vue使用axios+qs向后台传递参数，传递数组参数，传递包含对象的数组参数的解决方法
date: 2020-01-19 17:41:31
author: wyqvong
keywords: qs
categories: axios
tags:
    - vue.js
    - axios
    - qs
---
## qs
**当我用了几次qs以后就发现了个坑**
**向后台传递数组参数的时候其实是有很多种情况的**
```js
qs的基础使用
import qs from 'qs'   //引入方式
this.qs.stringify(data);  //使用方式
this.qs.parse(data);  //使用方式
 
this.$axios.post('/xxx',
        qs.stringify(obj)).then(res=>{
        console.log(res.data)
        if(res.data.ret){
          console.log('添加成功')
        }else{
          console.log('添加失败')
        }
      }).catch(err=>{
        console.log(err);
      })
```

**arrayFormat可以格式化你的数组参数，有三种形式**

```js

qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'indices' })
// 'a[0]=b&a[1]=c'
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'brackets' })
// 'a[]=b&a[]=c'
qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'repeat' })
// 'a=b&a=c'

```
**但是我三个都试了还是解决不了我要传递的格式，即members[0].userUuid这种形式**
**最后面向百度编程，找到了一位好心的前辈所留经验（感谢前辈！）**

```javascript
qs.stringify(obj,{arrayFormat: 'indices', allowDots: true}))
//有了后面这一条代码，就把members[0][userUuid]转成了想要的members[0].userUuid
```
