import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes.component';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {path: '', component: NotesComponent}
];

@NgModule({
  imports: [
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotesComponent]
})
export class NotesModule { }
