import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInPageComponent } from 'src/app/pages/user/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from 'src/app/pages/user/sign-up-page/sign-up-page.component';
import { UserHomePageComponent } from 'src/app/pages/user/user-home-page/user-home-page.component';
import { ViewBookPageComponent } from 'src/app/pages/user/view-book-page/view-book-page.component';
import { BooksPageComponent } from 'src/app/pages/user/books-page/books-page.component';
import { CartPageComponent } from 'src/app/pages/user/cart-page/cart-page.component';
import { OrderPageComponent } from 'src/app/pages/user/order-page/order-page.component';
import { AdminHomePageComponent } from 'src/app/pages/admin/admin-home-page/admin-home-page.component';
import { AddBookPageComponent } from 'src/app/pages/admin/add-book-page/add-book-page.component';
import { EditBookPageComponent } from 'src/app/pages/admin/edit-book-page/edit-book-page.component';
import { ViewOrdersPageComponent } from 'src/app/pages/admin/view-orders-page/view-orders-page.component';
import { ViewUsersPageComponent } from 'src/app/pages/admin/view-users-page/view-users-page.component';
import { ViewUserPageComponent } from 'src/app/pages/admin/view-user-page/view-user-page.component';
import { ProfileComponent } from 'src/app/pages/user/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewPaymentPageComponent } from './pages/user/view-payment-page/view-payment-page.component';
import { ViewOrderPageComponent } from './pages/user/view-order-page/view-order-page.component';
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    SignUpPageComponent,
    UserHomePageComponent,
    ViewBookPageComponent,
    BooksPageComponent,
    CartPageComponent,
    OrderPageComponent,
    AdminHomePageComponent,
    AddBookPageComponent,
    EditBookPageComponent,
    ViewOrdersPageComponent,
    ViewUsersPageComponent,
    ViewUserPageComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    ViewPaymentPageComponent,
    ViewOrderPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
