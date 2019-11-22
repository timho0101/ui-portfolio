import { NgModule } from '@angular/core';
import { BookOfFlamesRoutingModule } from './book-of-flames-routing.module';
import { DoubleLazyLoadingModule } from './double-lazy-loading/double-lazy-loading.module';
import { RouterModule } from '@angular/router';
import { BookOfFlamesMainModule } from './book-of-flames-main/book-of-flames-main.module';

@NgModule({
  imports: [
    RouterModule,
    BookOfFlamesRoutingModule,
    DoubleLazyLoadingModule,
    BookOfFlamesMainModule
  ],
  exports: [BookOfFlamesRoutingModule.components],
  declarations: [BookOfFlamesRoutingModule.components],
  providers: []
})
export class BookOfFlamesModule { }
