import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FavoriteCity } from './FavoriteCity';
import { MatDialog } from '@angular/material/dialog';
import { WishlistService } from '../services/wishlist.service';
import { AuthService } from '../auth_guard/auth.service';
import { CitydetailsComponent } from '../citydetails/citydetails.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  constructor(private wishlistService: WishlistService,private weatherService: WeatherService, private dialog:MatDialog,private authService:AuthService){}

  favoriteCities: FavoriteCity[] = [];

  userId:any; 
  searchText:any;

  getuserWishlist(){
    this.userId= localStorage.getItem('username');
    console.log("userID:",this.userId)
    this.wishlistService.getFavoriteCities(this.userId).subscribe(data=>{
      this.favoriteCities = data;
      console.log("User Wishlist data: ",this.favoriteCities);
    },
    error=>{
      console.log("Failed to fetch wishlist data: ",error)
    });
  }

  onCityClick(city:any){
    this.weatherService.getWeather(city.cityName).subscribe(response => {
      // Handle the response as needed
      console.log(`Response from AnotherService for ${city}:`, response.Payload);
      this.openCityDetailsModal(city, response.Payload);
    });
  }
  openCityDetailsModal(city: FavoriteCity, additionalInfo: any): void {
    this.dialog.open(CitydetailsComponent, {
      width: '600px',
      data: { ...city, additionalInfo }
    });
  }

  removeCity(city:string){
       
    this.wishlistService.removeFavoriteCity(this.userId, city).subscribe(() => {
      console.log('City removed from favorites successfully');
      location.reload();
    });
  }

  get filteredCities() {
    if (!this.searchText) {
        return this.favoriteCities;
    }

    return this.favoriteCities.filter(city =>
        city.cityName.toLowerCase().includes(this.searchText.toLowerCase())
    );
}

}
