/*
 * @Author: jing.chen
 * @Date: 2021-10-12 16:44:06
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-15 15:44:13
 * @Description:
 */
import { Service } from 'egg';

const CLIENT_ID = 'ad1cd352d473da4f645942b334101e2757c25e7829a5cfb16c31dcd4cae6b299';
const CLIENT_SECRET = '16dd1566e89444179c33d955efabdd25eed7cab62ea751d77c1ab36859bda27a';

export default class User extends Service {

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

  public async getTokenByApplications({ code }) {
    const { data: token } = await this.ctx.helper.utils.http.post({
      url: '/oauth/token',
      params: {
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        redirect_uri: 'http://127.0.0.1:7001/user/getTokenByApp',
      },
    });

    if (token && token.access_token) {
      return token;
    }
    return false;
  }
}
