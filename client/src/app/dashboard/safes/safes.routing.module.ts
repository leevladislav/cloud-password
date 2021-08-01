import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SafesComponent} from './safes.component';
import {ListComponent} from './components/list/list.component';
import {SafeComponent} from './components/safe/safe.component';
import {ManageSafeComponent} from './components/manage-safe/manage-safe.component';

const routes: Routes = [
  {
    path: '',
    component: SafesComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'create',
        component: ManageSafeComponent
      },
      {
        path: ':id',
        component: SafeComponent
      },
      {
        path: ':id/edit',
        component: ManageSafeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SafesRoutingModule {
}
