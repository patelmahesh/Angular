import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconButtonsComponent } from './icon-buttons/icon-buttons.component';
import { RoundButtonsComponent } from './round-buttons/round-buttons.component';

import { materialModule } from '../../materialModule';


@NgModule({
  imports: [
    CommonModule,
    materialModule
  ],
  declarations: [ButtonsComponent, IconButtonsComponent, RoundButtonsComponent]
  
})
export class ButtonsModule { }
