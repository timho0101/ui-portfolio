import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [MatToolbarModule],
  exports: [FooterComponent],
  declarations: [FooterComponent]
})
export class FooterModule { }
