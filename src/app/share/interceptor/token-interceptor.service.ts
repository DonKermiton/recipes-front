import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {UserService} from '../services/user.service';
import {catchError, switchMap} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private readonly userService: UserService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const reqClone = request.clone({headers: request.headers.set('Authorization', `bearer ${this.userService.accessToken}`)});

    console.log(request);


    return next.handle(reqClone).pipe(
      catchError((err) => {
          if (err.status === 401 && err instanceof HttpErrorResponse) {
            if (err.error.message) {
              return this.handleRefreshError(request, next);
            }

          }

          return throwError(err);
        }
      )
    );
  }

  private handleRefreshError(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.userService.refreshTokens().pipe(
        switchMap((token: any) => {
          console.log(token);
          this.isRefreshing = false;
          console.log(token);
          // this.refreshTokenSubject.next(token)
          return next.handle(this.addToken(request, this.userService.accessToken));
        })
      );
    } else {
      return next.handle(this.addToken(request, this.userService.accessToken));
    }
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
