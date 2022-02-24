import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Forecast } from '../model/forecast.model';
import { WeatherService } from '../service/weather.service';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  forecastForm!: FormGroup;
  cityForeCast: Forecast[] = [];

  // forecast: Forecast = new Forecast();
  ngOnInit(): void {
    this.forecastForm = new FormGroup({
      forecastCity: new FormControl(''),
    });
  }

  onSubmit() {
    // console.log(this.forecastForm);
    this.cityForeCast.splice(0, this.cityForeCast.length);
    this.weatherService
      .get5DayDataWeather(this.forecastForm.value.forecastCity)
      .subscribe((data: any) => {
        console.log('data', data as Forecast);
        for (let i = 0; i < data.list.length; i += 8) {
          const temporary = new Forecast(
            data.list[i].dt_txt,
            data.list[i].weather[0].icon,
            data.list[i].weather[0].description,
            data.list[i].main.temp_max,
            data.list[i].main.temp_min
          );
          this.cityForeCast.push(temporary);
          console.log(this.cityForeCast);
        }
      });
  }
}
