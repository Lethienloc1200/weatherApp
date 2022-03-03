export class CurrenWeather {
  cityName: string;
  temp: string;
  icon: string;
  weatherKind: string;
  tempMax: string;
  tempMin: string;

  constructor(params: any = {}) {
    this.cityName = params?.name;
    this.temp = params?.main?.temp;
    this.icon = params && params.weather && params.weather[0].icon;
    this.weatherKind =
      params && params.weather && params.weather[0].description;
    this.tempMax = params?.main?.temp_max;
    this.tempMin = params?.main?.temp_min;
  }
}
