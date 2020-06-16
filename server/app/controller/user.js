// 'use strict';

const Controller = require('egg').Controller

class UserController extends Controller {
  async find () {
    const { ctx } = this
    const userId = ctx.params.id
    const result = await ctx.service.user.find(userId)
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询用户失败',
      }
    }
  }
}

module.exports = UserController
