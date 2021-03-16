import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { favoriteClipsComponents } from './favourite-clips.include';
import { FavouriteClipsRoutingModule } from './favourite-clips-routing.module';



@NgModule({
  declarations: [favoriteClipsComponents],
  imports: [
    CommonModule,
    FavouriteClipsRoutingModule
  ]
})
export class FavouriteClipsModule { }
