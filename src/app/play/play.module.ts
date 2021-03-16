import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { playComponents } from './play.include';
import { PlayRoutingModule } from './play-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CountdownModule } from 'ngx-countdown';
import { IonicModule } from '@ionic/angular';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [playComponents],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    PlayRoutingModule,
    CountdownModule,
  ],
})
export class PlayModule {}
