import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {UserInterface} from '../interfaces/user.interface';
import {UserRegisterInterface} from '../interfaces/user-register.interface';
import {UserLoginInterface} from '../interfaces/user-login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  register(user: UserRegisterInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>('/api/auth/register', user);
  }

  login(user: UserLoginInterface): Observable<{token: string}> {
    return this.http.post<{token: string}>('/api/auth/login', user)
      .pipe(
        tap(({token}) => this.setToken(token))
      );
  }

  setToken(token: string) {
    // TODO: crypt token and key
    localStorage.setItem('auth-token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth-token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth-token');
  }

  logout(): void {
    localStorage.clear();
  }
}
