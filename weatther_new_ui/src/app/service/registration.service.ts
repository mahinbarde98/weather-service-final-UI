import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
 

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8081/register';
 
  registerUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/save`, user);
  }
  
}
