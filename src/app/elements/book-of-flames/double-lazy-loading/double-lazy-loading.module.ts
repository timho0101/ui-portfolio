import { NgModule } from '@angular/core';
import { DoubleLazyLoadingRoutingModule } from './double-lazy-loading-routing.module';
import { BookOfFlamesModule } from '../book-of-flames.module';

@NgModule({
  imports: [
    DoubleLazyLoadingRoutingModule
  ],
  declarations: [ DoubleLazyLoadingRoutingModule.components ],
  providers: []
})
export class DoubleLazyLoadingModule {}
