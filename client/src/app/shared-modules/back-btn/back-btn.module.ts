import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BackBtnComponent} from './back-btn.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    BackBtnComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    BackBtnComponent
  ]
})
export class BackBtnModule {
}
