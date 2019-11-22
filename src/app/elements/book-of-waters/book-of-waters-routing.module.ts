import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookOfWatersComponent } from './book-of-waters.component';
import { DoubleLazyLoadingModule } from '../book-of-flames/double-lazy-loading/double-lazy-loading.module';
import { BookOfFlamesMainModule } from '../book-of-flames/book-of-flames-main/book-of-flames-main.module';
import { BookOfFlamesModule } from '../book-of-flames/book-of-flames.module';
import { NavModule } from 'src/app/core/nav/nav.module';
import { BodyModule } from 'src/app/core/body/body.module';

const routes: Routes = [
  {
    path: '',
    component: BookOfWatersComponent, children: [
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
