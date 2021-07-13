import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import {ModalInfoComponent} from './modal-info.component';
import {ModalHeaderModule} from '../modal-header/modal-header.module';


@NgModule({
  declarations: [ModalInfoComponent],
  imports: [
    CommonModule,
    ModalHeaderModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [ModalInfoComponent]
})
export class ModalInfoModule {
}
