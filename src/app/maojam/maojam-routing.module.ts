import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING_URLS } from '../core/constants/app-routing-urls';
import { AuthGuard } from '../core/guards/auth-guard.service';
import { MaojamComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: MaojamComponent,
    children: [
      {
        path: ROUTING_URLS.APP_PLAY,
        loadChildren: () =>
          import('../play/play.module').then((m) => m.PlayModule),
      },
      {
        path: ROUTING_URLS.APP_PLAYLISTS,
        loadChildren: () =>
          import('../playlists/playlists.module').then(
            (m) => m.PlaylistsModule
          ),
      },
      {
        path: ROUTING_URLS.APP_UPLOAD,
        loadChildren: () =>
          import('../upload/upload.module').then((m) => m.UploadModule),
      },
      {
        path: ROUTING_URLS.APP_UPLOAD,
        loadChildren: () =>
          import('../upload/upload.module').then((m) => m.UploadModule),
      },
      {
        path: ROUTING_URLS.APP_PROFILE,
        loadChildren: () =>
          import('../user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: ROUTING_URLS.APP_ARTIST_PAGE,
        loadChildren: () =>
          import('../artist-page/artist-page.module').then(
            (m) => m.ArtistPageModule
          ),
      },
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MaojamRoutingModule {}
