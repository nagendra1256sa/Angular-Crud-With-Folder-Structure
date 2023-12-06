import { HttpClient, HttpErrorResponse, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { UserEditDetailsType, addUsers, userAdapters, userModal } from '../models/adpters';
import { TranslateService } from '@ngx-translate/core';

interface getUserDataTypeCheck{
   responseData?:userModal[];
   success:boolean
   message?:string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http:HttpClient,private _userAdapter:userAdapters,private translate:TranslateService) { 
    //  this.translate.addLangs(['he'])
  }
  addUsers(data:addUsers):Observable<addUsers>
  {
    return this._http.post(" http://localhost:5000/users",data,{
      headers:{
        'contentType':"application/json"
      }
    })
  }
  UpdateUser(data:UserEditDetailsType,id:number):Observable<UserEditDetailsType>
  {
    return this._http.put<UserEditDetailsType>(` http://localhost:5000/Users/${id}`,data,{
      headers:{
        'contentType':"application/json"
      }
    })
  }
  getUserList():Observable<getUserDataTypeCheck>
  {
    const api=" http://localhost:5000/Users"
    return this._http.get(api,{observe:'response'}).pipe(map((responce:HttpResponse<any>)=>{
           const status=responce?.status;
           if(status ===HttpStatusCode?.Ok)
           {
             const data=responce.body;
             return {
              success:true,
              responseData: data.map((users: any) =>
                
                 this._userAdapter.adapt(users)
              ),
            };
           }
           else{
             return {success:false}
           }
    }),
    catchError((error:HttpErrorResponse)=>{
       return of({success: true,
        message:this.translate.instant('USER.404ERROR')
      })
    }));
  }
  deleteUser(id:number):Observable<addUsers>
  {
    return this._http.delete(` http://localhost:5000/Users/${id}`)
  }
  getUserListById(id:number):Observable<UserEditDetailsType>
  {
    return this._http.get<UserEditDetailsType>(`http://localhost:5000/Users/${id}`);
  }
}
