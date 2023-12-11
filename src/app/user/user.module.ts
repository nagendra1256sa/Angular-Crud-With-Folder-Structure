import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import { UserFromComponent } from './components/user-from/user-from.component';
import {MatSelectModule} from '@angular/material/select'
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { UserCardComponent } from './components/user-card/user-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmationDeletionComponent } from './components/confirmation-deletion/confirmation-deletion.component';
import { DialogCloseConfirmationComponent } from './components/dialog-close-confirmation/dialog-close-confirmation.component';
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
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    TranslateModule
  ]
})
export class UserModule { }
