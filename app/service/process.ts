/*
 * @Author: jing.chen
 * @Date: 2021-11-03 18:40:41
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-03 18:40:42
 * @Description: 
 */
import { Service } from "egg";

export default class Process extends Service {
  /**
   * @author: saiyanjing
   * @description: 创建任务流关联 branch，任务流模板以及需求
   */
  public async createProcess({
    desc,
    name,
    branchIds,
    workflowTplId,
    createdUser,
    updateUser,
  }) {
    const { ctx } = this;
    const workflowTpl = await ctx.model.Process.create({
      desc,
      name,
      branchIds,
      workflowTplId,
      createdUser,
      updateUser,
    });
    return workflowTpl;
  }

  /**
   * @author: saiyanjing
   * @description: 创建任务流关联 branch，任务流模板以及需求
   */
  public async getProcessList({ pageSize = 10, pageNum = 1, opt = {} }) {
    const { ctx } = this;
    // 创建任务流模板
    let offset = (pageNum - 1) * pageSize;
    const processList = await ctx.model.Process.findAndCountAll({
      where: { ...opt },
      limit: pageSize,
      offset,
      order: [["created_at", "DESC"]],
    });
    return processList && JSON.parse(JSON.stringify(processList));
  }
}
