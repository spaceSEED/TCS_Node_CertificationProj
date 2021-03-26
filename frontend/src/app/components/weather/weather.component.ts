import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city = 'New York'
  weather = 'Cloudy'
  weatherIcon = 'http://openweathermap.org/img/w/04d.png'
  temperature = 65.4

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    // if (navigator.geolocation){
    //   navigator.geolocation.getCurrentPosition((position) =>{
    //     console.log('getting locaiton')
    //     this.weatherService.getWeather(position.coords.latitude, position.coords.longitude)
    //     .subscribe((res:any) => {
    //       console.log('got data from api')
    //       this.city = res.timezone
    //       this.weather = res.current.weather[0].main
    //       this.weatherIcon = 'http://openweathermap.org/img/w/' + res.current.weather[0].icon +'.png'
    //       this.temperature = res.current.temp
    //       console.log('icon:', this.weatherIcon)
    //     })
    //   });
    // }
    // else{
    //   console.log('failed to get locaiton')
    // }
  }

}
