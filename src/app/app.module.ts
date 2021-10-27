import { APP_INITIALIZER, NgModule, LOCALE_ID } from '@angular/core';
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
import { HeaderComponent } from './components/home-components/header/header.component';
import { WhyUseComponent } from './components/home-components/why-use/why-use.component';
import { HeaderTabsComponent } from './components/home-components/header/header-tabs/header-tabs.component';
import { StepsComponent } from './components/home-components/steps/steps.component';
import { DestinationsComponent } from './components/home-components/destinations/destinations.component';
import { TravelTypeComponent } from './components/home-components/travel-type/travel-type.component';
import { BenefitsComponent } from './components/home-components/benefits/benefits.component';
import { TestimonialsComponent } from './components/home-components/testimonials/testimonials.component';
import { InspirationComponent } from './components/home-components/inspiration/inspiration.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AgentsSearchResultComponent } from './pages/agents-search-result/agents-search-result.component';
import { AgentsBodyComponent } from './components/agents-body/agents-body.component';
import { AgentsBodySidebarComponent } from './components/agents-body/agents-body-sidebar/agents-body-sidebar.component';
import { AgentsBodyContentComponent } from './components/agents-body/agents-body-content/agents-body-content.component';
import { DestinationFilterComponent } from './components/agents-body/agents-body-sidebar/destination-filter/destination-filter.component';
import { AgentOptionsComponent } from './components/agents-body/agents-body-sidebar/agent-options/agent-options.component';
import { TravelTypeFilterComponent } from './components/agents-body/agents-body-sidebar/travel-type-filter/travel-type-filter.component';
import { AgentProfileComponent } from './components/agent-profile/agent-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AgentComponent } from './pages/agent/agent.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { AppConfig } from './app-config';
import { AppointementModalComponent } from './components/appointement-modal/appointement-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderTabsMobileComponent } from './components/home-components/header/header-tabs-mobile/header-tabs-mobile.component';
import { AlertErrorComponent } from './shared/components/alert/alert-error/alert-error.component';
import { AgentProfileViewComponent } from './components/agent-profile-view/agent-profile-view.component';
import { AgentGalleryComponent } from './components/agent-profile-view/agent-gallery/agent-gallery.component';
import { AgentVideoComponent } from './components/agent-profile-view/agent-video/agent-video.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleHeaderComponent } from './components/articles-components/article-header/article-header.component';
import { AvailabilityComponent } from './components/agent-profile-view/availability/availability.component';
import { AgentInformationComponent } from './components/agent-profile-view/agent-information/agent-information.component';
import { ArticleSubHeaderComponent } from './components/articles-components/article-sub-header/article-sub-header.component';
import { ArticleSectionOneComponent } from './components/articles-components/article-section-one/article-section-one.component';
import { ArticleSectionTwoComponent } from './components/articles-components/article-section-two/article-section-two.component';
import { ArticleSectionThreeComponent } from './components/articles-components/article-section-three/article-section-three.component';
import { ArticlesNewsletterComponent } from './components/articles-components/articles-newsletter/articles-newsletter.component';
import { ArticleSectionFourComponent } from './components/articles-components/article-section-four/article-section-four.component';
import { ArticleSectionFiveComponent } from './components/articles-components/article-section-five/article-section-five.component';
import { ArticleSectionSixComponent } from './components/articles-components/article-section-six/article-section-six.component';

// Configs
export function initConfig(config: AppConfig) {
  return () => config.load();
}

registerLocaleData(localeDe);
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
    AgentsBodyComponent,
    AgentsBodySidebarComponent,
    AgentsBodyContentComponent,
    DestinationFilterComponent,
    AgentOptionsComponent,
    TravelTypeFilterComponent,
    AgentProfileComponent,
    ProfileComponent,
    DatenschutzComponent,
    ImprintComponent,
    AppointementModalComponent,
    NotFoundComponent,
    HeaderTabsMobileComponent,
    AlertErrorComponent,
    AgentProfileViewComponent,
    AgentComponent,
    AgentGalleryComponent,
    AgentVideoComponent,
    ArticlesComponent,
    ArticleHeaderComponent,
    AvailabilityComponent,
    AgentInformationComponent,
    ArticleSubHeaderComponent,
    ArticleSectionOneComponent,
    ArticleSectionTwoComponent,
    ArticleSectionThreeComponent,
    ArticlesNewsletterComponent,
    ArticleSectionFourComponent,
    ArticleSectionFiveComponent,
    ArticleSectionSixComponent
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
    NgbModule ,
    MatDatepickerModule,
    MatNativeDateModule,
    InfiniteScrollModule,
    MatFormFieldModule,
    MatInputModule
  ], 
  exports: [
      AlertErrorComponent,
    ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
    {provide: LOCALE_ID, useValue: 'de'},
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfig],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
