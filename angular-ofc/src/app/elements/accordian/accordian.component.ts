import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {
  step = 2;

  setStep(index: number) {
    this.step = index;
  }
  step1 = 0;

  setStep1(index: number) {
    this.step1 = index;
  }


  constructor() { }

  ngOnInit() {
  }

}
 
