---
title: mongodb 解决报错 TypeError_ db.collection is not a function
date: 2020-03-03 13:48:16
author: wyqvong
keywords: Mongodb
categories: Mongodb
tags:
    - Mongodb
---
```bash
(node:9648) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.G:\eduproject\edu\node_modules\mongodb\lib\topologies\server.js:294
          throw err;
          ^

TypeError: db.collection is not a function
```

> 本来想使用 MongoDB 数据库的 collection 方法来获取合集,结果出现了这个报错。

## 解决方法

> 因为mongodb3.0的语法改变，所以要么把安装的版本降低，要么使用3.0的语法去调用。

```javascript
// 原始 API 2.0写法

    //1.打开连接
    MongoClient.connect(url, (err, db) => {
        if (err) {
            throw err
        }
        //2.操作数据库
        db
            .collection('your colleactionsName')
            .insertOne(req.body, (err, result) => {
                if (err) {
                    throw err
                }
                console.log(result)
                res.json({
                    err_code: 0
                })
            })
        //3.关闭连接
        db.close()
    })
   ```

   ```javascript
//3.0版本代码
//3.0 版本的回调函数里的 (err,db) 其中db返回的实际上是尝试访问的对象的父对象，为了访问正确的对象，就需要再引用你的数据库名，然后通过这次引用的赋值的 db 变量 就可以调用collection方法了

    //1.打开连接
    MongoClient.connect(url, (err, client) => {
        if (err) {
            throw err
        }
        //2.操作数据库
        const db =client.db('数据库名')
        db
            .collection('your colleactionsName')
            .insertOne(req.body, (err, result) => {
                if (err) {
                    throw err
                }
                console.log(result)
                res.json({
                    err_code: 0
                })
            })
        //3.关闭连接
        client.close()
    })
```
