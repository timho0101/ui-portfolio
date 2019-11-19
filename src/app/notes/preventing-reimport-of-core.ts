// export class EnsureModuleLoadedOnceGuard {
//   constructor(targetModule: any) {
//     if (targetModule) {
//       throw new Error(`${targetModule.constructor.name}`) //has already been loaded. import this module in the appModule only.
//     }
//   }
// }

// // core modules
// // using the base class - coreModule can derive from EnsureModuleLoadedOnceGuard
// import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
// import { Optional, SkipSelf } from '@angular/core';

// export class CoreModule extends EnsureModuleLoadedOnceGuard {
//   constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
//     super(parentModule);
//   }
// }
