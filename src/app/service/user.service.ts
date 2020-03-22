import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../config/constants'
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  public getTest(): Observable<any> {
    const url = `${API_URL}/test`;
    return this.httpClient.get(url);
  }

  public addUser(user: User): Observable<any> {
    const url = `${API_URL}/user`;
    return this.httpClient.post(url, user);
  }



}


