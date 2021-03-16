import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ROUTING_URLS } from '../constants/app-routing-urls';

@Injectable({
  providedIn: 'root',
})
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private _router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userAccessData: string = localStorage.getItem('USER_ACCESS_DATA');
    const { access_token } = userAccessData
      ? JSON.parse(userAccessData)
      : { access_token: null };
    const language = localStorage.getItem('lang') || 'de';

    request = request.clone({
      setHeaders: {
        Accept: 'application/json',
        ...(language && { locale: language }),
        ...(access_token && { Authorization: `Bearer ${access_token}` }),
      },
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => event),
      finalize(() => {}),
      catchError((error: HttpErrorResponse) => {
        return this._handleHttpErrorResponse(error);
      })
    );
  }

  private _handleHttpErrorResponse(error: HttpErrorResponse): Observable<any> {
    let data = {};
    data = {
      reason:
        error && error.error && error.error.error_description
          ? error.error.error_description
          : '',
      status: error.status,
    };
    switch (error.status) {
      case 401:
        this._router.navigateByUrl(`/${ROUTING_URLS.APP_LOGIN}`);
        return of(null);
      case 403:
        this._router.navigateByUrl(`/${ROUTING_URLS.APP_PLAY}`);
        return of(null);
      default:
        return throwError(error);
    }
  }
}
