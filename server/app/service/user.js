const Service = require('egg').Service

class UserService extends Service {
  async find (id) {
    if (!id) {
      console.log('id必须传递')
      return null
    }
    try {
      const result = await this.app.mysql.get('users', { user_id: id })
      return result
    } catch (err) {
      console.log(err)
      return null
    }
  }
}

module.exports = UserService
