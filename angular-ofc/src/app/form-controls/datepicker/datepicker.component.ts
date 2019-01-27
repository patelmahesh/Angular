import { Component, OnInit, NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    
    MatDatepickerModule,
   
  ],
  exports: [
   
    MatDatepickerModule,
   

  ],
  declarations: [MatDatepickerModule],
  // entryComponents:[TitleFontComponent]
})

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
 
export class DatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

