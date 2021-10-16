import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {ModalInfoInterface} from './modal-info.interface';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html'
})
export class ModalInfoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalInfoInterface) {
  }
}
