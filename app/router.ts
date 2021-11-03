/*
 * @Author: jing.chen
 * @Date: 2021-09-29 15:46:07
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-02 18:17:55
 * @Description:
 */
import { Application } from 'egg';
import { EggShell } from 'egg-shell-decorators';

// export default (app: Application) => {
//   const { controller, router } = app;

//   router.post('/', controller.home.index);
// };

export default (app: Application) => {
  const { router, controller, io } = app;
  EggShell(app);

  // socket.io
  io.of('/').route('io/server', io.controller.nsp.ping);
  io.of('/').route('creatJob', io.controller.nsp.creatJob);
};
