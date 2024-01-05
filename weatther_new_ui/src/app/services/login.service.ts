import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8081/api/v2';
  //private apigatewayUrl = 'http://localhost:9090/api/v2';

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(`${this.baseUrl}/auth`, credentials);
  }
}
