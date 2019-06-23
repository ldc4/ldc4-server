'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');
const _ = require('lodash');

class BingController extends Controller {
  async getPicUrl() {
    const { ctx } = this;
    // 获取图片信息
    const bingURL = 'https://cn.bing.com/HPImageArchive.aspx';
    const bingParams = { ids: 0, n: 1, format: 'js' };
    const picURL = 'https://cn.bing.com';
    const response = await axios.get(bingURL, { params: bingParams });
    const picParams = _.get(response, 'data.images[0].url');
    ctx.status = 200;
    ctx.body = {
      code: 0,
      data: picURL + picParams,
      msg: 'ok',
    };
  }
  async getPicImg() {
    const { ctx } = this;
    // 获取图片信息
    const bingURL = 'https://cn.bing.com/HPImageArchive.aspx';
    const bingParams = { ids: 0, n: 1, format: 'js' };
    const picURL = 'https://cn.bing.com';
    const response = await axios.get(bingURL, { params: bingParams });
    const picParams = _.get(response, 'data.images[0].url');
    const picture = await axios.get(picURL + picParams, { responseType: 'arraybuffer'});
    const matchArr = /^\/th\?id=(.*)\.(.*)&(.*)$/.exec(picParams);
    if (matchArr && matchArr.length >= 2) {
      ctx.type = '.' + matchArr[2];
    } else {
      ctx.type = '.png';
    }
    ctx.status = 200;
    ctx.body = picture.data;  
  }
}

module.exports = BingController;
