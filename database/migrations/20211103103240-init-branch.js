/*
 * @Author: jing.chen
 * @Date: 2021-11-03 18:32:40
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-03 18:32:56
 * @Description: 
 */

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {
      DATE, STRING, UUID, UUIDV4, INTEGER, TEXT
    } = Sequelize;
    await queryInterface.createTable('branch', {
      id: {
        type: UUID,
        allowNull: false,
        defaultValue: UUIDV4,
      },
      project_id: {
        type: UUID,
        primaryKey: true,
        allowNull: false,
      },
      project_source_id: {
        type: STRING(30),
        primaryKey: true,
      },
      process_id: {
        type: UUID,
      },
      branch_name: STRING(30),
      branch_git_name: STRING(30),
      created_user: STRING(50),
      remarks: STRING(1000),
      update_user: STRING(100),
      branch_status: {
        type: INTEGER,
        defaultValue: 0,
        primaryKey: true,
      },
      branch_next_status: {
        type: INTEGER,
        primaryKey: true,
      },
      created_at: DATE,
      updated_at: DATE,
      commit: TEXT('long')
    });
  },

  down: (queryInterface, Sequelize) => { },
};
