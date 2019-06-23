'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '服务没有挂掉！';
  }
}

module.exports = HomeController;
