import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurrenWeather } from '../model/curren-weather.model';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  // constructor(private weatherService: WeatherService) {}
  // myWeather: CurrenWeather = new CurrenWeather();
  ngOnInit(): void {}
  // onSubmit(f: NgForm) {
  //   this.findLocation(f);
  // }

  // findLocation(f: NgForm) {
  //   new Promise((resolve, reject) => {
  //     this.weatherService
  //       .getDataWeatherToFind(f.value.city)
  //       .subscribe((res) => {
  //         console.log(' check res find location:', res);
  //         this.myWeather = new CurrenWeather(res);
  //       });
  //   });
  // }
}
