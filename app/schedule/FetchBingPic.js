'use strict';

const Subscription = require('egg').Subscription;
const COS = require('cos-nodejs-sdk-v5');
const _ = require('lodash');
const moment = require('moment');
const stream = require('stream');

class FetchBingPic extends Subscription {

  static get schedule() {
    return {
      disable: false,
      cron: '0 19 0 * * *',
      // interval: '3s',
      type: 'worker', // 指定随机一个 worker 执行
    };
  }

  async subscribe2() {
    const { ctx, config } = this;
    const cos = new COS({
      SecretId: _.get(config, 'yun.SecretId'),
      SecretKey: _.get(config, 'yun.SecretKey'),
    });
    const data = await ctx.service.bing.getPicImg();
    const bufferStream = new stream.PassThrough();
    bufferStream.end(data.picture);
    // 上传至腾讯云COS
    cos.putObject({
      Bucket: _.get(config, 'cos.Bucket'),
      Region: _.get(config, 'cos.Region'),
      Key: _.get(config, 'cos.KeyPrefix') + moment().format('YYYY-MM-DD'),
      Body: bufferStream,
      onProgress(progressData) {
        ctx.logger.info(progressData);
      },
    }, function(err, data) {
      if (err) {
        ctx.logger.error(JSON.stringify(err));
      } else {
        ctx.logger.info(JSON.stringify(data));
      }
    });

  }
}

module.exports = FetchBingPic;
