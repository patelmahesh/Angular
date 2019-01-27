import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialModule } from './materialModule';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ElementsModule } from './elements/elements.module';
import { LayoutModule } from './layout/layout.module';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { FormControlsModule } from './form-controls/form-controls.module';
import { PopupsNModalsModule } from './popups-n-modals/popups-n-modals.module';
import { TablesModule } from './tables/tables.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { MdePopoverModule } from '@material-extended/mde';
import { NgxEditorModule } from 'ngx-editor';

 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    materialModule,
    BrowserAnimationsModule,
    ElementsModule,
    LayoutModule,
    FormControlsModule,
    NgMaterialMultilevelMenuModule,
    PopupsNModalsModule,
    TablesModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MdePopoverModule,
    NgxEditorModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
 
}