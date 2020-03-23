import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { API_URL } from '../config/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient,private authService:AuthService) { }

  //add a book
  /**
   * addBook
   */
  public addBook(book:Book): Observable<any> {
    const url = `${API_URL}/admin/book`
    return this.httpClient.post(url, book);
  }
}
