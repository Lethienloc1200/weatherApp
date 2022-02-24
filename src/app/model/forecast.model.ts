export class Forecast {
  // list: Array<string> = [];

  // constructor(params: any = {}) {
  //   this.temp = params?.params.list[0]?.dt;
  //   console.log('chekc param:', params?.name);
  //   this.icon = params && params.weather && params.weather[0].icon;
  //   this.weatherKind =
  //     params && params.weather && params.weather[0].description;
  //   this.tempMax = params?.main?.temp_max;
  //   this.tempMin = params?.main?.temp_min;
  // }
  constructor(
    public day: string,
    public icon: string,
    public weatherKind: string,
    public tempMax: string,
    public tempMin: string
  ) {}
}
