import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AllPasswordsComponent} from './all-passwords.component';
import {ListComponent} from './components/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: AllPasswordsComponent,
    children: [
      {
        path: '',
        component: ListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AllPasswordsRoutingModule {
}
