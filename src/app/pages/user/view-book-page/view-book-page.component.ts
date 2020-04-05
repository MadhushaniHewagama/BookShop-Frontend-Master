import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book'
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-book-page',
  templateUrl: './view-book-page.component.html',
  styleUrls: ['./view-book-page.component.scss']
})
export class ViewBookPageComponent implements OnInit {

  constructor(private userService:UserService,private route: ActivatedRoute) { }

  public book:Book=new Book();
  public addToCartForm:FormGroup;
  public quantity:number=1;
 
  ngOnInit(): void {
    this.route.queryParams.subscribe(parms => {
      this.loadBookData(parms.bookID);
    });
  }
  public loadBookData(bookID):void{
    this.userService.getBook(bookID).subscribe(
      res => {
        this.book.ISBN=res[0].ISBN;
        this.book.author=res[0].author;
        this.book.book_pic=res[0].book_pic;
        this.book.category=res[0].category;
        this.book.description=res[0].description;
        this.book.discount=res[0].discount;
        this.book.quantity=res[0].quantity;
        this.book.selling_price=res[0].selling_price;
        this.book.title=res[0].title;
        console.log("res::::"+JSON.stringify(res));
      },
      err => { console.log("err::::::"+err); }
    )
this.addToCartForm=new FormGroup({
  quantity: new FormControl(this.quantity,[Validators.required])
})
  }

  public addToCart():void{
    console.log("add to cart");
  }

  

 
}
