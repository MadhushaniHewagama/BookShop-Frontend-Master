import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public books: any;
  constructor(private httpClient: HttpClient) { }

  //get books
  
  public getBooks():Observable<any>{
    // let params = new HttpParams();
    // params=params.set('email',email);
    const url =`${API_URL}/home`;
    return this.httpClient.get(url);
  }

  public filterBooks(searchTerm,books): void{
    this.books=books;
    return books.filter(book => {
      return (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
     });
  }



  
}
