export class CurrenWeather {
  [x: string]: any;
  public cityName: string;
  public temp: string;
  public icon: string;
  public weatherKind: string;
  public tempMax: string;
  public tempMin: string;

  constructor(params: any = {}) {
    this.cityName = params?.name;
    this.temp = params?.main?.temp;
    this.icon = params && params.weather && params.weather[0].icon;
    this.weatherKind =
      params && params.weather && params.weather[0].description;
    this.tempMax = params?.main?.temp_max;
    this.tempMin = params?.main?.temp_min;
  }

  // constructor(
  //   cityName: string,
  //   temp: string,
  //   icon: string,
  //   weatherKind: string,
  //   tempMax: string,
  //   tempMin: string
  // ) {
  //   this.cityName = cityName;
  //   this.temp = temp;
  //   this.icon = icon;
  //   this.weatherKind = weatherKind;
  //   this.tempMax = tempMax;
  //   this.tempMin = tempMin;
  // }
}
