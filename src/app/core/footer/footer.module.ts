import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatMenuModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [FooterComponent],
  declarations: [FooterComponent]
})
export class FooterModule { }
