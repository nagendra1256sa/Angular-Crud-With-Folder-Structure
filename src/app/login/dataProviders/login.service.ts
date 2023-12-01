import { HttpClient, HttpErrorResponse, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { GetLoginDataTypeCheck } from '../Models/typeCheck';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private _http:HttpClient,private translate:TranslateService) { 
    this.translate.addLangs(['he'])
  }
  // getLoginDetails():Observable<GetLoginDataTypeCheck>
  // {
  //    return this._http.get('http://localhost:4000/user',{observe : 'response'}).pipe(map((response:HttpResponse<any>)=>
  //    {
  //      if(response.status===HttpStatusCode?.Ok)
  //      {
  //       const data=response.body
  //        return{
  //            success:true,
  //            responseData:data
  //        }
  //      }
  //      else{
  //        return {
  //           success:false
  //        }
  //      }
  //    }),
  //    catchError((error:HttpErrorResponse)=>
  //    {
  //       return of({
  //          success:true,
  //          message:this.translate.instant('LOGIN.ERROR')
  //       })
  //    })
  //    )
  // }
  // postLoginDetails(data:any)
  // {
  //   return this._http.post('http://localhost:4000/user',data,{
  //     headers:{
  //       'contentType':"application/json"
  //     }
  //   })
  // }
  getLoginDetailsByName(data:any)
  {
    
    return this._http.post('http://localhost:4000/user/name',data)
  }
  putDeatils(name:string,data:any):Observable<any>
  {
    return this._http.put(`http://localhost:4000/user/${name}/password`,data)
  }
}
