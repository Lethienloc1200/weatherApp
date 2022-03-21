import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { CurrenWeather } from '../model/curren-weather.model';
import { ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';
import { BehaviorSubject, shareReplay, tap } from 'rxjs';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnInit {
  location: any = {};
  myWeather: CurrenWeather = new CurrenWeather();
  private storeBehaviorSubject = new BehaviorSubject(null);
  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getLocation();
  }
  onSubmit(f: NgForm) {
    this.findLocation(f);
  }
  getLocation() {
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.location = pos.coords;
        const lat = this.location.latitude;
        const lon = this.location.longitude;
        this.weatherService.getDataWeather(lat, lon).subscribe((res) => {
          console.log(' check res:', res);
          this.myWeather = new CurrenWeather(res);
          console.log(' check  this.myWeather:', this.myWeather);
        });
      });
    });
  }

  // findLocation(f: NgForm) {
  //   this.weatherService.getDataCache(f.value.city).subscribe((res) => {
  //     console.log(' check res find location:', res);
  //     this.myWeather = new CurrenWeather(res);
  //     shareReplay();
  //   });
  // }

  findLocation(f: NgForm) {
    if (!this.storeBehaviorSubject.value) {
      this.weatherService
        .getDataWeatherToFind(f.value.city)
        .pipe(
          tap((res) => {
            this.storeBehaviorSubject.next(res);
          })
        )
        .subscribe((res) => {
          console.log(' check res find location:', res);
          this.myWeather = new CurrenWeather(res);
          this.storeBehaviorSubject.next(res);
        });
    } else {
      return this.storeBehaviorSubject.asObservable();
    }
    return this.storeBehaviorSubject.asObservable();
  }
}
