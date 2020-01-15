import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { UnitTestComponent } from './unit-test.component';

const routes: Routes = [
  {path: '', component: UnitTestComponent}
];

@NgModule({
  imports: [
    MatCardModule,
    RouterModule.forChild(routes),
  ],
  declarations: [UnitTestComponent],
  providers: []
})
export class UnitTestModule { }
