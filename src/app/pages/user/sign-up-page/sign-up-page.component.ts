import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  public signUpForm: FormGroup;
  public user: User = new User();
  public rePwd: string;

  constructor(private userService: UserService) {


  }

  ngOnInit(): void {
    this.createForm();

  }

  public createForm(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(this.user.name),
      pwd: new FormControl(this.user.pwd),
      email: new FormControl(this.user.email),
      repwd: new FormControl(this.rePwd)
    });

  }

  public register(): void {
    this.userService.addUser(this.user).subscribe(
      res => {
        console.log(res);
      },
      err => { console.log(err); }


    )
  }


}
