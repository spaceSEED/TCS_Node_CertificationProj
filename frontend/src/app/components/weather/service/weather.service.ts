import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../../environments/environment'

const appid = environment.key

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  getWeather(lat: number, long : number) : Observable<any>{
    console.log(lat, long)
    return this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${appid}&units=imperial`)
      .pipe(map((res:any) => {
        console.log(res);
        // sort, filter, modify data
        return res;
      }));
  }
}
