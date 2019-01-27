import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontColorComponent } from './font-color/font-color.component';
import { BodyColorComponent } from './body-color/body-color.component';
import { materialModule } from '../../materialModule';

@NgModule({
  imports: [
    CommonModule,
    materialModule
  ],
  exports: [
    FontColorComponent, BodyColorComponent
  ],
  declarations: [FontColorComponent, BodyColorComponent]
})
export class ColorModule { }
