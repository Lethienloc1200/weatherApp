import { Injectable } from '@angular/core';
import { CurrenWeather } from '../model/curren-weather.model';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  myWeather?: CurrenWeather;

  location: any = {};
  constructor(private http: HttpClient) {}

  getDataWeather(lat: string, lon: string) {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a333d90d7599c543855715748387be09&units=imperial`;
    return this.http.get(url);
  }
}
