/*
 * @Author: jing.chen
 * @Date: 2021-10-20 16:25:51
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-20 16:25:51
 * @Description: 
 */
export default (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define("user", {
    id: { type: INTEGER, primaryKey: true },
    name: STRING(30),
    username: STRING(30),
    email: STRING(100),
    avatarUrl: STRING(200),
    webUrl: STRING(200),
  });
  return User;
};