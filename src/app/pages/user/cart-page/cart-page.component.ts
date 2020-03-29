import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  public cartList:any;
  public orderList:any;
  constructor(private userService:UserService,private authService:AuthService) { }

  ngOnInit(): void {
    this.loadData();
  }
  public loadData():void{
    this.userService.getCartList(this.authService.getEmail()).subscribe
    (
      res =>{
        this.cartList=res;
        console.log(JSON.stringify(res))
        console.log("total:::")
      },
      err => {
        console.log(err)
      }
    )
  }
  public addItem(item:any):void{
    console.log("id::"+JSON.stringify(item))
  }
  public removeItem(item:any):void{

    console.log("id::::::::"+JSON.stringify(item))
  }
}
