import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookOfFlamesRoutingModule } from './book-of-flames-routing.module';

@NgModule({
  imports: [RouterModule, BookOfFlamesRoutingModule],
  exports: [],
  declarations: [BookOfFlamesRoutingModule.components],
  providers: []
})
export class BookOfFlamesModule { }
