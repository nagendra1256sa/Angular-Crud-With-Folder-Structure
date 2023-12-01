import { HttpClient, HttpErrorResponse, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { EditDetailsType } from '../Components/edit-add/edit-add.component';
import { AddItems, batchAdapter, itemModal } from '../Models/adpater';
import { TranslateService } from '@ngx-translate/core';
export class typeChek {
  responseData?:itemModal[];
  success?:boolean;
  message?:string;
}

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private _http:HttpClient,private _items:batchAdapter,private translate:TranslateService) { }
  //Items
  addItem(data:AddItems):Observable<AddItems>
  {
    return this._http.post<AddItems>(" http://localhost:5000/items",data,{
      headers:{
        'contentType':"application/json"
      }
    })
  }
  UpdateItem(data:EditDetailsType,id:number):Observable<EditDetailsType>
  {
    return this._http.put<EditDetailsType>(` http://localhost:5000/items/${id}`,data,{
      headers:{
        'contentType':"application/json"
      }
    })
  }
  getItemList():Observable<typeChek>{
    const api="http://localhost:5000/items"
    return this._http
    .get(api, { observe: 'response' })
    .pipe(
      map((response: HttpResponse<any>) => {
        const status = response?.status;
        if (status === HttpStatusCode?.Ok) {
          const data = response?.body;
          return {
            success:true,
            responseData: data.map((items: any) =>
              
               this._items.adapt(items)
            ),
          };
        } else {
          return { responseData: [] };
        }
      }),
      catchError((error: HttpErrorResponse) => {
        return of({ success: false,message:this.translate.instant('ITEMS.ERROR') });
      })
    );

  }
  deleteItem(id:number):Observable<any>
  {
    return this._http.delete(` http://localhost:5000/items/${id}`)
  }
  getItemListById(id:number):Observable<EditDetailsType>
  {
    return this._http.get<EditDetailsType>(`http://localhost:5000/items/${id}`);
  }
}
