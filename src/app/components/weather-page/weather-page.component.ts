import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Weather, WeatherDetails } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})


export class WeatherPageComponent implements OnInit, OnDestroy {
  public weatherDetails: Weather[]
  private weatherSub: Subscription;

  constructor(
    private httpService: HttpService) { }

  ngOnInit(): void {
    this.searchCities();
  }

  searchCities(): void {
    this.weatherSub = this.httpService
      .getCitiesList()
      .subscribe((weatherResp: WeatherDetails) => {
        this.weatherDetails = weatherResp.cities;
      });
  }

  displayedColumns: string[] = ['cityName', 'temperature', 'sunrise', 'sunset'];


  ngOnDestroy(): void {
    if (this.weatherSub) {
      this.weatherSub.unsubscribe();
    }
  }


}
