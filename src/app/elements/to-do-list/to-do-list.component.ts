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
  public todo: ToDo[] = [];
  public todoForm: FormGroup;
  public tasks: ToDo[];

  constructor(
    private readonly fb: FormBuilder,
    private readonly todoService: ToDoApiService
  ) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      tasks: ['']
    });
    this.getTask();
  }

  public onSubmit() {
    this.todo.push(this.todoForm.get('tasks').value);
  }

  public getTask(): void {
    this.todoService.getTask().subscribe(task => {
      this.tasks = task;
    });
  }
}
