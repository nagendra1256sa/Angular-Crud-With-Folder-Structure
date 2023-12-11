import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/change-password/Components/change-password/change-password.component';
import { LogoutWarningDialogComponent } from 'src/app/login/componenets/logout-warning-dialog/logout-warning-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  constructor(private _matDialog:MatDialog,
              private _route:Router)
  { }
  // openItems()
  // {
  //   this._route.navigate(['dashboard/items'])
  // }  
  // openUsers()
  // {
  //   this._route.navigate(['dashboard/users'])
  // } 
  logout()
  {
     localStorage.clear();
    const dialog= this._matDialog.open(LogoutWarningDialogComponent,{
       data:{
         title:"Logout",
         message:"Are sure want to Logout from this device"
       }
     })
     dialog.afterClosed().subscribe((result:boolean)=>{
       if(result)
       {
        this._route.navigate(['login'])
       }
     })
  }
  changePassword()
  {
      this._matDialog.open(ChangePasswordComponent)
  }
}

