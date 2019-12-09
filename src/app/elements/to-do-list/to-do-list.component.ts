import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToDo } from './../../model/todo';
import { ToDoApiService } from 'src/app/services/todo-api.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  public todoForm: FormGroup;
  public tasks: ToDo[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly todoService: ToDoApiService
  ) { }

  ngOnInit() {
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
    this.todoService.getTasks().subscribe(task => {
      this.tasks = task;
    });
  }

  public addTask(): void {
    this.todoService.addTask(this.todoForm.value).subscribe(() => {
      this.getTask();
    });
  }

  public deleteTask(id: number): void {
    this.todoService.deleteTask(id).subscribe(() => {
      this.getTask();
    });
  }

}
