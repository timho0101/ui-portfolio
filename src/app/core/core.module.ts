import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './main/main.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MainModule
  ],
  exports: [
    RouterModule,
    HttpClientModule
  ],
  declarations: [

  ],
  providers: []
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
