import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherService } from './service/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { ResolveLocationService } from './service/resolve-location.service';
import { ProductWeatherComponent } from './product-weather/product-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent,
    ForecastComponent,
    ProductWeatherComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [WeatherService, ResolveLocationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
