import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarModule } from '../app/core/nav-bar/nav-bar.module';
import { MainComponent } from '../app/core/main/main.component';

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
