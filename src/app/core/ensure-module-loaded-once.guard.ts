export class EnsureModuleLoadedOnceGuard {
  constructor(targetModule: any) {
    if (targetModule) {
      // has already been loaded. import this module in the appModule only.
      throw new Error(`${targetModule.constructor.name}`);
    }
  }
}
