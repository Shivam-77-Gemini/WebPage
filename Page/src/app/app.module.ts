import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { AgGridModule } from 'ag-grid-angular';
import { PopupSkillComponent } from './popup-skill/popup-skill.component';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    PopupSkillComponent
   
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([BodyComponent,PopupSkillComponent]),
    AppRoutingModule,
    HttpClientModule
    
  ],entryComponents:[PopupSkillComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
