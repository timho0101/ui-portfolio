import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToDo } from './../../model/todo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  public todo: ToDo[] = [];
  public todoForm: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      tasks: ['']
    });
  }

  public onSubmit() {
    this.todo.push(this.todoForm.get('tasks').value);
    // this.todo.push(this.todoForm.get('tasks').value);
  }

}
