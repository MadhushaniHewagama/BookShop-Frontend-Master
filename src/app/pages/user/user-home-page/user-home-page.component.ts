import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.scss']
})
export class UserHomePageComponent implements OnInit {
  public books: any;
  public searchTerm: string='';
  public searchBooks:any;
  public selectBook: Book;
  public educational: any;
  public entertainment: any;
  public health: any;
  public religion: any;
  public comics: any;
  public other: any;
  public offers: any;
  constructor(private homeService: HomeService,private router: Router) { }

  ngOnInit(): void {
    this.loadData()
  }

  public fetchCategoryBooks():void {
    this.educational=this.books.filter(book => {
      return (book.category.indexOf('Educational') > -1);
     });
     this.entertainment=this.books.filter(book => {
      return (book.category.indexOf('Entertainment') > -1);
     });
     this.health=this.books.filter(book => {
      return (book.category.indexOf('Health') > -1);
     });
     this.religion=this.books.filter(book => {
      return (book.category.indexOf('Religion') > -1);
     });
     this.comics=this.books.filter(book => {
      return (book.category.indexOf('Comics') > -1);
     });
     this.other=this.books.filter(book => {
      return (book.category.indexOf('Other') > -1);
     });
    this.offers=this.books.filter(book => {
      return (book.discount!=null );
     });
    

  }
  public loadData():void{
    this.homeService.getBooks().subscribe
    (
      res =>{
        this.books=res;
        this.searchBooks=res;
        this.fetchCategoryBooks();
        
      },
      err => {
        console.log(err)
      }
    )
  }
  public onSelect(Book: Book): void{
    this.selectBook=Book;
    this.router.navigate(["/user/viewBook"], {
      queryParams: { bookID: Book.bookID}
    });
  }
  public setFilteredBooks():void{

    this.searchBooks=this.homeService.filterBooks(this.searchTerm,this.books)
  }
  


}
