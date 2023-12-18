import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFromComponent } from '../user-from/user-from.component';
import { UserService } from '../../dataProviders/service.service';
import { UsersComponent } from '../users/users.component';
import { addUsers } from '../../models/adpters';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-open',
  template: '',
})
export class EditOpenComponent {
  constructor(
    private mataDialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private userIdService: UserService,
    private getUser:UsersComponent,
    private snackBar:MatSnackBar
  ) {
    const UserId = this.route.snapshot.paramMap.get('id');
    const id = UserId ? parseInt(UserId) : NaN;
    this.userIdService.getUserListById(id).subscribe({
      next: (val) => {
        this.openDialog(val);
      },
      error:()=>{
        this.snackBar.open('user not found','OK',{
          horizontalPosition:'center',
          verticalPosition:"top",
          duration:3000
        })
        this.router.navigate(['main/dashboard/users']);
      }
    });
  }
  openDialog(data: addUsers) {
    const dialog = this.mataDialog.open(UserFromComponent, {
      data: data,
    });
    dialog.afterClosed().subscribe((result) => {
      this.getUser.getUserData();
      this.router.navigate(['main/dashboard/users']);
    });
  }
}
