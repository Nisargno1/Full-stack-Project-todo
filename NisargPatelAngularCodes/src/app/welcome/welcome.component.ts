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
  //Router
  //Dependency Injection Activated Route
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
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

  // getWeatherData(cityName: string): Observable<WeatherData>{
  //   return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
  //     // headers: new HttpHeaders()
  //     // .set(environment.XRapidAPIHostHeader, environment.XRapidAPIHostValue),
  //     // .set(environment.XRapidAPIKeyHeader, environment.XRapidAPIKeyValue),
  //     params: new HttpParams()
  //     .set('q', cityName)
  //     .set('appid', environment.XRapidAPIKeyValue)
  //     .set('units', 'metric')
  //   })
  // }

  // finalWeather(){
  //   this.getWeatherData('Toronto').subscribe({
  //     next: (response) => console.log(response)
  //   })
  // }

}
