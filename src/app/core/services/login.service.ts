import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {UserService} from '../../share/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient,
              private readonly userService: UserService) {
  }

  public login(obj: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/auth/login', obj)
      .pipe(
        catchError(err => {
          throw new Error(err);
        }),
        tap((response: any) => {
          console.log(response);
          this.userService.accessToken = response.payload.token;
          this.userService.refreshToken  = response.payload.refresh_token;
          this.userService.loggedUser.next(response.user);
        })
      );
  }
}
