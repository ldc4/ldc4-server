/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1561181194151_7309';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    yun: {
      SecretId: '',
      SecretKey: '',
    },
    cos: {
      Bucket: '',
      Region: '',
      KeyPrefix: '',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
