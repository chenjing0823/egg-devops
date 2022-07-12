// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBranch from '../../../app/model/branch';
import ExportProcess from '../../../app/model/process';
import ExportProject from '../../../app/model/project';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Branch: ReturnType<typeof ExportBranch>;
    Process: ReturnType<typeof ExportProcess>;
    Project: ReturnType<typeof ExportProject>;
    User: ReturnType<typeof ExportUser>;
  }
}
