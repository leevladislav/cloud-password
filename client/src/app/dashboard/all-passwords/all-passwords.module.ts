import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import {AllPasswordsComponent} from './all-passwords.component';
import {AllPasswordsRoutingModule} from './all-passwords-routing.module';
import {AlertActionModule} from '../../shared-modules/alert-action/alert-action.module';
import { ListComponent } from './components/list/list.component';
import { PasswordComponent } from './components/password/password.component';
import { CreateComponent } from './components/create/create.component';


@NgModule({
  declarations: [
    AllPasswordsComponent,
    ListComponent,
    PasswordComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    AllPasswordsRoutingModule,
    AlertActionModule,
    MatButtonModule
  ]
})
export class AllPasswordsModule {
}
