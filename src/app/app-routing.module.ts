import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPageComponent } from './pages/user/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/user/sign-up-page/sign-up-page.component';
import {ProfileComponent} from './pages/user/profile/profile.component'
import { AddBookPageComponent } from './pages/admin/add-book-page/add-book-page.component';
import { ViewBookPageComponent } from './pages/user/view-book-page/view-book-page.component'
import { AdminHomePageComponent } from './pages/admin/admin-home-page/admin-home-page.component';
import { UserHomePageComponent } from './pages/user/user-home-page/user-home-page.component';
import { EditBookPageComponent } from './pages/admin/edit-book-page/edit-book-page.component';
import { ViewUserPageComponent } from './pages/admin/view-user-page/view-user-page.component';
import { ViewOrderPageComponent } from './pages/user/view-order-page/view-order-page.component';
import { ViewPaymentPageComponent } from './pages/user/view-payment-page/view-payment-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'signIn',
    pathMatch: 'full'
  },
  {
    path:'signIn',
    component:SignInPageComponent
  },
  {
    path:'signUp',
    component:SignUpPageComponent
  },
  {
    path:'user/profile',
    component:ProfileComponent
  },
  {
    path:'admin/addBook',
    component:AddBookPageComponent
  },
  {
    path:'user/viewBook',
    component:ViewBookPageComponent
  
  },
  {
    path: 'user/home',
    component: UserHomePageComponent
  },
  {
    path: 'user/viewOrder',
    component: ViewOrderPageComponent
  },
  {
    path: 'user/viewPayment',
    component: ViewPaymentPageComponent
  },
  {
    path:'admin/home',
    component: AdminHomePageComponent
  },
  {
    path:'admin/viewBook',
    component:EditBookPageComponent 
  },
   {
    path:'admin/viewUser',
    component:ViewUserPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
