import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NatourComponent } from './natour/natour.component';
import { EnsureModuleLoadedOnceGuard } from '../core/ensure-module-loaded-once.guard';

// natour

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {path: 'natour', component: NatourComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
  declarations: [ 
    NatourComponent
  ],
  providers: []
})
export class ElementsModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: ElementsModule) {
    super(parentModule);
  }
}
