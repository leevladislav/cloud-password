import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {AuthRoutingModule} from './auth.routing.module';
import {AuthComponent} from './auth.component';
import {LoginComponent} from '../../../auth/components/login/login.component';
import {ValidatorMessageModule} from '../../validator-message/validator-message.module';
import {RegistrationComponent} from '../../../auth/components/registration/registration.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ValidatorMessageModule,
    MatButtonModule,
  ]
})
export class AuthModule {
}
