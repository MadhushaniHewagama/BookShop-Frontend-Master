import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private email:string='username@gmail.com';
  constructor() { }

  public getEmail(){
    return this.email;
  }

  public setEmail(email:string){
    return this.email=email;
  }

}
