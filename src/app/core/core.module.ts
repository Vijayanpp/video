import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpConfigInterceptor } from './interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HammerModule } from '@angular/platform-browser';
import { AuthGuard } from './guards/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { LanguageSelectGuard } from './guards/language-select-guard.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    HammerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
