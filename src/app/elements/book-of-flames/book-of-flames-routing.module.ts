import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookOfFlamesComponent } from './book-of-flames.component';
import { DoubleLazyLoadingModule } from './double-lazy-loading/double-lazy-loading.module';
import { BookOfWatersModule } from '../book-of-waters/book-of-waters.module';
import { BookOfFlamesMainModule } from './book-of-flames-main/book-of-flames-main.module';

const routes: Routes = [
  {
    path: '', component: BookOfFlamesComponent , children: [
      {path: 'testLazyLoading', loadChildren: () => DoubleLazyLoadingModule},
      {path: 'bookOfWater', loadChildren: () => BookOfWatersModule},
      {path: 'bookOfFlameMain', loadChildren: () => BookOfFlamesMainModule}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookOfFlamesRoutingModule {
  static components = BookOfFlamesComponent;
}
