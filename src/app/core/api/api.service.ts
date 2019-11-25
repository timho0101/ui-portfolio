// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { DynamoDbUserData } from '../../models/dynamoDbUserData';
// import { User } from '../../models/user';
// import { UserData } from '../../models/userData';

// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };

// @Injectable()
// export class ApiService {
//   constructor(private readonly http: HttpClient) {}
//   private readonly apiURL = 'http://localhost:4000/api';

//   // dynamoDB apiURL
//   private readonly apiDynamoURL = 'http://localhost:3000/api';

//   getData(): Observable<User[]> {
//     return this.http.get<User[]>(`${this.apiURL}/getData`);
//   }

//   getDataById(id: number): Observable<User[]> {
//     return this.http.get<User[]>(`${this.apiURL}/getData/${id}`);
//   }

//   addData(data: object): Observable<User[]> {
//     return this.http.post<User[]>(`${this.apiURL}/addData`, data, httpOptions);
//   }

//   updateData(data: object, id: number): Observable<User[]> {
//     return this.http.put<User[]>(`${this.apiURL}/updateData/${id}`, data, httpOptions);
//   }

//   deleteData(id: number): Observable<User[]> {
//     return this.http.delete<User[]>(`${this.apiURL}/deleteData/${id}`);
//   }

//   /*-------------Login and Register--------------------------------------------*/
//   userLogin(): Observable<UserData[]> {
//     return this.http.get<UserData[]>(`${this.apiURL}/login`);
//   }

//   userRegister(data: object): Observable<UserData[]> {
//     return this.http.post<UserData[]>(`${this.apiURL}/register`, data, httpOptions);
//   }

//   userDelete(id: number): Observable<UserData[]> {
//     return this.http.delete<UserData[]>(`${this.apiURL}/deleteUser/${id}`);
//   }

//   /*-----------------DynamoDB API-------------------------------------*/
//   getDynamoData(): Observable<DynamoDbUserData[]> {
//     return this.http.get<DynamoDbUserData[]>(`${this.apiDynamoURL}/getData`);
//   }

//   getDynamoDataById(id: number): Observable<DynamoDbUserData[]> {
//     return this.http.get<DynamoDbUserData[]>(`${this.apiDynamoURL}/getData/${id}`);
//   }

//   addDynamoData(data: object): Observable<DynamoDbUserData[]> {
//     return this.http.post<DynamoDbUserData[]>(`${this.apiDynamoURL}/addData`, data, httpOptions);
//   }

//   updateDynamoData(data: object, id: number): Observable<DynamoDbUserData[]> {
//     return this.http.put<DynamoDbUserData[]>(`${this.apiDynamoURL}/updateData/${id}`, data, httpOptions);
//   }

//   deleteDynamoData(id: number): Observable<DynamoDbUserData[]> {
//     return this.http.delete<DynamoDbUserData[]>(`${this.apiDynamoURL}/deleteData/${id}`);
//   }
// }
