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

}
