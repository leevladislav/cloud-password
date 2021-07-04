import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardGuard } from './dashboard.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [DashboardGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      // {
      //   path: 'expenses',
      //   loadChildren: () => import('./expenses-page/expenses-page.module').then(m => m.ExpensesPageModule)
      // },
      // {
      //   path: 'wallets',
      //   loadChildren: () => import('./wallets-page/wallets-page.module').then(m => m.WalletsPageModule)
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {
}
