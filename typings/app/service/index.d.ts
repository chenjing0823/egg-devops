// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportTest from '../../../app/service/Test';
import ExportBranch from '../../../app/service/branch';
import ExportBuild from '../../../app/service/build';
import ExportProcess from '../../../app/service/process';
import ExportProject from '../../../app/service/project';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    test: AutoInstanceType<typeof ExportTest>;
    branch: AutoInstanceType<typeof ExportBranch>;
    build: AutoInstanceType<typeof ExportBuild>;
    process: AutoInstanceType<typeof ExportProcess>;
    project: AutoInstanceType<typeof ExportProject>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
