import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../dataProviders/service.service';
import { addUsers } from '../../models/adpters';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  public data: addUsers | undefined;

  // routeSubscription: any;
  constructor(
    private _Activated: ActivatedRoute,
    private getDataById: UserService,
    private _NRouter: Router,
    private snackBar:MatSnackBar
  ) {}
  ngOnInit(): void {
    // this.routeSubscription = this._Activated.paramMap.subscribe(params => {
    //   const id = params.get('id');
    //   console.log('Route Parameter ID:', id);
    // });
    const ItemId = this._Activated.snapshot.paramMap.get('id');
    const id = ItemId ? parseInt(ItemId) : NaN;
    this.getDataById.getUserListById(id).subscribe({
      next: (val) => {
        this.data = val;
      },
      error: () => {
        this.snackBar.open('User not found','OK',{
          horizontalPosition:'center',
          verticalPosition:"top",
          duration:3000
        })
        this._NRouter.navigate(['main/dashboard/users']);
      },
    });
  }
}
