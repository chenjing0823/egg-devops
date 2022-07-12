/*
 * @Author: jing.chen
 * @Date: 2021-11-03 18:34:35
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-03 18:34:46
 * @Description: 
 */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const {
      DATE, STRING, INTEGER, UUID, UUIDV4
    } = Sequelize;
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('process', 'created_user', {
          type: STRING(100)
        }, { transaction: t }),
        queryInterface.addColumn('process', 'update_user', {
          type: STRING(100)
        }, { transaction: t }),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
