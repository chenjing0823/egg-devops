/*
 * @Author: jing.chen
 * @Date: 2021-11-03 18:29:44
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-03 18:29:45
 * @Description: 
 */
import { Service } from "egg";

export default class Branch extends Service {
  /**
   * @author: saiyanjing
   * @description: 根据 gitLab api 获取分支 list，且数据落库
   */
  public async getBranchList({
    projectId,
    projectSourceId,
    access_token,
    pageSize = 100,
    pageNum = 1,
  }) {

    const { ctx } = this;
    const branchList = await ctx.helper.api.gitLab.branch.getBranchList({
      projectId: projectSourceId,
      access_token,
      pageSize,
      pageNum,
    });

    branchList.forEach((branch) => {
      branch.branchGitName = branch.name;
      branch.projectId = projectId;
      branch.projectSourceId = projectSourceId;
      delete branch.name;
    });

    branchList.length > 0 &&
      (await ctx.model.Branch.bulkCreate(branchList, {
        ignoreDuplicates: true,
        updateOnDuplicate: ["commit"],
      }));

    const local = await ctx.model.Branch.findAll({
      where: {
        projectId,
      },
    });
    return local;
  }

  /**
   * @author: saiyanjing
   * @description: 根据 gitLab api 获取分支 list，且数据落库
   */
  public async getSelfBranchList({ branchIds }) {
    const { ctx } = this;
    const local = await ctx.model.Branch.findAll({
      where: {
        id: branchIds,
      },
    });
    return local;
  }

  /**
   * @author: saiyanjing
   * @description: 根据 gitLab api 创建分支，且数据落库
   */
  public async createBranch({
    projectSourceId,
    access_token,
    ref,
    branch,
    userName,
  }) {
    const { ctx } = this;
    const newBranch = await ctx.helper.api.gitLab.branch.createBranch({
      projectId: projectSourceId,
      access_token,
      ref,
      branch,
      userName,
    });

    if (!newBranch) return null;

    const branchCallBack = await ctx.model.Branch.create({
      projectId: projectSourceId,
      branchName: branch,
      branchType: branch.branchType,
      branchGitName: branch.branchGitName,
      branchFrom: branch.ref,
      processStatus: "dev",
      remarks: branch.remarks,
      createdUser: userName,
    });
    return branchCallBack;
  }

  /**
   * @author: saiyanjing
   * @description: 更新分支信息
   */
  public async updateBranch({ branchIds, opt }) {
    const { ctx } = this;
    const branchCallBack = await ctx.model.Branch.update(
      {
        ...opt,
      },
      {
        where: {
          id: branchIds,
        },
      }
    );
    return branchCallBack;
  }

  /**
   * @author: saiyanjing
   * @description: 查询分支流程信息
   */
  public async checkProcess({ branchIds, status = "some" }) {
    const { ctx } = this;
    const branchCallBack = await ctx.model.Branch.findAll({
      where: { id: branchIds },
    });
    if (branchCallBack[status]((branch) => branch.processId)) {
      return false;
    }
    return true;
  }
}
