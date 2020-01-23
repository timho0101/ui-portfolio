import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CssGridLayoutModule } from '../elements/css-grid-layout/css-grid-layout.module';
import { ElementsModule } from '../elements/elements.module';
import { MatMenuModule, MatButtonModule } from '@angular/material';

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
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    MainComponent
  ],
  providers: []
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
