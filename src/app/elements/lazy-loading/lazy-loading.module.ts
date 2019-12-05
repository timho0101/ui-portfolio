import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading.component';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {path: '', component: LazyLoadingComponent}
];

@NgModule({
  imports: [
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LazyLoadingComponent
  ],
  providers: []
})
export class LazyLoadingModule {}
