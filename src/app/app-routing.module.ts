import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPageComponent } from './pages/user/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/user/sign-up-page/sign-up-page.component';
import {ProfileComponent} from './pages/user/profile/profile.component'
import { AddBookPageComponent } from './pages/admin/add-book-page/add-book-page.component';


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
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'addBook',
    component:AddBookPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
