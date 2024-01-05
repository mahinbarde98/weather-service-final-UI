import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteCity } from '../wishlist/FavoriteCity';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8083/api/v4';
  //private apigatewayUrl = 'http://localhost:9090/api/v4';
  //private awsUrl ='https://sb7lkuy2pa.execute-api.us-west-2.amazonaws.com/test/wishlist'

  // getFavoriteCities(userId: any): Observable<FavoriteCity[]> {
  //   const url = `${this.awsUrl}/${userId}`;
  //   return this.http.get<FavoriteCity[]>(url);
  // }
  // addFavoriteCity(userId: string, cityName: string): Observable<void> {
  //   const url = `${this.awsUrl}/${userId}/${cityName}`;
  //   return this.http.post<void>(url, {});
  // }

  // removeFavoriteCity(userId: string, cityName: string): Observable<void> {
  //   const url = `${this.awsUrl}/${userId}/${cityName}`;
  //   return this.http.delete<void>(url);
  // }

  getFavoriteCities(userId: any): Observable<FavoriteCity[]> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.get<FavoriteCity[]>(url);
  }
  addFavoriteCity(userId: string, cityName: string): Observable<void> {
    const url = `${this.baseUrl}/${userId}/${cityName}`;
    return this.http.post<void>(url, {});
  }

  removeFavoriteCity(userId: string, cityName: string): Observable<void> {
    const url = `${this.baseUrl}/${userId}/${cityName}`;
    return this.http.delete<void>(url);
  }
}
