import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor() { }
  storeTokenAndUsername(token: string, username: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
}
   getToken(): string | null {
    return localStorage.getItem('token');
  }

    
  getuserName(): string | null {
    return localStorage.getItem('username');
  }

  //  logout(): void {
  //   localStorage.removeItem('token');
  // }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
}
isLoggedIn(): boolean {
  const token = localStorage.getItem('token'); 
  return token !== null && token !== undefined;
}
}
