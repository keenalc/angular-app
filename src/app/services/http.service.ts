import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { City, WeatherDetails } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCitiesList(): Observable<WeatherDetails> {
    const paris = this.http.get(`${env.BASE_URL}/weather?q=Paris`);
    const london = this.http.get(`${env.BASE_URL}/weather?q=London`);
    const vienna =  this.http.get(`${env.BASE_URL}/weather?q=Vienna`);
    const berlin = this.http.get(`${env.BASE_URL}/weather?q=Berlin`);

    return forkJoin({
      paris,
      london,
      vienna,
      berlin
    }).pipe(
      map((resp: any) => {
        return {
          country: 'Europe',
          cities: [resp['paris'], resp['london'], resp['vienna'], resp['berlin']]
        }
      })
    );
  }

  getCityList(name): Observable<City> {
    let params = new HttpParams().set('q', name);
    return this.http.get<City>(`${env.BASE_URL}/forecast`, {
      params: params,
    });
  }
}
