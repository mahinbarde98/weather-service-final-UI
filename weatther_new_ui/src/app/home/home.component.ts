import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { SharedService } from '../services/shared.service';
import { AuthService } from '../auth_guard/auth.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedLocation: string = '';
  locations = ['Pune', 'Nasik', 'Mumbai', 'Goa'];
  seclocations =['Cape Town','Prague','Edinburgh','Paris'];
  weatherData ={ 
    location: { name:'', region:'', country:'' }, 
    current: { temp_c:'' } 
  };
  otherweatherData ={ 
    location: { name:'', region:'', country:'' }, 
    current: { temp_c:'' } 
  }


  constructor(private weatherService:WeatherService, public sharedService:SharedService,private authService: AuthService,private wishlistService: WishlistService){}

  ngOnInit() {
    this.locations.forEach(location => {
      this.weatherService.getWeather(location).subscribe((data: any) => {
        const index = this.locations.indexOf(location);
        this.sharedService.weatherData[index] = data.Payload;
      });
    });

    this.seclocations.forEach(loc => {
      this.weatherService.getWeather(loc).subscribe((data: any) => {
        const index = this.seclocations.indexOf(loc);  // Use seclocations.indexOf(loc) instead of this.locations.indexOf(loc)
        this.sharedService.otherweatherData[index] = data.Payload;
      });
    });
  }
  
  getWeather() {
    if (this.selectedLocation) {
      this.weatherService.getWeather(this.selectedLocation).subscribe((data) => {
        this.weatherData = data.Payload;
        console.log("data",data)
        console.log("weatherData",this.weatherData)
      });
    }
  }
  userId:any;
  addToFavorites(data:any) {
    
    if (this.authService.isLoggedIn()) {
      this.userId = localStorage.getItem('username');
    console.log("data :" ,data)
      if (data!=null) {
        this.wishlistService.addFavoriteCity(this.userId, data.location.name).subscribe(() => {
        
          alert("successfully added to favorite `${data.location.name}`");
        },(error)=>{
          console.log(error)
        });
    } 
    
  }
  else 
  {
    
      alert('Please login to add to wishlist');
  }


}
}
