import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ROUTING_URLS } from '../constants/app-routing-urls';
import { AuthService } from './../services/auth.service';
@Injectable({
  providedIn: 'root',
})
export class LanguageSelectGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const currentLanguage = localStorage.getItem('lang');
    if (!currentLanguage) {
      return true;
    } else {
      if (this._authService.isAuthenticated()) {
        this._router.navigate([`/maojam/${ROUTING_URLS.APP_PLAY}`]);
      } else {
        this._router.navigate([`/${ROUTING_URLS.APP_LOGIN}`]);
        return false;
      }
    }
  }
}
