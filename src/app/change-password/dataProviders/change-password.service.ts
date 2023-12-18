import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateDataTypeCheck } from '../models/typeCheck';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService {
  constructor(private _httpPassword: HttpClient) {}

  putLoginDeatils(
    name: string,
    data: UpdateDataTypeCheck
  ): Observable<UpdateDataTypeCheck> {
    return this._httpPassword.put<UpdateDataTypeCheck>(
      `http://localhost:4000/User/${name}/password`,
      data
    );
  }
}
