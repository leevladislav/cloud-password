import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {CategoryInterface} from '../interfaces/category.interface';
import {
  CategoryCreateParamsInterface,
  CategoryUpdateParamsInterface
} from '../interfaces/category-params.interface';

@Injectable()
export class CategoriesService {
  private apiUrl = '/api/category';
  constructor(private http: HttpClient) {
  }

  fetch(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(this.apiUrl);
  }

  getById(id: string): Observable<CategoryInterface> {
    return this.http.get<CategoryInterface>(`${this.apiUrl}/${id}`);
  }

  create(data: CategoryCreateParamsInterface): Observable<CategoryInterface> {
    return this.http.post<CategoryInterface>(this.apiUrl, data);
  }

  update(data: CategoryUpdateParamsInterface): Observable<CategoryInterface> {
    return this.http.patch<CategoryInterface>(`${this.apiUrl}/${data.id}`, data);
  }

  delete(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}
