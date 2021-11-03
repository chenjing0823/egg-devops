/*
 * @Author: jing.chen
 * @Date: 2021-10-20 15:25:47
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-02 20:21:47
 * @Description:
 */

/**
 * @description: 这里的配置内容需要自己替换成本地的
 */

// 反向代理git url
const GIT_URL = 'http://gitlab.saiyanjing.com/';

// app 授权客户端id 与 秘钥
const CLIENT_ID = 'ad1cd352d473da4f645942b334101e2757c25e7829a5cfb16c31dcd4cae6b299';
const CLIENT_SECRET = '16dd1566e89444179c33d955efabdd25eed7cab62ea751d77c1ab36859bda27a';

// 钉钉机器人


const DING_SECRET =
  'SECc477ca6197e14dd888662eb22a33e1b38eb786130d154ed692d855b6f48e132e';

const DING_SEND_URL =
  'https://oapi.dingtalk.com/robot/send?access_token=5a576c01fdee6bf137a3e3826a3b768ecfc913000545fd67926e7228c57dabe8';

// 邮箱配置
const MAIL_CONFIG = {
  user_email: '',
  service: '',
  port: '',
  auth_code: '',
};


export { GIT_URL, CLIENT_ID, CLIENT_SECRET, DING_SEND_URL, DING_SECRET, MAIL_CONFIG };
