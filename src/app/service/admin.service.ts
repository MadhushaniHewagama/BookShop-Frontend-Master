import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { API_URL } from '../config/constants';
import { Observable } from 'rxjs';
import{ HttpParams } from '@angular/common/http';


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

  //request to the backend
  public getBook(bookID:any):Observable<any>{
    let params = new HttpParams();
    params=params.set('bookID',bookID);
    const url =`${API_URL}/admin/book`;
    console.log("BookID::::"+bookID);
    return this.httpClient.get(url,{params:params});
  }
  public updateBook(book:Book):Observable<any>{
    const url = `${API_URL}/admin/book`;
    return this.httpClient.put(url,book);
  }
  public deleteBook(bookID:any):Observable<any>{
    let params = new HttpParams();
    params=params.set('bookID',bookID);
    const url = `${API_URL}/admin/book`;
    return this.httpClient.delete(url,{params:params});
  }
}
