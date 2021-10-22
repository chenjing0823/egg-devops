'use strict';

module.exports = { // 为了减少工作量，权限直接使用 gitlab 的，所以只需要落库以下字段
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, },
      name: STRING(30),
      username: STRING(30),
      email: STRING(100),
      avatar_url: STRING(200),
      web_url: STRING(200),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
