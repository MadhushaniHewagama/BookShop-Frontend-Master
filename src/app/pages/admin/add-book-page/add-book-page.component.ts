import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.scss']
})
export class AddBookPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  url = './assets/images/demo.jpg'

}
