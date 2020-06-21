const Service = require('egg').Service

class ArticleService extends Service {
  async create (params) {
    const { app } = this
    try {
      const result = await app.mysql.insert('article', params)
      return result
    } catch (err) {
      console.log(err)
      return null
    }
  }

  async lists () {
    const { app } = this
    try {
      const result = await app.mysql.select('article')
      return result
    } catch (err) {
      console.log(err)
      return null
    }
  }

  async detail (id) {
    if (!id) {
      console.log('id必须传递')
      return null
    }
    const { app } = this
    try {
      const result = await app.mysql.get('article', { article_id: id })
      return result
    } catch (err) {
      console.log(err)
      return null
    }
  }

}

module.exports = ArticleService
