import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { SharedModuleModule } from '../shared-module/material_module/shared-module.module';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';


@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    SharedModuleModule
  ]
})
export class ChangePasswordModule { }
