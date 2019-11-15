import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarModule } from '../nav-bar/nav-bar.module';

const routes: Routes = [
  { path: '/nav-bar', loadChildren: () => NavBarModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
