import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyModule } from './typography/typography.module';
import { ColorModule } from './color/color.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AccordianComponent } from './accordian/accordian.component';
import { OthersComponent } from './others/others.component';
import {MatSelectModule} from '@angular/material/select';
import { ButtonsModule } from './buttons/buttons.module';
import { materialModule } from '../materialModule';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    TypographyModule,
    ColorModule,
    MatSelectModule,
    materialModule, 
    ButtonsModule,
    materialModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    materialModule,
  ],
  exports: [
    TypographyModule,
    ColorModule,
    ButtonsModule

  ],
  declarations: [DropdownComponent, AccordianComponent, OthersComponent],
  // entryComponents:[TitleFontComponent]
})
export class ElementsModule { }

 
