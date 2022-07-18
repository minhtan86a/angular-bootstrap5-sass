import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { NavSectionComponent } from './nav-section/nav-section.component';
import { CompanySectionComponent } from './company-section/company-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import { PortfoliSectionComponent } from './portfoli-section/portfoli-section.component';
import { GetstartedSectionComponent } from './getstarted-section/getstarted-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroSectionComponent,
    NavSectionComponent,
    CompanySectionComponent,
    ServicesSectionComponent,
    TestimonialsSectionComponent,
    FaqSectionComponent,
    PortfoliSectionComponent,
    GetstartedSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
