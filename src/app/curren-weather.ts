export class CurrenWeather {
  constructor(
    public cityName: string,
    public temp: string,
    public icon: string,
    public weatherKind: string,
    public tempMax: string,
    public tempMin: string
  ) {}
}
