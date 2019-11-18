import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookOfWatersComponent } from './book-of-waters.component';

const routes: Routes = [
  {
    path: '',
    component: BookOfWatersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookOfWatersRoutingModule {
  static components = BookOfWatersComponent;
}
