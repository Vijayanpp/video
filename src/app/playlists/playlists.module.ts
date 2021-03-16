import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { playListsComponents } from './playlists.include';
import { PlaylistsRoutingModule } from './playlists-routing.module';



@NgModule({
  declarations: [playListsComponents],
  imports: [
    CommonModule,
    PlaylistsRoutingModule
  ]
})
export class PlaylistsModule { }
