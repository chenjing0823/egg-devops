/*
 * @Author: jing.chen
 * @Date: 2021-10-20 10:45:25
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-03 11:06:14
 * @Description: 基础类 Controller
 */

import { Controller } from 'egg';
import HttpExceptions from '../exceptions/http_exceptions';

export default class BaseController extends Controller {
  /**
   * @author saiyanjing
   * @description 全局用户信息
   */
  get user() {
    return this.ctx.user.userToken;
  }

  get userInfo() {
    return this.ctx.user.userInfo;
  }

  /**
   * @author saiyanjing
   * @description 成功回调
   */
  success(data) {
    this.ctx.body = {
      code: 0,
      data,
    };
  }

  /**
   * @author saiyanjing
   * @description 根据业务返回不同的错误 code，提供给前端做业务判断处理
   */
  error({ msg = '服务器异常', code = 1, httpCode = 400 }) {
    throw new HttpExceptions({
      code,
      httpCode,
      msg,
    });
  }
}
