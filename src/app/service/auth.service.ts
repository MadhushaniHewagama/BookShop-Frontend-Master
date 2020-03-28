import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private email:string='user@gmail.com';
  public user:User;
  constructor() { }

  public getEmail(){
    return this.email;
  }

  public setEmail(email:string){
    return this.email=email;
  }

}
