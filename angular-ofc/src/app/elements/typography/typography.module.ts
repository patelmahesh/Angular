import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleFontComponent } from './title-font/title-font.component';
import { BodyFontComponent } from './body-font/body-font.component';
import { materialModule } from '../../materialModule';


@NgModule({
  imports: [
    CommonModule,
    materialModule
  ],
  exports:[
    TitleFontComponent,
    BodyFontComponent
  ],
  declarations: [TitleFontComponent, BodyFontComponent]
})
export class TypographyModule { }
