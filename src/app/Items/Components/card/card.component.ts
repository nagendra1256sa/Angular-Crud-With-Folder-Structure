import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../../dataProviders/service.service';
import { DetailsType } from '../../Models/adpater';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  public data:DetailsType|undefined;
  // routeSubscription: any;
    constructor(private _Activated:ActivatedRoute,private getDataById:Service,private _router:Router,private snackBar:MatSnackBar){}
  ngOnInit(): void {
    // this.routeSubscription = this._Activated.paramMap.subscribe(params => {
    //   const id = params.get('id');
    //   console.log('Route Parameter ID:', id);
    // });
     const ItemId=this._Activated.snapshot.paramMap.get('id');
     const id=ItemId? parseInt(ItemId):NaN;
     this.getDataById.getItemListById(id).subscribe({
      next:(val)=>
      {
        this.data=val
      },error:()=>
      {
        this.snackBar.open('user not found','OK',{
          horizontalPosition:'center',
          verticalPosition:"top",
          duration:3000
        })
        this._router.navigate(['main/dashboard/items'])
      }
     })
  }
}
