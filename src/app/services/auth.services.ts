import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //public loggedIn: boolean = false;
  private loggedIn: boolean = false;
  private username: string;

  constructor() {
    this.username = '';
   }


setUsername(username: string) {
  this.username = username;
}

getUsername(): string {
  return this.username;
}

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  setLoggedIn(value: boolean): void {
    this.loggedIn = value;
    console.log('loggedIn:', this.loggedIn);
  }

}