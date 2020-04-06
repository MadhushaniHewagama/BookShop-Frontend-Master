import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user-page',
  templateUrl: './view-user-page.component.html',
  styleUrls: ['./view-user-page.component.scss']
})
export class ViewUserPageComponent implements OnInit {
public pastOrders:any;
public user:User=new User();
public email:string;
  constructor(private adminService:AdminService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(parms => {
      this.email=parms.email;
      this.loadData();
      
    });
    
  }

  public loadData():void{
    this.adminService.getUser(this.email).subscribe(
      res =>{
        console.log("res;:::"+JSON.stringify(res))
        this.user.name=res[0].name;
        this.user.address=res[0].address;
        this.user.tel=res[0].tel;
        this.user.profile_pic=res[0].profile_pic;
        this.user.email=res[0].email;
        this.pastOrders=res.filter(item => {
          return (item.status!=null );
         });
       
          },
      err => {
        console.log(err)
      }
    )
  }
  // back(): void {
   
  // }

}
