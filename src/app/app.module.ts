import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomeLayoutComponent} from './share/layouts/welcome-layout/welcome-layout.component';
import {LoggedLayoutComponent} from './share/layouts/logged-layout/logged-layout.component';
import {ShareModule} from './share/share.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './share/interceptor/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeLayoutComponent,
    LoggedLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
