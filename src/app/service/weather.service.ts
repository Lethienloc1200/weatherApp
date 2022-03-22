import { Injectable, Pipe } from '@angular/core';
import { CurrenWeather } from '../model/curren-weather.model';
import { HttpClient } from '@angular/common/http';
import { Forecast } from '../model/forecast.model';
import {
  catchError,
  delay,
  map,
  Observable,
  ReplaySubject,
  shareReplay,
  Subject,
  switchMap,
  takeUntil,
  throwError,
  timer,
} from 'rxjs';
const REFRESH_INTERVAL = 10000;
const CACHE_SIZE = 2;
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // myWeather?: CurrenWeather;
  private cache$!: Observable<Array<CurrenWeather>>;
  private cache2$!: Observable<Array<CurrenWeather>>;
  private reload$ = new Subject<void>();

  location: any = {};
  constructor(private http: HttpClient) {}

  getDataCacheStart(lat: any, lon: any): Observable<any> {
    console.log('cache', this.cache2$);
    if (!this.cache2$) {
      this.cache2$ = this.getDataWeather(lat, lon).pipe(
        shareReplay(CACHE_SIZE, 10000) //sau 10s reset cache
      );
    }
    return this.cache2$;
  }

  // em lưu được cache rồi nhưng làm sao reset cache. Ví dụ như sau 20s reset data => rồi load data mới từ api ,
  // e thử mà  nó call api loạn hết loạn hết, a chỉ e với e suy nghĩ theo lối mòn rồi😅

  getDataCacheToFind(city: string): Observable<any> {
    // ============BỊ SAI==
    console.log('cache', this.cache$);
    if (!this.cache$) {
      this.cache$ = this.getDataWeatherToFind(city).pipe(
        // takeUntil(this.reload$),
        shareReplay(CACHE_SIZE)
      );
    } else {
      // this.getDataWeatherToFind(city);
    }
    // this.getDataWeatherToFind(city);
    return this.cache$;
  }

  getDataWeather(lat: any, lon: any): Observable<any> {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a333d90d7599c543855715748387be09&units=imperial`;
    return this.http.get<Observable<any>>(url).pipe(map((res) => res));
  }
  getDataWeatherAfter10s(lat: any, lon: any): Observable<any> {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a333d90d7599c543855715748387be09&units=imperial`;
    return this.http.get<Observable<any>>(url).pipe(
      map((res) => res),
      delay(10000)
    ); //==> delay sau 10s thì load lại data mới ==>sai
  }
  getDataWeatherToFind(city: string): Observable<any> {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a333d90d7599c543855715748387be09&units=imperial`;
    return this.http.get<Observable<any>>(url).pipe(
      map((res) => res),
      catchError((err) => {
        throw (
          (alert('Nhập địa điểm chưa đúng,\n ==> Nhập lại tên '),
          'error in source. Details: ' + err)
        );
      })
    );
  }

  get5DayDataWeather(city: string): Observable<Forecast> {
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a333d90d7599c543855715748387be09&units=imperial`;
    return this.http.get<Forecast>(url);
  }
}
