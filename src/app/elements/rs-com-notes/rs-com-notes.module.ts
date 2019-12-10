import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { RsComNotesComponent } from './rs-com-notes.component';

const routes: Routes = [
  {path: '', component: RsComNotesComponent}
];

@NgModule({
  imports: [
    MatCardModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RsComNotesComponent],
  providers: []
})
export class RsComModule { }
