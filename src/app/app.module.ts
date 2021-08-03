import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { WhyUseComponent } from './components/why-use/why-use.component';
import { HeaderTabsComponent } from './components/header/header-tabs/header-tabs.component';
import { StepsComponent } from './components/steps/steps.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { TravelTypeComponent } from './components/travel-type/travel-type.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { InspirationComponent } from './components/inspiration/inspiration.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AgentsSearchResultComponent } from './pages/agents-search-result/agents-search-result.component';
import { AgentsTitleComponent } from './components/agents-title/agents-title.component';
import { AgentsBodyComponent } from './components/agents-body/agents-body.component';
import { AgentsBodySidebarComponent } from './components/agents-body/agents-body-sidebar/agents-body-sidebar.component';
import { AgentsBodyContentComponent } from './components/agents-body/agents-body-content/agents-body-content.component';
import { DestinationFilterComponent } from './components/agents-body/agents-body-sidebar/destination-filter/destination-filter.component';
import { AgentOptionsComponent } from './components/agents-body/agents-body-sidebar/agent-options/agent-options.component';
import { TravelTypeFilterComponent } from './components/agents-body/agents-body-sidebar/travel-type-filter/travel-type-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    WhyUseComponent,
    HeaderTabsComponent,
    StepsComponent,
    DestinationsComponent,
    TravelTypeComponent,
    BenefitsComponent,
    TestimonialsComponent,
    InspirationComponent,
    FooterComponent,
    AgentsSearchResultComponent,
    AgentsTitleComponent,
    AgentsBodyComponent,
    AgentsBodySidebarComponent,
    AgentsBodyContentComponent,
    DestinationFilterComponent,
    AgentOptionsComponent,
    TravelTypeFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    SwiperModule,
    NgSelectModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
