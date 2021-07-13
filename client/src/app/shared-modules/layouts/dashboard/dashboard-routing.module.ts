import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {DashboardGuard} from './dashboard.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [DashboardGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all-passwords'
      },
      {
        path: 'all-passwords',
        loadChildren: () => import('../../../dashboard/all-passwords/all-passwords.module').then(m => m.AllPasswordsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {
}
