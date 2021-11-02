/*
 * @Author: jing.chen
 * @Date: 2021-11-02 14:49:13
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-02 14:49:14
 * @Description: 
 */

import AJAX from "../../utils/http";

module.exports = (app) => {

  const getUserInfo = async ({ access_token }) => {
    const { data: userInfo } = await AJAX(app).methodV({
      url: "/user",
      method: "GET",
      query: {
        access_token,
      },
    });

    return userInfo;
  };

  const getUsers = async ({ params = {}, pageNum = 1, pageSize = 100 }) => {
    const { data } = await AJAX(app).methodV({
      url: "/users",
      params: {
        ...params,
        per_page: pageSize,
        page: pageNum,
      },
      method: "GET",
    });
    return data;
  };

  return {
    getUserInfo,
    getUsers,
  };
};
