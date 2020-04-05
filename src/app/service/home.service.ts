import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/constants';
import { AuthService } from './auth.service';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public books: any;
  constructor(private httpClient: HttpClient,private authService:AuthService) { }

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
  public getCart(email:string):Observable<any>{
    let params=new HttpParams();
    var email=this.authService.getEmail();
    params=params.set('email',email);
    const url =`${API_URL}/cart`;
    return this.httpClient.get(url,{params:params});
  }
  
  public addCart(cartItem:CartItem): Observable<any>{
    const url = `${API_URL}/cart`;
    return this.httpClient.post(url, cartItem);
  }

  public getTotal(email:string):Observable<any>{
    let params=new HttpParams();
    var email=this.authService.getEmail();
    params=params.set('email',email);
    const url =`${API_URL}/cart/total`;
    return this.httpClient.get(url,{params:params});
  }

  
}
