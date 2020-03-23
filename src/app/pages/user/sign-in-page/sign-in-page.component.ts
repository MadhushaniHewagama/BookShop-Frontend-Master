import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  public email:string='';
  public pwd:string='';
  public signInForm: FormGroup;
  public errorEmail:boolean= false;
  public errorPwd:boolean=false;
  constructor(private userService: UserService, private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.createForm();

  }
  public createForm(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(this.email),
      pwd: new FormControl(this.pwd),
    });

  }
  public signIn():void{
    this.userService.login(this.email).subscribe(
      res => {
      
        if(res[0]){
          let c_pwd=res[0].pwd;
        if(c_pwd==this.pwd){
          this.authService.setEmail(this.email);
          console.log("correct");
          if(res[0].privilege=='0'){
            this.router.navigate(['userHome']);
          }else{
            this.router.navigate(['adminHome']);
          }
         
        }else{
          console.log("false")
          this.errorPwd=true;
        }
        }else{
          this.errorEmail=true;
        }
        
      },
      err => { 
        console.log(err); 
       
      }


    )
  }

  }

