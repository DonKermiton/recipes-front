import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  public registerUser(object: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/auth/register', object)
      .pipe(
        catchError((err) => err)
      );
  }
}
