import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import {ModalConfirmComponent} from './modal-confirm.component';
import {ModalHeaderModule} from '../modal-header/modal-header.module';


@NgModule({
  declarations: [
    ModalConfirmComponent
  ],
  imports: [
    CommonModule,
    ModalHeaderModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [ModalConfirmComponent]
})
export class ModalConfirmModule {
}
