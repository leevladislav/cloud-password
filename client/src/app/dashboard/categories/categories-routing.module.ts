import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CategoriesComponent} from './categories.component';
import {ListComponent} from './components/list/list.component';
import {CategoryComponent} from './components/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'create',
        component: CategoryComponent
      },
      {
        path: ':id/edit',
        component: CategoryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoriesRoutingModule {
}
