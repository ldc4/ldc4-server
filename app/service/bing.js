'use strict';

const Service = require('egg').Service;
const axios = require('axios');
const _ = require('lodash');

class BingService extends Service {

  /**
   * 获取图片URL
   */
  async getPicUrl() {
    const bingURL = 'https://cn.bing.com/HPImageArchive.aspx';
    const bingParams = { ids: 0, n: 1, format: 'js' };
    const picURL = 'https://cn.bing.com';
    const response = await axios.get(bingURL, { params: bingParams });
    const picParams = _.get(response, 'data.images[0].url');
    return picURL + picParams;
  }

  /**
   * 获取图片
   */
  async getPicImg() {
    const bingURL = 'https://cn.bing.com/HPImageArchive.aspx';
    const bingParams = { ids: 0, n: 1, format: 'js' };
    const picURL = 'https://cn.bing.com';
    const response = await axios.get(bingURL, { params: bingParams });
    const picParams = _.get(response, 'data.images[0].url');
    const matchArr = /^\/th\?id=(.*)\.(.*)&(.*)$/.exec(picParams);
    const type = _.get(matchArr, '2', 'jpg');
    const data = await axios.get(picURL + picParams, { responseType: 'arraybuffer' });
    return { picture: _.get(data, 'data'), type: '.' + type };
  }
}

module.exports = BingService;
