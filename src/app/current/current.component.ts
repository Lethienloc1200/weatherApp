import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { CurrenWeather } from '../model/curren-weather.model';
import { ActivatedRoute } from '@angular/router';
// import 'rxjs,Rx';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnInit {
  location: any = {};
  myWeather: CurrenWeather = new CurrenWeather();

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getLocation();
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
        });
      });
    });
  }
}
