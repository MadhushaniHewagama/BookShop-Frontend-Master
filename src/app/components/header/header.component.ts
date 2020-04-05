import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
