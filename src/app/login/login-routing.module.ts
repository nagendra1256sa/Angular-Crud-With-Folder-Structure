import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componenets/login/login.component';
import { SignUpComponent } from './componenets/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'login',component:LoginComponent
  },
  {
    path:"",redirectTo:"login",pathMatch:'full'
  },
  {
    path:"signUp",component:SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
