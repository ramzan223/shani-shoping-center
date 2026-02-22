import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PriceComponent } from './price/price.component';
import { ShopesComponent } from './shopes/shopes.component';
import { LacComponent } from './lac/lac.component';
import { GotaComponent } from './gota/gota.component';
import { MatchingComponent } from './matching/matching.component';
import { JenralComponent } from './jenral/jenral.component';
import { LadiesComponent } from './ladies/ladies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    PriceComponent,
    ShopesComponent,
    LacComponent,
    GotaComponent,
    MatchingComponent,
    JenralComponent,
    LadiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
