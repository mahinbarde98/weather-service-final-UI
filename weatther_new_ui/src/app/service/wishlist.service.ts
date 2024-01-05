import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteCity } from '../wishlist/FavoriteCity';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8086/favorite-cities';

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
