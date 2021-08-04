import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherPageComponent,
  },
  {
    path: 'city/:id',
    component: CityDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
