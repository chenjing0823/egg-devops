/*
 * @Author: jing.chen
 * @Date: 2021-11-02 15:52:01
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-03 11:06:59
 * @Description: 
 */
import { Post, Prefix, Get } from "egg-shell-decorators";
import BaseController from "./base";

@Prefix("build")
export default class BuildController extends BaseController {
  /**
   * @author: saiyanjing
   * @description: 创建构建任务
   */
  @Post("/creatJob")
  public async creatJob({
    request: {
      body: { params },
    },
  }) {
    const { ctx } = this;
    const { access_token } = this.user;
    console.log(params)

    const {
      projectId,
      branchName = "master",
      branchGitName,
      projectVersion = '0.0.01',
      buildPath = 'dist',
      type = "h5",
      cache,
    } = params;

    const project = await ctx.service.project.getProject({ projectId, access_token });

    let projectGitPath = project.projectUrl.replace(
      "http://",
      `https://oauth2:${access_token}@`
    );

    const callBack = await ctx.service.build.buildProject({
      type,
      projectName: project.projectGitName,
      projectVersion,
      projectGitPath: `${projectGitPath}.git`,
      branchName: branchGitName,
      buildPath,
      cache,
    });

    setTimeout(() => {
      // console.log(ctx.socket)
      // ctx.socket.emit("res", `Hi! I've got your message`);
      ctx.socket.emit('res', {
        target: 'Dkn3UXSu8_jHvKBmAAHW',
        payload: {
          msg: 'test',
        },
      });
    }, 2000)

    this.success(callBack);
  }
}
