/*
 * @Author: jing.chen
 * @Date: 2021-10-12 16:44:06
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-28 10:36:38
 * @Description:
 */
import { Service } from "egg";
import { CLIENT_ID, CLIENT_SECRET } from '../config/default.config';

export default class User extends Service {

  /**
   * @author: saiyanjing
   * @description: 使用 gitLab api 获取 access_token
   */
  public async getTokenByApplications({ code }) {
    const { data: token } = await this.ctx.helper.utils.http.post({
      url: '/oauth/token',
      params: {
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        redirect_uri: `http://devops.saiyanjing.com/user/getTokenByApp`,
      },
    });

    if (token && token.access_token) {
      return token;
    }
    return false;
  }

  /**
   * @author: saiyanjing
   * @description: 使用 gitLab api 获取 access_token
   */
  public async getUserToken({ username, password }) {
    const { data: token } = await this.ctx.helper.utils.http.post({
      url: '/oauth/token',
      params: {
        grant_type: 'password',
        username,
        password,
      },
    });

    if (token && token.access_token) {
      return token;
    }
    return false;
  }

  /**
   * @author: saiyanjing
   * @description: 使用 gitLab api 获取 gitLab 用户信息
   */
  public async getUserInfo({ access_token }) {
    const userInfo = await this.ctx.helper.api.gitLab.user.getUserInfo({
      access_token,
    });
    return userInfo;
  }

  /**
   * @author: saiyanjing
   * @description: 用户信息本地落库
   */
  public async saveUser({ userInfo }) {
    const { ctx } = this;
    const {
      id,
      name,
      username,
      email,
      avatar_url: avatarUrl,
      web_url: webUrl,
    } = userInfo;

    // 查询用户是否已经落库
    ctx.model.User.findOrCreate({
      where: {
        id,
      },
      defaults: {
        id,
        name,
        username,
        email,
        avatarUrl,
        webUrl,
      }
    }).then(([user, created]) => {
      if (!created) {
        ctx.model.User.update({
          name,
          username,
          email,
          avatarUrl,
          webUrl,
        }, {
          where: {
            id,
          }
        })
      }
    });
  }
}
