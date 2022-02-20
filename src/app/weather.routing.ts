import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NgModule } from '@angular/core';

import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
// const routes: Routes = [];

const WEATHER_ROUTER: Routes = [
  { path: '', component: CurrentComponent },
  { path: 'forecast', component: ForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(WEATHER_ROUTER)],
  exports: [RouterModule],
})
export class weatherRouting {}
