/*
 * @Author: jing.chen
 * @Date: 2021-09-29 15:46:07
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-09 17:16:14
 * @Description:
 */
// import { Controller } from 'egg';

// export default class HomeController extends Controller {
//   public async index() {
//     const { ctx } = this;
//     ctx.body = await ctx.service.test.sayHi(`Hello ${ctx.request.body.name}!`);
//   }
// }

import { Controller } from 'egg';
import { Post, Get, Prefix } from 'egg-shell-decorators';


@Prefix('/home') // 添加网关，方便路由识别
export default class HomeController extends Controller {

  @Post('/')
  public async index() {
    const { ctx } = this;
    ctx.body = `Hello ${ctx.request.body.name}!`;
  }

  @Get('/get')
  public async get() {
    const { ctx } = this;
    ctx.body = `Hello ${ctx.helper.util.hello()}!`;
  }
}
