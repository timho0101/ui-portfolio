import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './main/container.component';
import { CssGridLayoutModule } from '../elements/css-grid-layout/css-grid-layout.module';
import { ElementsModule } from '../elements/elements.module';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import { NavComponent } from './main/nav.component';

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
  exports: [
    RouterModule,
    NavComponent
  ],
  declarations: [
    ContainerComponent,
    NavComponent
  ],
  providers: []
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
