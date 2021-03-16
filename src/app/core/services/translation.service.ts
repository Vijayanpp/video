import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(public translate: TranslateService) { }

  getDeviceLanguage() {
    if (window.Intl && typeof window.Intl === 'object') {
      localStorage.setItem('lang',navigator.language);

    }

  }

  public setApplicationLanguage():void{
    const lang=localStorage.getItem('lang');
    const currentLanguage=lang?lang:'en';
    this.translate.setDefaultLang(currentLanguage);
    this.translate.use(currentLanguage);
  }
}
