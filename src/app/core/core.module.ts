import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { CssGridLayoutModule } from '../elements/css-grid-layout/css-grid-layout.module';
import { ElementsModule } from '../elements/elements.module';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import { NavComponent } from './container/nav.component';
import { SideNavComponent } from './container/side-nav.component';
import { NatourComponent } from '../elements/natour/natour.component';

const routes: Routes = [
  {
    path: '', component: ContainerComponent, children: [
      {path: '', loadChildren: () => ElementsModule},
      {path: '', loadChildren: () => CssGridLayoutModule}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ContainerComponent,
    NavComponent,
    SideNavComponent
  ],
  exports: [
    RouterModule,
    NavComponent,
    SideNavComponent
  ],
  providers: []
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
