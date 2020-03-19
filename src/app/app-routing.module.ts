import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInPageComponent } from './pages/user/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/user/sign-up-page/sign-up-page.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
