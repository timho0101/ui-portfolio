import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularPipesComponent } from './angular-pipes.component';
import { MatCardModule } from '@angular/material';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

const routes: Routes = [
  {path: '', component: AngularPipesComponent}
];

@NgModule({
  imports: [
    PipesModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AngularPipesComponent
  ],
  providers: []
})
export class AngularPipesModule { }
