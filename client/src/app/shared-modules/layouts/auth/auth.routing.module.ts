import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from '../../../auth/components/login/login.component';
import { RegistrationComponent } from '../../../auth/components/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {
}
