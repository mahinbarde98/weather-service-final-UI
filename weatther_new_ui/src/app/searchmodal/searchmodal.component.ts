import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WishlistService } from '../services/wishlist.service';
import { AuthService } from '../auth_guard/auth.service';

@Component({
  selector: 'app-searchmodal',
  templateUrl: './searchmodal.component.html',
  styleUrls: ['./searchmodal.component.css']
})
export class SearchmodalComponent {

  userId:any;

  constructor(
    public dialogRef: MatDialogRef<SearchmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private wishlistService:WishlistService,
    private authService:AuthService
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }

  addToFavorites(data:any) {
    
    if (this.authService.isLoggedIn()) {
      this.userId = localStorage.getItem('username');
   // console.log("data :" ,data)
      if (data!=null) {
        this.wishlistService.addFavoriteCity(this.userId, data).subscribe(() => {
          
          alert("successfully added to favorite "+"*"+data+"*");
          
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

