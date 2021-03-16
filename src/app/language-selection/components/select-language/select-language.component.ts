import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING_URLS } from 'src/app/core/constants/app-routing-urls';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss'],
})
export class SelectLanguageComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {}

  public setLanguage(language:string):void
  {
    if(!language)
    {
      return;
    }
    localStorage.setItem('lang',language);
    this._router.navigate([`/maojam/${ROUTING_URLS.APP_PLAY}`])
  }

}
