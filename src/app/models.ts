export interface Weather {
  cityName: string;
  temperature: string;
  sunrise: string;
  sunset: string;
}

export interface WeatherDetails {
  country: string;
  cities: Array<Weather>;
}

export interface City {
  temp: string;
  seaLevel: string;
  date: string;
}

