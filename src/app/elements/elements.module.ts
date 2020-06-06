import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NatourComponent } from './natour/natour.component';
import { EnsureModuleLoadedOnceGuard } from '../core/ensure-module-loaded-once.guard';
import { HomepageComponent } from './homepage/homepage.component';

// natour

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: NatourComponent
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
    NatourComponent,
    HomepageComponent
  ],
  providers: []
})
export class ElementsModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: ElementsModule) {
    super(parentModule);
  }
}
