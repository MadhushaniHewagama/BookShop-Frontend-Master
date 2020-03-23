import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { AdminService } from 'src/app/service/admin.service';
import { FormGroup, FormControl } from '@angular/forms';

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
             title: new FormControl(this.book.title),
             ISBN: new FormControl(this.book.ISBN),
             author: new FormControl(this.book.author),
             buying_price: new FormControl(this.book.buying_price),
             selling_price: new FormControl(this.book.selling_price),
             quantity: new FormControl(this.book.quantity),
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
    
    url = './assets/images/demo.jpg'

}
