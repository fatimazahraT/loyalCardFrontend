import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AthService {
  url: string = environment.url;
  private Authenticated: boolean = false; // Track authentication status
  private token: string | null = null;
  constructor(private http: HttpClient) {}

  // Method to authenticate the user
  authenticate(body: any) {
    return this.http.post<any>(this.url + '/api/v1/auth/authenticate', body);
  }
  signup(body: any) {
    return this.http.post<any>(this.url + '/api/v1/auth/register', body);
  }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    return this.Authenticated;
  }

  // Method to set the authentication status
  setAuthenticated(isAuthenticated: boolean) {
    this.Authenticated = isAuthenticated;
  }
  // Method to store the token
  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  // Method to get the token
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }
  clearToken() {
    this.token = null;
    sessionStorage.removeItem('token'); // Clear token from session storage
  }
}
