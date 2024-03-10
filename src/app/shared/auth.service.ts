import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;
  private jwtHelper: JwtHelperService = new JwtHelperService();
  private token: string | null = null;

  login() {
    // Perform actual login logic
    this.isAuthenticated = true;
    // Set the token (replace 'your_token_here' with the actual token)
    this.token = 'your_token_here';
  }

  logout() {
    // Perform actual logout logic
    this.isAuthenticated = false;
    // Clear the token
    this.token = null;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getToken(): string | null {
    return this.token;
  }

  isTokenExpired(): boolean {
    return this.token ? this.jwtHelper.isTokenExpired(this.token) : true;
  }
}
