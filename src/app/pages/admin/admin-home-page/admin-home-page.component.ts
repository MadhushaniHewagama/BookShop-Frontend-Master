import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.scss']
})
export class AdminHomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  public LOGOUT(): void {
    this.router.navigate(['home']);
  }


  public ADDBOOK(): void {
    this.router.navigate(['admin/addBook']);
  }

  public ORDERS(): void {
    this.router.navigate(['admin/ViewOrders']);
  }

  public USERS(): void {
    this.router.navigate(['admin/viewUsers']);
  }


  public HOME(): void {
    this.router.navigate(['admin/home']);
  }

}
