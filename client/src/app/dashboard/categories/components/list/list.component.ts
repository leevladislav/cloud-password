import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {CategoryInterface} from '../../interfaces/category.interface';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  categories$: Observable<CategoryInterface[]> = this.categoriesService.fetch();

  constructor(private categoriesService: CategoriesService) {
  }
}
