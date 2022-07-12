/*
 * @Author: jing.chen
 * @Date: 2021-11-03 18:27:49
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-03 18:27:50
 * @Description: 
 */

import { Post, Prefix, Get } from "egg-shell-decorators";
import BaseController from "./base";

@Prefix("process")
export default class ProcessController extends BaseController {
  /**
   * @author: saiyanjing
   * @description: 创建 devOps 任务流
   */
  @Post("/create")
  public async createProcess({
    request: {
      body: { params },
    },
  }) {
    const { ctx } = this;
    const { username } = this.userInfo;
    const { name, branchIds, workflowTplId, desc } = params;
    const branchStatus = await ctx.service.branch.checkProcess({ branchIds });
    if (!branchStatus)
      this.error({
        msg: "已有分支在流程中",
      });
    const status = await ctx.service.process.createProcess({
      desc,
      name,
      branchIds,
      workflowTplId,
      createdUser: username,
      updateUser: username,
    });
    await ctx.service.branch.updateBranch({
      branchIds,
      opt: {
        processId: status.id,
      },
    });
    this.success(status);
  }

  /**
   * @author: saiyanjing
   * @description: 查询 devOps 任务流
   */
  @Get("/getList")
  public async getProcessList({ request: { query } }) {
    const { ctx } = this;
    const { pageSize = 10, pageNum = 1 } = query;
    const processList = await ctx.service.process.getProcessList({
      pageNum: parseInt(pageNum),
      pageSize: parseInt(pageSize),
    });
    // 联表查询分支信息
    for (let process of processList.rows) {
      const { branchIds } = process;
      process.branches = await ctx.service.branch.getSelfBranchList({
        branchIds,
      });
    }
    this.success(processList);
  }
}
