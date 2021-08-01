import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {
  SafeCreateParamsInterface,
  SafeUpdateParamsInterface
} from '../interfaces/safe-params.interface';
import {SafeInterface} from '../interfaces/safe.interface';

@Injectable()
export class SafesService {
  private apiUrl = '/api/safe';

  constructor(private http: HttpClient) {
  }

  fetch(): Observable<SafeInterface[]> {
    return this.http.get<SafeInterface[]>(this.apiUrl);
  }

  getById(id: string): Observable<SafeInterface> {
    return this.http.get<SafeInterface>(`${this.apiUrl}/${id}`);
  }

  create(data: SafeCreateParamsInterface): Observable<SafeInterface> {
    return this.http.post<SafeInterface>(this.apiUrl, data);
  }

  update(data: SafeUpdateParamsInterface): Observable<SafeInterface> {
    return this.http.patch<SafeInterface>(`${this.apiUrl}/${data.id}`, data);
  }

  delete(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
