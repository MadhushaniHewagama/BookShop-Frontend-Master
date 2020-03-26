import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { AdminService } from 'src/app/service/admin.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.scss']
})
export class AddBookPageComponent implements OnInit {

  public book:Book = new Book();
  public addBookForm: FormGroup;


  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(){
    this.addBookForm = new FormGroup({
             title: new FormControl(this.book.title,[Validators.required]),
             ISBN: new FormControl(this.book.ISBN),
             author: new FormControl(this.book.author),
             buying_price: new FormControl(this.book.buying_price,[Validators.required]),
             selling_price: new FormControl(this.book.selling_price,[Validators.required]),
             quantity: new FormControl(this.book.quantity,[Validators.required]),
             category: new FormControl(this.book.category),
             discount: new FormControl(this.book.discount),
             description: new FormControl(this.book.description)
    })
  }

  public add_book():void{
    this.adminService.addBook(this.book).subscribe(
      res => {
        console.log(res)
      }, 
      err => { console.log(err) }
    )
    }
    
    public onSelectFile(event):void {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
        reader.readAsDataURL(event.target.files[0]); // read file as data url
  
        reader.onload = (event) => { // called once readAsDataURL is completed
          this.book.book_pic = event.target.result;
          //console.log("url........."+this.profile_pic);
         
        }
       // console.log("pic3:::"+this.profile_pic);
        
      }
    }
  
    
   public  delete():void{
      this.book.book_pic='';
      // this.adminService.deleteBook(this.book.bookID).subscribe(
      //   res => {
      //     console.log(res)
      //   }, 
      //   err => { console.log(err) }
      // )
    
    }
    
  }
  

