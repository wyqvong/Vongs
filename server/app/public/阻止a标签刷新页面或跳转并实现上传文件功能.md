---
title: 阻止a标签刷新页面或跳转并实现上传文件功能
date: 2020-01-19 16:26:26
author: wyqvong
keywords: a标签
categories: HTML
tags:
    - HTML
    - a标签
---
**Tip：框架是用了vue**
**href="javascript:阻止刷新页面或跳转**
```javascript
<a href="javascript:;" @click="addfile">{{listext[1].text}}</a>
<input type="file" ref="fileInput" class="inputfile" >
```
**因为仅靠a标签是做不到上传文件的，所以借助了表单的input来完成上传文件。**
*点击a标签后触发点击input*
```js
methods:{
    addfile(){
      this.$refs.fileInput.click();
    },
  }
```
**css部分，input的样式是要设置成隐藏**

```css
.inputfile{
  display:none;
}
```
