import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  exports: [NavComponent],
  declarations: [NavComponent]
})
export class NavModule { }
