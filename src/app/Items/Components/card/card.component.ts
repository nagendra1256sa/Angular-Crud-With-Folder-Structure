import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../../dataProviders/service.service';
import { DetailsType } from '../../Models/adpater';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  data:DetailsType|undefined
  routeSubscription: any;
    constructor(private _Activated:ActivatedRoute,private getDataById:Service,private _router:Router){}
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
        alert('Not Found')
        this._router.navigate(['dashboard/items'])
      }
     })
  }
  call()
  {
    this._router.navigate(['/dashboard/items'])
  }
}
