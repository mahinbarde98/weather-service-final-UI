import { Component, Input, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() sideNavStatus:boolean =false;

  list=[
    {
      number:'1',
      name:'Home',
      icon:'fa-solid fa-house',
      path:'/home'
    },
    {
      number:'2',
      name:'About',
      icon:'fa-solid fa-address-card',
      path:'about'
    },
    {
      number:'3',
      name:'Contact Us',
      icon:'fa-solid fa-phone',
      path:'contact'
    },
    {
      number:'4',
      name:'Wishlist',
      icon:'fa-solid fa-heart',
      path:'/wishlist'
    },
    
  ]
}
