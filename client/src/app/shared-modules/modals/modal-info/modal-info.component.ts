import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html'
})
export class ModalInfoComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string; btnText: string }
  ) {
  }
}
