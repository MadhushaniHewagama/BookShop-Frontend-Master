import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-view-orders-page',
  templateUrl: './view-orders-page.component.html',
  styleUrls: ['./view-orders-page.component.scss']
})

export class ViewOrdersPageComponent implements OnInit {
  public Orders: any;


  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadData();
  }


  public loadData(): void {
    this.userService.getOrders(this.authService.getEmail()).subscribe(
      res => {
        this.Orders = res;
              },
      err => {
        console.log(err)
      }
    )

  }

}
