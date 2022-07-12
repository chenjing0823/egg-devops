/*
 * @Author: jing.chen
 * @Date: 2021-11-03 19:06:16
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-03 19:06:16
 * @Description:  socket.io 鉴权
 */
export default (app) => {
  return async (ctx, next) => {
    ctx.socket.emit("res", "connected!");
    await next();

    // execute when disconnect.
    console.log("disconnection!");
  };
};
