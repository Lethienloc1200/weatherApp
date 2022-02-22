import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
// import { ResolveLocationService } from './service/resolve-location.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/current',
    pathMatch: 'full',
  },
  {
    path: 'current',
    component: CurrentComponent,
  },
  { path: 'forecast', component: ForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
