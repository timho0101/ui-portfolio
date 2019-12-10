import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './to-do-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ToDoApiService } from 'src/app/services/todo-api.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {path: '', component: ToDoListComponent}
];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToDoListComponent],
  providers: [
    ToDoApiService
  ]
})
export class ToDoListModule {}
