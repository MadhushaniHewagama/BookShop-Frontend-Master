import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
public cart:any;
  constructor(private homeService:HomeService,private authService: AuthService) { }

  ngOnInit(): void {
    this.loadData();
  }
  public loadData(): void {
    this.homeService.getCart(this.authService.getEmail()).subscribe(
      res => {
        this.cart = res;
              },
      err => {
        console.log(err)
      }
    )

  }
public buyItem(cart_product_id:any,quantity:any):void{
  this.homeService.buyItem(cart_product_id,quantity).subscribe(
    res =>{
      console.log(res)
      this.loadData();
    },
    err => {
      console.log(err)
    }
  )
}
public removeItem(cart_product_id:any):void{
  this.homeService.removeItem(cart_product_id).subscribe(
    res =>{
      console.log(res)
      this.loadData();
    },
    err => {
      console.log(err)
    }
  )
}
}
