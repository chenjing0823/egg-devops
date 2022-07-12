/*
 * @Author: jing.chen
 * @Date: 2021-10-09 17:24:05
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-02 20:22:12
 * @Description:
 */

import { GIT_URL } from "../../config/default.config";

const qs = require("qs");

interface IMethodV {
  url: string
  method: string
  params?: object
  query?: object
}

export default (app) => {
  return {
    /**
     * @author: saiyanjing
     * @description: 不带 version 的 api 请求
     */
    async post({ url, params = {}, query = {} }) {
      const sendUrl = `${GIT_URL}${url}?${qs.stringify(query)}`;
      try {
        const { data, code } = await app.curl(sendUrl, {
          dataType: "json",
          method: "POST",
          data: params,
        });
        return { data, code };
      } catch (error) {
        return error;
      }
    },

    /**
     * @author: saiyanjing
     * @description: 带 version 的通用 api 请求
     */
    async methodV({ url, method, params = {}, query = {} }: IMethodV) {
      let sendUrl = `${GIT_URL}api/v4${url}`
      if (query) {
        sendUrl = `${sendUrl}?${qs.stringify(query)}`;
      }

      console.warn("sendUrl=====>", sendUrl, query, 'method===>', method);

      try {
        const res = await app.curl(sendUrl, {
          dataType: "json",
          method,
          data: params,
        });
        const { data, status: code } = res;
        return { data, code };
      } catch (error) {
        return error;
      }
    },
  };
};
