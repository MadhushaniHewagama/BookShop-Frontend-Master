import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profileForm: FormGroup;  
  public user:User=new User();
  // public profile_pic=null;
  // public name:string='';
  // public email:string='';
  // public address:string='';
  // public tel:number=null;
  constructor(private userService:UserService,private authService:AuthService) { }

  ngOnInit(): void {
    this.user.email=this.authService.getEmail();
    //console.log("emil:::::::"+this.email);
    this.loadForm();
  }

   //crate profile data loading form
   public loadForm():void{
    this.userService.getUser().subscribe(
      res => {
        //this.user=res[0];
        this.user.name=res[0].name;
        this.user.address=res[0].address;
        this.user.tel=res[0].tel;
        this.user.profile_pic=res[0].profile_pic;
      },
      err => { console.log(err); }
    )
    this.profileForm = new FormGroup({
      name: new FormControl(this.user.name),
      email: new FormControl(this.user.email),
      address: new FormControl(this.user.address),
      tel: new FormControl(this.user.tel)    
    })   
  }
//update edited values
  public update():void{
    console.log(this.profileForm.valid)
    if(this.profileForm.valid){     
      this.userService.updateUser(this.user).subscribe(
        res => { 
          // this.router.navigate(['sign-in']);
           console.log(res); 
        },
        err => { console.log(err); }

      )
    }
  }
  public onSelectFile(event):void {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.user.profile_pic = event.target.result;
        //console.log("url........."+this.profile_pic);
        this.userService.updateProfilePic(this.user.profile_pic).subscribe(
          res => { 
            // this.router.navigate(['sign-in']);
            console.log(res); 
          },
          err => { console.log(err); }
  
        );
       
      }
     // console.log("pic3:::"+this.profile_pic);
      
    }
  }

  
 public  delete():void{
    this.user.profile_pic='';
  
  }
  
}
