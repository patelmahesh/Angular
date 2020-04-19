import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[
    '.box-sub-content { transition: 0.3s; position: relative; margin-right: auto; }'
  ]
})

export class AppComponent {
  animalControl = new FormControl('', [Validators.required]);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  title = 'dsApp';

}
