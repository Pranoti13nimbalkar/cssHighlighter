import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  CssHighLighterDirective } from './shared/directives/cssHighLighter.directive';
import { LowerCaseDirective } from './shared/directives/lowercase.directive';
import { CreditCardDirective } from './shared/directives/creditCard.directive';
import { NavbarToggleDirective } from './shared/directives/navbarToggler.directive';

@NgModule({
  declarations: [
    AppComponent,
    CssHighLighterDirective,
    LowerCaseDirective,
    CreditCardDirective,
    NavbarToggleDirective
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
