import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDataTypeCheck } from '../models/typeCheck';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService {
  constructor(private _httpPassword: HttpClient) {}

  putLoginDeatils(
    name: string,
    data: LoginDataTypeCheck
  ): Observable<LoginDataTypeCheck> {
    return this._httpPassword.put<LoginDataTypeCheck>(
      `http://localhost:4000/User/${name}/password`,
      data
    );
  }
}
