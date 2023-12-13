import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFromComponent } from '../user-from/user-from.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-add-form-open',
  template: '',
})
export class AddFoemOpen {
  constructor(private matDialog: MatDialog, private router: Router,private getUser:UsersComponent) {
    this.openDialog();
  }
  openDialog() {
    const dialog = this.matDialog.open(UserFromComponent);

    dialog.afterClosed().subscribe((result) => {
      this.getUser.getUserData();
      this.router.navigate(['main/dashboard/users']);
    });
  }
}
