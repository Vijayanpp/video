import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ROUTING_URLS } from './core/constants/app-routing-urls';

const routes: Routes = [
  {
    path: 'maojam',
    loadChildren: () =>
      import('./maojam/maojam.module').then((m) => m.MaojamModule),
  },
  {
    path: ROUTING_URLS.APP_LOGIN,
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: ROUTING_URLS.APP_REGISTRATION,
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: ROUTING_URLS.APP_SELECT_LANGUAGE,
    loadChildren: () =>
      import('./language-selection/language-selection.module').then(
        (m) => m.LanguageSelectionModule
      ),
  },
  {
    path: '**',
    redirectTo: `maojam/${ROUTING_URLS.APP_PLAY}`,
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
