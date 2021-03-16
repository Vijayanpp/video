import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { ROUTING_URLS } from '../constants/app-routing-urls';
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const currentLanguage = localStorage.getItem('lang');
    if (this._authService.isAuthenticated()) {
      return true;
    } else {
      if (!currentLanguage) {
        this._router.navigate([`/${ROUTING_URLS.APP_SELECT_LANGUAGE}`]);
      } else {
        this._router.navigate([`/${ROUTING_URLS.APP_LOGIN}`]);
        return false;
      }
    }
  }
}
