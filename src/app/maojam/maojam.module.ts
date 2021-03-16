import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { maojamComponents } from './maojam.include';
import { MaojamRoutingModule } from './maojam-routing.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [maojamComponents],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    MaojamRoutingModule
  ]
})
export class MaojamModule { }
