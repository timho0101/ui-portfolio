import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToDo } from './../../model/todo';
import { ToDoApiService } from 'src/app/services/todo-api.service';
import { Subscription } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material';



@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy {
  public todoForm: FormGroup;
  public tasks: ToDo[];
  public subcription: Subscription;

  // table
  public displayedColumns: string[] = ['id', 'tasks', 'deleteTaskCol'];

  constructor(
    private readonly fb: FormBuilder,
    private readonly todoService: ToDoApiService
  ) { }

  public ngOnInit() {
    // form
    this.todoForm = this.fb.group({
      id: [''],
      tasks: ['']
    });

    this.getTask();

  }

  public onSubmit() {
    this.addTask();
  }

  public getTask(): void {
    this.subcription = this.todoService.getTasks().subscribe(task => {
      this.tasks = task;
    });
  }

  public addTask(): void {
    this.subcription = this.todoService.addTask(this.todoForm.value).subscribe(() => {
      this.getTask();
    });
  }

  public deleteTask(id: number): void {
    this.subcription = this.todoService.deleteTask(id).subscribe(() => {
      this.getTask();
    });
  }

  public ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
