import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserFromComponent } from './components/user-from/user-from.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ConfirmationDeletionComponent } from './components/confirmation-deletion/confirmation-deletion.component';
import { DialogCloseConfirmationComponent } from './components/dialog-close-confirmation/dialog-close-confirmation.component';
import { SharedModuleModule } from '../shared-module/material_module/shared-module.module';
@NgModule({
  declarations: [
    UsersComponent,
    UserFromComponent,
    UserCardComponent,
    ConfirmationDeletionComponent,
    DialogCloseConfirmationComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModuleModule
  ]
})
export class UserModule { }
