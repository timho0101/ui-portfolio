import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';

@NgModule({
  imports: [
    RouterModule,
    MainModule
  ],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
