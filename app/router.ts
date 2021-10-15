/*
 * @Author: jing.chen
 * @Date: 2021-09-29 15:46:07
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-09 16:48:44
 * @Description:
 */
import { Application } from 'egg';
import { EggShell } from 'egg-shell-decorators';

// export default (app: Application) => {
//   const { controller, router } = app;

//   router.post('/', controller.home.index);
// };

export default (app: Application) => {
  EggShell(app);
};
