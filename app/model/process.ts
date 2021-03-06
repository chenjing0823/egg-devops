/*
 * @Author: jing.chen
 * @Date: 2021-11-03 18:35:24
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-03 18:35:25
 * @Description: 
 */

export default app => {
  const { UUID, STRING, UUIDV4, INTEGER } = app.Sequelize;

  const Process = app.model.define(
    'process',
    {
      id: {
        type: UUID,
        allowNull: false,
        defaultValue: UUIDV4,
      },
      name: STRING(100),
      workflowTplId: {
        type: UUID,
        allowNull: false,
      },
      processStatus: {
        type: INTEGER,
        defaultValue: 0,
        primaryKey: true,
      },
      createdUser: STRING(100),
      updateUser: STRING(100),
      branchIds: {
        type: STRING(1000),
        set(val, name) {
          const vals = val && val.length > 0 ? val.join(',') : '';
          console.log('vals====>', vals);
          (this as any).setDataValue(name, vals);
        },
        get(val) {
          console.log('val====>', val);
          const value = (this as any).getDataValue(val);
          console.log('value====>', value);
          return value ? value.split(',') : [];
        },
      },
    },
    { freezeTableName: true },
  );

  return Process;
};
