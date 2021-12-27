import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlertActionComponent} from './alert-action.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AlertActionComponent
  ],
    imports: [
        CommonModule,
        MatCardModule
    ],
  exports: [
    AlertActionComponent
  ]
})
export class AlertActionModule {
}
