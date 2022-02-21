import { Injectable } from '@angular/core';
import { CurrenWeather } from './curren-weather';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { map } from 'rxjs/operators';

// import 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import {HttpClient} from '@angular/http';
// import { HttpModule } from '@angular/http';
// import { Http } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  myWeather!: CurrenWeather;

  location: any = {};
  constructor(private http: HttpClient) {}

  // weatherNow() {
  //   return this.myWeather;
  // }

  // my Api= a333d90d7599c543855715748387be09
  // localWeather(lat: string, lon: string) {
  //   let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a333d90d7599c543855715748387be09&units=imperial`;

  //   // return this.http.get(url).pipe(map((response: any) => response.json()));
  //   return this.http.get(url).pipe(
  //     map((response: any) => {
  //       return response;
  //     })
  //   );
  //   // .pipe(map((response: Response) => response.json()));
  // }

  localWeather() {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.location = pos.coords;
        const lat = this.location.latitude;
        const lon = this.location.longitude;
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a333d90d7599c543855715748387be09&units=imperial`;
        return this.http.get(url).pipe(
          map((response: any) => {
            return response
              .json()
              .toPromise()
              .then((data: any) => {
                this.myWeather = new CurrenWeather(
                  data.name,
                  data.main.temp,
                  data.weather[0].icon,
                  data.weather[0].description,
                  data.main.temp_max,
                  data.main.temp_min
                );
                res(this.myWeather);
              });
          })
        );
      });
    });

    // .pipe(map((response: Response) => response.json()));
  }
}
