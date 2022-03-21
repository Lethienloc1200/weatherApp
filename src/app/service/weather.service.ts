import { Injectable, Pipe } from '@angular/core';
import { CurrenWeather } from '../model/curren-weather.model';
import { HttpClient } from '@angular/common/http';
import { Forecast } from '../model/forecast.model';
import {
  map,
  Observable,
  ReplaySubject,
  shareReplay,
  Subject,
  switchMap,
  takeUntil,
  timer,
} from 'rxjs';
// const REFRESH_INTERVAL = 10000;
const CACHE_SIZE = 5;
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // myWeather?: CurrenWeather;
  private cache$!: Observable<CurrenWeather>;
  private reload$ = new ReplaySubject<void>(5, 500000);

  location: any = {};
  constructor(private http: HttpClient) {}
  // test
  getDataCache(city: string) {
    console.log('cache', this.cache$);
    if (!this.cache$) {
      // Set up timer that ticks every X milliseconds
      const timer$ = timer(0);

      // For each timer tick make an http request to fetch new data
      // We use shareReplay(X) to multicast the cache so that all
      // subscribers share one underlying source and don't re-create
      // the source over and over again. We use takeUntil to complete
      // this stream when the user forces an update.
      this.cache$ = timer$.pipe(
        switchMap(() => this.getDataWeatherToFind(city)),
        takeUntil(this.reload$),
        shareReplay(CACHE_SIZE)
      );
    } else {
      // this.getDataWeatherToFind(city);
    }
    // this.getDataWeatherToFind(city);
    return this.cache$;
  }

  getDataWeather(lat: string, lon: string) {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a333d90d7599c543855715748387be09&units=imperial`;
    return this.http.get(url);
  }
  getDataWeatherToFind(city: string): Observable<any> {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a333d90d7599c543855715748387be09&units=imperial`;
    return this.http.get<CurrenWeather>(url).pipe(map((res) => res));
  }

  get5DayDataWeather(city: string): Observable<Forecast> {
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a333d90d7599c543855715748387be09&units=imperial`;
    return this.http.get<Forecast>(url);
  }
}
