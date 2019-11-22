import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { BookOfFlamesModule } from './elements/book-of-flames/book-of-flames.module';
import { BookOfWatersModule } from './elements/book-of-waters/book-of-waters.module';
import { DoubleLazyLoadingModule } from './elements/book-of-flames/double-lazy-loading/double-lazy-loading.module';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: 'bookOfFlame', loadChildren: () => BookOfFlamesModule},
      {path: 'bookOfWater', loadChildren: () => BookOfWatersModule}
      // {path: 'testLazyLoading', loadChildren: () => DoubleLazyLoadingModule}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
