/*
 * @Author: jing.chen
 * @Date: 2021-09-29 15:46:07
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-02 15:58:34
 * @Description:
 */
import { EggPlugin } from 'egg';


// 配置插件
const plugin: EggPlugin = {
  static: true,
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  helper: {
    enable: true,
    package: 'egg-helper',
  },
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
};

export default plugin;
