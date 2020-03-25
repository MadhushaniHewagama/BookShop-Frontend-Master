import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book'
import { AdminService } from 'src/app/service/admin.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-book-page',
  templateUrl: './edit-book-page.component.html',
  styleUrls: ['./edit-book-page.component.scss']
})
export class EditBookPageComponent implements OnInit {

  public book:Book=new Book();
  public test:string = '1';
  public bookForm : FormGroup;

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {

    //initially book data load into the form
    this.loadForm();

    this.book.bookID=1;
  }

  public loadForm():void{

    this.adminService.getBook(this.test).subscribe(

      res => {

        this.book.ISBN = res[0].ISBN;
        this.book.author = res[0].author,
        this.book.book_pic = res[0].book_pic;
        this.book.buying_price = res[0].buying_price;
        this.book.category = res[0].category;
        this.book.description = res[0].description;
        this.book.discount = res[0].description;
        this.book.quantity = res[0].quantity;
        this.book.title = res[0].title;
        this.book.selling_price = res[0].selling_price;

      },

        err => { console.log("err:::::::::::::"+err) }
    )

    
    this.bookForm=new FormGroup({

      ISBN : new FormControl(this.book.ISBN),
      author: new FormControl(this.book.author),
      book_pic: new  FormControl(this.book.book_pic),
      buying_price: new FormControl(this.book.buying_price),
      category: new FormControl(this.book.category),
      description: new FormControl(this.book.description),
      discount: new FormControl(this.book.discount),
      quantity : new FormControl(this.book.quantity),
      title:  new FormControl(this.book.title),
      selling_price:  new FormControl(this.book.selling_price)

    });

  }

}
