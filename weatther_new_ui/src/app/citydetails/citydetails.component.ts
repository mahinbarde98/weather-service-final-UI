import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-citydetails',
  templateUrl: './citydetails.component.html',
  styleUrls: ['./citydetails.component.css']
})
export class CitydetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<CitydetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private wishlistService:WishlistService
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }

}
