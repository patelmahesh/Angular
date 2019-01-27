import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { InputComponent } from './input/input.component';
import { materialModule } from '../materialModule';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    materialModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DatepickerComponent, InputComponent]
})
export class FormControlsModule { }
