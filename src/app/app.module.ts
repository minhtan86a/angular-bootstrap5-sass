import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { NavSectionComponent } from './nav-section/nav-section.component';
import { CompanySectionComponent } from './company-section/company-section.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroSectionComponent,
    NavSectionComponent,
    CompanySectionComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
