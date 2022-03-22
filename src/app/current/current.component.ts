import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { CurrenWeather } from '../model/curren-weather.model';
import { ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnInit {
  location: any = {};
  myWeather!: any;
  // private storeBehaviorSubject = new BehaviorSubject(null);
  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}
  onSubmit(f: any) {
    this.findLocation(f);
  }
  ngOnInit() {
    this.getLocationCatchingData();
  }

  getLocationCatchingData() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.weatherService.getDataCacheStart(lat, lon).subscribe((cache2) => {
        console.log(' check cache2222:', cache2);
        this.myWeather = new CurrenWeather(cache2);
        console.log(' check  this.myWeather cache2222:', this.myWeather);
      });
      // this.getLocationAfter10s();
    });
  }

  findLocation(f: NgForm) {
    this.weatherService
      .getDataWeatherToFind(f.value.city)
      .subscribe((cache) => {
        console.log(' check cache:', cache);
        this.myWeather = new CurrenWeather(cache);
        console.log('check type myWeatherCahe:=>', this.myWeather);
      });
  }

  // findLocation(f: NgForm) {
  //   if (!this.storeBehaviorSubject.value) {
  //     this.weatherService
  //       .getDataWeatherToFind(f.value.city)
  //       .pipe(
  //         tap((res) => {
  //           this.storeBehaviorSubject.next(res);
  //         })
  //       )
  //       .subscribe((res) => {
  //         console.log(' check res find location:', res);
  //         this.myWeather = new CurrenWeather(res);
  //         this.storeBehaviorSubject.next(res);
  //       });
  //   } else {
  //     return this.storeBehaviorSubject.asObservable();
  //   }
  //   return this.storeBehaviorSubject.asObservable();
  // }
}
