import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFromComponent } from '../user-from/user-from.component';
import { UserService } from '../../dataProviders/service.service';

@Component({
  selector: 'app-edit-open',
  template: '',
})
export class EditOpenComponent {
  constructor(
    private mataDialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private userIdService: UserService
  ) {
    const UserId = this.route.snapshot.paramMap.get('id');
    const id = UserId ? parseInt(UserId) : NaN;
    this.userIdService.getUserListById(id).subscribe({
      next: (val) => {
        this.openDialog(val);
      },
    });
  }
  openDialog(data: any) {
    const dialog = this.mataDialog.open(UserFromComponent, {
      data: data,
    });
    dialog.afterClosed().subscribe((result) => {
      this.router.navigate(['dashboard/users']);
    });
  }
}
