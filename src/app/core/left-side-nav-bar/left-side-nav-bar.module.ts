import { NgModule } from '@angular/core';
import { LeftSideNavBarComponent } from './left-side-nav-bar.component';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BooksIndexComponent } from './books-index/books-index.component';
import { RsComComponent } from './rs-com/rs-com.component';
import { AngularComponent } from './angular/angular.component';

@NgModule({
  imports: [
    RouterModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [LeftSideNavBarComponent],
  declarations: [
    LeftSideNavBarComponent,
    BooksIndexComponent,
    RsComComponent,
    AngularComponent
  ],
  providers: []
})
export class LeftSideNavBarModule { }
