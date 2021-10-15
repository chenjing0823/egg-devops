/*
 * @Author: jing.chen
 * @Date: 2021-10-09 17:24:05
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-12 11:18:47
 * @Description:
 */
import qs = require('qs');

const baseUrl = 'http://gitlab.saiyanjing.com/'; // 此处替换为你自己的 gitlab 地址

export default app => {
  return {
    async post({ url, params = {}, query = {} }) {
      const sendUrl = `${baseUrl}${url}?${qs.stringify(query)}`;
      try {
        const { data, code } = await app.curl(sendUrl, {
          dataType: 'json',
          method: 'POST',
          data: params,
        });
        return { data, code };
      } catch (error) {
        return error;
      }
    },
    async methodV({ url, method, params = {}, query = {} }) {
      const sendUrl = `${baseUrl}/api/v4${url}?${qs.stringify(query)}`;
      try {
        const { data, code } = await app.curl(sendUrl, {
          dataType: 'json',
          method,
          data: params,
        });
        return { data, code };
      } catch (error) {
        return error;
      }
    },
  };
};
