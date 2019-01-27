import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { materialModule } from '../materialModule';
import { TooltipComponent } from './tooltip/tooltip.component';
 
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';

import { MdePopoverModule } from '@material-extended/mde';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MdePopoverModule,
    materialModule
  ],
  declarations: [AlertsComponent, TooltipComponent]
})
export class PopupsNModalsModule { }
