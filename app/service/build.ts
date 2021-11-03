/*
 * @Author: jing.chen
 * @Date: 2021-11-02 15:53:26
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-02 15:53:27
 * @Description: 
 */
import { Service } from "egg";

export default class Build extends Service {
  /**
   * @author: saiyanjing
   * @description: 构建项目
   */
  public async buildProject({
    type = "h5",
    projectName,
    projectVersion,
    projectGitPath,
    branchName,
    buildPath,
    cache = false,
  }) {
    const { ctx } = this;
    const callBack = await ctx.helper.api.jenkins.index.buildJenkins({
      type,
      job: "fe-base",
      params: {
        PROJECT_NAME: projectName,
        PROJECT_VERSION: projectVersion,
        PROJECT_GIT_PATH: projectGitPath,
        BRANCH_NAME: branchName,
        BUILD_PATH: buildPath,
        CACHE: cache,
      },
    });
    return callBack;
  }
}
