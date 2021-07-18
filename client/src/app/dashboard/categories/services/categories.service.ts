import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

import {CategoryInterface} from '../interfaces/category.interface';
import {
  CategoryCreateParamsInterface,
  CategoryUpdateParamsInterface
} from '../interfaces/category-params.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categoriesUpdated$ = new Subject<boolean>();
  categories$ = new BehaviorSubject<CategoryInterface[]>([]);

  constructor(private http: HttpClient) {
  }

  fetch(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>('/api/category');
  }

  getById(id: string): Observable<CategoryInterface> {
    return this.http.get<CategoryInterface>(`/api/category/${id}`);
  }

  create(data: CategoryCreateParamsInterface): Observable<CategoryInterface> {
    return this.http.post<CategoryInterface>('/api/category', data);
  }

  update(data: CategoryUpdateParamsInterface): Observable<CategoryInterface> {
    return this.http.patch<CategoryInterface>(`/api/category/${data.id}`, data);
  }

  delete(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`/api/category/${id}`);
  }

  throwCategories(categories: CategoryInterface[]): void {
    this.categories$.next(categories);
  }
}
