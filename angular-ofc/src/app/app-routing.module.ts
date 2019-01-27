import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleFontComponent } from './elements/typography/title-font/title-font.component';
import { BodyFontComponent } from './elements/typography/body-font/body-font.component';
import { FontColorComponent } from './elements/color/font-color/font-color.component';
import { BodyColorComponent } from './elements/color/body-color/body-color.component';
import { ButtonsComponent } from './elements/buttons/buttons/buttons.component';
import { IconButtonsComponent } from './elements/buttons/icon-buttons/icon-buttons.component';
import { RoundButtonsComponent } from './elements/buttons/round-buttons/round-buttons.component';
import { DropdownComponent } from './elements/dropdown/dropdown.component';
import { AccordianComponent } from './elements/accordian/accordian.component';
import { ListComponent } from './layout/list/list.component';
import { DatepickerComponent } from './form-controls/datepicker/datepicker.component';
import { WindowComponent } from './layout/window/window.component';
import { OthersComponent } from './elements/others/others.component';
import { AlertsComponent } from './popups-n-modals/alerts/alerts.component';
import { DataTableComponent } from './tables/data-table/data-table.component';
import { InputComponent } from './form-controls/input/input.component';
import { TooltipComponent } from './popups-n-modals/tooltip/tooltip.component';

const routes: Routes = [
  {
    path: 'title-font',
    component: TitleFontComponent,
    data: { title: 'Bukra Font' }
  },
  {
    path: 'body-font',
    component: BodyFontComponent,
    data: { title: 'Dubai Font' }
  },
  {
    path: 'font-color',
    component: FontColorComponent,
    data: { title: 'Font Color Palette' }
  },
  {
    path: 'body-color',
    component: BodyColorComponent,
    data: { title: 'Body Color Palette' }
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
    data: { title: 'Buttons' }
  },
  {
    path: 'icon-buttons',
    component: IconButtonsComponent,
    data: { title: 'Icon Buttons' }
  },
  {
    path: 'round-buttons',
    component: RoundButtonsComponent,
    data: { title: 'Round Buttons' }
  },
  {
    path: 'dropdown',
    component: DropdownComponent,
    data: { title: 'Dropdown' }
  },
  {
    path: 'accordian',
    component: AccordianComponent,
    data: { title: 'accordian' }
  },
  {
    path: 'list',
    component: ListComponent,
    data: { title: 'List' }
  },
  {
    path: 'datepicker',
    component: DatepickerComponent,
    data: { title: 'Date Picker' }
  },
  {
    path: 'window',
    component: WindowComponent,
    data: { title: 'Window' }
  },
  {
    path: 'others',
    component: OthersComponent,
    data: { title: 'Scrollbar, Upload and Alerts' }
  },
  {
    path: 'alert',
    component: AlertsComponent,
    data: { title: 'Alerts' }
  },
  {
    path: 'dataTable',
    component: DataTableComponent,
    data: { title: 'dataTable' }
  },
  {
    path: 'input',
    component: InputComponent,
    data: { title: 'Form input' }
  },
  {
    path: 'tooltip',
    component: TooltipComponent,
    data: { title: 'Tooltip' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
