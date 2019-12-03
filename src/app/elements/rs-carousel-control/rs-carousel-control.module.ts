import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RsCarouselControlComponent } from './rs-carousel-control.component';

const routes: Routes = [
  {path: '', component: RsCarouselControlComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [RsCarouselControlComponent],
  providers: []
})
export class RsCarouselControlModule { }
