import { NgModule } from '@angular/core';
import { BookOfFlamesMainComponent } from './book-of-flames-main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: BookOfFlamesMainComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    BookOfFlamesMainComponent,
    RouterModule
  ],
  declarations: [BookOfFlamesMainComponent]
})
export class BookOfFlamesMainModule { }
