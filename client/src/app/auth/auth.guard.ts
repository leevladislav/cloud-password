import {CanActivate, Router, UrlTree} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
      return of(false);
    }

    return of(true);
  }
}
