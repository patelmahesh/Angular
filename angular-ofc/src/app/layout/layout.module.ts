import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { WindowComponent } from './window/window.component';

@NgModule({
  imports: [
    CommonModule,
   
  ],
  exports: [
    
  ],
  declarations: [ListComponent, MenuComponent, WindowComponent]
})
export class LayoutModule { }
