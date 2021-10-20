/*
 * @Author: jing.chen
 * @Date: 2021-10-20 11:18:56
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-20 11:23:58
 * @Description: 项目模块 Controller
 */
import { Get, Prefix } from 'egg-shell-decorators';
import BaseController from './base';

@Prefix('project')
export default class ProjectController extends BaseController {

  /**
   * @author saiyanjing
   * @description 获取 gitLab 对应自身的项目列表
   */
  @Get('/getList')
  public async getProjectList({ request: { query } }) {
    const { ctx } = this;
    const { access_token } = this.user;
    const { id: userId } = this.userInfo;
    const { pageSize, pageNum } = query;
    const projectList = await ctx.service.project.getProjectList({
      pageSize,
      pageNum,
      access_token,
      userId,
    });
    this.success(projectList);
  }

  /**
   * @author saiyanjing
   * @description 获取 gitLab 单个项目
   */
  @Get('/get')
  public async getProject({ request: { query } }) {
    const { ctx } = this;
    const { projectId } = query;
    const { access_token } = this.user;
    const project = await ctx.service.project.getProject({
      projectId,
      access_token,
    });

    this.success(project);
  }
}
