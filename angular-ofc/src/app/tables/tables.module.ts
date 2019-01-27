import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { materialModule } from '../materialModule';

@NgModule({
  imports: [
    CommonModule,
    materialModule
  ],
  declarations: [DataTableComponent]
})
export class TablesModule { }
