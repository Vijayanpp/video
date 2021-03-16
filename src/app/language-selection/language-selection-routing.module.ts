import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageSelectGuard } from '../core/guards/language-select-guard.service';
import { SelectLanguageComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: SelectLanguageComponent,
    canActivate:[LanguageSelectGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguageSelectionRoutingModule {}
