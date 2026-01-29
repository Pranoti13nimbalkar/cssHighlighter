import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  CssHighLighterDirective } from './shared/directives/cssHighLighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    CssHighLighterDirective
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
