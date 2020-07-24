import { Injectable } from '@angular/core';
import {User} from "../interface/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

  const apiUrl = 'http://localhost:8080/api/admin/crud-user/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:  HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(apiUrl + 'users');
  }
}
