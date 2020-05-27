import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';
import { PipesModule } from '../shared/pipes/pipes.module';
import { CommonModule } from '@angular/common';
import { NatourComponent } from './natour/natour.component';

// natour


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {path: 'about', component: AboutComponent},
  {path: 'natour', component: NatourComponent}
];

@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    PipesModule,
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ],
  declarations: [
    AboutComponent,
    NatourComponent
  ],
  providers: []
})
export class ElementsModule {}
