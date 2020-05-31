import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ElementsModule } from '../elements/elements.module';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  {
    path: '', component: BodyComponent, children: [
      {path: '', loadChildren: () => ElementsModule}
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
    BodyComponent,
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
