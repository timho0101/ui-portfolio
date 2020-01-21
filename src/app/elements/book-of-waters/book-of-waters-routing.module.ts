import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookOfWatersComponent } from './book-of-waters.component';
import { BookOfFlamesMainModule } from '../book-of-flames/book-of-flames-main/book-of-flames-main.module';

const routes: Routes = [
  {
    path: '', component: BookOfWatersComponent, children: [
      {path: 'testLazyLoading', loadChildren: () => BookOfFlamesMainModule}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookOfWatersRoutingModule {
  static components = BookOfWatersComponent;
}
