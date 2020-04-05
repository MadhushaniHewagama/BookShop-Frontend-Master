import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-view-users-page',
  templateUrl: './view-users-page.component.html',
  styleUrls: ['./view-users-page.component.scss']
})
export class ViewUsersPageComponent implements OnInit {
  public users: any;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {


    this.loadData();
    
  }

  public loadData(): void {
    this.adminService.getUsers().subscribe(
      res => {
        this.users = res;
              },
      err => {
        console.log(err)
      }
    )

  }

}
