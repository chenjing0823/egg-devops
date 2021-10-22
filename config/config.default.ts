/*
 * @Author: jing.chen
 * @Date: 2021-09-29 15:46:07
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-20 16:12:54
 * @Description: 
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1632901564293_466';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  // 数据库配置
  config.sequelize = {
    database: "devops_dev",
    delegate: "model", // load all models to app.model and ctx.model
    baseDir: "model", // load models from `app/model/*.js`
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "cj950823",
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
