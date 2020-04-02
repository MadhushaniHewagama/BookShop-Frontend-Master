import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.scss']
})
export class UserHomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  public LOGOUT(): void {
    this.router.navigate(['home']);

  }

  public HOME(): void {
    this.router.navigate(['user/home']);

  }

  public PROFILE(): void {
    this.router.navigate(['user/profile']);

  }

  public PASTORDER(): void {
    this.router.navigate(['user/viewOrder']);

  }



}
