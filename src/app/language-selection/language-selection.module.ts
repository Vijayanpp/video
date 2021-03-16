import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { languageSelectionComponents } from './language-selection.include';
import { LanguageSelectionRoutingModule } from './language-selection-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [languageSelectionComponents],
  imports: [CommonModule,IonicModule, LanguageSelectionRoutingModule],
})
export class LanguageSelectionModule {}
