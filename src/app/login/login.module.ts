import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './componenets/login/login.component';;
import { SignUpComponent } from './componenets/sign-up/sign-up.component';
import { LogoutWarningDialogComponent } from './componenets/logout-warning-dialog/logout-warning-dialog.component';
import { SharedModuleModule } from '../shared-module/material_module/shared-module.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    LogoutWarningDialogComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModuleModule

  ]
})
export class LoginModule { }
