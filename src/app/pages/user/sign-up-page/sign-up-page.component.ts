import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  public signUpForm: FormGroup;
  public user: User = new User();
  public rePwd: string;
public error:boolean=false;
  constructor(private userService: UserService ,private router: Router) {


  }

  ngOnInit(): void {
    this.createForm();

  }

  public createForm(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(this.user.name,[Validators.required]),
      pwd: new FormControl(this.user.pwd,[Validators.required]),
      email: new FormControl(this.user.email,[Validators.required,Validators.email]),
      repwd: new FormControl(this.rePwd,[Validators.required])
    });

  }

  public register(): void {
    if(this.signUpForm.valid && (this.user.pwd==this.rePwd)){
    this.error=false;

      this.userService.addUser(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['user/home']);
      },
      err => { console.log(err); }


    )


    }else{
      this.error=true;
    }
  }


}
