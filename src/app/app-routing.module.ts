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
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:HomeComponent
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
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'addBook',
    component:AddBookPageComponent
  },
  {
    path:'viewBook',
    component:ViewBookPageComponent
  
  },
  {
    path: 'userHome',
    component: UserHomePageComponent
  },
  {
    path:'adminHome',
    component: AdminHomePageComponent
  },
  {
    path:'adminViewBook',
    component:EditBookPageComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
