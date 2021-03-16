import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistPageComponent } from './components';



const routes: Routes = [
  {
    path: '',
    component: ArtistPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistPageRoutingModule {}
