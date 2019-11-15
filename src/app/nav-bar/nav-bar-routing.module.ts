import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';
import { HomeModule } from 'src/app/home/home.module';


const routes: Routes = [
  // { path: '', component: NavBarComponent, children: [
  //   { path: '/home', loadChildren: () => HomeModule}
  // ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarRoutingModule {
  static components = [ NavBarComponent ];
}
