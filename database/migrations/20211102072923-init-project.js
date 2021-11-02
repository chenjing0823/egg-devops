/*
 * @Author: jing.chen
 * @Date: 2021-11-02 15:29:23
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-02 15:29:40
 * @Description: 
 */

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {
      DATE, STRING, INTEGER, UUID, UUIDV4
    } = Sequelize;
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('project', 'project_feat', {
          type: INTEGER
        }, { transaction: t }),
        queryInterface.addColumn('project', 'project_bugfix', {
          type: INTEGER
        }, { transaction: t }),
        queryInterface.addColumn('project', 'project_release', {
          type: INTEGER
        }, { transaction: t }),
        queryInterface.addColumn('project', 'project_version', {
          type: STRING(10)
        }, { transaction: t }), ,
        queryInterface.addColumn('project', 'last_activity_at', {
          type: DATE
        }, { transaction: t }), ,
        queryInterface.addColumn('project', 'logo', {
          type: STRING(100)
        }, { transaction: t }), ,
        queryInterface.addColumn('project', 'name_with_namespace', {
          type: STRING(100)
        }, { transaction: t }),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
  },
};
