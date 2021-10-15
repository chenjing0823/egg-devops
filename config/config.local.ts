/*
 * @Author: jing.chen
 * @Date: 2021-09-29 15:46:07
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-09-29 16:44:02
 * @Description:
 */
import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.security = {
    csrf: false,
  };

  return config;
};
