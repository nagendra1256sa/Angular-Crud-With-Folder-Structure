import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFromComponent } from '../user-from/user-from.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-form-open',
  template: '',
})
export class AddFoemOpen {
  constructor(private matDialog: MatDialog, private router: Router) {
    this.openDialog();
  }
  openDialog() {
    const dialog = this.matDialog.open(UserFromComponent);

    dialog.afterClosed().subscribe((result) => {
      this.router.navigate(['dashboard/users']);
    });
  }
}
