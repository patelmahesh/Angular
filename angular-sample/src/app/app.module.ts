import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared';
import { AppRoutingModule} from './app-routing.module';
import {MainComponent} from './layout';

@NgModule({
  declarations: [MainComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
