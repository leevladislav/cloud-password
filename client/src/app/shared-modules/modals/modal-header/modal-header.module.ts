import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import {ModalHeaderComponent} from './modal-header.component';


@NgModule({
  declarations: [ModalHeaderComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [ModalHeaderComponent]
})
export class ModalHeaderModule {
}
