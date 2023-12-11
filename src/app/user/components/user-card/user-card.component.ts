import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../dataProviders/service.service';
import { addUsers } from '../../models/adpters';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  public data!: addUsers;

  // routeSubscription: any;
  constructor(
    private _Activated: ActivatedRoute,
    private getDataById: UserService,
    private _NRouter: Router
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
        alert('Not Found');
        this._NRouter.navigate(['dashboard/users']);
      },
    });
  }
}
