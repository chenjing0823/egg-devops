/*
 * @Author: jing.chen
 * @Date: 2021-10-20 10:47:03
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-20 10:47:04
 * @Description:
 */
export default class HttpExceptions extends Error {
  code: number;
  msg: string;
  httpCode: number;

  constructor({ msg = '服务器异常', code = 1, httpCode = 400 }) {
    super();
    this.msg = msg;
    this.code = code;
    this.httpCode = httpCode;
  }
}
