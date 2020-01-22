import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CssGridLayoutModule } from '../elements/css-grid-layout/css-grid-layout.module';
import { ElementsModule } from '../elements/elements.module';
import { MatMenuModule } from '@angular/material';
import { LeftSideNavBarComponent } from './left-side-nav-bar/left-side-nav-bar.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '', loadChildren: () => ElementsModule}
    ]
  },
  {path: '', loadChildren: () => CssGridLayoutModule}
];

@NgModule({
  imports: [
    RouterModule,
    MatMenuModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    MainComponent,
    LeftSideNavBarComponent
  ],
  providers: []
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
