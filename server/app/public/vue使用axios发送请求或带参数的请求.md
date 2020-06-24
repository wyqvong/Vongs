---
title: vue使用axios发送请求或带参数的请求
date: 2020-01-19 17:04:41
author: wyqvong
keywords: axios
categories: axios
tags:
    - vue.js
    - axios
---


## 首先，在main.js中引入![在这里插入图片描述](https://img-blog.csdnimg.cn/20190919142356684.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d5cXZvbmc=,size_16,color_FFFFFF,t_70)

**在这个时候，你还是无法在组件中使用axios的，但如果将vue改为vue的原型链，就可以解决这个问题，如下图**


![](https://img-blog.csdnimg.cn/20190919142438894.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d5cXZvbmc=,size_16,color_FFFFFF,t_70)
 

## 开始发送请求
![](https://img-blog.csdnimg.cn/20190919142501490.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d5cXZvbmc=,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20190919142520221.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d5cXZvbmc=,size_16,color_FFFFFF,t_70)
 

## 带参数的请求

**如果想要发送带json格式参数的请求，则需要使用qs模块来处理参数
首先在main.js中导入qs模块**


![](https://img-blog.csdnimg.cn/20190919142533573.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d5cXZvbmc=,size_16,color_FFFFFF,t_70)
 

**然后使用qs处理参数**

简单来说：qs是查询字符串解析和将对象序列化的库；而vue在请求的时候，当我们的data中有数组的时候，是需要序列化才能与后台进行通讯的。

**qs的应用：**

 - npm 下载qs库：npm i qs
 - 在vue项目页面或者封装的axios中引用： import Qs from 'qs'；
 - qs主要有两种使用方法：qu.stringify()和qs.parse();
 - qu.stringify():将对象序列化成url的形式；以&进行拼接
 - qs.parse():将url解析成对象形式；

![](https://img-blog.csdnimg.cn/20190919142545384.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d5cXZvbmc=,size_16,color_FFFFFF,t_70)

最终返回结果如下


![](https://img-blog.csdnimg.cn/20190919142553928.png)
 

 

## 回调函数的简写


![](https://img-blog.csdnimg.cn/20190919142601510.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d5cXZvbmc=,size_16,color_FFFFFF,t_70)
 

**如果在vue中使用，那么vue中data中的数据无法通过this直接引用，需要做如下处理**

![](https://img-blog.csdnimg.cn/20190919142610548.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d5cXZvbmc=,size_16,color_FFFFFF,t_70)