import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from './../model/todo';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ApiService {
  constructor(private readonly http: HttpClient) {}
  private readonly apiURL = 'http://localhost:4000/api';

  // dynamoDB apiURL
  private readonly apiDynamoURL = 'http://localhost:3000/api';

  getData(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(`${this.apiURL}/getData`);
  }

  getDataById(id: number): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(`${this.apiURL}/getData/${id}`);
  }

  addData(data: object): Observable<ToDo[]> {
    return this.http.post<ToDo[]>(`${this.apiURL}/addData`, data, httpOptions);
  }

  updateData(data: object, id: number): Observable<ToDo[]> {
    return this.http.put<ToDo[]>(`${this.apiURL}/updateData/${id}`, data, httpOptions);
  }

  deleteData(id: number): Observable<ToDo[]> {
    return this.http.delete<ToDo[]>(`${this.apiURL}/deleteData/${id}`);
  }

  // /*-------------Login and Register--------------------------------------------*/
  // userLogin(): Observable<ToDo[]> {
  //   return this.http.get<ToDo[]>(`${this.apiURL}/login`);
  // }

  // userRegister(data: object): Observable<ToDo[]> {
  //   return this.http.post<ToDo[]>(`${this.apiURL}/register`, data, httpOptions);
  // }

  // userDelete(id: number): Observable<ToDo[]> {
  //   return this.http.delete<ToDo[]>(`${this.apiURL}/deleteUser/${id}`);
  // }

  // /*-----------------DynamoDB API-------------------------------------*/
  // getDynamoData(): Observable<ToDo[]> {
  //   return this.http.get<ToDo[]>(`${this.apiDynamoURL}/getData`);
  // }

  // getDynamoDataById(id: number): Observable<ToDo[]> {
  //   return this.http.get<ToDo[]>(`${this.apiDynamoURL}/getData/${id}`);
  // }

  // addDynamoData(data: object): Observable<ToDo[]> {
  //   return this.http.post<ToDo[]>(`${this.apiDynamoURL}/addData`, data, httpOptions);
  // }

  // updateDynamoData(data: object, id: number): Observable<ToDo[]> {
  //   return this.http.put<ToDo[]>(`${this.apiDynamoURL}/updateData/${id}`, data, httpOptions);
  // }

  // deleteDynamoData(id: number): Observable<ToDo[]> {
  //   return this.http.delete<ToDo[]>(`${this.apiDynamoURL}/deleteData/${id}`);
  // }
}
