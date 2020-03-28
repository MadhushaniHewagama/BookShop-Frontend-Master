import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-view-payment-page',
  templateUrl: './view-payment-page.component.html',
  styleUrls: ['./view-payment-page.component.scss']
})
export class ViewPaymentPageComponent implements OnInit {
  public pastPayments:any;
  constructor(private userService:UserService,private authService:AuthService) { }

  ngOnInit(): void {
    this.loadData();
  }
  public loadData():void{
    this.userService.getPayments(this.authService.getEmail()).subscribe
    (
      res =>{
        this.pastPayments=res;
        console.log(JSON.stringify(res))
      },
      err => {
        console.log(err)
      }
    )
  }
}
