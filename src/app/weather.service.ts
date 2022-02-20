import { Injectable } from '@angular/core';
import { CurrenWeather } from './curren-weather';
// import { HttpModule } from '@angular/http';
// import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  current: CurrenWeather = new CurrenWeather(
    'Quy nhơn',
    '35',
    'https://png.pngtree.com/png-clipart/20190903/original/pngtree-cartoon-thunder-shower-icon-download-png-image_4440102.jpg',
    'Nắng',
    '96',
    '45'
  );

  constructor() {}

  weatherNow() {
    return this.current;
  }
  // localWeather(lat: string, lon: string) {
  //   return;
  //   this.http.get(
  //     `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=imperial`).map(response => Response)=>response.json());
  //   );
  // }
}
