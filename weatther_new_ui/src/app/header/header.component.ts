import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WishlistService } from '../services/wishlist.service';
import { MatDialog } from '@angular/material/dialog';
import { FavoriteCity } from '../wishlist/FavoriteCity';
import { AuthService } from '../auth_guard/auth.service';
import { Router } from '@angular/router';
import { SearchmodalComponent } from '../searchmodal/searchmodal.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus:boolean = false;

  selectedLocation: string = '';
  weatherData ={

    location: { name:'', region:'', country:'' }, 
    current: { temp_c:'' } 
  }

favoriteCities: FavoriteCity[] = [];
  constructor(private router:Router,private weatherService: WeatherService,private wishlistService: WishlistService,private dialog:MatDialog,private authService:AuthService) {}

  SideNavToggle(){
    
    this.menuStatus =!this.menuStatus;
    
    this.sideNavToggled.emit(this.menuStatus);
console.log("side", this.menuStatus);
  }

  getWeather() {
    if (this.selectedLocation) {
      this.weatherService.getWeather(this.selectedLocation).subscribe((data) => {
        this.weatherData = data.Payload;
        // console.log("data",data)
        // console.log("weatherData",this.weatherData)
      });
    }
  }

  onCityClick(city:any){
    this.weatherService.getWeather(city).subscribe(response => {
            console.log(`Response from AnotherService for ${city}:`, response.Payload);
      this.openCityDetailsModal(city, response.Payload);
    });
  }


  openCityDetailsModal(city: FavoriteCity, additionalInfo: any): void {
    this.dialog.open(SearchmodalComponent, {
      width: '600px',
      data: { ...city, additionalInfo }
    });
  }
  

  logout(): void {
     this.authService.logout();
     this.router.navigate(['/login']);
   }

   isLoggedIn(): boolean {
    
    return this.authService.isLoggedIn();
  }
}
