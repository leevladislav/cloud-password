import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AllPasswordsComponent} from './all-passwords.component';

const routes: Routes = [
  {
    path: '',
    component: AllPasswordsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AllPasswordsRoutingModule {
}
