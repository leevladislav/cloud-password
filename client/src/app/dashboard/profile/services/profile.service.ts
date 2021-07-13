import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {UserInterface} from '../../../auth/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {
  }

  getProfile(): Observable<UserInterface> {
    return this.http.get<UserInterface>('/api/profile');
  }
}
