import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _router: Router, private _apiService: ApiService) {}

  isAuthenticated(): boolean {
    const userAccessData = localStorage.getItem('USER_ACCESS_DATA');
    return (
      !!userAccessData && JSON.parse(userAccessData)['access_token'] && true
    );
  }
}
