/*
 * @Author: jing.chen
 * @Date: 2021-11-02 16:04:32
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-02 20:23:23
 * @Description: 
 */
// import { Controller } from "egg";

// export default class DefaultController extends Controller {
//   async ping() {
//     const { ctx, app } = this;
//     const message = ctx.args[0];
//     await ctx.socket.emit("res", `Hi! I've got your message: ${message}`);
//   }
// }
import { Controller } from "egg";

export default class NspController extends Controller {
  async ping() {
    const { ctx, app } = this;
    const message = ctx.args[0];
    await ctx.socket.emit("res", `Hi! I've got your message: ${message}`);
  }

  public async creatJob() {
    const { ctx } = this;
    const message = ctx.args[0] || {};
    try {
      const { payload } = message;

      const {
        projectId,
        branchName = "master",
        branchGitName,
        projectVersion = '0.0.01',
        buildPath = './',
        type = "h5",
        cache,
      } = payload;

      // const project = await ctx.service.project.getProject({ projectId, access_token });

      // let projectGitPath = project.projectUrl.replace(
      //   "http://",
      //   `https://oauth2:${access_token}@`
      // );

      // const callBack = await ctx.service.build.buildProject({
      //   type,
      //   projectName: project.projectGitName,
      //   projectVersion,
      //   projectGitPath: `${projectGitPath}.git`,
      //   branchName: branchGitName,
      //   buildPath,
      //   cache,
      // });

      setTimeout(() => {
        ctx.socket.emit("res", `Hi! I've got your message`);
      }, 2000)

      // this.success(callBack);
    } catch (e) {
      throw e
    }
  }

}
