/*
 * @Author: jing.chen
 * @Date: 2021-09-29 15:46:07
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-09 16:54:37
 * @Description:
 */
import { EggPlugin } from 'egg';

// const plugin: EggPlugin = {
//   // static: true,
//   // nunjucks: {
//   //   enable: true,
//   //   package: 'egg-view-nunjucks',
//   // },
// };
// 配置插件
const plugin: EggPlugin = {
  helper: {
    enable: true,
    package: 'egg-helper',
  },
};

export default plugin;
