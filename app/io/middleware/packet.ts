/*
 * @Author: jing.chen
 * @Date: 2021-11-03 19:06:38
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-03 19:06:38
 * @Description: 
 */

export default (app) => {
  return async (ctx, next) => {
    ctx.socket.emit("res", "packet received!");
    console.log("packet:", ctx.packet);
    await next();
  };
};
