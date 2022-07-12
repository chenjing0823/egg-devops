/*
 * @Author: jing.chen
 * @Date: 2021-11-02 15:48:24
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-03 13:49:42
 * @Description: 
 */

import * as jenkins from "jenkins";

/**
 * Jenkins连接
 * @param type
 */
const getJenkins = function (
  type: "h5" | "node" | "nodeProduct" | "android" | "java"
) {
  const jenkinsConfig = {
    h5: {
      baseUrl: "http://saiyanjing:11fd4a8b40c2f75a8bf3a9a59e1a18b9b6@jenkins.saiyanjing.com/",
      // JENKINS_URL/job/fe-base/build?token=TOKEN_NAME 或者 /buildWithParameters?token=TOKEN_NAME
      // http://test:fe20f2d33760fbeec0a362dbbf59cd18@your-jenkins.com/job/JobName/build?token=iFdsjS24SDFqp53JGsd9k0Cm
      // 具体参考 https://blog.csdn.net/weixin_33877885/article/details/93644759
      crumbIssuer: true,
    },
  };
  return jenkins(jenkinsConfig[type]);
};

/**
 * @author: saiyanjing
 * @description: 触发jenkins流水线
 */
const buildJenkins = async ({ type, job, params }) => {
  const jenkinsCallback: any = await new Promise((resolve) => {
    getJenkins(type).job.build(
      { name: job, parameters: params },
      (err: any, data: any) => {
        if (err) {
          console.log("err: ", err);
          throw err;
        }
        resolve({ queueId: data });
      }
    );
  });
  return { data: jenkinsCallback };
};

/**
 * @author: saiyanjing
 * @description: 获取当前节点信息
 */
const getQueuedInfo = async ({ type, queueId }) => {
  const jenkinsCallback: any = await new Promise((resolve) => {
    getJenkins(type).queue.item(queueId, (err: any, data: any) => {
      if (err) {
        console.log("err---->", err);
        throw err;
      }
      resolve(data);
    });
  });
  return { data: jenkinsCallback };
};

/**
 * @author: saiyanjing
 * @description: 获取当前构建信息
 */
const getJenkinsInfo = async ({ type, job, buildNumber }) => {
  console.log(type, job, buildNumber);
  const jenkinsCallback: any = await new Promise((resolve) => {
    getJenkins(type).build.get(job, buildNumber, (err: any, data: any) => {
      console.log("data: ", data);
      console.log("err: ", err);
      if (err) {
        console.log("err---->", err);
        throw err;
      }
      resolve(data);
    });
  });
  const { statusCode } = jenkinsCallback;
  if (jenkinsCallback && statusCode !== 404) {
    return { data: jenkinsCallback };
  } else {
    return { data: jenkinsCallback };
  }
};

/**
 * @author: saiyanjing
 * @description: 获取jenkins打印
 */
const getJenkinsConsole = async ({ type, job, buildId }) => {
  const jenkinsCallback: any = await new Promise((resolve) => {
    getJenkins(type).build.log(job, buildId, (err: any, data: any) => {
      if (err) {
        return console.log("err---->", err);
      }
      resolve(data);
    });
  });
  return { data: jenkinsCallback };
};

export default {
  buildJenkins,
  getQueuedInfo,
  getJenkinsInfo,
  getJenkinsConsole,
};
