import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {path: '', component: LazyLoadingComponent}
];

@NgModule({
  imports: [
    MatTableModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LazyLoadingComponent
  ],
  providers: []
})
export class LazyLoadingModule {}
