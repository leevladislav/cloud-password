import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AllPasswordsComponent} from './all-passwords.component';
import {AllPasswordsRoutingModule} from './all-passwords-routing.module';


@NgModule({
  declarations: [
    AllPasswordsComponent
  ],
  imports: [
    CommonModule,
    AllPasswordsRoutingModule
  ]
})
export class AllPasswordsModule {
}
