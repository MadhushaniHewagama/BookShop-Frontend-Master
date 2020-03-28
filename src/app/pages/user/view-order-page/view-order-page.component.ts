import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-view-order-page',
  templateUrl: './view-order-page.component.html',
  styleUrls: ['./view-order-page.component.scss']
})
export class ViewOrderPageComponent implements OnInit {
  public pastOrders: any;
  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadData();
  }
  public loadData(): void {
    this.userService.getOrders(this.authService.getEmail()).subscribe(
      res => {
        this.pastOrders = res;
              },
      err => {
        console.log(err)
      }
    )

  }
}
