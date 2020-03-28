import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-view-user-page',
  templateUrl: './view-user-page.component.html',
  styleUrls: ['./view-user-page.component.scss']
})
export class ViewUserPageComponent implements OnInit {
public pastOrders:any;
public user:User=new User();
public email:string="user@gmail.com";
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData():void{
    this.adminService.getUser(this.email).subscribe(
      res =>{
        this.user.name=res[0].name;
        this.user.address=res[0].address;
        this.user.tel=res[0].tel;
        this.user.profile_pic=res[0].profile_pic;
        this.user.email=res[0].email;
        this.pastOrders=res;
          },
      err => {
        console.log(err)
      }
    )
  }
  // back(): void {
   
  // }

}
