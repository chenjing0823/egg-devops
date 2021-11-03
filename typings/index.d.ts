/*
 * @Author: jing.chen
 * @Date: 2021-09-29 15:46:07
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-02 16:00:58
 * @Description: 重写
 */
import "egg";

declare module "egg" {
  interface Application { }
  interface CustomController {
    nsp: any;
  }

  interface EggSocketNameSpace {
    emit: any
  }
}