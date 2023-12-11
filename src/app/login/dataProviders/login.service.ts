import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { GetLoginDataTypeCheck, LoginDataTypeCheck } from '../Models/typeCheck';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _http: HttpClient, private translate: TranslateService) {}
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
  postLoginDetails(data: any) {
    return this._http.post('http://localhost:4000/user', data, {
      headers: {
        contentType: 'application/json',
      },
    });
  }
  getLoginDetailsByName(data: any): Observable<GetLoginDataTypeCheck> {
    return this._http
      .post('http://localhost:4000/user/name', data, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          const status = response?.status;
          if (status === HttpStatusCode?.Created) {
            const body = response?.body;
            return {
              success: true,
              responseData: body,
            };
          } else {
            return { success: false, responseData: [] };
          }
        }),
        catchError((error: HttpErrorResponse) => {
          return of({
            success: false,
            message: this.translate.instant('LOGIN.Error'),
          });
        })
      );
  }
  putDeatils(name: string, data: any): Observable<LoginDataTypeCheck> {
    return this._http.put<LoginDataTypeCheck>(
      `http://localhost:4000/user/${name}/password`,
      data
    );
  }
}
