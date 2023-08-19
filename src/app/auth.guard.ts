import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  [x: string]: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    //console.log('le guard est déclanche')
    if(this.authService.isLoggedIn) {
      return true;
    }

    this.router.navigate(['/connexion']);
    return true;
  }
  
}
