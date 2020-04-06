import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public total:any;
  constructor(private router: Router,private homeService:HomeService,private authService:AuthService) { }

  ngOnInit(): void {
    this.homeService.getTotal(this.authService.getEmail()).subscribe(
      res =>{
        this.total=res[0].total;
      },
      err =>{
        console.log(err)
      }
    )
  }

  public LOGOUT(): void {
    this.router.navigate(['/home']);

  }

  public HOME(): void {
    this.router.navigate(['/user/home']);

  }

  public PROFILE(): void {
    this.router.navigate(['/user/profile']);

  }

  public PASTORDER(): void {
    this.router.navigate(['/user/viewOrder']);

  }
  public viewCart(): void {
    this.router.navigate(['/user/cart']);

  }
  
  public PASTPAYMENT(): void {
    this.router.navigate(['/user/viewPayment']);

  }

}
