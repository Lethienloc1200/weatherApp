import { Injectable, Pipe } from '@angular/core';
import { CurrenWeather } from '../model/curren-weather.model';
import { HttpClient } from '@angular/common/http';
import { Forecast } from '../model/forecast.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // myWeather?: CurrenWeather;

  location: any = {};
  constructor(private http: HttpClient) {}

  getDataWeather(lat: string, lon: string) {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a333d90d7599c543855715748387be09&units=imperial`;
    return this.http.get(url);
  }
  getDataWeatherToFind(city: string) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a333d90d7599c543855715748387be09&units=imperial`;
    return this.http.get(url);
  }

  get5DayDataWeather(city: string): Observable<Forecast> {
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a333d90d7599c543855715748387be09&units=imperial`;
    return this.http.get<Forecast>(url);
  }
}
