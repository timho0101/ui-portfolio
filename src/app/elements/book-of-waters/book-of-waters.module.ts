import { NgModule } from '@angular/core';
import { BookOfWatersRoutingModule } from './book-of-waters-routing.module';
import { RouterModule } from '@angular/router';
import { BookOfFlamesMainModule } from '../book-of-flames/book-of-flames-main/book-of-flames-main.module';

@NgModule({
  imports: [
    RouterModule,
    BookOfWatersRoutingModule,
    BookOfFlamesMainModule
  ],
  declarations: [BookOfWatersRoutingModule.components],
  providers: []
})
export class BookOfWatersModule {}
