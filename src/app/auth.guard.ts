import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AthService } from './services/ath.service';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AthService, private router: Router) {}

  canActivate(): boolean {
    const token = this.authService.getToken();

    if (token) {
      return true; // User has a token, allow access
    } else {
      console.log('null');
      //this.router.navigateByUrl('/login'); // User does not have a token, navigate to login
      return false;
    }
  }
  
}
