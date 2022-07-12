/*
 * @Author: jing.chen
 * @Date: 2021-11-03 18:34:15
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-03 18:34:30
 * @Description: 
 */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {
      DATE, STRING, INTEGER, UUID, UUIDV4, TEXT
    } = Sequelize;
    await queryInterface.createTable('process', {
      id: {
        type: UUID,
        allowNull: false,
        defaultValue: UUIDV4,
      },
      branch_ids: {
        type: STRING(200),
        primaryKey: true,
      },
      workflow_tpl_id: {
        type: UUID,
        allowNull: false,
      },
      process_status: {
        type: INTEGER,
        defaultValue: 0,
        primaryKey: true,
      },
      name: STRING(100),
      desc: TEXT('long'),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  down: async (queryInterface, Sequelize) => { }
};
