import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WeatherData } from '../models/weather.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name=''
  message='This is welcome page';
  welcomeMessageFromService: any;
  welcomeErrorMessageFromService: any;


  // url = 'https://api.openweathermap.org/data/2.5/weather'
  // apiKey = '87f86f06810f188fff7923bc2e94dc14'
  // lat: any;
  // lon:any;
  // weather: any;


  //Router
  //Dependency Injection Activated Route
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
    // this.getLocation();
    // this.finalWeather();
    
  }


  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response.message;
    console.log(this.welcomeMessageFromService);
  }

  handleErrorResponse(error: any){
   this.welcomeErrorMessageFromService = error;
   console.log(this.welcomeErrorMessageFromService);
  }

  // getWeatherDataByCoords(lat: any, lon: any){
  //   let params = new HttpParams()
  //   .set('lat', lat)
  //   .set('lon', lon)
  //   .set('units', 'metric')
  //   .set('appid', this.apiKey)

  //   return this.http.get(this.url, {params})
  // }

  // getLocation(){
  //   if("geolocation" in navigator){
  //     navigator.geolocation.watchPosition((success) => {
  //       this.lat = success.coords.latitude;
  //       this.lon = success.coords.longitude;

  //       this.getWeatherDataByCoords(this.lat, this.lon).subscribe({
  //         next: (data) => this.weather = data
  //       })
  //     })
  //   }
  // }

}
