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
  config.keys = appInfo.name + '_1581178232166_9983';

  // add your middleware config here
  config.middleware = ['auth'];

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/eggcms', 
      options: {}
    },
  };
  

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    auth: {
      threshold: 1033, // 小于 1k 的响应体不压缩
      enable: true
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};


