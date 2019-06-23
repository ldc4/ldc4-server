'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/bing/picUrl', controller.bing.getPicUrl);
  router.get('/bing/picImg', controller.bing.getPicImg);
};
