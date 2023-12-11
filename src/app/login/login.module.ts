import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './componenets/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { SignUpComponent } from './componenets/sign-up/sign-up.component';
import { LogoutWarningDialogComponent } from './componenets/logout-warning-dialog/logout-warning-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    LogoutWarningDialogComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    TranslateModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class LoginModule { }
