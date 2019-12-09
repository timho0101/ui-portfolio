import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../model/todo';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ToDoApiService {
  constructor(private readonly http: HttpClient) {}
  private readonly apiURL = 'http://localhost:4000/api';

  // dynamoDB apiURL
  // private readonly apiDynamoURL = 'http://localhost:3000/api';

  getTasks(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(`${this.apiURL}/getTasks`);
  }


  addTask(data: object): Observable<ToDo[]> {
    console.log('this is task: ' + data);
    return this.http.post<ToDo[]>(`${this.apiURL}/addTask`, data, httpOptions);
  }

  deleteTask(id: number): Observable<ToDo[]> {
    return this.http.delete<ToDo[]>(`${this.apiURL}/deleteTask/${id}`);
  }


  // /*-------------Login and Register--------------------------------------------*/
  // userLogin(): Observable<[]> {
  //   return this.http.get<[]>(`${this.apiURL}/login`);
  // }

  // userRegister(data: object): Observable<[]> {
  //   return this.http.post<[]>(`${this.apiURL}/register`, data, httpOptions);
  // }

  // userDelete(id: number): Observable<[]> {
  //   return this.http.delete<[]>(`${this.apiURL}/deleteUser/${id}`);
  // }
}
