import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8082/api/v3';
  private awsUrl = 'http://w11-env.eba-y9gizqxd.us-west-2.elasticbeanstalk.com/weather/v1';
  private apigatewayUrl = 'http://localhost:9090/api/v3';
  
  getWeather(city: string): Observable<any> {
    //const url = `${this.awsUrl}/${city}`;
    const url = `${this.baseUrl}/${city}`;
  //  url =http://localhost:8085/weather/v1/city
    return this.http.get<any>(url);
  }
}
