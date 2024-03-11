import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;
  private jwtHelper: JwtHelperService = new JwtHelperService();
  private tokenKey: string = 'auth_token'; // Key for storing token in local storage

  constructor() {
    // Check for the token in local storage during service initialization
    const storedToken = localStorage.getItem(this.tokenKey);
    if (storedToken) {
      this.isAuthenticated = true;
      this.token = storedToken;
    }
  }

  private token: string | null = null;

  login(email: any, username: any) {
    // Perform actual login logic
    this.isAuthenticated = true;
    // Set the token
    this.token = this.createToken(username, email);
    // Save the token in local storage
    this.saveToken(this.token);
  }

  private createToken(username: string, email: string): string {
    // Replace this with your preferred method/library for creating JWTs
    const payload = { username, email };
    // In a real scenario, you might want to sign the token with a secret key
    // using a library like jsonwebtoken on the server side
    console.log(btoa(JSON.stringify(payload)));
    return btoa(JSON.stringify(payload));
  }

  logout() {
    // Perform actual logout logic
    this.isAuthenticated = false;
    // Clear the token and remove it from local storage
    this.token = null;
    this.removeToken();
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

  private saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
