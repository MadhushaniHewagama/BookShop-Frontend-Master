import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-view-orders-page',
  templateUrl: './view-orders-page.component.html',
  styleUrls: ['./view-orders-page.component.scss']
})

export class ViewOrdersPageComponent implements OnInit {
  public Orders: any;


  constructor(private adminService: AdminService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadData();
  }


  public loadData(): void {
    this.adminService.getOrders().subscribe(
      res => {
        this.Orders = res.filter(item => {
          return (item.status=='1' );
         });
              },
      err => {
        console.log(err)
      }
    )

  }

}
