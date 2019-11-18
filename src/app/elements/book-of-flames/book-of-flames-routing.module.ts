import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookOfFlamesComponent } from './book-of-flames.component';

const routes: Routes = [
  {
    path: '',
    component: BookOfFlamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookOfFlamesRoutingModule {
  static components = BookOfFlamesComponent;
}
