/*
 * @Author: jing.chen
 * @Date: 2021-10-28 10:32:23
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-03 11:10:05
 * @Description: jwt 中间件
 */
const excludeUrl = ["/user/getUserToken", '/user/getTokenByApp'];

export default () => {
  /**
   * @author: saiyanjing
   * @description: jwt 中间件，过滤白名单 + 验证登录权限
   */
  const jwtAuth = async (ctx, next) => {
    if (excludeUrl.includes(ctx.request.path)) {
      await next();
      return;
    }
    const token = ctx.cookies.get('authorization') || ctx.request.header.authorization

    if (token) {
      try {
        // 解码token
        const deCode = ctx.app.jwt.verify(
          token.replace("Bearer ", ""),
          ctx.app.config.jwt.secret
        );
        console.log('deCode', deCode)
        ctx.user = deCode;
        await next();
      } catch (error) {
        ctx.status = 401;
        ctx.body = {
          code: 401,
          message: error.message,
        };
      }
      return;
    }
    ctx.status = 401;
    ctx.body = {
      code: 401,
      message: "验证失败",
    };
    return;
  };
  return jwtAuth;
};
