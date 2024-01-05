import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8080/authservice';

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(`${this.baseUrl}/auth`, credentials);
  }

}
