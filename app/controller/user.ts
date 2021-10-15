/*
 * @Author: jing.chen
 * @Date: 2021-10-12 16:17:16
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-15 16:16:04
 * @Description:
 */
import { Controller } from 'egg';
import { Get, Post, Prefix } from 'egg-shell-decorators';

@Prefix('user')
export default class UserController extends Controller {

  /**
   * @author saiyanjing
   * @description 根据 gitLab 用户密码获取 access_token
   */
  @Post('/getUserToken')
  public async getUserToken({
    request: {
      body: { params },
    },
  }) {
    const { ctx } = this;
    const { username, password } = params;

    // gitLab 获取 access_token
    const userToken = await ctx.service.user.getUserToken({
      username,
      password,
    });

    this.ctx.body = userToken;
  }

  /**
   * @author saiyanjing
   * @description 根据 Applications access_token
   */
  @Get('/getTokenByApp')
  public async getTokenByApplications({
    request: {
      query: { code },
    },
  }) {
    const { ctx } = this;
    // gitLab 获取 access_token
    const userToken = await ctx.service.user.getTokenByApplications({ code });
    this.ctx.body = userToken;
  }
}
