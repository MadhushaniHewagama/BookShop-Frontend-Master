import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './src/pages/main-page/main-page.component';
import { SignInPageComponent } from './src/pages/user/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './src/pages/user/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './src/pages/user/home-page/home-page.component';
import { UserHomePageComponent } from './src/pages/user/user-home-page/user-home-page.component';
import { ViewBookPageComponent } from './src/pages/user/view-book-page/view-book-page.component';
import { BooksPageComponent } from './src/pages/user/books-page/books-page.component';
import { CartPageComponent } from './src/pages/user/cart-page/cart-page.component';
import { OrderPageComponent } from './src/pages/user/order-page/order-page.component';
import { ViewOrderPageComponent } from './src/pages/user/view-order-page/view-order-page.component';
import { AdminHhomePageComponent } from './src/pages/admin/admin-hhome-page/admin-hhome-page.component';
import { AdminHomePageComponent } from './src/pages/admin/admin-home-page/admin-home-page.component';
import { AddBookPageComponent } from './src/pages/admin/add-book-page/add-book-page.component';
import { EditBookPageComponent } from './src/pages/admin/edit-book-page/edit-book-page.component';
import { ViewOrdersPageComponent } from './src/pages/admin/view-orders-page/view-orders-page.component';
import { ViewUsersPageComponent } from './src/pages/admin/view-users-page/view-users-page.component';
import { ViewUserPageComponent } from './src/pages/admin/view-user-page/view-user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SignInPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    UserHomePageComponent,
    ViewBookPageComponent,
    BooksPageComponent,
    CartPageComponent,
    OrderPageComponent,
    ViewOrderPageComponent,
    AdminHhomePageComponent,
    AdminHomePageComponent,
    AddBookPageComponent,
    EditBookPageComponent,
    ViewOrdersPageComponent,
    ViewUsersPageComponent,
    ViewUserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
