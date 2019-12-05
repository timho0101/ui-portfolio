import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NpmCommandComponent } from './npm-command.component';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {path: '', component: NpmCommandComponent}
];

@NgModule({
  imports: [
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NpmCommandComponent],
  providers: []
})
export class NpmCommandModule { }
