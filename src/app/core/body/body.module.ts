import { NgModule } from '@angular/core';
import { BodyComponent } from './body.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  exports: [BodyComponent],
  declarations: [BodyComponent],
  providers: []
})
export class BodyModule { }
