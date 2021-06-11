import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import jwt_decode from 'jwt-decode';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public loggedUser: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private readonly http: HttpClient) {
  }

  public get accessToken(): string {
    return localStorage.getItem('_access_token') as string;
  }

  public set accessToken(token: string) {
    localStorage.setItem('_access_token', token);
  }

  public get refreshToken(): string {
    return localStorage.getItem('_refresh_token') as string;
  }

  public set refreshToken(token: string) {
    localStorage.setItem('_refresh_token', token);
  }

  public decodeToken(): any {
    const token = this.accessToken;
    if (!token) {
      return;
    }

    const decoded = jwt_decode(token);

    this.assignDataToUser();
  }

  public assignDataToUser(): void {
    this.getLoggedUserData().subscribe(data => {
      console.log(data);
      this.loggedUser.next(data);
    });
  }

  public getLoggedUserData(): Observable<any> {
    return this.http.get('http://localhost:3000/api/user/me');
  }

  public refreshTokens(): Observable<any> {
    return this.http.post(`http://localhost:3000/api/auth/refresh`, {token: this.accessToken, refreshToken: this.refreshToken});
  }


}
