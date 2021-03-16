import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userProfileComponents } from './user-profile.include';
import { UserProfileRoutingModule } from './user-profile-routing.module';



@NgModule({
  declarations: [userProfileComponents],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
