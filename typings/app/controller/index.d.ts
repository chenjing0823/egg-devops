// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase from '../../../app/controller/base';
import ExportHome from '../../../app/controller/home';
import ExportProject from '../../../app/controller/project';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    base: ExportBase;
    home: ExportHome;
    project: ExportProject;
    user: ExportUser;
  }
}
