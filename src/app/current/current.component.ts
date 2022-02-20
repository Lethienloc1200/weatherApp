import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrenWeather } from '../curren-weather';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnInit {
  myWeather!: CurrenWeather;

  constructor(private ws: WeatherService) {}

  ngOnInit(): void {
    this.myWeather = this.ws.weatherNow();
  }
}
