import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoubleLazyLoadingComponent } from './double-lazy-loading.component';

const routes: Routes = [
  {
    path: '',
    component: DoubleLazyLoadingComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoubleLazyLoadingRoutingModule {
  static components = DoubleLazyLoadingComponent;
}
