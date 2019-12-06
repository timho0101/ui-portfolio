import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalSessionStorageComponent } from './local-session-storage.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', component: LocalSessionStorageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LocalSessionStorageComponent]
})
export class LocalSessionStorageModule { }
