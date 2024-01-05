import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

 
  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/v1';
  //private apigatewayUrl = 'http://localhost:9090/api/v1';
  private awsUrl ='http://w12-env.eba-duyv3xmh.us-west-2.elasticbeanstalk.com/register';
 
  registerUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/save`, user);
    //return this.http.post<any>(`${this.awsUrl}/save`, user);
  }
}
