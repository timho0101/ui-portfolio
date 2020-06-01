import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ElementsModule } from '../elements/elements.module';
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path: '', loadChildren: () => ElementsModule},
  {path: '', loadChildren: () => SharedModule}
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    MainComponent,
    NavComponent,
    SideNavComponent
  ],
  exports: [
    RouterModule,
    MainComponent
  ],
  providers: []
})
export class CoreModule {}
