'use strict';

const Controller = require('egg').Controller;

class BingController extends Controller {
  async getPicUrl() {
    const { ctx } = this;
    // 获取图片信息
    const data = await ctx.service.bing.getPicUrl();
    ctx.status = 200;
    ctx.body = {
      code: 0,
      data,
      msg: 'ok',
    };
  }
  async getPicImg() {
    const { ctx } = this;
    // 获取图片信息
    const data = await ctx.service.bing.getPicImg();
    ctx.status = 200;
    ctx.type = data.type;
    ctx.body = data.picture;
  }
}

module.exports = BingController;
