import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookOfFlamesModule } from './book-of-flames/book-of-flames.module';
import { BookOfWatersModule } from './book-of-waters/book-of-waters.module';

const routes: Routes = [
  {path: 'bookOfFlame', loadChildren: () => BookOfFlamesModule},
  {path: 'bookOfWater', loadChildren: () => BookOfWatersModule},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class ElementsModule {}
