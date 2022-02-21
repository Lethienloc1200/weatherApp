import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrenWeather } from '../curren-weather';
import { ActivatedRoute } from '@angular/router';
// import 'rxjs,Rx';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnInit {
  myWeather!: CurrenWeather;
  // location: any = {};

  constructor(private ws: WeatherService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: { myWeather: CurrenWeather }) => {
      this.myWeather = data.myWeather;
    });
  }
}
