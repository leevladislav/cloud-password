import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

import {CategoryInterface} from '../../interfaces/category.interface';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  categories$: Observable<CategoryInterface[]> = this.categoriesService.fetch();

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
  ) {
  }

  edit(event: Event, category: CategoryInterface): void {
    event.stopPropagation();
    event.stopImmediatePropagation();

    this.router.navigate(['/categories', category._id, 'edit']);
  }
}
