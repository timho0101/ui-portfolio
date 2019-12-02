import { NgModule } from '@angular/core';
import { LeftSideNavBarComponent } from './left-side-nav-bar.component';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BooksIndexComponent } from './books-index/books-index.component';

@NgModule({
  imports: [
    RouterModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [LeftSideNavBarComponent],
  declarations: [
    LeftSideNavBarComponent,
    BooksIndexComponent
  ],
  providers: []
})
export class LeftSideNavBarModule { }
