import { NgModule } from '@angular/core';
import { LeftSideNavBarComponent } from './left-side-nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  exports: [LeftSideNavBarComponent],
  declarations: [LeftSideNavBarComponent],
  providers: []
})
export class LeftSideNavBarModule { }
