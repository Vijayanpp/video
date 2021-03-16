import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, share } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  constructor(private _http: HttpClient) {}

  public post(
    url: string,
    body: object | string,
    httpOptionEnable?: boolean
  ): Observable<any> {
    return this._http
      .post<any>(
        environment.API_URL + url,
        body,
        httpOptionEnable ? this.httpOptions : {}
      )
      .pipe(
        map((res: Response) => res),
        share(),
        catchError(this.handleError<any>({}))
      );
  }

  public get(url: string): Observable<any> {
    return this._http.get<any>(environment.API_URL + url).pipe(
      map((res: Response) => res),
      catchError(this.handleError<any>({}))
    );
  }

  public put(url: string, body: object): Observable<any> {
    return this._http.put<any>(environment.API_URL + url, body).pipe(
      map((res: Response) => res),
      catchError(this.handleError<any>({}))
    );
  }

  public delete(url: string): Observable<any> {
    return this._http.delete<any>(environment.API_URL + url, {}).pipe(
      map((res: Response) => res),
      catchError(this.handleError<any>({}))
    );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      return throwError(error);
    };
  }
}
