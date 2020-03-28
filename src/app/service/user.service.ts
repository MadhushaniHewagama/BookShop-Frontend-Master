import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import{API_URL} from '../config/constants'
import{HttpClient, HttpParams} from '@angular/common/http';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { Params } from '@angular/router';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,private authService:AuthService) { }
  public getTest():Observable<any>{
    const url =`${API_URL}/test`;
    return this.httpClient.get(url);
  }

  //login
  public login(email:string):Observable<any>{
    let params=new HttpParams();
    params=params.set('email',email);
    const url =`${API_URL}/user/login`;
    return this.httpClient.get(url,{params:params});
  }

  //add user
  public addUser(user:User): Observable<any>{
    const url = `${API_URL}/user`;
    return this.httpClient.post(url, user);
  }

  //get users 
  public getUser():Observable<any>{
    let params=new HttpParams();
    var email=this.authService.getEmail();
    params=params.set('email',email);
    const url =`${API_URL}/user`;
    return this.httpClient.get(url,{params:params});
  }
//update user
  public updateUser(user:User):Observable<any>{
   const url = `${API_URL}/user`;
    const params = {
      email:  this.authService.getEmail(),
      name: user.name,
      address: user.address,
      tel:user.tel
    };
    return this.httpClient.put(url,params);
      }
  public updateProfilePic(profile_Pic:any){
       const url = `${API_URL}/user/${this.authService.getEmail()}/profile`;
    return this.httpClient.put(url, { profile_pic: profile_Pic });


  }

  //get book for user view
  public getBook(bookID:any):Observable<any>{
    let params=new HttpParams();
    params=params.set('bookID',bookID);
    const url =`${API_URL}/user/book`;
    console.log("BookID::::"+bookID)
    return this.httpClient.get(url,{params:params});
  }

  public getOrders(email:string):Observable<any>{
    // let params = new HttpParams();
    // params=params.set('email',email);
    const url =`${API_URL}/user/order/`+`${email}`;
    console.log("email::::"+email);
    return this.httpClient.get(url);
  }

  public getPayments(email:string):Observable<any>{
    // let params = new HttpParams();
    // params=params.set('email',email);
    const url =`${API_URL}/user/payment/`+`${email}`;
    console.log("email::::"+email);
    return this.httpClient.get(url);
  }

}


