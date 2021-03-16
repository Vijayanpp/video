import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { uploadComponents } from './upload.include';
import { UploadRoutingModule } from './upload-routing.module';



@NgModule({
  declarations: [uploadComponents],
  imports: [
    CommonModule,
    UploadRoutingModule
  ]
})
export class UploadModule { }
