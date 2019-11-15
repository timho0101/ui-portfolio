import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
