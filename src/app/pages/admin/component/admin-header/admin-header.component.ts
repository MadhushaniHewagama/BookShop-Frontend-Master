import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

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
    this.router.navigate(['admin/viewOrders']);
  }

  public USERS(): void {
    this.router.navigate(['admin/viewUsers']);
  }


  public HOME(): void {
    this.router.navigate(['admin/home']);
  }

}
