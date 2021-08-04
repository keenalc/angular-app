import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { City } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
  public name: String;
  public cities: City[];
  private routeSub: Subscription;
  private citySub: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this.name = params['id'];
        this.getCity(params['id']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  getCity(name: string) {
    this.citySub = this.httpService
      .getCityList(name)
      .subscribe((cityDet) => {
        this.cities = this.getCityDet(cityDet);
      });
  }

  getCityDet(cityDet): City[] {
    return cityDet.list.filter(city => new Date(city.dt_txt).getHours() === 9)
      .map(filterCity => ({
        temp: filterCity.main?.temp,
        seaLevel: filterCity.main?.sea_level,
        date: filterCity.dt_txt
      }))
  }

  ngOnDestroy(): void {
    if (this.citySub) {
      this.citySub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }


}
